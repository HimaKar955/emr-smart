import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalLabsModalComponent } from './external-labs-modal.component';
import { EmrService } from '../emr-services/emr-service/emr.service';
import { ApiTransformService } from '../emr-services/emr-service/converted.service';
import { of, throwError } from 'rxjs';

describe('ExternalLabsModalComponent', () => {
  let component: ExternalLabsModalComponent;
  let fixture: ComponentFixture<ExternalLabsModalComponent>;
  let emrService: jasmine.SpyObj<EmrService>;
  let apiTransformService: jasmine.SpyObj<ApiTransformService>;

  beforeEach(async () => {
    const emrServiceSpy = jasmine.createSpyObj('EmrService', ['post']);
    const apiTransformServiceSpy = jasmine.createSpyObj('ApiTransformService', ['transformResponses']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [ExternalLabsModalComponent],
      providers: [
        { provide: EmrService, useValue: emrServiceSpy },
        { provide: ApiTransformService, useValue: apiTransformServiceSpy },
        { provide: MAT_DIALOG_DATA, useValue: { hookInstance: 'test-hook', url: 'test-url' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalLabsModalComponent);
    component = fixture.componentInstance;
    emrService = TestBed.inject(EmrService) as jasmine.SpyObj<EmrService>;
    apiTransformService = TestBed.inject(ApiTransformService) as jasmine.SpyObj<ApiTransformService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties in ngOnInit', () => {
    component.ngOnInit();
    expect(component.hookInstance).toBe('test-hook');
  });

  it('should set popup width based on screen size in ngOnInit', () => {
    spyOn(component, 'setPopupWidth');
    component.ngOnInit();
    expect(component.setPopupWidth).toHaveBeenCalledWith(window.innerWidth);
  });

  it('should handle successful API responses', () => {
    const serviceResponseMock = [{ id: 1 }];
    const pricingResponseMock = [{ id: 2 }];
    const transformedDataMock = { FormattedTestResults: { tests: 'Test Data' } };

    emrService.post.and.returnValues(of(serviceResponseMock), of(pricingResponseMock));
    apiTransformService.transformResponses.and.returnValue(transformedDataMock);

    component.ngOnInit();

    expect(emrService.post).toHaveBeenCalledTimes(2);
    expect(apiTransformService.transformResponses).toHaveBeenCalledWith(serviceResponseMock, pricingResponseMock);
    expect(component.serviceResponse).toEqual(serviceResponseMock);
    expect(component.pricingResponse).toEqual(pricingResponseMock);
    expect(component.formattedTestResults).toEqual(transformedDataMock.FormattedTestResults);
  });

  it('should handle API errors gracefully', () => {
    emrService.post.and.returnValue(throwError(() => new Error('API Error')));

    component.ngOnInit();

    expect(emrService.post).toHaveBeenCalledTimes(2);
    expect(component.error).toBe('Pricing and coverage information unavailable');
  });

  it('should set popup width correctly based on screen size', () => {
    component.setPopupWidth(500);
    expect(component.popupWidth).toBe(650);

    component.setPopupWidth(800);
    expect(component.popupWidth).toBe(750);

    component.setPopupWidth(1100);
    expect(component.popupWidth).toBe(750); // Default for larger widths
  });

  it('should call setPopupWidth on window resize', () => {
    spyOn(component, 'setPopupWidth');
    component.onResize({ target: { innerWidth: 1024 } });
    expect(component.setPopupWidth).toHaveBeenCalledWith(1024);
  });

  it('should toggle showPricing when onReview is called', () => {
    component.showPricing = true;
    component.onReview();
    expect(component.showPricing).toBeFalse();
  });

  it('should handle empty or null hookInstance gracefully', () => {
    component.data.hookInstance = null;
    component.ngOnInit();
    expect(component.hookInstance).toBeNull();
  });

  it('should log errors during API calls', () => {
    spyOn(console, 'error');
    emrService.post.and.returnValue(throwError(() => new Error('API Error')));

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith('Error during API calls:', jasmine.any(Error));
  });

  it('should not adjust popup width if called with invalid width', () => {
    component.setPopupWidth(undefined as unknown as number); // Simulate invalid input
    expect(component.popupWidth).toBe(750); // Default remains unchanged
  });
});
