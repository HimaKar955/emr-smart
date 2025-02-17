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
                    "diagnosisDisplayIndicator": "false",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                }
            ]
        },
        "elabs_response_token": "FE099D60-7ABB-11EF-860C-DA0262A0C8B5",
        "elabs_call_type": "Primary"
    },
    "message": "Response Generated"
}

export const ServiceResponse2 = {
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
export const PricingResponse2 = {
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
                },
            ]
        },
        "elabs_response_token": "FE099D60-7ABB-11EF-860C-DA0262A0C8B5",
        "elabs_call_type": "Primary"
    },
    "message": "Response Generated"
}

// Need to add  - chem in other tests 
export const ServiceResponse3 = {
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
                            "code": "34392",
                            "display": null
                        }
                    ],
                    "text": "Electrolyte, Panel"
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
                            "code": "335",
                            "display": null
                        }
                    ],
                    "text": "Colestrol, Total 2"
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
                    "text": "CHOLESTEROL, TOTAL"
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
                            "code": "483",
                            "display": null
                        }
                    ],
                    "text": "Glucose, Serum"
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
export const PricingResponse3 = {
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
                    "ChemServiceName": "ELECTROLYTE PANEL, Glucose, serum",
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
                        },
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
                            "ServiceCode": "0000335",
                            "ServiceName": "CHOLESTEROL, TOTAL 2",
                            "OrderCode": "335"
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
                    "orderCode": "334",
                    "serviceCode": "0000483",
                    "frequencyLimit": "true",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "false",
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
                    "diagnosisDisplayIndicator": "false",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                },
                {
                    "orderCode": "335",
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

export const ServiceResponse4 = {
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
                    "text": "Cholestral, Total 3"
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
                                "display": "Family history of GLUCOSE, SERUM"
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
                    "text": "Colestrol, Total 2"
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
                                "code": "Z21",
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
                            "code": "6892",
                            "display": null
                        }
                    ],
                    "text": "Electrolyte, Panel"
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
                                "display": null
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
                            "code": "562",
                            "display": null
                        }
                    ],
                    "text": "Xeco, Rams"
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
                                "code": "",
                                "display": ""
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
                            "code": "156",
                            "display": null
                        }
                    ],
                    "text": "Colestral, Total"
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
                                "code": "X83.42",
                                "display": "Family history of Colestral, Total"
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
                            "code": "176",
                            "display": null
                        }
                    ],
                    "text": "BP PANEL"
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
                                "display": null
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
        ]
    },
    "message": "Response Generated"
}
export const PricingResponse4 = {
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
                    "ChemServiceName": "ELECTROLYTE PANEL",
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
                        },
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
                            "ServiceCode": "0000335",
                            "ServiceName": "CHOLESTEROL, TOTAL 2",
                            "OrderCode": "335"
                        },
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
                            "ServiceCode": "0000336",
                            "ServiceName": "CHOLESTEROL, TOTAL 3",
                            "OrderCode": "336"
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
                    "orderCode": "334",
                    "serviceCode": "0000334",
                    "frequencyLimit": "true",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "false",
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
                    "orderCode": "335",
                    "serviceCode": "0000335",
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

export const ServiceResponse5 = {
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
                            "code": "335",
                            "display": null
                        }
                    ],
                    "text": "Colestrol, Total 2"
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
                    "text": "Cholestrol, total"
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
export const PricingResponse5 = {
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
                    "ChemServiceCode": "",
                    "ChemServiceName": "",
                    "ClientFeeInfo": null,
                    "PatientFeeInfo": null,
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
                        },
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
                            "ServiceCode": "0000335",
                            "ServiceName": "CHOLESTEROL, TOTAL 2",
                            "OrderCode": "335"
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
                    "orderCode": "334",
                    "serviceCode": "0000334",
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
                    "diagnosisDisplayIndicator": "false",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                },
                {
                    "orderCode": "335",
                    "serviceCode": "0000335",
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

export const ServiceResponse6 = {
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
                            "code": "334",
                            "display": null
                        }
                    ],
                    "text": "Cholestral, total"
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
        ]
    },
    "message": "Response Generated"
}
export const PricingResponse6 = {
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
                    "orderCode": "334",
                    "serviceCode": "0000334",
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
                }
            ]
        },
        "elabs_response_token": "FE099D60-7ABB-11EF-860C-DA0262A0C8B5",
        "elabs_call_type": "Primary"
    },
    "message": "Response Generated"
}

