# Visual design principles

Visual design elements, such as type, color, and shape, are your materials. **Visual design principles** are the rules for combining them. They help you decide what should stand out, in which order people should notice things, and how to keep a design consistent but not boring.

## Emphasis

**Emphasis** means making something attract attention. Think of a student who marks the one key sentence on a textbook page with a highlighter: it's the first thing the eye finds when they open the book again. In design, emphasis tells users what matters most on a screen.

You create emphasis by giving an element more **visual weight**, the power an element has to pull the eye toward it. Every element has some visual weight, and you can increase it in several ways:

- **Size** - larger elements are noticed first. A screen title should be bigger than the rest of the text.
- **Contrast** - an element that differs from its surroundings stands out, for example a bright button on a calm background, or bold, colored, or underlined words in a paragraph.
- **Texture** - a pattern or detail inside an element, such as stripes on one segment of a chart, makes it stand apart. Use texture sparingly.

To decide what to emphasize, ask two questions: **Where do I want users to look first?** and **What are users trying to do?** Usually, the answer is the main action or the most important piece of information. If people in a usability study can't find a key feature, it probably needs more emphasis.

*WashSlot example:* on the home screen, the "Book a slot" button has the most visual weight: it's the only deep teal element, it's large, and it has space around it. The machine statuses come next, with bold text and icons. Everything else is quieter.

## Hierarchy

**Hierarchy** arranges elements in order of importance, so users know where to start and where to go next. It's related to emphasis, but there's a difference: emphasis makes **one** element stand out, while hierarchy organizes **a whole group** of elements from most to least important.

A departure board at a train station is a good illustration. The destination is shown in the largest letters, the departure time comes next, and the platform number and the list of stops are smaller. Travelers find their train in seconds, because the board guides their eyes in the right order without any instructions.

To build hierarchy, start with the user's main goal and put the information that serves it first and most prominently. Size is usually the best starting point, followed by weight, color, and position.

### Hierarchy and assistive technology

Hierarchy isn't only visual. Screen readers read a screen in a particular order and let users jump between headings. If headings are marked up in the right order (heading level 1, then level 2, and so on), screen reader users can understand the structure of the screen just like sighted users. Use **accessibility annotations** in your mockups to show developers the heading levels and the order in which elements should be read and focused.

*WashSlot example:* on the booking screen, the hierarchy is: the screen title "Book a slot" (largest), then the selected day, then the list of free times, and finally the small note "You can book up to 7 days ahead". The annotations mark the title as heading level 1 and the day as heading level 2.

## Scale and proportion

**Scale** is the size of an element in relation to other elements in the design. **Proportion** is the balance between elements whose sizes have changed.

### How to use scale?

- **To create emphasis** - making one element larger than the others draws attention to it.
- **To show similarity or difference** - elements of the same size look equal or related; elements of very different sizes look different.
- **To build hierarchy** - a **type scale** is a set of text sizes that grow step by step, from small labels up to the largest heading (often called H1). Online type scale calculators suggest a whole scale based on one base size.

### How to keep proportion?

Proportion is about whether size relationships make sense. If you make one element in a row bigger, the others may need to change too, or the row will look unbalanced. After changing the scale of anything, look at the whole screen again. Defining sizes in a design system, for example fixed icon sizes and a type scale, keeps proportions consistent.

*WashSlot example:* the four machine cards on the home screen are exactly the same size, which tells residents that the machines are equal. When the designer briefly tried making the card of the free machine larger, the screen looked unbalanced, and it suggested that the other machines were less important or even unavailable, so the cards went back to equal sizes. To highlight the free machine, the designer used its status label instead.

## Unity and variety

**Unity** describes how well the elements of a design work together to express one idea. A unified design is pleasant to look at and easy to understand. You create unity with a consistent color palette, typefaces that go well together, consistent spacing, aligned elements, similar shapes, and text styles that are used the same way everywhere.

**Variety** means using different elements to break monotony and create interest. Different shapes, colors, sizes, textures, and patterns add energy to a design. Think of a bowl of green apples with a single red one: that's the apple everyone notices.

Neither is good or bad on its own. Too much unity makes everything look the same, so users can't tell what's important. Too much variety makes a design chaotic and hard to read. The goal is balance: a unified base with a little variety where you want attention.

Variety works best on top of unity. In a calendar app where every event has the same calm color, one event shown in bright orange because it's due today stands out immediately, but only because everything else is consistent.

A good test for unity: for every element, ask how it helps users reach the goal of the product. If you can't answer, the element may not belong in the design.

*WashSlot example:* all cards share the same corner radius, padding, and fonts, and all icons come from one set. That's unity. The only variety is the deep teal accent and the three status colors, so these are exactly the things residents notice.

## More visual elements to consider

A few more properties help you fine-tune a design:

- **Orientation** - the direction of the layout. Phones and tablets can be used in portrait (vertical) or landscape (horizontal) orientation, desktops are mostly landscape, and smartwatches are often square or round. Plan your layout for the shapes your users' devices have.
- **Intrinsic interest** - how eye-catching an element is on its own. Photos, illustrations, logos, and animations are naturally more interesting than text, so use them for what matters and let less important elements blend in.
- **Perceived physical weight** - the illusion that an element is heavy or light. Large, dark, dense elements feel heavier than small, light ones. Keep these impressions in proportion, so the screen feels balanced.

## Applying the principles to your mockups

1. **Review one screen** - look at it through each principle in turn and note what could be better.
2. **Apply two improvements** - for example, more emphasis on the main action and a clearer hierarchy in a list.
3. **Repeat for every screen** - use each principle at least once in your main user flow.
4. **Stay flexible** - these decisions aren't final; testing and feedback may change them.

::: tip Key takeaway
Use emphasis and visual weight to show what matters most, hierarchy to order information from most to least important, scale and proportion to show relationships and keep balance, and unity and variety to create a consistent design with a few deliberate highlights. Remember that hierarchy also matters for screen reader users.
:::
