const ActionGroups = {
    "1": {
        "actions": {
            "Workup": {
                "Suggestion": [

                    {
                        "title": "H&P (and repeat clinical exam if needed)",
                        "classes": ["ME-2"]

                    }


                ],

                "Consideration": [

                    {
                        "title": "Imaging/labs",
                        "notes": ["Targeted workup if signs/symptoms of possible metastasis"],
                        "classes": ["ME-2; ME-D"]

                    },

                    {
                        "title": "Nodal basin ultrasound",
                        "notes": ["Consider if equivocal physical exam"],
                        "classes": ["ME-D"]

                    }


                ],

                "Not Recommended": [

                    {
                        "title": "Sentinel lymph node biopsy (SLNB)",
                        "notes": ["Risk of positive node <5%"],
                        "classes": ["ME-2"]

                    }


                ]


            },

            "Treatment": {
                "Suggestion": [

                    {
                        "title": "Wide local excision (to fascia)",
                        "notes": ["0.5 - 1cm margins (consider larger margins for larger/poorly defined MIS)"],
                        "classes": ["ME-E"]

                    }


                ],

                "Consideration": [

                    {
                        "title": "Mohs micrographic surgery",
                        "notes": ["Consider if anatomic location prevents standard margins"],
                        "classes": ["ME-E"]

                    }


                ],

                "Not Recommended": [

                    {
                        "title": "Systemic therapy"

                    }


                ]


            },

            "Follow Up": {
                "Suggestion": [

                    {
                        "title": "History and physical at least annually",
                        "classes": ["ME-11"]

                    },

                    {
                        "title": "Full skin exam",
                        "notes": ["Every 4mo for 2 years", "Every 6mo for years 3-5"],
                        "classes": ["ME-11"]

                    },

                    {
                        "title": "Patient education",
                        "notes": ["Sun safety", "Skin and lymph node self-examination"],
                        "classes": ["ME-12"]

                    }


                ],

                "Consideration": [

                    {
                        "title": "Genetic testing",
                        "notes": ["Consider if: personal history of 3+ invasive cutaneous melanomas, or if mix of invasive melanoma, astrocytoma, and/or pancreatic cancer in patient or family"],
                        "classes": ["ME-A"]

                    }


                ],

                "Not Recommended": [

                    {
                        "title": "Routine imaging/labs to screen for asymptomatic recurrence/metastases",
                        "notes": ["Targeted workup if signs/symptoms of possible metastasis"],
                        "classes": ["ME-9"]

                    }


                ]

            }
        }
    },

    "2": {
        "actions": {
            "Workup": {
                "Suggestion": [

                    {
                        "title": "H&P (and repeat clinical exam if needed)",
                        "classes": ["ME-2"]

                    }


                ],

                "Consideration": [

                    {
                        "title": "Imaging/labs",
                        "notes": ["Targeted workup if signs/symptoms of possible metastasis"],
                        "classes": ["ME-2; ME-D"]

                    },

                    {
                        "title": "Nodal basin ultrasound",
                        "notes": ["Consider if equivocal physical exam"],
                        "classes": ["ME-D"]

                    }


                ],

                "Not Recommended": [

                    {
                        "title": "Sentinel lymph node biopsy (SLNB)",
                        "notes": ["Risk of positive node <5%"],
                        "classes": ["ME-2"]

                    }


                ]


            },

            "Treatment": {
                "Suggestion": [

                    {
                        "title": "Wide local excision (to fascia)",
                        "notes": ["1cm margins", "Local recurrence rate ~3%"],
                        "classes": ["ME-E"]

                    }


                ],

                "Consideration": [

                    {
                        "title": "Mohs micrographic surgery",
                        "notes": ["Consider if anatomic location prevents standard margins"],
                        "classes": ["ME-E"]

                    },

                    {
                        "title": "Adjuvant radiation",
                        "notes": ["Consider for select high-risk desmoplastic melanomas"],
                        "classes": ["ME-H"]

                    }


                ],

                "Not Recommended": [

                    {
                        "title": "Systemic therapy"

                    }


                ]


            },

            "Follow Up": {
                "Suggestion": [

                    {
                        "title": "History and physical at least annually",
                        "classes": ["ME-11"]

                    },

                    {
                        "title": "Full skin exam",
                        "notes": ["Every 4mo for 2 years", "Every 6mo for years 3-5"],
                        "classes": ["ME-11"]

                    },

                    {
                        "title": "Patient education",
                        "notes": ["Sun safety", "Skin and lymph node self-examination"],
                        "classes": ["ME-12"]

                    }


                ],

                "Consideration": [

                    {
                        "title": "Genetic testing",
                        "notes": ["Consider if: personal history of 3+ invasive cutaneous melanomas, or if mix of invasive melanoma, astrocytoma, and/or pancreatic cancer in patient or famil"],
                        "classes": ["ME-A"]

                    }


                ],

                "Not Recommended": [

                    {
                        "title": "Routine imaging/labs to screen for asymptomatic recurrence/metastases",
                        "notes": ["Targeted workup if signs/symptoms of possible metastasis"],
                        "classes": ["ME-9"]

                    }


                ]

            }
        }
    },

    "3": {
        "actions": {
            "Workup": {
                "Suggestion": [

                    {
                        "title": "H&P (and repeat clinical exam if needed)",
                        "classes": ["ME-2"]

                    }


                ],

                "Consideration": [

                    {
                        "title": "Imaging/labs",
                        "notes": ["Targeted workup if signs/symptoms of possible metastasis"],
                        "classes": ["ME-2; ME-D"]

                    },

                    {
                        "title": "Sentinel lymph node biopsy (SLNB)",
                        "notes": ["Consider and discuss with patient "],
                        "classes": ["ME-2"]

                    }


                ]


            },

            "Treatment": {
                "Suggestion": [


                ],

                "Consideration": [

                    {
                        "title": "Wide local excision (to fascia)",
                        "notes": ["1cm margins", "Local recurrence rate ~3%"]

                    },

                    {
                        "title": "Wide local excision (to fascia) + SLNB",
                        "notes": ["1cm margins"]

                    }


                ]

            }
        }
    }

}

export default ActionGroups;