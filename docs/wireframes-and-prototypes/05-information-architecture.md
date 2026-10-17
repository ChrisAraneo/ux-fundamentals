# Information architecture

## What is information architecture?

**Information architecture (IA)** is the way content is organized in a product, so that users understand where they are and where to find what they need. You met the term in [Chapter 1](../foundations/10-prototype-and-test). When people find a product easy to use, it's rarely luck. It's usually the result of good IA.

Think of IA as a **map** of your product. To create a good map, use several sources: user research, your knowledge of users' goals and behaviors, and the way similar products are structured.

## The three parts of IA

1. **Organization** - how pieces of content relate to one another.
2. **Hierarchy** - the order from general to specific, often called a "tree structure". Broad categories sit at the top, more specific ones below them, and items of equal importance sit side by side on the same level.
3. **Sequence** - the order in which users move through the content to complete a task, step by step.

## Why IA matters

Good information architecture:

- **Defines the overall structure** - it organizes the whole app or website.
- **Gives a high-level view** - it shows how all the parts of a product fit together, which you need to understand before designing screens.
- **Helps stakeholders review designs** - they can check whether the right content is in the right place to meet business goals.
- **Helps engineers** - they can organize data in a way that matches the design.
- **Allows growth** - a flexible structure leaves room for new categories later.
- **Leads to clearer wireframes** - when you know how screens connect, drawing them becomes much easier.

## Sitemaps

A **sitemap** is a diagram of a product's information architecture. It's drawn with rectangles connected by lines:

- **The top rectangle** - the home page or home screen, where most users start.
- **The row below** - the main sections, each connected to the home page.
- **The columns under each section** - the sub-pages of that section.

The relationship between a page and the pages below it is often called a **parent and child** relationship. Pages on the same level are **peers**.

### Example: the WashSlot sitemap

```
Home (live machine status)
├── Book a slot
│   ├── Choose machine and time
│   ├── Summary
│   └── Confirmation
├── My bookings
│   ├── Upcoming bookings
│   └── Past bookings
├── Report a problem
└── Settings
    ├── Notifications (vibration and light alerts)
    ├── Language
    ├── Text size
    └── House rules
```

"Book a slot" is a parent of "Choose machine and time", and "Book a slot", "My bookings", "Report a problem", and "Settings" are peers.

### Web apps vs. mobile apps

For a website or web app, the sitemap usually starts with the home page or a welcome page, followed by the other main sections and their sub-pages. For example, a welcome page might have child pages for "Log in", "Create account", and "Continue with an existing account".

Mobile apps follow the same logic, but usually with **fewer categories**, because small screens can't show many options at once. Common top-level sections in apps include Home, the main features, Profile or Settings, and Help.

Small screens bring three extra challenges for mobile IA:

1. **Focus on what's essential** - keep the most important content and move or remove the rest.
2. **Plan touch targets** - buttons and links must be large enough and far enough apart to tap easily.
3. **Keep text readable** - text must be large enough to read comfortably on a small screen.

## Eight principles of information architecture

The information architect Dan Brown described eight principles that help designers make decisions about structure. In short:

1. **Objects** - treat content as something alive that has its own life cycle and changes over time.
2. **Choices** - offer fewer, well-organized options instead of many; too many choices overwhelm people.
3. **Disclosure** - show just enough information to help people understand what they'll find if they go deeper, and reveal the rest step by step.
4. **Exemplars** - explain categories by showing examples of what's inside them.
5. **Front doors** - assume that many users will not enter through the home page, for example when they arrive from a search engine, so every page must help them orient themselves.
6. **Multiple classification** - offer several ways to find the same content, because people search in different ways.
7. **Focused navigation** - don't mix different kinds of navigation in one menu; each menu should have a clear purpose.
8. **Growth** - expect the amount of content to grow, and design a structure that can handle it.

Remember that the purpose of your product and the needs of its users should guide every structural decision.

::: tip Key takeaway
Information architecture organizes content so users know where they are and where to find things. It consists of organization, hierarchy, and sequence, and it is usually drawn as a sitemap. Good IA makes products easier to use, helps the whole team, and leads to clearer wireframes.
:::