export const ServiceResponse7 = {
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
                            "code": "338",
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
export const PricingResponse7 = {
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
                        "EstFee": "7560.00",
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
                                "EstFee": "121.00",
                                "Fee": "00042.90"
                            },
                            "ReasonCode": {},
                            "RemarkCode": {},
                            "ServiceCode": "0000334",
                            "ServiceName": "CHOLESTEROL, TOTAL",
                            "OrderCode": "334"
                        },
                        {
                            "ClientFeeInfo": {
                                "Comment": "LIST",
                                "Fee": "00002.00"
                            },
                            "Patient FeeInfo": {
                                "Comment": "LIST",
                                "EstFee": "121.00",
                                "Fee": "00042.90"
                            },
                            "ReasonCode": {},
                            "RemarkCode": {},
                            "ServiceCode": "0000338",
                            "ServiceName": "CHOLESTEROL, TOTAL 2",
                            "OrderCode": "338"
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
                            "description": "wronch, not specified"
                        },
                        {
                            code: "a40",
                            "description": "wronchw, not specified"
                        },
                        {
                            code: "b40",
                            "description": "wronchy, not specified"
                        }

                    ],
                    "diagnosisDisplayIndicator": "true",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                },
                {
                    "orderCode": "34392",
                    "serviceCode": "0000338",
                    "frequencyLimit": "true",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "true",
                    "policyURL": "https://www.quest diagnostics.com/content/dam/corporate/restricted/documents/mlcp/m",
                    "commonSupportiveDiagnoses": [
                        {
                            code: "b40",
                            "description": "zronch, not specified"
                        },
                        {
                            code: "c40",
                            "description": "cronch, not specified"
                        },
                        {
                            code: "z40",
                            "description": "aronch, not specified"
                        }

                    ],
                    "diagnosisDisplayIndicator": "true",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                },
            ]
        },
        "elabs_response_token": "FE099D60-7ABB-11EF-860C-DA0262A0C8B5",
        "elabs_call_type": "Primary"
    },
    "message": "Response Generated"
}

export const ServiceResponse8 = {
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
export const PricingResponse8 = {
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
                        "EstFee": "000100.00",
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
                                "EstFee": "000190.00",
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
                    "frequencyLimit": "false",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "true",
                    "policyURL": "https://www.quest.diagnostics.com/content/dam/corporate/restricted/documents/mlcp/m",
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
                    "orderCode": "34392",
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
                    "orderCode": "334",
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


export const ServiceResponseCodeSetup = {
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
                    "text": "Cholestral, Total 3"
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
                                "display": "Family history of GLUCOSE, SERUM"
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
                    "text": "Colestrol, Total 2"
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
                                "code": "Z21",
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
                            "code": "6892",
                            "display": null
                        }
                    ],
                    "text": "Electrolyte, Panel"
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
                                "display": null
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
                            "code": "562",
                            "display": null
                        }
                    ],
                    "text": "Xeco, Rams"
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
                                "code": "",
                                "display": ""
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
                            "code": "156",
                            "display": null
                        }
                    ],
                    "text": "Colestral, Total"
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
                                "code": "X83.42",
                                "display": "Family history of Colestral, Total"
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
                            "code": "176",
                            "display": null
                        }
                    ],
                    "text": "BP PANEL"
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
                                "display": null
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
        ]
    },
    "message": "Response Generated"
}
export const PricingResponseCodeSetup = {
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
                    "ChemServiceName": "ELECTROLYTE PANEL, GLUCOSE, SERUM, jitotm, high, Xeco, Rams",
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
                        },
                        {
                            "PanelCode": "0006892",
                            "PanelName": "jitotm, high",
                            "OrderCode": "6892",
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
                        },
                    ],

                    "ChemService": [
                        {
                            "ServiceCode": "0000483",
                            "ServiceName": "GLUCOSE, SERUM",
                            "OrderCode": "483"
                        },
                        {
                            "ServiceCode": "0000562",
                            "ServiceName": "Xeco, Rams",
                            "OrderCode": "562"
                        }
                    ],
                    "ClientFeeInfo": {
                        "Comment": "LIST",
                        "Fee": "00002.45"
                    },
                    "PatientFeeInfo": {
                        "Comment": "LIST",
                        "EstFee": "101.40",
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
                                "EstFee": "562.00",
                                "Fee": "00042.90"
                            },
                            "ReasonCode": {},
                            "RemarkCode": {},
                            "ServiceCode": "0000156",
                            "ServiceName": "CHOLESTEROL, TOTAL",
                            "OrderCode": "156"
                        },
                        {
                            "ClientFeeInfo": {
                                "Comment": "LIST",
                                "Fee": "00002.00"
                            },
                            "Patient FeeInfo": {
                                "Comment": "LIST",
                                "EstFee": "349.45",
                                "Fee": "00042.90"
                            },
                            "ReasonCode": {},
                            "RemarkCode": {},
                            "ServiceCode": "0000176",
                            "ServiceName": "BP PANEL",
                            "OrderCode": "176"
                        },
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
                    "orderCode": "34392",
                    "serviceCode": "0034392",
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
                },
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
                    "orderCode": "6892",
                    "serviceCode": "0006892",
                    "frequencyLimit": "true",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "false",
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
                    "diagnosisDisplayIndicator": "false",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support",
                },
                {
                    "orderCode": "156",
                    "serviceCode": "0000156",
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
            ]
        },
        "elabs_response_token": "FE099D60-7ABB-11EF-860C-DA0262A0C8B5",
        "elabs_call_type": "Primary"
    },
    "message": "Response Generated"
}

