# UX Fundamentals

Comprehensive guide to website UX fundamentals for beginners, built with [VitePress](https://vitepress.dev) and available in **English** and **Polish**.

Topics covered:

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

## Project structure

```
__old/                      # previous guides, not included in the site for now
├── *.md                    # English
└── pl/*.md                 # Polish translations
docs/
├── .vitepress/config.mts   # site config and locales
├── index.md                # English home page
└── pl/
    └── index.md            # Polish home page
```

English is the default locale served at `/`, Polish is served at `/pl/`. When adding a new page, create it in both `docs/` and `docs/pl/` with the same file name.
