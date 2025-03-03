import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { EmrService } from '../emr-services/emr-service/emr.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PricingResponse7, PricingResponse9, ServiceResponse7, ServiceResponse9 } from '../data/utils';
import { environment } from '../../environments/environment';
import { ApiTransformService } from '../emr-services/emr-service/converted.service';
import { forkJoin } from 'rxjs';
import { SelectDiagnosisComponent } from '../select-diagnosis/select-diagnosis.component';
import { AdditionalSupportiveDiagnosis } from '../data/additionalSupportiveDiagnoses';
// import { ApiTransformService } from '../emr-services/emr-service/converted.service';
// import { PricingResponseCodeSetup1, ServiceResponseCodeSetup1 } from '../data/refine.util';

@Component({
  selector: 'app-external-labs-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    SelectDiagnosisComponent,
  ],
  providers: [EmrService, HttpClient],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './external-labs-modal.component.html',
  styleUrl: './external-labs-modal.component.scss',
})
export class ExternalLabsModalComponent implements OnInit {
  popupWidth: number = 750;
  orders: any[] = [];
  limitOrders: any[] = [];
  loader = false;
  finalPrice: string = '$0';
  hookInstance: string | null = '';
  error= "";
  price: number = 0;
  noPrice: string = '';
  showPricing = true;
  showSelectDiagnosis = false;
  serviceResponse: any[] = [];
  pricingResponse: any[] = [];
  limitedCoverage: any[] = [];
  additionalSupportiveDiagnosis: any[] = [];
  policyUrl: string | null = '';
  chemName: string = '';

  formattedTestResults: any;

  constructor(
    private emrService: EmrService,
    private apiTransformService: ApiTransformService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.data.hookInstance && (this.hookInstance = this.data.hookInstance);
    // this.getServiceRequestData();
    if (this?.data?.url) {
      this.setPopupWidth(window.innerWidth);
    }
    const payload = {
      cds_hook_id: this.hookInstance,
      resource_type: 'ServiceRequest',
    };
    const pricingPayload = { cds_hook_id: this.hookInstance };

    const serviceResponse = ServiceResponse9;
    const pricingResponse = PricingResponse9;
    const additionalSupportiveDiagnosis =  AdditionalSupportiveDiagnosis;
    const formattedData = this.apiTransformService.transformResponses(serviceResponse, pricingResponse, additionalSupportiveDiagnosis);
    this.formattedTestResults = formattedData?.FormattedTestResults;
    console.log(this.formattedTestResults)



    // forkJoin({
    //   serviceResponse: this.emrService.post(
    //     payload,
    //     environment.cds_hook_Service_request_url
    //   ),
    //   pricingResponse: this.emrService.post(
    //     pricingPayload,
    //     environment.cds_hook_pricing_url
    //   ),
    // }).subscribe({
    //   next: (results) => {
    //     this.serviceResponse = results.serviceResponse;
    //     this.pricingResponse = results.pricingResponse;

    //     const formattedData = this.apiTransformService.transformResponses(
    //       this.serviceResponse,
    //       this.pricingResponse
    //     );

    //     this.formattedTestResults = formattedData?.FormattedTestResults;
    //   },
    //   error: (error) => {
    //     this.error = 'Pricing and coverage information unavailable';
    //   },
    // });
  }

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.setPopupWidth(event.target.innerWidth);
  }

  setPopupWidth(width: number) {
    if (width <= 768) {
      this.popupWidth = 650;
    } else if (width <= 1024) {
      this.popupWidth = 750;
    }
  }

  onReview() {
    this.showPricing = false;
  }

  selectDiagnosis(chem: any) {
    this.limitedCoverage = chem?.limitedCoverage;
    this.additionalSupportiveDiagnosis = chem?.additionalCoverage;
    this.policyUrl = chem?.policyUrl;
    this.chemName = chem?.chemName;
    this.showSelectDiagnosis = true;
  }
}



