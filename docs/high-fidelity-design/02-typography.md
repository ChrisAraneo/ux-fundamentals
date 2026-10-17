# Typography

## Why type matters

**Typography** is the craft of arranging letters and text so that language is readable, clear, and pleasant to look at. Most of what users do in an app involves reading: labels, buttons, messages, and instructions. Good typography helps in three ways:

- **Hierarchy** - it shows what's most important and where to look first.
- **Accessibility** - it makes text easy to read for as many people as possible.
- **Branding** - it gives the product a recognizable personality, whether that's friendly, serious, or playful.

## Typeface, font, and type classification

People often use "typeface" and "font" as if they meant the same thing, but designers distinguish them:

- **Typeface** - the overall design of the letters: the shape of the strokes, their thickness, and whether they have serifs. Roboto, Georgia, and Atkinson Hyperlegible are typefaces.
- **Font** - one specific version of a typeface, defined by size, weight (thickness), and style. "Roboto, bold, 16 px" is a font.
- **Type classification** - a broad family of styles. The most common groups are **serif** (small strokes at the ends of letters), **sans serif** (without those strokes), **script** (like handwriting), and **display** (decorative, meant for large headings).

A simple rule for apps: use one or two typefaces at most. A sans serif typeface is a safe choice for small screens, because its clean shapes stay readable at small sizes. Decorative typefaces work for a logo or a big heading, but not for body text.

## Typographic hierarchy

**Typographic hierarchy** is the order of importance you create with different fonts. It tells readers what to look at first and where each kind of information can be found. You build it mainly with **size** and **weight**: bigger and bolder text is noticed first.

At a minimum, choose two levels: a larger size for titles and a smaller size for body text. Most apps use more:

- **Heading** - the screen title, for example 28 px, bold.
- **Subheading** - section titles, for example 20 px, semibold.
- **Body** - normal text, for example 16 px, regular.
- **Label** - small text on buttons and chips, for example 14 px, medium.

## Legibility and readability

**Legibility** is how easy it is to tell individual letters apart, for example a capital I, a lowercase l, and the number 1. **Readability** is how easy it is to read whole words, sentences, and paragraphs. Legibility depends mostly on the typeface; readability also depends on size, line length, line spacing, and contrast.

To keep text readable, use at least 16 px for body text on mobile, keep lines short, and leave enough space between lines. If the product has **brand guidelines**, follow them, because they describe how the brand's type should look across all products.

*WashSlot example:* the designer chooses **Atkinson Hyperlegible**, a free typeface designed to make similar letters easy to tell apart. This helps Grace, who reads with large text, and Kofi, who is still learning to read the local language. The headings are 28 px bold, the machine names 20 px semibold, the body text 16 px regular, and the status labels 16 px bold. The design is tested with the phone's text size set to 200% to make sure nothing breaks for Grace.

## Working with text in Figma

1. **Create a text box** - select the Text tool (the T icon) or press T, click on the canvas, and type.
2. **Select text** - with several text boxes on a frame, select the one you want in the Layers panel on the left, then double-click it on the canvas to edit the words.
3. **Change the font** - in the right panel, choose the typeface, the weight, and the size. You can also set line height, letter spacing, and paragraph spacing there.
4. **Align and position** - use the alignment buttons at the top of the right panel, and the X, Y, W, and H fields to set the exact position and size of the text box.
5. **Set constraints** - constraints decide how an element behaves when its frame is resized, for example whether it stays pinned to the left edge or to the center. They help one design adapt to different screen sizes.

### How to save a text style?

Once you've decided on your type levels, save each one as a **text style**. Select a text layer, open the style menu in the text section of the right panel (the icon with four dots), click the plus icon, and give the style a name such as "Heading" or "Body". From then on, you apply the style instead of setting the font by hand, and if you change the style, every text that uses it updates.

## Placeholder text or real copy?

**Copy** is the written text in a design. Designers debate whether to design with placeholder text, such as **lorem ipsum**, or with real copy.

### When does placeholder text help?

- **Early feedback** - you can share a layout with stakeholders before the words are ready.
- **Focus on layout** - during ideation and wireframing, fake text keeps attention on structure.
- **Time for writing** - writers can work on the copy while you continue designing.

The downside is that fake text can confuse stakeholders, and a layout built around lorem ipsum may break when real text, which is often longer, is added.

### When does real copy help?

- **Fewer surprises** - you see right away whether a label fits a button.
- **Better feedback** - design and words form one experience, and people can react to both.

The downside is that real copy changes as often as the design, and in early reviews people tend to comment on the words instead of the layout.

A practical middle ground: use placeholders in low-fidelity designs and real copy in mockups. Many designers mix both, for example real labels in the navigation and placeholder text in long descriptions.

*WashSlot example:* the mockups use real copy everywhere: "Book a slot", "Machine 2 is free", "Busy, free in 25 min". These short labels are exactly what residents will read, and Kofi's feedback in testing will show whether they're easy to understand.

::: tip Key takeaway
A typeface is the overall letter design; a font is one size and weight of it. Use one or two readable typefaces, build a clear typographic hierarchy with size and weight, keep body text at 16 px or more, and save your choices as text styles. Use placeholders in low-fidelity work and real copy in mockups.
:::
