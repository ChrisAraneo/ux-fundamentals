# Icons and images

## What are icons?

**Icons** are small images or symbols that stand for an action, a tool, or a place in an app. **Iconography** is the system of icons a product uses, and how they relate to each other. Used well, icons:

- **Save space** - one small symbol can replace a word or a phrase.
- **Catch attention** - people notice pictures faster than text.
- **Help people move around** - icons in a navigation bar show where each tap leads.
- **Express the brand** - a consistent icon style is part of a product's look.
- **Cross language barriers** - a well-known symbol can be understood without reading.

Some icons are almost universal on websites and in apps: a **house** for "home" and a **magnifying glass** for "search". Others, such as a heart for "favorites" or a bell for "notifications", are widely known too. Your designs will almost certainly include some of them.

## Where to get icons

You rarely need to draw icons from scratch. Free, open-source icon sets come with many design systems, for example Material Symbols from Google's Material Design and SF Symbols from Apple's Human Interface Guidelines. Libraries such as Font Awesome also offer thousands of icons. Many of these are available as Figma plugins or community files, so you can insert them directly.

If no existing icon fits, you can design a custom one. Keep it simple and draw it in the same style as the rest of your icon set: the same line thickness, corner style, and size.

## How to add and adjust icons in Figma

1. **Use the right format** - icons work best as **SVG** files, a vector format that stays sharp at any size.
2. **Insert the icon** - drag the file onto the canvas, use a plugin, or choose "Place image" from the shape tools menu.
3. **Resize proportionally** - hold **Shift** while dragging a corner, so the width and height change together. Common icon sizes are 20 px, 24 px, and 32 px.
4. **Match the colors** - apply a color style from your palette, so the icon looks like part of the design.
5. **Add a label** - place a short text label under or next to the icon, using your text styles.
6. **Save it as a component** - turn the icon into a component, so you can reuse it everywhere and update it in one place. You'll learn more about components in [Sticker sheets and components](./13-sticker-sheets-and-components).

## Designing icons for everyone

### Is the icon universal?

Some symbols mean different things in different regions. A mailbox, a hand gesture, or a sign used for "yes" may be clear in one country and confusing or even rude in another. Choose icons that people from many backgrounds recognize.

### Does the icon have a label?

A short text label makes an icon clear to everyone, including people who are new to technology and people who don't know a symbol. For screen reader users, every meaningful icon also needs **alternative text (alt text)**, a short description that the screen reader reads aloud. Screen readers can't interpret a picture; they can only read its description.

### Does the icon fit the brand?

All icons in a product should share one style: the same colors, the same line weight, and a similar level of detail. A single icon in a different style looks out of place and makes the product feel unfinished.

*WashSlot example:* the bottom navigation bar uses three Material Symbols icons, each with a label: a house for "Machines" (the home screen), a flag for "Report", and a calendar for "My bookings". The designer considered a washing machine icon for "Book a slot", but in a quick hallway test, two people thought it meant "machine settings". The button now shows a plus icon **and** the text "Book a slot", and the designer notes the icon as something to check again in the next usability study.

## Basic visual elements

Besides type, color, and icons, every design is built from a few basic elements. You don't need to be an artist to use them well.

- **Lines** - a line connects two points. It can separate sections, connect related ideas, or emphasize something, like a thin line under a heading.
- **Size** - an element's size is always judged in relation to other elements and to the screen. On a phone, size matters a lot: a button that's too small is hard to tap and leads to mistakes.
- **Shape** - lines that enclose a space create a shape, such as a rectangle, a circle, or a rounded card. Shapes help people recognize what elements do; for example, a circle with an X often closes a window.
- **Image** - a photo, illustration, animation, or GIF. Images tell stories and create emotion without words, so choose ones that are relevant to your users and their situation.

## Using images

Images in a product should support the user's goal, not just fill space. Some practical points:

- **Find free images** - stock photo sites such as Unsplash and Pexels, and illustration libraries, offer images you can use in mockups. Always check the license before using an image in a real product.
- **Show real diversity** - if your images show people, include people of different ages, skin tones, body types, and abilities.
- **Add alt text** - every meaningful image needs a short description for screen readers. Purely decorative images can be marked as decorative, so screen readers skip them.
- **Check the details** - make sure images aren't stretched, blurry, or cropped awkwardly, and that they load correctly.

*WashSlot example:* the empty state of "My bookings" shows a simple illustration of a folded stack of towels with the text "No bookings yet. Book a slot to get started." The illustration is marked as decorative, so screen readers skip it, because the text next to it already says everything users need.

::: tip Key takeaway
Icons save space, catch attention, and help people navigate, but only if everyone understands them. Choose widely recognized icons, add text labels and alt text, and keep one consistent style. Use lines, size, shape, and images on purpose, and make sure every image is relevant, diverse, and described for screen readers.
:::
