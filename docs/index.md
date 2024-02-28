# Dan Slinky

<!-- Google Calendar Appointment Scheduling begin -->
<link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
<script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
<script>
(function() {
  var target = document.currentScript;
  window.addEventListener('load', function() {
    calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1CU6QK1zSaMH8uRUsEPELEWo4MQJ2ejhrmYNnKkLwstJTVePr6LTEKqNmRWSVYEjRhzrFwWefA?gv=true',
      color: '#039BE5',
      label: 'Book an appointment',
      target,
    });
  });
})();
</script>
<!-- end Google Calendar Appointment Scheduling -->

<details>
<summary>Backup Appointment Scheduling</summary>
You can use the <a href="https://cal.com/danslinky/">Backup Appointment Scheduling system</a> if Google has killed another product.
</details>

## Project Documentation

The project currently looks something like this.

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
 