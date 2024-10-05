import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { EmrService } from '../emr-services/emr-service/emr.service';
import { HttpClient } from '@angular/common/http';
import { LCP_Text, PricingResponse1, ServiceResponse1 } from '../data/utils';
import { environment } from '../../environments/environment';




@Component({

  selector: 'app-external-labs-modal',
  standalone: true,
  imports: [
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
 CommonModule, MatDividerModule, FormsModule, MatIconModule, MatDialogModule],
  providers: [EmrService, HttpClient],
  templateUrl: './external-labs-modal.component.html',
  styleUrl: './external-labs-modal.component.scss'
})

export class ExternalLabsModalComponent implements OnInit {
  popupWidth: number = 650;
  orders: any[] = [];
  limitOrders: any[] = [];
  loader = false;
  finalPrice: string = '$0';
  LCP_Text = LCP_Text;
  hookInstance: string | null = '';
  error: any[] = [];
  price: number = 0;
  noPrice: string = '';


  constructor(private emrService: EmrService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.data.hookInstance && (this.hookInstance = this.data.hookInstance);
    this.getServiceRequestData();
    if (this?.data?.url) {
      this.setPopupWidth(window.innerWidth);
    }
  }
  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.setPopupWidth(event.target.innerWidth)
  }

  setPopupWidth(width: number) {
    if (width <= 768) {
      this.popupWidth = 550
    } else if (width <= 1024) {
      this.popupWidth = 650;
    } else {
      this.popupWidth = 750;
    }
  }

  // to filter the lab orders based on category and active status
  // istanbul ignore next
  getServiceRequestData() {
    this.loader = true;
    const payload =
    {
      "cds_hook_id": this.hookInstance,
      "resource_type": "ServiceRequest"
    };

    return this.emrService.post(payload, environment.cds_hook_Service_request_url)

      // return this.emrService.post(payload, environment.cds_hook_Service_request_url)
      .subscribe((res: any) => {
        let response = ServiceResponse1 as any;
        console.log(response, 'ServiceRequest Response');
        let codes: any[] = [];
        let ServiceRequests = response?.responseData?.ServiceRequest;
        if (Array.isArray(ServiceRequests)) {
          ServiceRequests.forEach((item: any) => {
            const obj: any = {};
            const orders: any[] = [];
            let orderCodes: any[] = [];

            console.log("Item reasonCode:", item?.reasonCode);


            if (item?.reasonCode && Array.isArray(item.reasonCode) && item.reasonCode.length > 0) {
              const icd10Code = item.reasonCode[0].coding?.find((code: any) => code.system === "http://h17.org/fhir/sid/icd-10-cm");
              if (icd10Code) {
                obj.code = icd10Code.code;
                obj.display = item.resource.reasonCode[0].text || '';
              }
            }
            orders.push(obj);
            console.log("checking category for item:", item?.code.coding);

            if (item?.code && Array.isArray(item.code.coding)) {
              item.code.coding.forEach((codingItem: any) => {

                if (codingItem?.system === "http://open.epic.com/FHIR/StructureDefinition/cds-hooks-unsigned-order-procedure-mpi-id/25") {
                  console.log("MPI ID found:", codingItem.code);
                  orderCodes.push({ value: codingItem?.code || '', text: obj?.display || '' });
                }
              });
            }



            if (orderCodes.length > 0) {

              orderCodes.forEach((order: any, index: number) => {
                codes.push({
                  [orderCodes[index]?.value]: orders[0]
                });
              });
            } else {
              console.warn('NO MPI FOUND')
            }
          });
        }
        console.log("Final codes:", codes);

        if (codes.length > 0) {
          console.log("calling getPricedata with codes:", codes);
          this.getPricingData(codes);
        } else {
          console.warn('no codes to send to getPricingData');
          this.loader = false;
        }
      },
        (e: any) => {
          this.loader = false;
          console.log(e);
          this.error = e?.error?.responseData?.errorMessage || 'something went wrong'
        }
      );
  }


  getPricingData(codes: any) {
    console.log(codes, 'codess');
    const payload = {
      "cds_hook_id": this.hookInstance,
    }

    this.emrService.post(payload, environment.cds_hook_pricing_url)
      .subscribe((res: any) => {
        let data=PricingResponse1 as any;
        console.log(data, 'Pricingres');
        const responseData = data.responseData.elabs_response_payload;
        const ChemsData: any[] = [];
        const ChemServiceName = responseData?.pricing?.Chems?.ChemServiceName || '';
        const EstFee = responseData?.pricing?.Chems?.PatientFeeInfo?.EstFee || '';
        const Service = responseData?.pricing?.NonChems?.Service || [];
        const ChemPanel = responseData?.pricing?.Chems?.ChemPanel || [];
        const ChemService = responseData?.pricing?.Chems?.ChemService || [];

        const limitedCoverage = responseData?.limitedCoverage || [];
        const limitCodes: any[] = [];

        ChemPanel.length > 0 && ChemPanel.map((panelData: any) => {
          ChemsData.push({ ...panelData, isChem: true, orderCode: panelData.OrderCode, serviceName: panelData.PanelName, price: EstFee })
        });

        ChemService.length > 0 && ChemService.map((panelData: any) => {
          ChemsData.push({ ...panelData, isChem: true, orderCode: panelData.OrderCode, serviceName: panelData.ServiceName, price: EstFee })
        });

        Service.length > 0 && Service.map((panelData: any) => {
          ChemsData.push({ ...panelData, isChem: false, orderCode: panelData.OrderCode, serviceName: panelData.ServiceName, price: panelData?.PatientFeeInfo?.EstFee ?? '' })
        });

        const chemorders = codes.flatMap((chemorder: any) => {
          const array: any[] = this.getData(chemorder, ChemsData);
          return array as any[];
        });

        chemorders.map((data: any) => {
          let serviceName = ChemServiceName ? ChemServiceName?.split(', ')?.length > 0 ? ChemServiceName?.split(", ") : [ChemServiceName] : [];
          data.text = serviceName.length > 0 && serviceName.some((val: string) => val?.toLowerCase().trim() === data.text?.toLowerCase().trim()) ? ChemServiceName : data.text;
          return data;
        });

        const orders = chemorders.length > 0 ? this.transformArray(chemorders).map((order: any) => {
          const price = Number(order.price).toFixed(2)
          const display = order.display.startsWith(',') ? order.display.slice(2) : order.display;

          return { ...order, price: price, display, showName: false };
        }) : [];

        console.log(orders, limitedCoverage)
        orders.map((order: any) => {
          if (order.isChem) {
            limitCodes.push(order.orderCode)
          }
        })

        const id = orders.findIndex((item: any) => {

          return limitedCoverage.some((lcp: any) => item.isChem && lcp.orderCode === item.orderCode)

        })

        id >= 0 && orders.splice(id, 1, { ...orders[id], showName: true })
        console.log(limitedCoverage, 'LO', orders)
        orders.forEach((item: any, index: number) => {
          responseData?.pricingStatus === 'enabled' &&
            (responseData.pricing.EstPatRespMsgCd?.toLowerCase() === 'z' || responseData.pricing.EstPatRespMsgCd?.toLowerCase() === 'u') &&
            (item.price = 'Pricing unavailable')


          if (limitedCoverage.some((lcp: any) => !item.ischem ? lcp.orderCode === item.orderCode : limitCodes.includes(lcp.orderCode))) {
            if (item.isChem) {
              if (item.showName) {
                item.text = ChemServiceName;
                item.code = item.code || 'No associated diagnosis codes found for this test ';
              } else {
                item.text = '';
              }
            }

            const data = limitedCoverage.find((limit: any) => {
              return limit.orderCode === item.orderCode;
            })
            if (data) {
              data.frequencyLimit = data?.frequencyLimit === 'true';
              data.coveredByDiagnosis = data?.coveredByDiagnosis === 'true';
              data.diagnosisDisplayIndicator = data?.diagnosisDisplayIndicator === 'true';
            }
            console.log(limitedCoverage, 'lo', index)
            console.log(item, data)
            this.limitOrders.push({ frequencyLimit: limitedCoverage?.[index]?.frequencyLimit === 'true', ...data, ...item })
          } else {
            this.orders.push(item)
          }
        });
        console.log(this.limitOrders, this.orders);

        this.limitOrders = this.getOrderData(this.limitOrders, ChemsData, ChemServiceName);
        this.orders = this.getOrderData(this.orders, ChemsData, ChemServiceName);
        console.log(this.limitOrders, this.orders);

        (this.orders.length > 0 || this.limitOrders.length > 0) && [...this.orders, ...this.limitOrders].map((order: any) => {
          if (order.price === 'Pricing Unavailable') {
            this.noPrice = 'Unable to calculate total estimated patient pricing'
          } else {
            this.price = +(this.price + (Number(order.price) || 0)).toFixed(2);
            order.price = Number(order.price) >= 0 ? '$' + `${order.price}` : order.price;
            this.noPrice = ' ';
          }

          console.log(order, 'order')
          return order;
        });
        this.finalPrice = '$' + `${this.price}`
        this.loader = false;
      })
  }

  getOrderData(orders: any, ChemsData: any, ChemServiceName: string) {
    const lcporders: any = [];
    const lcpData: any = []
    console.log(orders);
    orders.length > 0 && orders.map((data: any) => {
      const chemData = ChemsData.filter((item: any) => {
        return data.orderCode === item.orderCode;

      })
      console.log(chemData, ChemsData, data)

      if (data.isChem) {
        const obj = {
          name: '',
          text: '',
          code: ''
        }

        obj.name = chemData[0]?.serviceName;
        obj.text = data.display.split('-')[0];
        obj.code = data.code;
        data.code && lcporders.push(obj);

        if (data.text === ChemServiceName) {
          data.text = ChemServiceName;
          data.chems = lcporders;
          lcpData.push(data);
        }
      }

      if (!data.isChem) {
        lcpData.push(data);
      }
    })
    return lcpData;
  }

  transformArray(arr: any[]) {
    const result = [];
    const map = new Map();

    arr.forEach(item => {
      if (item?.text?.includes(',')) {
        if (map.has(item.text)) {
          const existingItem = map.get(item.text);
          existingItem.display += ` ${item.display}-${item.code}`;
        }
        else {
          map.set(item.text, { ...item, display: item.display && item.code ? `${item.display}-${item.code}` : '' });

        }
      } else {
        result.push({
          ...item, display: item.display && item.code ? `${item.display}-${item.code} ` : ''
        });
      }
    });

    for (const value of map.values()) {
      result.push({
        text: value.text,
        display: value.display.split(', -').join(''), code: value.code,
        price: Number(value.price).toFixed(2),
        orderCode: value.orderCode,
        isChem: value.isChem
      });
    }
    return result;
  }
  getData(chemOrder: any, ChemsData: any) {
    const array: any[] = [];

    for (const key in chemOrder) {
      if (chemOrder.hasOwnProperty(key)) {
        let orderCode = ChemsData.filter((code: any) => {
          return code.orderCode === key

        });
        console.log(orderCode, chemOrder, ChemsData);

        if (orderCode.length > 1) {
          orderCode.forEach((code: any) => {
            let obj = {
              text: code.serviceName,
              price: code.price || 0,
              display: chemOrder[key].display ?? '',
              code: chemOrder[key].code ?? '',
              orderCode: key,
              ischem: code.isChem
            };
            array.push(obj)
          })
        } else {
          let obj = {
            text: orderCode[0]?.serviceName,
            price: orderCode[0]?.price || 0,
            display: chemOrder[key]?.display ?? '',
            code: chemOrder[key]?.code ?? '',
            orderCode: key,
            isChem: orderCode[0]?.isChem
          };
          array.push(obj)
        }
      }
    };
    return (array);
  }
}


