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
  let mockDocument: Document;

  beforeEach(() => {
    mockDialog = { open: jasmine.createSpy('open').and.returnValue({ afterClosed: () => ({}) }) };
    mockRouter = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: MatDialog, useValue: mockDialog },
        { provide: Router, useValue: mockRouter },
      ],
    });

    mockDocument = TestBed.inject(DOCUMENT);
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
});
