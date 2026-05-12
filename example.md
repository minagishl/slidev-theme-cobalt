---
theme: ./
layout: cover
---

# Slidev Theme Cobalt

## A professional presentation theme

---
layout: title
---

# Presentation Title

Minagishl 2026.02.17

---
layout: title-center
---

# Presentation Title

Project - Minagishl

---
layout: title-sandwich
---

# Presentation Title

::top::
Project - Minagishl

::footer::
Date and other information

---
layout: toc
---

<Label>Table of Contents</Label>

1. Introduction
2. Main Content
3. Conclusion

---
layout: toc
activeIndex: 2
---

<Label>Table of Contents (2 columns)</Label>

1. Mission
2. Company Overview
3. Business Overview
4. Work Environment
5. Employee Voices
6. How We Work
7. Hiring Process
8. Contact

---
layout: section
---

# Section Title

---
layout: section-frame
---

# Section Title

---
layout: section-index
number: 1
---

# Section Title

---
layout: section-index
number: 2
---

# Another Section

---
layout: team
members:
  - name: Team Member 1
    img: https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80
  - name: Team Member 2
    img: https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80
  - name: Team Member 3
    img: https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80
---

---
layout: team-border
members:
  - name: Team Member 1
    img: https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80
  - name: Team Member 2
    img: https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80
  - name: Team Member 3
    img: https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80
---

---
layout: steps-layout
steps:
  - title: Understand the goal
    body: Clarify what problem you want to solve and what success looks like.
  - title: Gather requirements
    body: List constraints, stakeholders, and any technical or business requirements.
  - title: Design the solution
    body: Create a simple architecture or flow that explains how the solution will work.
  - title: Implement iteratively
    body: Build small pieces, verify them early, and adjust based on feedback.
---

---
layout: steps-layout
start: 5
steps:
  - title: Review and test
    body: Run automated tests and conduct peer reviews to catch issues before release.
  - title: Deploy and monitor
    body: Ship to production and watch metrics to ensure everything runs smoothly.
---

---
layout: process-flow
steps:
  - title: Planning
    description: Define project requirements and create a detailed plan
  - title: Development
    description: Build the solution according to specifications
  - title: Testing
    description: Verify functionality and ensure quality standards
  - title: Deployment
    description: Release to production and monitor performance
---

# Project Workflow

---
layout: table
---

| Plan  | Price per month | Storage | Support              |
| ----- | --------------- | ------- | -------------------- |
| Basic | $9              | 10 GB   | Community only       |
| Pro   | $29             | 100 GB  | Email + Chat         |
| Elite | $79             | 1 TB    | Priority 24/7 SLA    |
| Gold  | $139            | 2 TB    | Dedicated Manager    |
| Ultra | $249            | 5 TB    | VIP 24/7 White Glove |

---
layout: panel
color: black
align: left
---

## Table in Panel Layout

You can also use a standard Markdown table inside other layouts.

| Feature        | Basic     | Pro           |
| -------------- | --------- | ------------- |
| Max projects   | 3         | Unlimited     |
| Support        | Community | Priority      |
| Export formats | PDF only  | PDF, PPTX, MD |
| Custom domain  | -         | Available     |

---
layout: cols
---

::left::

## Left Column

Place any content in the left column: lists, paragraphs, or headings.

- First point
- Second point
- Third point

::right::

## Right Column

The right column has equal width. Use this layout to compare ideas or show two related sections side by side.

---
layout: cols
cols: 3
---

::left::

## Left Column

Content for the left column.

- First point
- Second point

::middle::

## Middle Column

Content for the middle column.

- Third point
- Fourth point

::right::

## Right Column

Content for the right column.

- Fifth point
- Sixth point

---
layout: quote
color: blue
---

This theme made our presentations look professional and consistent. We use it for every client pitch.

::source::
**Jane Doe**, Head of Design

---
layout: quote
color: black
---

Simple to customize, great typography, and the framed layouts really stand out in the room.

::source::
**Alex Chen**, Engineering Lead

---
layout: panel
color: black
align: left
---

# Checkboxes

You can create read-only checkboxes using Markdown task list syntax.

- [ ] This item is not completed
- [x] This item is completed

Note that checkboxes are styled by the theme and cannot be toggled during the presentation.

---
layout: panel
color: blue
---

A short quote or statement

---
layout: panel
color: black
---

Another quote or statement

---
layout: panel
color: black
align: left
---

# Why Open Source Matters

## Community Driven

Building together creates stronger, more resilient software that everyone can rely on.

## Transparency

Open code means open review — bugs get caught faster and trust is built over time.

## Innovation

Ideas from around the world merge into solutions no single team could have created alone.

---
layout: profile
---

::name::

# Minagishl

::default::

<Label>Table of Contents - About</Label>

Student Developer based in Japan\
Currently participating in OSS projects

I am actively working on OSS projects and my own apps,\
engaging in various engineering activities

---
layout: profile
---

::name::

# Minagishl

::default::

<Label>Table of Contents - About</Label>

1. What I do\
   Web development, game design, and building custom PCs

