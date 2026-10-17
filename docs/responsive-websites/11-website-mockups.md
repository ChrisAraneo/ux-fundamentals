# Website mockups

## From wireframes to mockups

A **mockup** is a detailed picture of a design that doesn't move or respond; it shows exactly how the final product will look. Where wireframes show structure, mockups add the visual layer: typography, color, icons, images, and real content. Mockups aren't clickable, which makes them quick to change, so you can try several visual directions and collect feedback between rounds.

Turning a wireframe into a mockup isn't a paint-by-numbers exercise. Things you couldn't see in grayscale often become obvious once real colors and images are in place. It's fine to move an image, change a section, or try a new arrangement. The wireframe is a guide, not a rule.

## Visual design, a quick reminder

Everything you learned in [Chapter 5](../high-fidelity-design/) applies to websites:

- **Foundational elements** - [typography](../high-fidelity-design/02-typography), [color](../high-fidelity-design/03-color), and [icons and images](../high-fidelity-design/05-icons-and-images).
- **Arranging elements** - [layout grids](../high-fidelity-design/07-layout-grids), and [containment and negative space](../high-fidelity-design/08-containment-and-negative-space), meaning dividers, borders, fill, shadows, and the empty space that lets content breathe.
- **Visual design principles** - [emphasis, hierarchy, unity, variety, scale, and proportion](../high-fidelity-design/10-visual-design-principles), plus [more Gestalt principles](../high-fidelity-design/11-more-gestalt-principles).

## Design systems and sticker sheets

A **design system** is a collection of reusable elements and guidelines that lets a team design and build a product to shared standards. Most design systems include **visual styles** (color palettes, typography, icons), **guidelines** for using them, **UI components** such as buttons and dialogs, and **code** for developers. Design systems keep a product consistent, strengthen the brand, help it grow, and save time. The challenge is that large systems can be overwhelming, so it takes time to learn your way around one.

You don't need a big system for a portfolio project. A **sticker sheet**, a frame with your colors, type styles, and components ready to copy, works as a small design system of your own. You can also start from an existing design system or a **UI kit**, a ready-made collection of components and styles for a design tool. See [Design systems](../high-fidelity-design/12-design-systems) and [Sticker sheets and components](../high-fidelity-design/13-sticker-sheets-and-components) for details.

## Creating desktop mockups

1. **Open the wireframe file** - keep the wireframes nearby as a reference.
2. **Create a desktop frame** - use the same 1440 px width as your wireframes. Pages are usually longer than one screen, so drag the bottom edge of the frame down until all content fits. Other common desktop sizes include 1920 × 1080, 1536 × 864, 1366 × 768, and 1280 × 800 px; check that the most important content still sits above the fold on the shorter screens.
3. **Duplicate or start fresh** - some designers duplicate the wireframe and replace each placeholder; others build the mockup from scratch next to it. Either way works.
4. **Place the main elements** - add the navigation bar, text frames, and buttons, usually from top to bottom. Use the shape tools and set colors with hex values from your palette.
5. **Add images and logos** - draw a rectangle or ellipse the size of the image, then drag the image file into it, and the image fills the shape. Use your own photos, images you have permission to use, or free stock images. A large **hero image** often sits at the top of a homepage.
6. **Add text** - use a limited number of fonts and a clear typographic hierarchy. Website copy is often written by other people, so lorem ipsum can still stand in for long body text that doesn't affect navigation.
7. **Save styles and components** - save every color, text style, and effect you use more than once as a **style**, and every reusable element, such as a button or a card, as a **component**. Copies of a component, called **instances**, update automatically when you change the main component.
8. **Finish the page and repeat** - complete the content below the fold, then create mockups for the remaining pages, reusing your styles and components.

## Creating mobile mockups

You already solved most layout problems in your phone wireframes, so the mobile mockups go faster.

1. **Copy the desktop mockups** - paste them onto the same page or into a new file, and name them clearly, such as "Mockups / Phone".
2. **Create phone frames** - pick a preset phone size and follow your phone wireframes for the layout.
3. **Decide what stays** - keep everything essential, remove what doesn't fit, and expect to improve some things as you go.
4. **Adapt the navigation** - add the hamburger menu and build the flyout menu as a separate frame, with a background panel, the navigation items, the logo, and a close button. Build other on-demand elements, such as a pop-up search, the same way.
5. **Resize the large elements** - scale down the hero image and the **lockups**, groups of an image and text that work as one unit, such as a product photo with its name and price.
6. **Rework the footer** - stack its columns and realign the content for the narrow screen.
7. **Save new styles and components** - for example, save the flyout menu as a component in the Assets panel.

## Website-specific details

Websites have a few states that phone apps don't. Design them in your mockups:

- **Hover states** - on desktop, links and buttons should change visibly when the mouse pointer is over them.
- **Focus states** - keyboard users need a clearly visible outline on the element that currently has focus.
- **Active page** - the navigation should show which section the user is in, for example with an underline.
- **Wide screens** - decide what happens on monitors wider than your frame: usually the content stops growing at a maximum width and stays centered.

*WashSlot example:* the designer reuses the app's sticker sheet: Atkinson Hyperlegible for all text, the off-white, pale teal, and deep teal palette, the three status labels with their icons, and the machine card. New web components are added to the sheet: the header with the navigation, the footer, the notice card, and the flyout menu. Each link and button gets four states: default, hover, focus, and pressed. The deep teal focus outline is 3 px thick, so it stays visible on the pale teal cards. On desktop, the content stops growing at 1280 px and stays centered on wider screens, so the machine cards don't stretch into thin strips on Tomasz's large monitor.

::: tip Key takeaway
Mockups add the visual layer to your wireframes, and the wireframe is a guide, not a rule. Use your visual design skills, a sticker sheet or design system, and saved styles and components to keep pages consistent. Build the desktop mockups first, then adapt them for phones with a hamburger and flyout menu, resized hero images and lockups, and a stacked footer. Don't forget website states such as hover and focus.
:::
