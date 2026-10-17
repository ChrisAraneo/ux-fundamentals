# Sticker sheets and components

## What is a sticker sheet?

A **sticker sheet** (also called a **design kit**) is a collection of the elements and components that a design uses most often, all gathered in one place. The name comes from children's sticker sheets: you can "peel off" any item and "stick" it into your design by copying and pasting it.

A sticker sheet is part of a design system, or a first step toward one. It typically contains:

- **Typography** - the text styles, from the largest heading to the smallest label.
- **Colors** - the palette as labeled swatches, including semantic colors.
- **Buttons** - every button style, in every state.
- **Icons** - the icon set, at its standard sizes.
- **Other components** - inputs, cards, chips, navigation bars, and anything else that repeats.

### Why make a sticker sheet?

- **Speed** - you copy finished parts instead of rebuilding them.
- **Consistency** - everyone uses the same parts, so nobody accidentally creates a button with sharp corners when all the others are rounded.
- **One place for updates** - change a component once, and every copy updates.
- **Easier teamwork** - new designers can start right away, and developers can see every component they need to build.

## Components and instances

A **component** is a reusable design element. In everyday design language, any reusable part, such as a button or a card, can be called a component. In Figma, it also has a specific meaning: an element saved with the "Create component" function.

The original is called the **main component**. Every copy of it is an **instance**. When you change the main component, for example its color or corner radius, all instances update automatically. You can still change some things in an instance, such as its label text, without breaking the connection.

To create a component in Figma, give the layer a clear name, select it, and use one of these methods: right-click and choose "Create component", click the "Create component" icon in the toolbar, or press **Ctrl + Alt + K** (Windows) or **Option + Command + K** (Mac). Your components then appear in the **Assets** panel.

## States and variants

Many components don't always look the same. A **state** is a visual version of a component that shows its current status. Common states include:

- **Enabled** (or default) - the normal look of the component.
- **Hover** - the look when a mouse pointer is over it (on desktops).
- **Focused** - the look when it's selected with a keyboard or other assistive technology.
- **Pressed** - the look at the moment it's tapped or clicked.
- **Disabled** - the look when it can't be used yet.
- **Selected or active** - the look when it's chosen, such as the current tab.

Showing states gives users feedback: they see that the app has reacted to their action. In Figma, you can group all states of a component into one set with the **variants** feature, so you can switch between states in an instance with one click.

## How to build a sticker sheet in Figma

1. **Add a page** - create a new page in your project file and name it "Sticker sheet" or "Design kit".
2. **Add a frame** - draw a large frame, for example a desktop-sized one, to give yourself plenty of room.
3. **Choose the assets** - collect elements and components as you design. Whenever you create something you'll reuse, it belongs in the sticker sheet.
4. **Save them as components** - name each asset in the Layers panel and turn it into a component.
5. **Add states** - for interactive components, add every state and combine them as variants.
6. **Organize by category** - group all colors together, all buttons together, and so on, with clear section headings. Use a neutral, standard typeface for these headings, so they're not confused with the type you're showing.
7. **Lay it out tidily** - use the same principles as in your mockups: grids, containment, negative space, and Gestalt principles.

### How to show colors and type?

For each color, draw a small square or circle, fill it with the color style, and label it with its name and hex code, for example "Accent, #00695C". For typography, write a sample line in each text style and label it with the style name, typeface, size, and weight, for example "Heading, Atkinson Hyperlegible Bold, 28 px".

*WashSlot example:* the WashSlot sticker sheet has five sections. **Colors** shows the 60-30-10 palette, the three status colors, and the dark mode versions. **Typography** shows the heading, subheading, body, and label styles. **Buttons** shows the filled and outlined buttons in the enabled, pressed, focused, and disabled states. **Status labels** shows "Free", "Busy", and "Out of order", each with its icon. **Cards** shows the machine card and the booking card. When testing later shows that "Busy" needs a different icon, the designer changes it once in the sticker sheet, and every screen updates.

## Save evidence for your portfolio

Figma saves your work automatically, but your portfolio needs more than the final file. Save screenshots of your work at different stages, including early sketches, versions of your sticker sheet, and before-and-after comparisons. Store them in a folder on your computer or in cloud storage. You'll use them later in your case study.

::: tip Key takeaway
A sticker sheet collects the colors, type, buttons, icons, and other components a design uses most. Save each reusable part as a component, so changing the main component updates every instance. Include all states, group them as variants, and organize the sheet clearly. It makes your work faster, more consistent, and easier to share.
:::
