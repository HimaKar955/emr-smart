import { TestBed } from '@angular/core/testing';
import { ApiTransformService } from './converted.service';

describe('ApiTransformService', () => {
  let service: ApiTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCoverageValue', () => {
    it('should return true for valid boolean string', () => {
      const limitedCoverage = [
        { orderCode: '12345', coveredByDiagnosis: 'true' }
      ];

      const result = service['getCoverageValue'](limitedCoverage, '12345', 'coveredByDiagnosis');
      expect(result).toBeTrue();
    });

    it('should return null for invalid order code', () => {
      const limitedCoverage = [
        { orderCode: '12345', coveredByDiagnosis: 'true' }
      ];

      const result = service['getCoverageValue'](limitedCoverage, '67890', 'coveredByDiagnosis');
      expect(result).toBeNull();
    });
  });

  describe('hasOrderCodesInLimitedCoverage', () => {
    it('should return true when an order code matches', () => {
      const chemPanel = [{ OrderCode: '12345' }];
      const chemServices = [{ OrderCode: '67890' }];
      const limitedCoverage = [{ orderCode: '12345' }];

      const result = service['hasOrderCodesInLimitedCoverage'](chemPanel, chemServices, limitedCoverage);
      expect(result).toBeTrue();
    });

    it('should return false when no order codes match', () => {
      const chemPanel = [{ OrderCode: '11111' }];
      const chemServices = [{ OrderCode: '22222' }];
      const limitedCoverage = [{ orderCode: '12345' }];

      const result = service['hasOrderCodesInLimitedCoverage'](chemPanel, chemServices, limitedCoverage);
      expect(result).toBeFalse();
    });
  });

  describe('isNonChemMatchInLimitedCoverage', () => {
    it('should return true for a matching non-chem order code', () => {
      const nonChemMatch = { OrderCode: '12345' };
      const limitedCoverage = [{ orderCode: '12345' }];

      const result = service['isNonChemMatchInLimitedCoverage'](nonChemMatch, limitedCoverage);
      expect(result).toBeTrue();
    });

    it('should return false for a non-matching non-chem order code', () => {
      const nonChemMatch = { OrderCode: '67890' };
      const limitedCoverage = [{ orderCode: '12345' }];

      const result = service['isNonChemMatchInLimitedCoverage'](nonChemMatch, limitedCoverage);
      expect(result).toBeFalse();
    });
  });
});