export const PricingResponse9 = {
    "httpStatus": "OK",
    "responseData": {
        "elabs_response_id": 3385,
        "elabs_request_id": 608,
        "cdsHookId": "4be6d050-64da-11ef-b2a6-005056be447d",
        "elabs_response_payload": {
            "success": true,
            "performingSite": "STL",
            "client": "544800",
            "legalEntity": "STL",
            "thirdPartyFormsCode": "RMM",
            "insuranceCarrierName": "MEDICARE",
            "token": "3A213648-E982-11EF-8A74-DA0262A0C8B5",
            "pricingStatus": "enabled",
            "pricing": {
                "Chems": {
                    "ChemServiceCode": "0034714",
                    "ChemServiceName": "COMP METAB PNL",
                    "ChemPanel": [
                        {
                            "PanelCode": "0010231",
                            "PanelName": "COMP METAB PNL",
                            "OrderCode": "10231",
                            "ChemService": [
                                {
                                    "ServiceCode": "0000223",
                                    "ServiceName": "ALBUMIN",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000234",
                                    "ServiceName": "ALKALINE PHOSPHATASE",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000822",
                                    "ServiceName": "AST",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000823",
                                    "ServiceName": "ALT",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000287",
                                    "ServiceName": "BILIRUBIN, TOTAL",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000294",
                                    "ServiceName": "UREA NITROGEN (BUN)",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000303",
                                    "ServiceName": "CALCIUM",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000330",
                                    "ServiceName": "CHLORIDE",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000375",
                                    "ServiceName": "CREATININE",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000310",
                                    "ServiceName": "CARBON DIOXIDE",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000483",
                                    "ServiceName": "GLUCOSE, SERUM",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000733",
                                    "ServiceName": "POTASSIUM",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000754",
                                    "ServiceName": "PROTEIN, TOTAL",
                                    "OrderCode": null
                                },
                                {
                                    "ServiceCode": "0000836",
                                    "ServiceName": "SODIUM",
                                    "OrderCode": null
                                }
                            ]
                        }
                    ],
                    "ChemService": [],
                    "ClientFeeInfo": {
                        "Comment": "LIST       ",
                        "Fee": "00003.50"
                    },
                    "PatientFeeInfo": {
                        "Comment": "LIST",
                        "EstFee": "00000.00",
                        "Fee": "00100.75"
                    },
                    "ReasonCode": {},
                    "RemarkCode": {}
                },
                "NonChems": {
                    "Profile": [],
                    "Service": [
                        {
                            "ClientFeeInfo": {
                                "Comment": "LIST                ",
                                "Fee": "00009.00"
                            },
                            "PatientFeeInfo": {
                                "Comment": "LIST",
                                "EstFee": "00000.00",
                                "Fee": "00276.66"
                            },
                            "ReasonCode": {},
                            "RemarkCode": {},
                            "ServiceCode": "0017306",
                            "ServiceName": "VIT D,25-OH,TOTAL,IA",
                            "OrderCode": "17306"
                        },
                        {
                            "ClientFeeInfo": {
                                "Comment": "LIST                ",
                                "Fee": "00005.00"
                            },
                            "PatientFeeInfo": {
                                "Comment": "LIST",
                                "EstFee": "00000.00",
                                "Fee": "00169.86"
                            },
                            "ReasonCode": {},
                            "RemarkCode": {},
                            "ServiceCode": "0005363",
                            "ServiceName": "PSA, TOTAL",
                            "OrderCode": "5363"
                        }
                    ]
                },
                "ClientInfo": {
                    "BillToClientNbr": "00544800",
                    "ClientNbr": "00544800",
                    "Discount": "00",
                    "FeeSchedule": "37",
                    "GroupFlag": "P",
                    "LegalEnt": "STL",
                    "Name": "MERCY HOSPITAL ST LOUIS   "
                },
                "ClientOrderPriceTotal": "0000017.50 ",
                "PartialPatientOrderPrice": "",
                "PatientOrderPriceTotal": "0000547.27",
                "EstPatRespAmt": "00000.00",
                "EstPatRespMsg": "EasyPay estimate not available for ins or group",
                "EstPatRespMsgCd": "Z",
                "EstPatRespSource": "Quest",
                "FormCode": "RMM",
                "FormCodeProvName": "MEDICARE",
                "Function": "",
                "Error": "",
                "Message": "",
                "_Module": "",
                "PatientInfo": {
                    "Discount": "00",
                    "FeeSchedule": "37"
                },
                "PmtProcessType": " ",
                "Resp": "00000000",
                "Resp2": "00000000",
                "RespCode": "000",
                "Target": ""
            },
            "limitedCoverage": [
                {
                    "orderCode": "5363",
                    "serviceCode": "0005363",
                    "frequencyLimit": "false",
                    "frequencyAlertMessage": "This test has a prescribed frequency limitation under the Limited Coverage Policy.",
                    "coveredByDiagnosis": "true",
                    "policyURL": "https://www.questdiagnostics.com/content/dam/corporate/restricted/documents/mlcp/mlcp/national-guides/national-mlcp-190-31-prostate_specific_antigen/National---MLCP---190-31---Prostate-Specific-Antigen.pdf",
                    "commonSupportiveDiagnoses": [
                        {
                            "code": "Z125",
                            "description": "Encounter for screening for malignant neoplasm of prostate"
                        },
                        {
                            "code": "N400",
                            "description": "Benign prostatic hyperplasia without lower urinry tract symp"
                        },
                        {
                            "code": "R9720",
                            "description": "Elevated prostate specific antigen [PSA]"
                        },
                        {
                            "code": "C61",
                            "description": "Malignant neoplasm of prostate"
                        },
                        {
                            "code": "R351",
                            "description": "Nocturia"
                        },
                        {
                            "code": "N401",
                            "description": "Benign prostatic hyperplasia with lower urinary tract symp"
                        },
                        {
                            "code": "R350",
                            "description": "Frequency of micturition"
                        },
                        {
                            "code": "N419",
                            "description": "Inflammatory disease of prostate, unspecified"
                        },
                        {
                            "code": "N429",
                            "description": "Disorder of prostate, unspecified"
                        },
                        {
                            "code": "R3129",
                            "description": "Other microscopic hematuria"
                        },
                        {
                            "code": "R319",
                            "description": "Hematuria, unspecified"
                        },
                        {
                            "code": "Z8546",
                            "description": "Personal history of malignant neoplasm of prostate"
                        }
                    ],
                    "diagnosisDisplayIndicator": "true",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support the medical necessity of the test."
                },
                {
                    "orderCode": "17306",
                    "serviceCode": "0017306",
                    "frequencyLimit": "false",
                    "frequencyAlertMessage": "",
                    "coveredByDiagnosis": "true",
                    "policyURL": "https://www.questdiagnostics.com/content/dam/corporate/restricted/documents/mlcp/mlcp/j5-wps/j5_wps-mlcp-l34658-vitamin_d-25_hydroxy/J5-WPS---MLCP---L34658---Vitamin-D-25-Hydroxy.pdf",
                    "commonSupportiveDiagnoses": [
                        {
                            "code": "E559",
                            "description": "Vitamin D deficiency, unspecified"
                        },
                        {
                            "code": "N1830",
                            "description": "Chronic kidney disease, stage 3 unspecified"
                        },
                        {
                            "code": "N184",
                            "description": "Chronic kidney disease, stage 4 (severe)"
                        },
                        {
                            "code": "M810",
                            "description": "Age-related osteoporosis w/o current pathological fracture"
                        },
                        {
                            "code": "Z79899",
                            "description": "Other long term (current) drug therapy"
                        },
                        {
                            "code": "N1832",
                            "description": "Chronic kidney disease, stage 3b"
                        },
                        {
                            "code": "N1831",
                            "description": "Chronic kidney disease, stage 3a"
                        },
                        {
                            "code": "N2581",
                            "description": "Secondary hyperparathyroidism of renal origin"
                        },
                        {
                            "code": "E8352",
                            "description": "Hypercalcemia"
                        },
                        {
                            "code": "M8580",
                            "description": "Oth disrd of bone density and structure, unspecified site"
                        },
                        {
                            "code": "E210",
                            "description": "Primary hyperparathyroidism"
                        },
                        {
                            "code": "E8339",
                            "description": "Other disorders of phosphorus metabolism"
                        },
                        {
                            "code": "K760",
                            "description": "Fatty (change of) liver, not elsewhere classified"
                        },
                        {
                            "code": "E8351",
                            "description": "Hypocalcemia"
                        },
                        {
                            "code": "N185",
                            "description": "Chronic kidney disease, stage 5"
                        },
                        {
                            "code": "M3214",
                            "description": "Glomerular disease in systemic lupus erythematosus"
                        },
                        {
                            "code": "E892",
                            "description": "Postprocedural hypoparathyroidism"
                        },
                        {
                            "code": "Z9884",
                            "description": "Bariatric surgery status"
                        },
                        {
                            "code": "D134",
                            "description": "Benign neoplasm of liver"
                        },
                        {
                            "code": "D860",
                            "description": "Sarcoidosis of lung"
                        },
                        {
                            "code": "E200",
                            "description": "Idiopathic hypoparathyroidism"
                        },
                        {
                            "code": "E211",
                            "description": "Secondary hyperparathyroidism, not elsewhere classified"
                        },
                        {
                            "code": "E673",
                            "description": "Hypervitaminosis D"
                        },
                        {
                            "code": "E8330",
                            "description": "Disorder of phosphorus metabolism, unspecified"
                        },
                        {
                            "code": "K5090",
                            "description": "Crohns disease, unspecified, without complications"
                        },
                        {
                            "code": "K5190",
                            "description": "Ulcerative colitis, unspecified, without complications"
                        },
                        {
                            "code": "K7460",
                            "description": "Unspecified cirrhosis of liver"
                        },
                        {
                            "code": "K7581",
                            "description": "Nonalcoholic steatohepatitis (NASH)"
                        },
                        {
                            "code": "K9049",
                            "description": "Malabsorption due to intolerance, not elsewhere classified"
                        },
                        {
                            "code": "K912",
                            "description": "Postsurgical malabsorption, not elsewhere classified"
                        }
                    ],
                    "diagnosisDisplayIndicator": "true",
                    "coveredByDiagnosisMessage": "This test is only covered by specific diagnoses that support the medical necessity of the test."
                }
            ]
        },
        "elabs_response_token": "3A213648-E982-11EF-8A74-DA0262A0C8B5",
        "elabs_call_type": "Primary",
        "created_date": "2025-02-12T08:45:01.000+00:00"
    },
    "message": "Response Generated"
}

