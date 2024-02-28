# resume.json

<a href="resume.json">
{<input type=button value=raw>}:t_rex:
</a>

```json hl_lines="2-3 9-10 12"
{
    "firstname":"Dan",
    "surname":"Slinky",
    "dob":"[redacted]",
    "email":"sysadmin@danslinky.co.uk",
    "statement":"I'm really good at creating Resumes.", 
    "career": [
        {
            "employer":"W.W.W Techtronics",
            "role":"sysadmin", # (1)
            "from":"2023",
            "to": "present",
            "duties": ["mkdocs","markdown","hiring"]
        },
        {
            "employer": "adarga",
            "from": "2017",
            "to": "2023",
            "role":"Platform Engineer",
            "duties": ["kubernetes","terraform","helm"],
            "highlights": [
                "I received an Certificate for Innovation",
                "Gained qualifications in AWS Cost Explorer and AWS Billing Console",
                "Trained in Adobe Creative Cloud" # (2)
            ]
        },
        {
            "employer": "CERN",
            "role": "Technical Student",
            "from":"2007",
            "to": "2008",
            "duties":["linux","pxe","kickstart"],
            "highlights": [
                "Met my future wife",
                "Lobbied the British Government",
                "Spoke some mal French" # (3)
            ]
        }
    ],
    "education":[
        {"subject": "BA (Honest) Information Systems Analysis", "institute": "UWE, Bristol"},
        {"subject": "BTEC IT Practitioner", "institute": "UWE, Bristol"}
    ],
    "hobbies": [
        "cycling",
        "baking",
        "reading",
        "hacking"
    ],
    "single": true
}
```

1. Worst job ever!
2. I can make a good all hands presentation
3. I also drank a lot of coffee

###### notes

`//yakworks/docmark/extensions/codehilite`

<!-- sad face -->
``` title=".testtxt"
--8<-- ".testtxt"
```

    #!python
    import resume

try backticks

``` json hl_lines="2"
{
    ["code"]
}
```