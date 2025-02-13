import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTransformService {

  transformResponses(serviceResponse: any, pricingResponse: any) {
    const formattedTestResults: any = {
      FormattedTestResults: {
        tests: {
          chems: {
            lcplList: [],
            frequencyList: [],
            price: parseFloat(pricingResponse?.responseData?.elabs_response_payload?.pricing?.Chems?.PatientFeeInfo?.EstFee) || 0,
            allChems: pricingResponse?.responseData?.elabs_response_payload?.pricing?.Chems?.ChemServiceName
          },
          'nonChems': []
        },
        otherTests: {
            chems: {
                list: [],
                price: parseFloat(pricingResponse?.responseData?.elabs_response_payload?.pricing?.Chems?.PatientFeeInfo?.EstFee) || 0,
                allChems: pricingResponse?.responseData?.elabs_response_payload?.pricing?.Chems?.ChemServiceName
            },
            'nonChems': []
        },
        totalPrice : parseFloat(pricingResponse?.responseData?.elabs_response_payload?.pricing?.Chems?.PatientFeeInfo?.EstFee) || 0,
        isPrice: pricingResponse?.responseData?.elabs_response_payload?.pricing?.EstPatRespMsgCd === "Z",
      }
    };

    const serviceRequests = serviceResponse.responseData.ServiceRequest;
    const chemPanel = pricingResponse.responseData.elabs_response_payload.pricing?.Chems?.ChemPanel;
    const chemServices = pricingResponse.responseData.elabs_response_payload.pricing?.Chems?.ChemService;
    const nonChemServices = pricingResponse.responseData.elabs_response_payload.pricing?.NonChems?.Service;
    const limitedCoverage = pricingResponse.responseData.elabs_response_payload?.limitedCoverage;
    let resultChem = false;
    if (chemPanel || chemServices){
      resultChem = this.hasOrderCodesInLimitedCoverage(chemPanel, chemServices, limitedCoverage);
    }

    serviceRequests.forEach((request:any) => {
      const orderCode = request.code.coding.find((c: any) => c.system.includes('epic'))?.code;
      const reason = request.reasonCode?.[0]?.coding?.find((r: any) => r.system.includes('icd-10-cm')) || {};

     
      const chemPanelMatch = chemPanel?.find((c: any) => c?.OrderCode === orderCode);
      const chemServiceMatch = chemServices?.find((c: any) => c?.OrderCode === orderCode);
      const commonSupportiveDiagnoses = this.getCommonSupportiveDiagnoses(limitedCoverage, chemServiceMatch?.OrderCode || chemPanelMatch?.OrderCode);
      const policyUrl = this.getPolicyUrl(limitedCoverage, chemServiceMatch?.OrderCode || chemPanelMatch?.OrderCode);
      console.log(commonSupportiveDiagnoses)
      console.log(chemPanelMatch, "chemPanelMatch")
      console.log(chemServiceMatch, "chemServiceMatch")
      // Find in chemPanel

      if (chemPanelMatch &&  resultChem) {
        const frequencyLimit = this.getCoverageValue(limitedCoverage, chemPanelMatch.OrderCode, 'frequencyLimit');
        const coveredByDiagnosis = this.getCoverageValue(limitedCoverage, chemPanelMatch.OrderCode, 'coveredByDiagnosis');
        const diagnosisDisplayIndicator = this.getCoverageValue(limitedCoverage, chemPanelMatch.OrderCode, 'diagnosisDisplayIndicator');
        // Adding in frequency List
        if(frequencyLimit) {
          formattedTestResults.FormattedTestResults.tests.chems.frequencyList.push({
            chemName: chemPanelMatch.PanelName,
            orderCode: chemPanelMatch.OrderCode,
            frequencyLimit: frequencyLimit,
          });
        }
        // Adding in LCPL List
        if(coveredByDiagnosis) {
          formattedTestResults.FormattedTestResults.tests.chems.lcplList.push({
            chemName: chemPanelMatch.PanelName,
            orderCode: chemPanelMatch.OrderCode,
            coveredByDiagnosis: coveredByDiagnosis,
            diagnosisDisplayIndicator: diagnosisDisplayIndicator,
            code: reason.code || null,
            display: reason.display || null,
            limitedCoverage: chemPanelMatch.commonSupportiveDiagnoses,
            policyUrl: policyUrl,
          });
        }
        
      }

      // Find in chemServices
      else if (chemServiceMatch &&  resultChem) {
        const frequencyLimit = this.getCoverageValue(limitedCoverage, chemServiceMatch.OrderCode, 'frequencyLimit');
        const coveredByDiagnosis = this.getCoverageValue(limitedCoverage, chemServiceMatch.OrderCode, 'coveredByDiagnosis');
        const diagnosisDisplayIndicator = this.getCoverageValue(limitedCoverage, chemServiceMatch.OrderCode, 'diagnosisDisplayIndicator');     
        if(frequencyLimit) {
          formattedTestResults.FormattedTestResults.tests.chems.frequencyList.push({
            chemName: chemServiceMatch.ServiceName,
            orderCode: chemServiceMatch.OrderCode,
            frequencyLimit: frequencyLimit,
          });
        }
        if (coveredByDiagnosis) {
          formattedTestResults.FormattedTestResults.tests.chems.lcplList.push({
            chemName: chemServiceMatch.ServiceName,
            orderCode: chemServiceMatch.OrderCode,
            coveredByDiagnosis: coveredByDiagnosis,
            diagnosisDisplayIndicator: diagnosisDisplayIndicator,
            code: reason.code || null,
            display: reason.display || null,
            limitedCoverage: commonSupportiveDiagnoses,
            policyUrl: policyUrl,
          });
        }
      }

      // Find in nonChems
      const nonChemMatch = nonChemServices?.find((c: any) => c.OrderCode === orderCode);
      const resultNonChem = nonChemMatch && this.isNonChemMatchInLimitedCoverage(nonChemMatch, limitedCoverage) || false;
      if (nonChemMatch && resultNonChem) {
        formattedTestResults.FormattedTestResults.tests['nonChems'].push({
          chemName: nonChemMatch.ServiceName,
          orderCode: nonChemMatch.OrderCode,
          frequencyLimit: this.getCoverageValue(limitedCoverage, nonChemMatch.OrderCode, 'frequencyLimit'),
          coveredByDiagnosis: this.getCoverageValue(limitedCoverage, nonChemMatch.OrderCode, 'coveredByDiagnosis'),
          diagnosisDisplayIndicator: this.getCoverageValue(limitedCoverage, nonChemMatch.OrderCode, 'diagnosisDisplayIndicator'),
          code: reason.code || null,
          display: reason.display || null,
          price: parseFloat(nonChemMatch['PatientFeeInfo']?.EstFee) || 0
        });
        formattedTestResults.FormattedTestResults.totalPrice += parseFloat(nonChemMatch['PatientFeeInfo']?.EstFee) || 0;
      }

      // Other Tests (not in chems or nonChems)
    if (((chemPanelMatch || chemServiceMatch) && !resultChem) || (nonChemMatch && !resultNonChem)) {
        if (nonChemMatch) {
            formattedTestResults.FormattedTestResults.otherTests['nonChems'].push({
                chemName: nonChemMatch.ServiceName,
                orderCode: orderCode,
                price: parseFloat(nonChemMatch['PatientFeeInfo']?.EstFee) || 0
            });
            formattedTestResults.FormattedTestResults.totalPrice += parseFloat(nonChemMatch['PatientFeeInfo']?.EstFee) || 0;
        } else {
            formattedTestResults.FormattedTestResults.otherTests.chems.list.push({
                chemName: request.code.text,
                orderCode: orderCode,
            });
        }
    }
    
    });


    return formattedTestResults;
  }

  getCoverageValue(limitedCoverage: any, orderCode: string, key: string): boolean | null {
    if (!Array.isArray(limitedCoverage)) {
      return null; // Return null if limitedCoverage is not an array
    }
    const coverage = limitedCoverage.find((coverage: any) => coverage.orderCode === orderCode);
    if (coverage && typeof coverage[key] === "string") {
      return coverage[key].toLowerCase() === "true";
    }
  
    // Return null if no coverage is found or the key doesn't exist
    return null;
  }

  getCommonSupportiveDiagnoses(limitedCoverage:any, orderCode:string) {
    if (!Array.isArray(limitedCoverage)) {
      return null; // Return null if limitedCoverage is not an array
    }
    const coverage = limitedCoverage.find((coverage: any) => coverage.orderCode === orderCode);
    if (coverage && coverage.commonSupportiveDiagnoses) {
      return coverage.commonSupportiveDiagnoses
    }
  
    // Return null if no coverage is found or the key doesn't exist
    return null;
  }

  getPolicyUrl(limitedCoverage:any, orderCode:string) {
    if (!Array.isArray(limitedCoverage)) {
      return null; // Return null if limitedCoverage is not an array
    }
    const coverage = limitedCoverage.find((coverage: any) => coverage.orderCode === orderCode);
    if (coverage && coverage.policyURL) {
      return coverage.policyURL
    }
  
    // Return null if no coverage is found or the key doesn't exist
    return null;
  }

  private hasOrderCodesInLimitedCoverage(
    chemPanel: { OrderCode: string }[],
    chemServices: { OrderCode: string }[],
    limitedCoverage: { orderCode: string }[]
    ): boolean {
        const allOrderCodes = [
            ...chemPanel?.map(panel => panel.OrderCode),
            ...chemServices?.map(service => service.OrderCode),
        ];

        return allOrderCodes.some(orderCode =>
            limitedCoverage?.some(coverage => coverage.orderCode === orderCode)
        );
    }

    private isNonChemMatchInLimitedCoverage(
        nonChemMatch: { OrderCode: string },
        limitedCoverage: { orderCode: string }[]
    ): boolean {
        return limitedCoverage?.some(coverage => coverage?.orderCode === nonChemMatch.OrderCode);
    }

    private appendCommonSupportiveDiagnoses(limitedCoverages: any[]): any[] {
      const commonDiagnoses: any[] = [];
  
      if (!limitedCoverages || !Array.isArray(limitedCoverages)) {
          return commonDiagnoses;
      }
  
      limitedCoverages.forEach((limitedCoverage) => {
          if (limitedCoverage.commonSupportiveDiagnoses && Array.isArray(limitedCoverage.commonSupportiveDiagnoses)) {
              limitedCoverage.commonSupportiveDiagnoses.forEach((diagnosis: any) => {
                  commonDiagnoses.push(diagnosis);
              });
          }
      });
  
      return commonDiagnoses;
  }
}