export const ServiceResponse9 = {
    "httpStatus": "OK",
    "responseData": {
        "resources_id": 8423,
        "cdsHookId": "4be6d050-64da-11ef-b2a6-005056be447d",
        "fhir_resource_id": "eop3o7jtcOP7pPKDMlrwa7i0Zt-qiJu0KUKgAjHkkZX7dJ0vqXYxnJPJ9fZJeWi06Pfx0h0CI.fEg8fz3wsneq7S8oecGpQcGePeeGs2dLahYyvb52Xxi3Xuh-bSgJP0Gq5mNbsiMx1uxpVOMP6U2d3PdnWKeFJSPILtdmjJxlsXsUaZtA9c8Wzwm0.ghaDLa3",
        "fhir_resource_type": "ServiceRequest",
        "ServiceRequest": [
            {
                "resourceType": "ServiceRequest",
                "id": "eop3o7jtcOP7pPKDMlrwa7iRrrALhtZ4Seifvp8w4Mci16mpRC.E89-1tvlyLVnpOnNQsqPFZ8JhTPKjM7Td77Nr.vMvBlzQ9SOj1fbTaxBfgJxvM7GPZ69vO6BOuTuBmPxzVKMw4GzCbLvq8cj02HD1MQTEmpkGYEMyq5RL.0iWAzpBZYfe6YyNRiawMihi33",
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
                            "code": "82306",
                            "display": "PR ASSAY OF VIT D,CALCIFEDIOL W FRACTIONS, IF PERFORMED"
                        },
                        {
                            "system": "http://open.epic.com/FHIR/StructureDefinition/cds-hooks-unsigned-order-procedure-mpi-id/25",
                            "code": "17306",
                            "display": null
                        }
                    ],
                    "text": "Vitamin D 25 hydroxy"
                },
                "quantityQuantity": {
                    "value": 1
                },
                "subject": {
                    "reference": "Patient/eXFljJT8WxVd2PjwvPAGR1A3",
                    "display": "Clin Doc, Henry"
                },
                "encounter": {
                    "reference": "Encounter/eruEuMi4aq83kprM-h4TP6A3",
                    "identifier": {
                        "use": "usual",
                        "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
                        "value": "34835"
                    },
                    "display": "Office Visit"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "boundsPeriod": {
                            "start": "2024-08-27T05:00:00Z"
                        },
                        "count": 1
                    }
                },
                "requester": {
                    "reference": "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
                    "display": "Physician Family Medicine, MD",
                    "type": "Practitioner"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "305058001",
                                "display": "Patient encounter status (finding)"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-9-cm",
                                "code": "V76.44",
                                "display": "Special screening for malignant neoplasm of prostate"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-10-cm",
                                "code": "Z12.5",
                                "display": "Special screening for malignant neoplasm of prostate"
                            }
                        ],
                        "text": "Special screening for malignant neoplasm of prostate"
                    }
                ],
                "reasonReference": [
                    {
                        "reference": "Condition/eg2Kc-T-luU-cG51UdBAOj.DzBDXRPMosR4DnHDTmtQHXECNZFS88-rO5EqpmQTxyn9lIicVSb66G.MS-Dl3MzQ3",
                        "display": "Special screening for malignant neoplasm of prostate",
                        "type": "Condition"
                    }
                ]
            },
            {
                "resourceType": "ServiceRequest",
                "id": "eop3o7jtcOP7pPKDMlrwa7uosg-Ox8L0N.61VKeeK0R2GKbwd6Pb8cVJeiNu87TBfNyqyVGIUjhCw9WS1C6vDZexnwXXDf8RJqtMEZhJPlHsneL2li41h89vdCkf3XRm0YSb3zOwnNPyQFp3GwLlLTfUrqsYq6qH5w29YHRpFeuz9BQicNeaAOj-w9UVRlX-S3",
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
                            "code": "84153",
                            "display": "PR PROSTATE SPECIFIC ANTIGEN,TOTAL"
                        },
                        {
                            "system": "http://open.epic.com/FHIR/StructureDefinition/cds-hooks-unsigned-order-procedure-mpi-id/25",
                            "code": "5363",
                            "display": null
                        }
                    ],
                    "text": "PSA, total and free"
                },
                "quantityQuantity": {
                    "value": 1
                },
                "subject": {
                    "reference": "Patient/eXFljJT8WxVd2PjwvPAGR1A3",
                    "display": "Clin Doc, Henry"
                },
                "encounter": {
                    "reference": "Encounter/eruEuMi4aq83kprM-h4TP6A3",
                    "identifier": {
                        "use": "usual",
                        "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
                        "value": "34835"
                    },
                    "display": "Office Visit"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "boundsPeriod": {
                            "start": "2024-08-27T05:00:00Z"
                        },
                        "count": 1
                    }
                },
                "requester": {
                    "reference": "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
                    "display": "Physician Family Medicine, MD",
                    "type": "Practitioner"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "243881001",
                                "display": "Special examination status (finding)"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-9-cm",
                                "code": "V70.3",
                                "display": "Routine sports physical exam"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-10-cm",
                                "code": "",
                                "display": "Routine sports physical exam"
                            }
                        ],
                        "text": "Routine sports physical exam"
                    }
                ],
                "reasonReference": [
                    {
                        "reference": "Condition/eg2Kc-T-luU-cG51UdBAOjz34T-1cQB7AxbVO3VUDSnaN1EZ7PRkEf.g91t7s8NM9l17GnLQQmAt94F9Pv0ghaQ3",
                        "display": "Routine sports physical exam",
                        "type": "Condition"
                    }
                ]
            },
            {
                "resourceType": "ServiceRequest",
                "id": "eop3o7jtcOP7pPKDMlrwa7i0Zt-qiJu0KUKgAjHkkZX7dJ0vqXYxnJPJ9fZJeWi06Pfx0h0CI.fEg8fz3wsneq7S8oecGpQcGePeeGs2dLahYyvb52Xxi3Xuh-bSgJP0Gq5mNbsiMx1uxpVOMP6U2d3PdnWKeFJSPILtdmjJxlsXsUaZtA9c8Wzwm0.ghaDLa3",
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
                            "code": "80053",
                            "display": "PR METABOLIC PANEL,COMPREHENSIVE"
                        },
                        {
                            "system": "http://open.epic.com/FHIR/StructureDefinition/cds-hooks-unsigned-order-procedure-mpi-id/25",
                            "code": "10231",
                            "display": null
                        }
                    ],
                    "text": "Comprehensive metabolic panel"
                },
                "quantityQuantity": {
                    "value": 1
                },
                "subject": {
                    "reference": "Patient/eXFljJT8WxVd2PjwvPAGR1A3",
                    "display": "Clin Doc, Henry"
                },
                "encounter": {
                    "reference": "Encounter/eruEuMi4aq83kprM-h4TP6A3",
                    "identifier": {
                        "use": "usual",
                        "system": "urn:oid:1.2.840.114350.1.13.0.1.7.3.698084.8",
                        "value": "34835"
                    },
                    "display": "Office Visit"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "boundsPeriod": {
                            "start": "2024-08-27T05:00:00Z"
                        },
                        "count": 1
                    }
                },
                "requester": {
                    "reference": "Practitioner/eM5CWtq15N0WJeuCet5bJlQ3",
                    "display": "Physician Family Medicine, MD",
                    "type": "Practitioner"
                },
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "243881001",
                                "display": "Special examination status (finding)"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-9-cm",
                                "code": "V70.3",
                                "display": "Routine sports physical exam"
                            },
                            {
                                "system": "http://hl7.org/fhir/sid/icd-10-cm",
                                "code": "",
                                "display": "Routine sports physical exam"
                            }
                        ],
                        "text": "Routine sports physical exam"
                    }
                ],
                "reasonReference": [
                    {
                        "reference": "Condition/eg2Kc-T-luU-cG51UdBAOjz34T-1cQB7AxbVO3VUDSnaN1EZ7PRkEf.g91t7s8NM9l17GnLQQmAt94F9Pv0ghaQ3",
                        "display": "Routine sports physical exam",
                        "type": "Condition"
                    }
                ]
            }
        ],
        "created_date": "2025-02-12T08:45:01.000+00:00"
    },
    "message": "Response Generated"
}