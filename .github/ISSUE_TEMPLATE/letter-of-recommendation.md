---
name: Letter of Recommendation
about: Kudos to Dan Slinky
title: "[KUDOS]"
labels: ''
assignees: danslinky
labels:
- endorsement
body:
- type: input
  id: title
  attributes:
    label: Title
    description: "Please enter a title for your letter of recommendation"
    placeholder: "Dan Slinky is the absolute worst colleague I have ever worked with..."
  validations:
    required: true
- type: textarea
  id: letter
  attributes:
    label: Letter of Recommendation
    description: "Please say nice things about Dan Slinky"
    value: |
      x.
      y.
      z.
      ...
    render: bash
  validations:
    required: true
---

Thank you for your support. Please leave your letter of recommendation below.
