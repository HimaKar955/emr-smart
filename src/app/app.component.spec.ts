import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ExternalLabsModalComponent } from './external-labs-modal/external-labs-modal.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let mockDialog: any;
  let mockRouter: any;
  let mockDocument: any;

  beforeEach(() => {
    mockDialog = { open: jasmine.createSpy('open').and.returnValue({ afterClosed: () => ({}) }) };
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    mockDocument = {
      location: {
        href: 'http://localhost:4200/?hookInstance=12345',
      },
      querySelectorAll: jasmine.createSpy('querySelectorAll').and.returnValue([]),
    };

    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: MatDialog, useValue: mockDialog },
        { provide: Router, useValue: mockRouter },
        { provide: DOCUMENT, useValue: mockDocument },
      ],
    });

    component = TestBed.inject(AppComponent);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should open the dialog with correct configuration in launchDialog', () => {
    const tokenDetails = { hookInstance: '12345' };

    component.launchDialog(tokenDetails);

    expect(mockDialog.open).toHaveBeenCalledWith(ExternalLabsModalComponent, {
      width: 'auto',
      data: tokenDetails,
    });
  });

  it('should create a URL object with the document location href in ngOnInit', () => {
    const mockHref = 'http://localhost:4200/?hookInstance=12345';
    component.ngOnInit();
  
    const expectedUrl = new URL(mockHref);
    expect(expectedUrl.href).toBe(mockHref);
  });

  it('should extract the hookInstance query parameter from the URL in ngOnInit', () => {
    const mockHref = 'http://localhost:4200/?hookInstance=12345';
  
    component.ngOnInit();
  
    const url = new URL(mockHref);
    const hookInstance = url.searchParams.get('hookInstance');
    expect(hookInstance).toBe('12345');
  });
  
  it('should call launchDialog when hookInstance is present in the URL', () => {
    const launchDialogSpy = spyOn(component, 'launchDialog');

    component.ngOnInit();

    expect(launchDialogSpy).toHaveBeenCalledWith({ hookInstance: '12345' });
  });

  it('should navigate to /forbidden when hookInstance is not present in the URL', () => {
    mockDocument.location.href = 'http://localhost:4200/';
  
    component.ngOnInit();
  
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/forbidden']);
  });
  
  
});
