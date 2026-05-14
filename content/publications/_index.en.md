---
title: Publications
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

cascade:
  - target:
      path: '{/publications/*/**}'
    type: docs
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: papers
    content:
      title: Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
      columns: 1
---
