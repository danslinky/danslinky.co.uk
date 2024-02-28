## Project Documentation

``` mermaid
classDiagram
  Slinky <|-- Government
  Website <|-- Recruiter:visiting
  Role <--> Recruiter:has
  Slinky <--> Website:is building
  Slinky : +String name
  Slinky : +String phoneNumber
  Slinky : +String emailAddress
  Slinky: +acquireDoorPass()
  Address "" <-- "" Slinky:lives at
  class Government{
    +int passportNumber
    +int universalCreditNumber
    +int preferredSalary
    +isEligibleToWork()
    +getResume()
  }
  class Website {
    +String url
  }
  class www{
    +String html
  }
  class rtfm{
    +Markdown resume
  }
  class Cloudflare{ }
  class GitHub{ }
  Cloudflare "D" <-- "A" rtfm:hosts
  GitHub "N" <-- "S" www:hosts
  Website "L" <-- "I" www
  Website "K" <-- "Y" rtfm
  class Recruiter{
    +getRole()
    -validate()
    +outputAsInterview()
  }
  class Role{
    +String role
    +String employer
    +String description
    +bigInt salary
    -validate()
    +outputAsConversation()
  }
  class Resume{
    +String pitch
    +String skills
    +Blob   experience
    +String hobbies
    -validate()
    +outputAsMarkdown()
  }
  class Address{
    +String street
    +String city
    +String state
    +int postalCode
    +String country
    -validate()
    +outputAsLabel()  
  }
```

## Friends

 1. [Tom](https://en.wikipedia.org/wiki/Tom_Anderson)
 