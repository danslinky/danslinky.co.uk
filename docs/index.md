# hello, friend

Welcome to my personal extranet which I've built using the mkdocs + material.

<div class="grid" markdown>

!!! note "#opentowork"
  I'm currently actively seeking a new __remote__ or <small>hybrid</small> role, with the possibility of relocation if the opportunity offers breathtaking mountain views and a stellar canteen. I'm currently rooted in the ~~EU~~:flag_gb::fire:, where my [home office](https://github.com/danslinky/danslinky.co.uk/issues/2) exudes professionalism, contrasting with the casual flair of my [social media](/about) presence.
  { .card }
  
  - [View my Resume](/resumes/markdown){ .md-button .md-button--primary }
  - [Schedule a call](https://cal.com/danslinky){ .md-button .md-button--primary }
  {.card}
</div>

## Current Project Diagram

The active project currently looks something like this:

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
 