const StagingActionGroups = {
    "1": {
        "actions": {
            "Workup": {
                "Suggestion": [
                    {
                        "title": "History & Physical",
                        "notes": ["Repeat clinical exam if needed"],
                        "classes": ["ME-3"]
                    }
                ],
                "Consideration": [
                    {
                        "title": "Routine imaging/labs",
                        "notes": ["Repeat clinical exam if needed"],
                        "classes": ["ME-3", "ME-D"]
                    }
                ]             
            },
            "Treatment": {
                "Suggestion": [
                    {
                        "title": "Wide excision",
                        "notes": ["1-2cm margins"],
                        "classes": ["ME-3", "ME-E"]
                    }
                ]
            }
        }
    }
}

export default StagingActionGroups;