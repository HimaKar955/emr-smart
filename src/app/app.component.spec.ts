import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { of } from 'rxjs';
import { ExternalLabsModalComponent } from './external-labs-modal/external-labs-modal.component';
import { EmrService } from './emr-services/emr-service/emr.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    const mockData = {
        getToken(val1: any) { return of({ responseData: {} }) }
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    imports: [AppComponent, ExternalLabsModalComponent],
    providers: [
        {
            provide: EmrService, useValue: mockData
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        component.authToken = '123';
        fixture.detectChanges();
    });



    it('should call launchDialog()', () => {
        component.launchDialog({ auth_token: 'mock token' })

        expect(component).toBeTruthy();
    });
});

