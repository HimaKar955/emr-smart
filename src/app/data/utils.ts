export const data = {
    "cards": [
        {
            "summary": "Quest CDS Informational Card",
            "indicator": "info",
            "extension": {
                "com.epic.cdshooks.card.detail.content-type": "text/plain"

            },
            "detail": "Quest CDS Informational Card with Pricing & Limited Coverage Information",
            "source": {
                "topic": {
                    "code": "CDSResponse-f399c67c-c703-11ea-af16-460231621f93"
                }
            },
            "links": [
                {
                    "label": "Quest EMR Smart App",
                    "type": "smart",
                    "url": '',
                    "appContext": "hookInstance=00000000-007b-9f33-e810-e841a57c502c",
                    "autolaunchable": true
                }
            ]

        }
    ]
}

export const LCP_Text = 'No test need attention estimated price exceeds $100 threshold.';

export const ServiceResponse1 = {
    "httpStatus": "OK",
    "responseData": {
        "resources_id": 2082,
        "cdsHookId": "18c8bd27-660e-11ef-adb0-005056be447d",
        "fhir_resource_id": "eop307jtcOP7pPKDM1rwa7107LamQc1qGh7--Onh13FaovJ-XSSNVKSYEзzj9Spyfxps04L5LbGSI15gFHPEQp6FejFkD4dvBhVQVLi-7cZnQWPe46C7US2JzqCnttfsw7r7wYxGCi22Y",
        "fhir_resource_type": "ServiceRequest",
        "ServiceRequest": [
            {
                "resourceType": "ServiceRequest",
                "id": "eop307jtcOP7pPKDM1rwa7q8. YkmvrVqHQsOwBREY1Jg-RSVIbB1EVbQK7DreAnayfofS2m3X7rewVmmg54.Le6kx8tnuyExVnQhjxo-MKGACrCW. YnVDAr91-To8WnK-SJXuIrV8GW-",
                "status": "draft",
                "intent": "order",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "373864002",
                                "display": "Outpatient"
                            }
                        ],
                        "text": "Outpatient"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://www.ama-assn.org/go/cpt",
                            "code": "82945",
                            "display": "PR ASSAY GLUCOSE, BODY FLUID"
                        },
                        {
                            "system": "http://loinc.org",
                            "code": "2345-7",
                            "display": "Glucose [Mass/volume] in Serum or Plasma"
                        },
                        {
                            "system": "http://open.epic.com/FHIR/StructureDefinition/cds-hooks-unsigned-order-procedure-mpi-id/25",
                            "code": "483",
                            "display": null
                        }
                    ],
                    "text": "Glucose, serum"
                },
                "quantityQuantity": {
                    "value": 1
                },
                "subject": {
                    "reference": "Patient/eAvUWfcu911eGT9WRX193ZQ3",
                    "display": "Link, John"
                },
                "encounter": {
                    "reference": "Encounter/eyQIXCZZGг7JGV2yolrZxVg3",
                    "identifier": {
                        "use": "usual",
                        "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
                        "value": "38109"
                    },
                    "display": "Orders Only"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "boundsPeriod": {
                            "start": "2024-08-29T05:00:00Z"
                        },
                        "count": 1
                    }
                },
                "requester": {
                    "reference": "Practitioner/eM5CWtq15N0WJeucet5bJ1Q3",
                    "display": "Physician Family Medicine, MD",
                    "type": "Practitioner"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "160314003",
                                "display": "Family history: Hypercholesterolemia (situation)"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-9-cm",
                                "code": "V18.19",
                                "display": "Family history of hypercholesterolemia"
                            },
                            {
                                "system": "http://h17.org/fhir/sid/icd-10-cm",
                                "code": "Z83.42",
                                "display": "Family history of hypercholesterolemia"
                            }
                        ],
                        "text": "Family history of hypercholesterolemia"

                    }
                ],
                "reasonReference": [
                    {
                        "reference": "Condition/epjovaOpVG0oqKO.6rsYwSyAecX1mnRXu.hmP6I2FNOHLgDuUPу5b8DKvmf6WM..7Gp4WyiL4eMLETCTNfu0dyw3",
                        "display": "Family history of hypercholesterolemia",
                        "type": "Condition"
                    }
                ]
            },
            {
                "resourceType": "ServiceRequest",
                "id": "eop307jtcOP7pPKDM1rwa7q8. YkmvrVqHQsOwBREY1Jg-RSVIbB1EVbQK7DreAnayfofS2m3X7rewVmmg54.Le6kx8tnuyExVnQhjxo-MKGACrCW. YnVDAr91-To8WnK-SJXuIrV8GW-",
                "status": "draft",
                "intent": "order",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "373864002",
                                "display": "Outpatient"
                            }
                        ],
                        "text": "Outpatient"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://www.ama-assn.org/go/cpt",
                            "code": "82945",
                            "display": "PR ASSAY GLUCOSE, BODY FLUID"
                        },
                        {
                            "system": "http://loinc.org",
                            "code": "2345-7",
                            "display": "Glucose [Mass/volume] in Serum or Plasma"
                        },
                        {
                            "system": "http://open.epic.com/FHIR/StructureDefinition/cds-hooks-unsigned-order-procedure-mpi-id/25",
                            "code": "34392",
                            "display": null
                        }
                    ],
                    "text": "Glucose, serum"
                },
                "quantityQuantity": {
                    "value": 1
                },
                "subject": {
                    "reference": "Patient/eAvUWfcu911eGT9WRX193ZQ3",
                    "display": "Link, John"
                },
                "encounter": {
                    "reference": "Encounter/eyQIXCZZGг7JGV2yolrZxVg3",
                    "identifier": {
                        "use": "usual",
                        "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
                        "value": "38109"
                    },
                    "display": "Orders Only"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "boundsPeriod": {
                            "start": "2024-08-29T05:00:00Z"
                        },
                        "count": 1
                    }
                },
                "requester": {
                    "reference": "Practitioner/eM5CWtq15N0WJeucet5bJ1Q3",
                    "display": "Physician Family Medicine, MD",
                    "type": "Practitioner"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "160314003",
                                "display": "Family history: Hypercholesterolemia (situation)"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-9-cm",
                                "code": "V18.19",
                                "display": "Family history of hypercholesterolemia"
                            },
                            {
                                "system": "http://h17.org/fhir/sid/icd-10-cm",
                                "code": "Z83.42",
                                "display": "Family history of hypercholesterolemia"
                            }
                        ],
                        "text": "Family history of hypercholesterolemia"

                    }
                ],
                "reasonReference": [
                    {
                        "reference": "Condition/epjovaOpVG0oqKO.6rsYwSyAecX1mnRXu.hmP6I2FNOHLgDuUPу5b8DKvmf6WM..7Gp4WyiL4eMLETCTNfu0dyw3",
                        "display": "Family history of hypercholesterolemia",
                        "type": "Condition"
                    }
                ]
            },
            {
                "resourceType": "ServiceRequest",
                "id": "eop307jtcOP7pPKDM1rwa7q8. YkmvrVqHQsOwBREY1Jg-RSVIbB1EVbQK7DreAnayfofS2m3X7rewVmmg54.Le6kx8tnuyExVnQhjxo-MKGACrCW. YnVDAr91-To8WnK-SJXuIrV8GW-",
                "status": "draft",
                "intent": "order",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "373864002",
                                "display": "Outpatient"
                            }
                        ],
                        "text": "Outpatient"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://www.ama-assn.org/go/cpt",
                            "code": "82945",
                            "display": "PR ASSAY GLUCOSE, BODY FLUID"
                        },
                        {
                            "system": "http://loinc.org",
                            "code": "2345-7",
                            "display": "Glucose [Mass/volume] in Serum or Plasma"
                        },
                        {
                            "system": "http://open.epic.com/FHIR/StructureDefinition/cds-hooks-unsigned-order-procedure-mpi-id/25",
                            "code": "334",
                            "display": null
                        }
                    ],
                    "text": "Glucose, serum"
                },
                "quantityQuantity": {
                    "value": 1
                },
                "subject": {
                    "reference": "Patient/eAvUWfcu911eGT9WRX193ZQ3",
                    "display": "Link, John"
                },
                "encounter": {
                    "reference": "Encounter/eyQIXCZZGг7JGV2yolrZxVg3",
                    "identifier": {
                        "use": "usual",
                        "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
                        "value": "38109"
                    },
                    "display": "Orders Only"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "boundsPeriod": {
                            "start": "2024-08-29T05:00:00Z"
                        },
                        "count": 1
                    }
                },
                "requester": {
                    "reference": "Practitioner/eM5CWtq15N0WJeucet5bJ1Q3",
                    "display": "Physician Family Medicine, MD",
                    "type": "Practitioner"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "160314003",
                                "display": "Family history: Hypercholesterolemia (situation)"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-9-cm",
                                "code": "V18.19",
                                "display": "Family history of hypercholesterolemia"
                            },
                            {
                                "system": "http://h17.org/fhir/sid/icd-10-cm",
                                "code": "Z83.42",
                                "display": "Family history of hypercholesterolemia"
                            }
                        ],
                        "text": "Family history of hypercholesterolemia"

                    }
                ],
                "reasonReference": [
                    {
                        "reference": "Condition/epjovaOpVG0oqKO.6rsYwSyAecX1mnRXu.hmP6I2FNOHLgDuUPу5b8DKvmf6WM..7Gp4WyiL4eMLETCTNfu0dyw3",
                        "display": "Family history of hypercholesterolemia",
                        "type": "Condition"
                    }
                ]
            }
        ]
    },
    "message": "Response Generated"
}
export const PricingResponse1 = {
    "httpstatus": "OK",
    "responseData": {
        "elabs_response_id": 805,
        "elabs_request_id": 607,
        "cdsHookId": "18c8bd27-660e-11ef-adb0-005056be447d",
        "elabs_response_payload": {
            "success": true,
            "performingsite": "STL",
            "client": "544800",
            "legalEntity": "STL",
            "thirdPartyFormsCode": "RMM",
            "insuranceCarrierName": "MEDICARE",
            "token": "FE099D60-7ABB-11EF-860C-DA0262A0C8B5",
            "pricingstatus": "enabled",
            "pricing": {
                "Chems": {
                    "ChemServiceCode": "0034705",
                    "ChemServiceName": "ELECTROLYTE PANEL, GLUCOSE, SERUM",
                    "ChemPanel": [
                        {
                            "PanelCode": "0034392",
                            "PanelName": "ELECTROLYTE PANEL",
                            "OrderCode": "34392",
                            "ChemService": [
                                {
                                    "ServiceCode": "0000733",
                                    "ServiceName": "POTASSIUM",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000836",
                                    "ServiceName": "SODIUM",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000330",
                                    "ServiceName": "CHLORIDE",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000310",
                                    "ServiceName": "CARBON DIOXIDE",
                                    "OrderCode": null
                                }
                            ]
                        }
                    ],

                    "ChemService": [
                        {
                            "ServiceCode": "0000483",
                            "ServiceName": "GLUCOSE, SERUM",
                            "OrderCode": "483"
                        }
                    ],
                    "ClientFeeInfo": {
                        "Comment": "LIST",
                        "Fee": "00002.45"
                    },
                    "PatientFeeInfo": {
                        "Comment": "LIST",
                        "EstFee": "00000.00",
                        "Fee": "00067.82"
                    },
                    "ReasonCode": {},
                    "RemarkCode": {}
                },
                "NonChems": {
                    "Profile": [],
                    "Service": [
                        {
                            "ClientFeeInfo": {
                                "Comment": "LIST",
                                "Fee": "00002.00"
                            },
                            "Patient FeeInfo": {
                                "Comment": "LIST",
                                "EstFee": "00000.00",
                                "Fee": "00042.90"
                            },
                            "ReasonCode": {},
                            "RemarkCode": {},
                            "ServiceCode": "0000334",
                            "ServiceName": "CHOLESTEROL, TOTAL",
                            "OrderCode": "334"
                        }
                    ]
                },
                "clientInfo": {
                    "BillToClientNbr": "00544800",
                    "clientNbr": "00544800",
                    "Discount": "00",
                    "FeeSchedule": "37",
                    "GroupFlag": "p",
                    "LegalEnt": "STL",
                    "Name": "MERCY HOSPITAL ST LOUIS"
                },
                "ClientOrderPriceTotal": "0000004.45 ",
                "PartialPatientOrderPrice": "",
                "PatientOrderPriceTotal": "0000110.72",
                "EstPatRespAmt": "00000.00",
                "EstPatRespMsg": "EasyPay estimate not available for ins or group",
                "EstPatRespMsgCd": "Z",
                "EstPatRespSource": "Quest",
                "FormCode": "RMM",
                "FormCodeProvName": "MEDICARE",
                "Function": "",
                "Error": "",
                "Message": "",
                " Module": "",
                "PatientInfo": {
                    "Discount": "00",
                    "FeeSchedule": "37"
                },
                "PmtProcessType": " ",
                "Resp": "00000000",
                "Resp2": "00000000 ",
                "RespCode": "000",
                "Target": ""
            },
            "limitedCoverage": [
                {
                    "orderCode": "483",
                    "serviceCode": "0000483",
                    "frequencyLimit": "true",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "true",
                    "policyURL": "https://www.quest diagnostics.com/content/dam/corporate/restricted/documents/mlcp/m",
                    "commonSupportiveDiagnoses": [
                        {
                            code: "j40",
                            "description": "bronch, not specified"
                        },
                        {
                            code: "j40",
                            "description": "bronch, not specified"
                        },
                        {
                            code: "j40",
                            "description": "bronch, not specified"
                        }

                    ],
                    "diagnosisDisplayIndicator": "true",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                },
                {
                    "orderCode": "571",
                    "serviceCode": "0000483",
                    "frequencyLimit": "false",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "true",
                    "policyURL": "https://www.quest diagnostics.com/content/dam/corporate/restricted/documents/mlcp/m",
                    "commonSupportiveDiagnoses": [
                        {
                            code: "j40",
                            "description": "bronch, not specified"
                        },
                        {
                            code: "j40",
                            "description": "bronch, not specified"
                        },
                        {
                            code: "j40",
                            "description": "bronch, not specified"
                        }

                    ],
                    "diagnosisDisplayIndicator": "true",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                }
            ]
        },
        "elabs_response_token": "FE099D60-7ABB-11EF-860C-DA0262A0C8B5",
        "elabs_call_type": "Primary"
    },
    "message": "Response Generated"
}
