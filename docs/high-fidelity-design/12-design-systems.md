# Design systems

## What is a design system?

A **design system** is a collection of reusable elements and guidelines that helps teams design and build products according to shared standards. Instead of every designer deciding again what a button should look like, the design system answers that question once, for everyone.

You can think of a design system as a set of building blocks with an instruction booklet. The blocks are the colors, type, icons, and components. The booklet explains when and how to use them, so that whatever the team builds fits together.

A design system is more than a **style guide**, a document that describes the visual style. It also includes ready-made components, rules for using them, and often the code that developers need.

## What's inside a design system?

### Visual styles

The core visual decisions: color palettes, typography, iconography, spacing, layout grids, shapes (such as corner radius), elevation (how high elements appear above the background), and motion. Defining them once helps the brand look the same everywhere.

### Guidelines

The rules for using the styles and components: design principles, writing guidelines (tone of voice, grammar, and naming), accessibility requirements, and instructions on when to use which component.

### UI patterns

The reusable pieces of the interface, usually organized from small to large:

1. **Elements** - the smallest parts, such as a color, an icon, or a text style.
2. **Components** - elements combined into something usable, such as a button made of a shape, a label, and an icon.
3. **Modules** - groups of components, such as a header with a logo, a title, and a menu icon.
4. **Templates** - modules arranged into a complete page or screen layout.

### Code

Many design systems include the code for each component, so developers can build exactly what designers designed. Some also include **design tokens**, named values such as "color-accent" or "spacing-16" that designers and developers share.

## Why teams use design systems

- **Consistency** - when everyone uses the same parts, the product looks and works the same everywhere, and users learn it faster.
- **Brand identity** - colors, type, and shapes stay recognizable across all of a company's products.
- **Scalability** - a design system is **scalable**: it keeps working well when the product, the team, or the workload grows. New screens and new team members can follow the existing system instead of starting over.
- **Efficiency** - designers spend less time on repeated decisions and more time on real problems, which saves time and money.
- **Better collaboration** - designers and developers share one language and one source of truth, so handoffs cause fewer misunderstandings.

Not every team has a complete design system. At a large company, you'll probably work with one that already exists. At a small company or a startup, you might help build one from scratch. Either way, you should be ready to follow a system and to suggest improvements to it.

## Public design systems

Several companies share their design systems publicly. They're free to explore, and they're one of the best ways to learn good interface design, because each component comes with explanations, examples, and accessibility advice:

- **Material Design** - Google's design system, used for Android and many websites and apps.
- **Human Interface Guidelines** - Apple's guidelines for iOS, iPadOS, macOS, watchOS, and other platforms.
- **Fluent** - Microsoft's design system for Windows and Microsoft products.
- **Polaris** - Shopify's design system for tools used by online sellers.
- **U.S. Web Design System** - used to build websites of the United States federal government.

Many of them offer **UI kits** for Figma, files with ready-made components that you can copy into your designs. You can find them, and kits made by other designers, in the Figma Community.

## Using a design system in your mockups

You can use an existing design system in different ways:

- **Use components as they are** - for standard parts, such as text fields or dialogs.
- **Adapt components** - change colors, type, or icons to match your brand.
- **Mix and match** - combine borrowed components with your own.

In Figma, you can copy components from a UI kit or drag them from the **Assets** panel. A copied component is an **instance** connected to the original. If you need to change its structure, for example to swap an icon that the kit doesn't allow you to swap, you can right-click it and choose **Detach instance**. Be careful: a detached copy no longer updates when the original changes.

When you borrow components, always adjust them to your design: use your color styles instead of the kit's colors, your text styles instead of its fonts, and your spacing scale. A borrowed component that isn't adapted looks like it comes from a different app.

*WashSlot example:* the designer doesn't have a full design system, so they borrow from Material Design. The bottom navigation bar, the switch for reminders, and the date picker in "My bookings" come from the Material UI kit. The designer applies WashSlot's own color and text styles to them, replaces the default icons with the chosen icon set, and checks that every borrowed component still meets the contrast minimums.

## Design systems and accessibility

Design systems work at the component level, so accessibility has to be built into every component. A well-designed button, for example, has a clear label that screen readers announce, such as "Book a slot, button", a visible focus state for keyboard users, enough contrast, and a large enough touch target. When a component is accessible in the design system, every screen that uses it benefits.

The best way to understand what accessible components need is to learn how people actually use assistive technology. Talk to people with disabilities, invite them to research, and consider accessibility from the start, not as a patch just before launch. Solutions designed with people with disabilities often end up helping many more users.

::: tip Key takeaway
A design system is a set of reusable styles, components, guidelines, and code that keeps products consistent and teams efficient. It's scalable, strengthens brand identity, and helps designers and developers work together. Explore public systems such as Material Design and the Human Interface Guidelines, adapt borrowed components to your own styles, and make accessibility part of every component.
:::
