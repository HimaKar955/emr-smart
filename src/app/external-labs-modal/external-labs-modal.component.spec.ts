import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ExternalLabsModalComponent } from './external-labs-modal.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { EmrService } from '../emr-services/emr-service/emr.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


describe('External LabsModalComponent', () => {
    let component: ExternalLabsModalComponent;
    let fixture: ComponentFixture<ExternalLabsModalComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    imports: [ExternalLabsModalComponent],
    providers: [{
            provide: MAT_DIALOG_DATA, useValue: {}
        },
        {
            provide: EmrService, useValue: {}
        }, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})


            .compileComponents();

        fixture = TestBed.createComponent(ExternalLabsModalComponent);
        component = fixture.componentInstance;
        component.data.url = undefined;
        fixture.detectChanges();
    }));
    it('should call getPricingData()', () => {
        const data = {
            responseData: {
                elabs_response_payload: {
                    pricing: {
                        chems: {
                            ChemServiceName: 'ASC, ASE, ASB, ASF',
                            PatientFeeInfo: { EstFee: "5.0000" },
                            ChemPanel: [
                                {
                                    PanelName: 'ASC',
                                    OrderCode: '1231',
                                    PanelCode: '1231',
                                    serviceName: "ASC",
                                    price: "02.00"
                                },
                                {
                                    PanelName: 'ASE',
                                    OrderCode: '1232',
                                    PanelCode: '1232',
                                    serviceName: "ASE",
                                    price: "02.00"
                                },
                                {
                                    PanelName: 'ASB',
                                    OrderCode: '1233',
                                    PanelCode: '1233',
                                    serviceName: "ASB",
                                    price: "02.00"
                                },
                                {
                                    PanelName: 'ASF',
                                    OrderCode: '1234',
                                    PanelCode: '1234',
                                    serviceName: "ASF",
                                    price: "02.00"
                                }
                            ]
                        },
                        NonChems: {
                            Service: [
                                {
                                    ServiceName: 'ABC',
                                    OrderCode: '1234',
                                    ServiceCode: '1234',
                                    serviceName: "ABC",
                                    price: "02.00",
                                    PatientFeeInfo: {
                                        EstFee: "03.00",
                                    },
                                },
                                {
                                    ServiceName: 'ASQ',
                                    OrderCode: '1237',
                                    ServiceCode: '127',
                                    serviceName: "ASQ",
                                    price: "02.00",
                                    PatientFeeInfo: {
                                        EstFee: "05.10",
                                    },
                                },
                                {
                                    ServiceName: 'ASW',
                                    OrderCode: '1236',
                                    ServiceCode: '1236',
                                    serviceName: "ASW",
                                    price: "02.00",
                                    PatientFeeInfo: {
                                        EstFee: "03.00",
                                    },
                                },
                                {
                                    ServiceName: 'ASD',
                                    OrderCode: '1235',
                                    ServiceCode: '1235',
                                    serviceName: "ASD",
                                    price: "02.00",
                                    PatientFeeInfo: {
                                        EstFee: "30.00",
                                    },
                                }
                            ],

                        }
                    }
                }
            }

        } as any;

        const codes = [
            {
                "1234": { text: "ABC", code: "I10", display: "hyper" }
            },
            {
                "1235": { text: "ASD", code: "I10", display: "tension" }
            },
            {
                "1236": { text: "ASW", code: "I10", display: "hyp" }
            },
            {
                "1237": { text: "ASQ", code: "I10", display: "per" }
            },
            {
                "1238": { text: "ASF", code: "I10", display: "yper" }
            },
            {
                "1239": { text: "ASB", code: "I20", display: "CVC" }
            },
            {
                "1231": { text: "ASC", code: "I10", display: "VC" }
            },
            {
                "1232": { text: "ASE", code: "", display: "" }
            },
        ];
        const spy = spyOn(component['emrService'], 'post');
        spy.and.returnValue(of(data) as any);

        component.getPricingData(codes)
        expect(component).toBeTruthy();

    });


});