2. Technologies\
   Mainly React, Next.js, and Laravel\
   Also learning Swift

---
layout: frame-panel
color: blue
---

<Label>Table of Contents</Label>

A short quote or statement

---
layout: panel
color: blue
align: left
---

Left-aligned quote

---
layout: panel
color: blue
align: right
---

Right-aligned quote

---
layout: frame-panel
color: blue
align: left
---

<Label>Alignment Example</Label>

Left-aligned content

---
layout: frame-panel
color: blue
align: right
---

<Label>Alignment Example</Label>

Right-aligned content

---
layout: section
---

# Label Component

---
layout: panel
color: black
align: left
---

<Label>Top Left (default)</Label>
<Label position="top-right">Top Right</Label>
<Label position="bottom-left">Bottom Left</Label>
<Label position="bottom-right">Bottom Right</Label>

Use `<Label>` to place a label in any corner of the slide.

The `position` prop accepts `top-left` (default), `top-right`, `bottom-left`, or `bottom-right`.

---
layout: frame-panel
color: blue
---

<Label position="top-right">Top Right Label</Label>

Label component works on any layout — not just panel or profile.

---
layout: panel
color: black
align: left
---

<Note>Bottom Left (default)</Note>
<Note position="bottom-right">Bottom Right</Note>
<Note position="top-left">Top Left</Note>
<Note position="top-right">Top Right</Note>

Use `<Note>` for small, muted annotation text in any corner.

The `position` prop works the same as `<Label>`. Default is `bottom-left`.

---
layout: panel
color: black
align: left
---

<PageNumber />

Use `<PageNumber />` to show the current page number. Built on top of `<Label>`.

Add `showTotal` to also display the total number of slides.

---
layout: panel
color: black
align: left
---

<PageNumber :showTotal="true" position="bottom-right" />

With `:showTotal="true"`, the format becomes `current / total`.

The `position` prop works the same as `<Label>`. Default is `bottom-right`.

---
layout: section
---

# Q&A Component

---
layout: panel
align: left
---

<Label>Q&A Example</Label>

<QA question="What is the QA component?">
  A component for showing question-and-answer pairs on a slide. Use the <code>question</code> prop for the question and the default slot for the answer.
</QA>

<QA question="Can I place multiple QA items on one slide?">
  Yes — stack multiple <code>&lt;QA&gt;</code> components. A gap is automatically added between them.
</QA>

---
layout: frame-panel
color: blue
---

<Label>Single Q&A</Label>

<QA question="Where can I use this component?">
  In any layout — panel, frame-panel, cols, or any other frame-based layout.
</QA>

---
layout: image-left
image: https://images.unsplash.com/photo-1536590158209-e9d615d525e4?auto=format&fit=crop
alt: Cat
---

## Left-Right Layout Example

Place an image on the left and text on the right.

- Bullet points are supported
- Add headings and paragraphs as you like

---
layout: image-right
image: https://images.unsplash.com/photo-1549545931-59bf067af9ab?auto=format&fit=crop
alt: Cat
---

## Image on the Right

With the `image-right` layout, the image is on the right and the text on the left.

---
layout: image-left
image: https://images.unsplash.com/photo-1758482725144-3363d2d350be?auto=format&fit=crop
alt: Cat
label: Photo label
---

## Image Label

To display a label at the bottom of an image, add `label` to the front matter of either the `image-left` or `image-right` layout.

---
layout: section
---

# Stats

---
layout: stats
stats:
  - value: '98%'
    label: Uptime
    description: Last 12 months
  - value: '2M'
    label: Active Users
    description: Monthly active
  - value: '$50M'
    label: Revenue
    description: FY 2025
---

# Key Metrics

---
layout: stats
stats:
  - value: '12k'
    label: Commits
  - value: '340'
    label: Contributors
  - value: '4.9'
    label: Avg Rating
  - value: '99%'
    label: Test Coverage
---

---
layout: section
---

# Timeline

---
layout: timeline
events:
  - date: '2020'
    title: Founded
    description: Company established in Tokyo
  - date: '2021'
    title: Series A
    description: Raised $5M in funding
  - date: '2022'
    title: Launch
    description: Product released globally
  - date: '2023'
    title: 1M Users
    description: Reached first million
  - date: '2024'
    title: Series B
    description: Raised $20M
---

# Company History

---
layout: section
---

# Image Full

---
layout: image-full
image: https://images.unsplash.com/photo-1522856339183-9a8b06b05937?auto=format&fit=crop&w=1200&q=80
alt: Background
---

---
layout: image-full
image: https://images.unsplash.com/photo-1567484072688-2041f76a3fda?auto=format&fit=crop&w=1200&q=80
alt: Background
color: white
---

---
layout: image-full
image: https://images.unsplash.com/photo-1548811595-624255ed9e72?auto=format&fit=crop&w=1200&q=80
alt: Background
dim: true
---

# Full-Bleed Image

Use `dim: true` to add a dark overlay for text readability.

Set `color` to `blue` (default) or `white` to switch the frame color.

---
layout: section
---

# Comparison

---
layout: comparison
leftTitle: Before
rightTitle: After
---

