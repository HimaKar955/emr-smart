import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { EmrService } from '../emr-services/emr-service/emr.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LCP_Text, PricingResponse1, PricingResponse2, PricingResponse3, PricingResponse4, PricingResponse5, PricingResponse6, PricingResponse7, PricingResponse8, PricingResponseCodeSetup, ServiceResponse1, ServiceResponse2, ServiceResponse3, ServiceResponse4, ServiceResponse5, ServiceResponse6, ServiceResponse7, ServiceResponse8, ServiceResponseCodeSetup } from '../data/utils';
import { environment } from '../../environments/environment';
import { ApiTransformService } from '../emr-services/emr-service/converted.service';
import { PricingResponseCodeSetup1, ServiceResponseCodeSetup1 } from '../data/refine.util';



@Component({
  selector: 'app-external-labs-modal',
  standalone: true,
  imports: [CommonModule, MatDividerModule, FormsModule, MatIconModule, MatDialogModule, HttpClientModule],
  providers: [EmrService, HttpClient],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './external-labs-modal.component.html',
  styleUrl: './external-labs-modal.component.scss'
})
export class ExternalLabsModalComponent implements OnInit {
  popupWidth: number = 750;
  orders: any[] = [];
  limitOrders: any[] = [];
  loader = false;
  finalPrice: string = '$0';
  LCP_Text = LCP_Text;
  hookInstance: string | null = '';
  error: any[] = [];
  price: number = 0;
  noPrice: string = '';
  showPricing = true;

  formattedTestResults: any;

  constructor(private emrService: EmrService, private apiTransformService: ApiTransformService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // this.data.hookInstance && (this.hookInstance = this.data.hookInstance);
    // this.getServiceRequestData();
    // if (this?.data?.url) {
    //   this.setPopupWidth(window.innerWidth);
    // }

    const serviceResponse = ServiceResponse8;
    const pricingResponse = PricingResponse8;
    const formattedData = this.apiTransformService.transformResponses(serviceResponse, pricingResponse);
    this.formattedTestResults = formattedData.FormattedTestResults
  }

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.setPopupWidth(event.target.innerWidth)
  }

  setPopupWidth(width: number) {
    if (width <= 768) {
      this.popupWidth = 650
    } else if (width <= 1024) {
      this.popupWidth = 750;
    }
  }
  
  onReview(){
    this.showPricing =false;
  }
}


