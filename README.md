# UX Fundamentals

Comprehensive guide to website UX fundamentals for beginners, built with [VitePress](https://vitepress.dev) and available in **English** and **Polish**.

## Chapters

- **Chapter 1: Foundations of UX design** (`docs/foundations/`): what UX is, roles in UX, the product development life cycle, user-centered and inclusive design, assistive technology, platforms, design thinking, design sprints, UX research, and bias in research
- **Chapter 2: The UX design process** (`docs/design-process/`): UX portfolios, empathy, user interviews, empathy maps, pain points, personas, user stories and edge cases, user journey maps, accessibility in research, problem and hypothesis statements, value propositions, human factors, ideation, goal statements, competitive audits, How might we, and Crazy Eights
- **Chapter 3: Wireframes and low-fidelity prototypes** (`docs/wireframes-and-prototypes/`): prototypes, user flows, storyboards, fidelity, wireframes, information architecture and sitemaps, paper and digital wireframes, Gestalt principles, paper and Figma prototypes, bias in design, deceptive patterns, and ethical and inclusive design
- **Chapter 4: UX research and usability testing** (`docs/research-and-testing/`): research studies, inclusive research language, research plans, KPIs, methodology and participants, scripts, privacy and ethics, moderated and unmoderated usability studies, bias, note-taking, affinity diagrams and insights, presenting research, and iterating on designs
- **Chapter 5: High-fidelity designs and prototypes** (`docs/high-fidelity-design/`): mockups, typography, color and accessible color, icons and images, links, buttons, and inputs, layout grids, containment and negative space, common screens and navigation, visual design principles, more Gestalt principles, design systems, sticker sheets and components, high-fidelity prototypes, gestures, motion, and sound, testing and iterating, and handoff and case studies
- **Chapter 6: Responsive websites** (`docs/responsive-websites/`): responsive web design, web apps vs. dedicated apps, website structures, sitemaps, homepage layouts, paper and digital wireframes for several screen sizes, breakpoints, components for small screens, accessible wireframes, low- and high-fidelity website prototypes, mockups, web accessibility, design critiques, working with developers, a second case study, UX jobs, and resumes

Older guides waiting to be reworked into chapters (in `__old/`):

- **Responsive design**: learn about responsive web design, breakpoints, and designing for multiple devices
- **Information architecture**: understand how to organize content effectively
- **Website structures**: explore hierarchical, sequential, matrix, and database models
- **Sitemaps**: create and use sitemaps for planning website architecture
- **Homepage layouts**: discover different layout patterns and when to use them
- **Wireframes**: learn wireframing techniques for both paper and digital
- **Common components**: understand key UI components like headings, cards, carousels, and CTAs
- **Gestalt principles**: apply visual perception principles to design
- **Prototyping**: build low- and high-fidelity prototypes for testing
- **Mockups & visual design**: create high-fidelity designs with proper visual hierarchy
- **Accessibility**: make designs usable for people with disabilities
- **Critique sessions**: give and receive useful design feedback

## Development

Requires Node.js 18 or newer.

```sh
npm install
npm run docs:dev      # start the dev server at http://localhost:5173
npm run docs:build    # build the static site into docs/.vitepress/dist
npm run docs:preview  # preview the production build
```

## Deployment

The site is deployed to [Netlify](https://www.netlify.com). The build settings live in `netlify.toml`: Netlify runs `npm run docs:build` on Node.js 24 and publishes `docs/.vitepress/dist`. Every push to `master` triggers a new deploy, and pull requests get preview deploys.

## Project structure

```
__old/                      # previous guides, not included in the site for now
├── *.md                    # English
└── pl/*.md                 # Polish translations
docs/
├── .vitepress/config.mts   # site config, locales, sidebars, and font loading
├── .vitepress/theme/       # default theme with Metrophobic (body) and Krona One (headings and site title)
├── index.md                # English home page
├── foundations/            # Chapter 1 (English)
├── design-process/         # Chapter 2 (English)
├── wireframes-and-prototypes/  # Chapter 3 (English)
├── research-and-testing/   # Chapter 4 (English)
├── high-fidelity-design/   # Chapter 5 (English)
├── responsive-websites/    # Chapter 6 (English)
└── pl/
    ├── index.md            # Polish home page
    ├── foundations/        # Chapter 1 (Polish)
    ├── design-process/     # Chapter 2 (Polish)
    ├── wireframes-and-prototypes/  # Chapter 3 (Polish)
    ├── research-and-testing/   # Chapter 4 (Polish)
    ├── high-fidelity-design/   # Chapter 5 (Polish)
    └── responsive-websites/    # Chapter 6 (Polish)
```

English is the default locale served at `/`, Polish is served at `/pl/`. When adding a new page, create it in both `docs/` and `docs/pl/` with the same file name, and add it, with its English and Polish titles, to the `chapters` list in `docs/.vitepress/config.mts`. The navigation bar and the sidebars of both languages are generated from that list.