::left::

- Manual deployment
- Weekly releases
- No monitoring
- High error rate
- Hours to rollback

::right::

- Automated CI/CD
- Daily releases
- Real-time alerts
- 99.9% uptime
- One-click rollback

---
layout: comparison
leftTitle: Monolith
rightTitle: Microservices
---

::left::

## Architecture

Single deployable unit with all features bundled together.

## Scaling

Scale the entire application even for one bottleneck.

::right::

## Architecture

Independent services each owning their own data and logic.

## Scaling

Scale only the services that need more capacity.

---
layout: section
---

# Cards

---
layout: cards
cards:
  - title: Fast
    description: Built for performance with minimal runtime overhead.
  - title: Flexible
    description: Compose layouts and components to fit any presentation.
  - title: Themed
    description: Consistent typography, colors, and spacing across slides.
---

# Why this theme

---
layout: cards
cards:
  - title: Plan
    description: Define the scope and the audience for the deck.
  - title: Draft
    description: Outline each section before polishing any single slide.
  - title: Design
    description: Use layouts and components to keep visuals consistent.
  - title: Deliver
    description: Rehearse the timing and prepare for live questions.
---

# Workshop Steps

---
layout: cards
columns: 2
cards:
  - title: Engineering
    description: Builds and ships the product, owns reliability and scale.
  - title: Design
    description: Shapes the experience, from research to high-fidelity UI.
---

# Teams at a glance

---
layout: section
---

# Code Blocks

---
layout: panel
color: black
align: left
---

## Code Blocks & Inline Code

Fenced code blocks use the standard dark background.

```ts
function greet(name: string): string {
  return `Hello, ${name}!`
}

console.log(greet('World'))
```

Inline `code` uses a gray background by default.
Use `<Underline>text</Underline>` to apply a blue underline: <Underline>underlined code</Underline>

---
layout: section
---

# Blockquotes

---
layout: panel
color: black
align: left
---

## Blockquote styling

Use standard Markdown blockquotes to call out important statements.

> Great design is not just what it looks like and feels like. Design is how it works.
>
> — Steve Jobs

You can also mix blockquotes with other text on the same slide.

---
layout: section
---

# Badges

---
layout: panel
color: black
align: left
---

## Badge component

Use `<Badge>` for short inline labels such as release status, experimental features, or emphasis next to body text.

<Badge>New</Badge> <Badge variant="soft">Beta</Badge> <Badge variant="outline">Draft</Badge>

This release is <Badge>stable</Badge> — mix badges freely with paragraphs and headings.

---
layout: section
---

# Note Blocks

---
layout: panel
color: black
align: left
---

## NoteBlock component

Use the `NoteBlock` component to create emphasized note blocks without writing raw HTML divs.

<NoteBlock type="info">
Information
This is an informational note. The second line is optional.
</NoteBlock>

<NoteBlock type="warn">
Warning
Please pay attention to this point.
</NoteBlock>

<NoteBlock type="alert">
Alert
Do not perform this action.
</NoteBlock>

---
layout: section
---

# Fact rows

---
layout: panel
color: black
align: left
---

## FactRow component

Use `<FactRow>` for release metadata, API fields, or any label–value pairs. Stack several rows; spacing and dividers are handled by the theme.

<FactRow label="Theme">Slidev Theme Cobalt</FactRow>
<FactRow label="Package">
`slidev-theme-cobalt` on npm
</FactRow>
<FactRow label="Repository">
[GitHub](https://github.com/minagishl/slidev-theme-cobalt)
</FactRow>

---
layout: panel
color: black
align: left
---

## Short spec sheet

<FactRow label="Runtime">Node 18+</FactRow>
<FactRow label="Package manager">npm, pnpm, yarn, or Bun</FactRow>
<FactRow label="Fonts">Inter Variable, Noto Sans JP Variable</FactRow>

---
layout: section
---

# Keyboard Keys

---
layout: panel
color: black
align: left
---

## Kbd component

Use `<Kbd>` to display keyboard keys inline. Combine multiple keys to show shortcuts. Pass an `icon` prop to render a lucide icon (`command`, `arrow-up`, `arrow-down`, `arrow-left`, `arrow-right`).

Open the command palette with <Kbd icon="command" /> + <Kbd>K</Kbd>.

Save the current file using <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>.

Navigate slides with <Kbd icon="arrow-left" /> and <Kbd icon="arrow-right" />, or move down with <Kbd icon="arrow-down" />.

The default cursor is a pointer and hovering plays a subtle press animation. Pass `no-hover` for decorative keys that should stay still: <Kbd no-hover>Esc</Kbd>.

Each key sits centered on the text line, so multiple lines of shortcuts stack cleanly without overlapping.

---
layout: section
---

# About This Theme

This presentation uses **Slidev Theme Cobalt** by [minagishl](https://github.com/minagishl). It is licensed under MIT. We would be happy if you could credit the theme name and developer somewhere in your slides.

---
layout: panel
heading: License
---

**Copyright (c) 2026 Minagishl**

This theme is provided under the MIT License.
