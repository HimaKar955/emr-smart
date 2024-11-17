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
      }
    };

    const serviceRequests = serviceResponse.responseData.ServiceRequest;
    const chemPanel = pricingResponse.responseData.elabs_response_payload.pricing.Chems.ChemPanel;
    const chemServices = pricingResponse.responseData.elabs_response_payload.pricing.Chems.ChemService;
    const nonChemServices = pricingResponse.responseData.elabs_response_payload.pricing.NonChems.Service;
    const limitedCoverage = pricingResponse.responseData.elabs_response_payload.limitedCoverage;

    const resultChem = this.hasOrderCodesInLimitedCoverage(chemPanel, chemServices, limitedCoverage);
    console.log(`Are any OrderCodes in limited coverage? ${resultChem}`);

    serviceRequests.forEach((request:any) => {
      const orderCode = request.code.coding.find((c: any) => c.system.includes('epic'))?.code;
      const reason = request.reasonCode[0]?.coding?.find((r: any) => r.system.includes('icd-10-cm')) || {};

      // Find in chemPanel
      const chemPanelMatch = chemPanel.find((c: any) => c.OrderCode === orderCode);
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
        if(diagnosisDisplayIndicator) {
          formattedTestResults.FormattedTestResults.tests.chems.lcplList.push({
            chemName: chemPanelMatch.PanelName,
            orderCode: chemPanelMatch.OrderCode,
            coveredByDiagnosis: coveredByDiagnosis,
            diagnosisDisplayIndicator: diagnosisDisplayIndicator,
            code: reason.code || null,
            display: reason.display || null
          });
        }
        
      }

      // Find in chemServices
      const chemServiceMatch = chemServices.find((c: any) => c.OrderCode === orderCode);
      if (chemServiceMatch &&  resultChem) {
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
        if (diagnosisDisplayIndicator) {
          formattedTestResults.FormattedTestResults.tests.chems.lcplList.push({
            chemName: chemServiceMatch.ServiceName,
            orderCode: chemServiceMatch.OrderCode,
            coveredByDiagnosis: coveredByDiagnosis,
            diagnosisDisplayIndicator: diagnosisDisplayIndicator,
            code: reason.code || null,
            display: reason.display || null
          });
        }
      }

      // Find in nonChems
      const nonChemMatch = nonChemServices.find((c: any) => c.OrderCode === orderCode);
      console.log(nonChemMatch)
      const resultNonChem = nonChemMatch && this.isNonChemMatchInLimitedCoverage(nonChemMatch, limitedCoverage) || false;
      console.log(`Is nonChemMatch order code in limited coverage? ${resultNonChem}`);
      if (nonChemMatch && resultNonChem) {
        formattedTestResults.FormattedTestResults.tests['nonChems'].push({
          chemName: nonChemMatch.ServiceName,
          orderCode: nonChemMatch.OrderCode,
          frequencyLimit: this.getCoverageValue(limitedCoverage, nonChemMatch.OrderCode, 'frequencyLimit'),
          coveredByDiagnosis: this.getCoverageValue(limitedCoverage, nonChemMatch.OrderCode, 'coveredByDiagnosis'),
          diagnosisDisplayIndicator: this.getCoverageValue(limitedCoverage, nonChemMatch.OrderCode, 'diagnosisDisplayIndicator'),
          code: reason.code || null,
          display: reason.display || null,
          price: parseFloat(nonChemMatch['Patient FeeInfo']?.EstFee) || 0
        });
        formattedTestResults.FormattedTestResults.totalPrice += parseFloat(nonChemMatch['Patient FeeInfo']?.EstFee) || 0;
      }

      // Other Tests (not in chems or nonChems)
      console.log(!chemPanelMatch , !chemServiceMatch , !resultChem)
      console.log(!nonChemMatch, !resultNonChem)
      console.log(nonChemMatch)
      console.log(chemPanelMatch, chemServiceMatch)

    if (((chemPanelMatch || chemServiceMatch) && !resultChem) || (nonChemMatch && !resultNonChem)) {
        if (nonChemMatch) {
            formattedTestResults.FormattedTestResults.otherTests['nonChems'].push({
                chemName: request.code.text,
                orderCode: orderCode,
                price: parseFloat(nonChemMatch['Patient FeeInfo']?.EstFee) || 0
            });
            formattedTestResults.FormattedTestResults.totalPrice += parseFloat(nonChemMatch['Patient FeeInfo']?.EstFee) || 0;
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

  private getCoverageValue(limitedCoverage: any, orderCode: string, key: string): string | null {
    const coverage = limitedCoverage.find((coverage: any) => coverage.orderCode === orderCode);
    return coverage ? coverage[key] : null;
  }

  private hasOrderCodesInLimitedCoverage(
    chemPanel: { OrderCode: string }[],
    chemServices: { OrderCode: string }[],
    limitedCoverage: { orderCode: string }[]
    ): boolean {
        const allOrderCodes = [
            ...chemPanel.map(panel => panel.OrderCode),
            ...chemServices.map(service => service.OrderCode),
        ];

        return allOrderCodes.some(orderCode =>
            limitedCoverage.some(coverage => coverage.orderCode === orderCode)
        );
    }

    private isNonChemMatchInLimitedCoverage(
        nonChemMatch: { OrderCode: string },
        limitedCoverage: { orderCode: string }[]
    ): boolean {
        console.log(nonChemMatch)
        console.log(limitedCoverage)
        return limitedCoverage.some(coverage => coverage?.orderCode === nonChemMatch.OrderCode);
    }
}
