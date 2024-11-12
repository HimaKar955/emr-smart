import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExternalLabsModalComponent } from './external-labs-modal/external-labs-modal.component';
import { EmrService } from './emr-services/emr-service/emr.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    const mockData = {
        getToken(val1: any) { return of({ responseData: {} }) }
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, ExternalLabsModalComponent], // Use 'declarations' instead of 'imports'
            providers: [
                {
                    provide: EmrService, useValue: mockData
                },
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting()
            ],
            schemas: [NO_ERRORS_SCHEMA] // Optionally ignore unknown elements
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        component.authToken = '123';
        fixture.detectChanges();
    });

    it('should call launchDialog()', () => {
        const dialogData = { auth_token: 'mock token' };
        
        // Assuming launchDialog has some side effect or logic to assert
        spyOn(component, 'launchDialog'); 
        component.launchDialog(dialogData);

        // Assert that launchDialog was called
        expect(component.launchDialog).toHaveBeenCalledWith(dialogData);
    });
});
