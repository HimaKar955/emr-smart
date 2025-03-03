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
      const limitedCoverage = [{ orderCode: '12345', coveredByDiagnosis: 'true' }];
      const result = service['getCoverageValue'](limitedCoverage, '12345', 'coveredByDiagnosis');
      expect(result).toBeTrue();
    });

    it('should return false for "false" string', () => {
      const limitedCoverage = [{ orderCode: '12345', coveredByDiagnosis: 'false' }];
      const result = service['getCoverageValue'](limitedCoverage, '12345', 'coveredByDiagnosis');
      expect(result).toBeFalse();
    });

    it('should return null for invalid order code', () => {
      const limitedCoverage = [{ orderCode: '12345', coveredByDiagnosis: 'true' }];
      const result = service['getCoverageValue'](limitedCoverage, '67890', 'coveredByDiagnosis');
      expect(result).toBeNull();
    });

    it('should return null for missing key', () => {
      const limitedCoverage = [{ orderCode: '12345' }];
      const result = service['getCoverageValue'](limitedCoverage, '12345', 'missingKey');
      expect(result).toBeNull();
    });

    it('should return null if coverage is null', () => {
      const limitedCoverage = null;
      const result = service['getCoverageValue'](limitedCoverage, '12345', 'coveredByDiagnosis');
      expect(result).toBeNull();
    });
  });

  describe('hasOrderCodesInLimitedCoverage', () => {
    it('should return true when an order code matches', () => {
      const chemPanel: { OrderCode: string }[] = [{ OrderCode: '12345' }];
      const chemServices: { OrderCode: string }[] = [{ OrderCode: '67890' }];
      const limitedCoverage = [{ orderCode: '12345' }];
      const result = service['hasOrderCodesInLimitedCoverage'](chemPanel, chemServices, limitedCoverage);
      expect(result).toBeTrue();
    });

    it('should return false when no order codes match', () => {
      const chemPanel: { OrderCode: string }[] = [{ OrderCode: '11111' }];
      const chemServices: { OrderCode: string }[] = [{ OrderCode: '22222' }];
      const limitedCoverage = [{ orderCode: '12345' }];
      const result = service['hasOrderCodesInLimitedCoverage'](chemPanel, chemServices, limitedCoverage);
      expect(result).toBeFalse();
    });

    it('should return false when chemPanel and chemServices are empty', () => {
      const chemPanel: { OrderCode: string }[] = [];
      const chemServices: { OrderCode: string }[] = [];
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

  describe('transformResponses', () => {
    const additionalSupportiveDiagnosis = {
      orderCodes: []
    };

    it('should transform responses correctly for chemPanelMatch with resultChem true', () => {
      const serviceResponse = {
        responseData: {
          ServiceRequest: [
            {
              code: { coding: [{ system: 'epic', code: '11111' }] },
              reasonCode: [{ coding: [{ system: 'icd-10-cm', code: 'D123', display: 'Some reason' }] }],
            },
          ],
        },
      };

      const pricingResponse = {
        responseData: {
          elabs_response_payload: {
            pricing: {
              Chems: {
                ChemPanel: [{ OrderCode: '11111', PanelName: 'Test Panel' }],
                ChemService: [],
                NonChems: { Service: [] },
              },
            },
            limitedCoverage: [{ orderCode: '11111', coveredByDiagnosis: 'true', frequencyLimit: 'true' }],
          },
        },
      };

      // Mock hasOrderCodesInLimitedCoverage to return true
      spyOn(service as any, 'hasOrderCodesInLimitedCoverage').and.returnValue(true);

      const result = service.transformResponses(serviceResponse, pricingResponse, additionalSupportiveDiagnosis);

      expect(result.FormattedTestResults.tests.chems.lcplList.length).toBe(1);
      expect(result.FormattedTestResults.tests.chems.frequencyList.length).toBe(1);
    });

    it('should handle chemPanelMatch when resultChem is false', () => {
      const serviceResponse = {
        responseData: {
          ServiceRequest: [{ code: { coding: [{ system: 'epic', code: '11111' }] } }]
        }
      };

      const pricingResponse = {
        responseData: {
          elabs_response_payload: {
            pricing: {
              Chems: { ChemPanel: [{ OrderCode: '11111', PanelName: 'Test Panel' }], ChemService: [] },
            },
            limitedCoverage: [{ orderCode: '11111', coveredByDiagnosis: 'true', frequencyLimit: 'true' }],
          },
        },
      };

      // Make resultChem false by using a limitedCoverage that doesn't match
      spyOn(service as any, 'hasOrderCodesInLimitedCoverage').and.returnValue(false);

      const result = service.transformResponses(serviceResponse, pricingResponse, additionalSupportiveDiagnosis);
      expect(result.FormattedTestResults.tests.chems.lcplList.length).toBe(0);
      expect(result.FormattedTestResults.tests.chems.frequencyList.length).toBe(0);
    });

    it('should handle nonChemMatch with valid order code', () => {
      const serviceResponse = {
        responseData: {
          ServiceRequest: [{ code: { coding: [{ system: 'epic', code: '12345' }] } }]
        }
      };

      const pricingResponse = {
        responseData: {
          elabs_response_payload: {
            pricing: {
              NonChems: { Service: [{ OrderCode: '12345', ServiceName: 'Test NonChem' }] }
            },
            limitedCoverage: [{ orderCode: '12345', coveredByDiagnosis: 'true', frequencyLimit: 'true' }],
          },
        },
      };

      const result = service.transformResponses(serviceResponse, pricingResponse, additionalSupportiveDiagnosis);

      expect(result.FormattedTestResults.tests.nonChems?.length).toBe(1);
      expect(result.FormattedTestResults.tests?.nonChems[0]?.chemName).toBe('Test NonChem');
    });

    it('should handle nonChemMatch when no non-chem services match', () => {
      const serviceResponse = {
        responseData: {
          ServiceRequest: [{ code: { coding: [{ system: 'epic', code: '99999' }] } }]
        }
      };

      const pricingResponse = {
        responseData: {
          elabs_response_payload: {
            pricing: { NonChems: { Service: [] } },
            limitedCoverage: [{ orderCode: '12345', coveredByDiagnosis: 'true', frequencyLimit: 'true' }],
          },
        },
      };

      const result = service.transformResponses(serviceResponse, pricingResponse, additionalSupportiveDiagnosis);

      expect(result.FormattedTestResults.tests.nonChems.length).toBe(0);
    });
  });

  describe('getCommonSupportiveDiagnoses', () => {
    it('should return common supportive diagnoses for a valid order code', () => {
      const limitedCoverage = [{ orderCode: '12345', commonSupportiveDiagnoses: ['D123'] }];
      const result = service['getCommonSupportiveDiagnoses'](limitedCoverage, '12345');
      expect(result).toEqual(['D123']);
    });

    it('should return null for an invalid order code', () => {
      const limitedCoverage = [{ orderCode: '12345', commonSupportiveDiagnoses: ['D123'] }];
      const result = service['getCommonSupportiveDiagnoses'](limitedCoverage, '67890');
      expect(result).toBeNull();
    });

    it('should return null if limitedCoverage is not an array', () => {
      const limitedCoverage = null;
      const result = service['getCommonSupportiveDiagnoses'](limitedCoverage, '12345');
      expect(result).toBeNull();
    });
  });

  describe('getAdditionalSupportiveDiagnoses', () => {
    it('should return additional supportive diagnoses for a valid order code', () => {
      const additionalCoverage = [{ orderCode: '12345', additionalSupportiveDiagnoses: ['D456'] }];
      const result = service['getAdditionalSupportiveDiagnoses'](additionalCoverage, '12345');
      expect(result).toEqual(['D456']);
    });

    it('should return null for an invalid order code', () => {
      const additionalCoverage = [{ orderCode: '12345', additionalSupportiveDiagnoses: ['D456'] }];
      const result = service['getAdditionalSupportiveDiagnoses'](additionalCoverage, '67890');
      expect(result).toBeNull();
    });

    it('should return null if additionalCoverage is not an array', () => {
      const additionalCoverage = null;
      const result = service['getAdditionalSupportiveDiagnoses'](additionalCoverage, '12345');
      expect(result).toBeNull();
    });
  });

  describe('getPolicyUrl', () => {
    it('should return policy URL for a valid order code', () => {
      const limitedCoverage = [{ orderCode: '12345', policyURL: 'http://example.com/policy' }];
      const result = service['getPolicyUrl'](limitedCoverage, '12345');
      expect(result).toBe('http://example.com/policy');
    });

    it('should return null for an invalid order code', () => {
      const limitedCoverage = [{ orderCode: '12345', policyURL: 'http://example.com/policy' }];
      const result = service['getPolicyUrl'](limitedCoverage, '67890');
      expect(result).toBeNull();
    });

    it('should return null if limitedCoverage is not an array', () => {
      const limitedCoverage = null;
      const result = service['getPolicyUrl'](limitedCoverage, '12345');
      expect(result).toBeNull();
    });
  });
});