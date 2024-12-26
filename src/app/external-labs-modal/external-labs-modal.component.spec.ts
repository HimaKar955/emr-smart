import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ExternalLabsModalComponent } from './external-labs-modal.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { EmrService } from '../emr-services/emr-service/emr.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiTransformService } from '../emr-services/emr-service/converted.service';

describe('ExternalLabsModalComponent', () => {
  let component: ExternalLabsModalComponent;
  let fixture: ComponentFixture<ExternalLabsModalComponent>;
  let mockEmrService: jasmine.SpyObj<EmrService>;
  let mockApiTransformService: jasmine.SpyObj<ApiTransformService>;

  beforeEach(waitForAsync(() => {
    mockEmrService = jasmine.createSpyObj('EmrService', ['post']);
    mockApiTransformService = jasmine.createSpyObj('ApiTransformService', ['transformResponses']);

    TestBed.configureTestingModule({
      imports: [ExternalLabsModalComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { url: 'test-url', hookInstance: 'test-hook' } },
        { provide: EmrService, useValue: mockEmrService },
        { provide: ApiTransformService, useValue: mockApiTransformService },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalLabsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the popup width correctly on initialization', () => {
    component.setPopupWidth(500);
    expect(component.popupWidth).toBe(650);

    component.setPopupWidth(800);
    expect(component.popupWidth).toBe(750);

    component.setPopupWidth(1100);
    expect(component.popupWidth).toBe(750);
  });

  it('should handle onResize and call setPopupWidth', () => {
    spyOn(component, 'setPopupWidth');
    component.onResize({ target: { innerWidth: 1024 } });
    expect(component.setPopupWidth).toHaveBeenCalledWith(1024);
  });

  it('should handle API errors gracefully', () => {
    mockEmrService.post.and.returnValue(throwError(() => new Error('API error')));

    component.ngOnInit();
    expect(component.error).toBe('Pricing and coverage information unavailable');
  });

  it('should toggle showPricing when onReview is called', () => {
    component.onReview();
    expect(component.showPricing).toBe(false);
  });
});