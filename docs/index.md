## Project Documentation

``` mermaid
classDiagram
  Slinky <|-- Government:is helping
  Website <|-- Recruiter:is visiting
  Role <--> Recruiter:might have
  Slinky <--> Website:is building
  Slinky : +String name
  Slinky : +String phoneNumber
  Slinky : +String emailAlias
  Slinky : +String domain
  Slinky: +acquireDoorPass()
  Address "" <-- "" Slinky:lives at
  Resume "" <-- "" Slinky:has a
  class Government{
    +int passportNumber
    +int universalCreditNumber
    +int preferredSalary
    +isEligibleToWork()
    +getResume()
  }
  class Website {
    +String subdomain
    +Markdown resume
    -validate()
    +outputAsHTML()
  }
  class www{
    +String html
  }
  class rtfm{
    +String resume
  }
  class Cloudflare{ }
  class GitHub{ }

  rtfm "" <-- "" Cloudflare:CI/CD
  www "" <-- "" GitHub:GitOps
  
  Website "H" <-- "T" www
  Website "T" <-- "P" rtfm
  
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
 