import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EmrService } from './emr.service';
import { environment } from '../../../environments/environment';

describe('EmrService (with mocks)', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let emrService: EmrService;

    beforeEach(() => {
        TestBed.configureTestingModule({
    imports: [],
    providers: [EmrService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        emrService = TestBed.inject(EmrService);
    });



    afterEach(() => {
        //         // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });


    it('should handle 404 error when authenticate fails', () => {
        const mockErrorResponse = { status: 404, statusText: 'Not Found' };
        const data = 'Invalid URL';

    });
});  