export const QuestionData = {
    "mimeType": "application/vnd.sunbird.question",
    "media": [],
    "editorState": {
        "options": {
            "left": [
                {
                    "value": {
                        "body": "<p>Red</p>",
                        "value": 0
                    }
                },
                {
                    "value": {
                        "body": "<p>Yellow</p>",
                        "value": 1
                    }
                },
                {
                    "value": {
                        "body": "<p>Green</p>",
                        "value": 2
                    }
                },
                {
                    "value": {
                        "body": "<p>Orange</p>",
                        "value": 3
                    }
                }
            ],
            "right": [
                {
                    "value": {
                        "body": "<p>Apple</p>",
                        "value": 0
                    }
                },
                {
                    "value": {
                        "body": "<p>Banana</p>",
                        "value": 1
                    }
                },
                {
                    "value": {
                        "body": "<p>Grapes</p>",
                        "value": 2
                    }
                },
                {
                    "value": {
                        "body": "<p>Orange</p>",
                        "value": 3
                    }
                }
            ]
        },
        "question": "<p>Match the colour with the fruits.</p>",
        "solutions": [
            {
                "id": "3fe0e600-9746-4673-81a9-3429af3fef41",
                "type": "html",
                "value": "<figure class=\"table\"><table><tbody><tr><td>Red</td><td>Apple</td></tr><tr><td>Yellow</td><td>Banana</td></tr><tr><td>Green</td><td>Grapes</td></tr><tr><td>Orange</td><td>Orange</td></tr></tbody></table></figure><p>In the solution we can use the feature of ckeditor so we can also add table as above. using table menu.<br>We can add solution as text + image / Video / Audi (Yet to come)</p>"
            }
        ]
    },
    "templateId": "mtf-horizontal",
    "complexityLevel": [],
    "maxScore": 1,
    "name": "MTF",
    "responseDeclaration": {
        "response1": {
            "cardinality": "multiple",
            "type": "map",
            "correctResponse": {
                "value": [
                    {
                        "0": 0
                    },
                    {
                        "1": 1
                    },
                    {
                        "2": 2
                    },
                    {
                        "3": 3
                    }
                ]
            },
            "mapping": [
                {
                    "value": {
                        "0": 0
                    },
                    "score": 0.25
                },
                {
                    "value": {
                        "1": 1
                    },
                    "score": 0.25
                },
                {
                    "value": {
                        "2": 2
                    },
                    "score": 0.25
                },
                {
                    "value": {
                        "3": 3
                    },
                    "score": 0.25
                }
            ]
        }
    },
    "outcomeDeclaration": {
        "maxScore": {
            "cardinality": "multiple",
            "type": "integer",
            "defaultValue": 1
        },
        "hint": {
            "cardinality": "single",
            "type": "string",
            "defaultValue": "098eacc6-07fd-45ba-9e3c-372042154cd3"
        }
    },
    "interactionTypes": [
        "match"
    ],
    "interactions": {
        "response1": {
            "type": "match",
            "options": {
                "left": [
                    {
                        "label": "<p>Red</p>",
                        "value": 0
                    },
                    {
                        "label": "<p>Yellow</p>",
                        "value": 1
                    },
                    {
                        "label": "<p>Green</p>",
                        "value": 2
                    },
                    {
                        "label": "<p>Orange</p>",
                        "value": 3
                    }
                ],
                "right": [
                    {
                        "label": "<p>Apple</p>",
                        "value": 0
                    },
                    {
                        "label": "<p>Banana</p>",
                        "value": 1
                    },
                    {
                        "label": "<p>Grapes</p>",
                        "value": 2
                    },
                    {
                        "label": "<p>Orange</p>",
                        "value": 3
                    }
                ]
            },
            "validation": {
                "required": "Yes"
            }
        }
    },
    "qType": "MTF",
    "primaryCategory": "Match The Following Question",
    "solutions": {
        "3fe0e600-9746-4673-81a9-3429af3fef41": "<figure class=\"table\"><table><tbody><tr><td>Red</td><td>Apple</td></tr><tr><td>Yellow</td><td>Banana</td></tr><tr><td>Green</td><td>Grapes</td></tr><tr><td>Orange</td><td>Orange</td></tr></tbody></table></figure><p>In the solution we can use the feature of ckeditor so we can also add table as above. using table menu.<br>We can add solution as text + image / Video / Audi (Yet to come)</p>"
    },
    "body": "<div class='question-body' tabindex='-1'><div class='mtf-title' tabindex='0'><p>Match the colour with the fruits.</p></div><div data-match-interaction='response1' class='mtf-horizontal'></div></div>",
    "answer": "<div class='match-container'><div class='left-options'><div class='left-option'><p>Red</p></div><div class='left-option'><p>Yellow</p></div><div class='left-option'><p>Green</p></div><div class='left-option'><p>Orange</p></div></div><div class='right-options'><div class='right-option'><p>Apple</p></div><div class='right-option'><p>Banana</p></div><div class='right-option'><p>Grapes</p></div><div class='right-option'><p>Orange</p></div></div></div>",
    "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
    "board": "CBSE",
    "medium": [
        "English"
    ],
    "gradeLevel": [
        "Class 4"
    ],
    "subject": [
        "Hindi"
    ],
    "author": "Test User",
    "channel": "01309282781705830427",
    "framework": "inquiry_k-12",
    "copyright": "NIT123",
    "audience": [
        "Student"
    ],
    "license": "CC BY 4.0"
}