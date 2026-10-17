# Responsive layouts and breakpoints

## One website, several layouts

Try this: open a news website on your computer and slowly make the browser window narrower. At some point, the columns jump into a new arrangement, the navigation links disappear behind a menu icon, and the images get smaller. Open the same website on a phone, and you'll see a third arrangement. That's a **responsive layout** at work.

You don't need to design a separate version for every device; there are far too many screen sizes for that. Instead, you design a few **key sizes** and describe how content moves between them. Developers then build a flexible layout that stretches between those sizes.

## Breakpoints

A **breakpoint** is a screen width at which the layout changes, because the current arrangement no longer fits well. Below the breakpoint, one layout applies; above it, another one does. Breakpoints are written into the website's code, but deciding where they are and what happens at each one is a design decision.

Most teams design for three groups of screens:

| Group | Typical widths | Typical layout grid |
| --- | --- | --- |
| Phone | up to about 600 px | 4 columns |
| Tablet | about 600 to 1,024 px | 8 columns |
| Desktop and laptop | above about 1,024 px | 12 columns |

These numbers are common starting points, not rules. Some design systems use more breakpoints, and the best breakpoints are the widths where **your** content starts to look cramped or stretched. Remember too that a tablet held sideways or a laptop with a half-width browser window may fall into a different group than you expect.

## Plotting a layout on grid paper

Responsive design starts on paper, too. Take the desktop wireframe you combined earlier and redraw it for smaller screens on **grid paper**, paper printed with evenly spaced dots or squares. The grid helps you keep proportions consistent when you shrink, stack, or move elements.

1. **Start with the finished desktop wireframe** - treat it as the largest version.
2. **Draw the smaller outlines** - draw a tablet outline and a phone outline. A phone is much narrower, roughly a third of the desktop width, and taller than it's wide. If a long phone page doesn't fit on one sheet, tape two sheets together.
3. **Move the elements across** - use the grid to place and scale each element from the desktop version in the smaller outlines.
4. **Cover the sizes in between** - consider a small laptop, a tablet held sideways, and a browser window that isn't full screen.
5. **Repeat for the key pages** - plot the homepage and every page in the main user flow, not just the homepage.

### Questions to ask while plotting

- **What has to move?** - decide which elements must stay above the fold on smaller screens, and which can move further down.
- **How should images scale?** - decide whether a hero image stays large on every screen, gets cropped to a different shape, or gets replaced by a smaller one.
- **How does navigation change?** - a row of links at the top of a desktop page usually needs a different solution on a phone, such as a menu icon.
- **What can go?** - some decorative elements and secondary text may be removed on small screens, as long as nobody loses access to important content or features.
- **How many columns fit?** - for example, four columns on desktop, three on a tablet, and two or one on a phone.

## Desktop first or mobile first?

There are two common starting points. **Desktop first** means designing the large layout first and then simplifying it for smaller screens, which is the approach this chapter follows, because you're adding a website to an existing app. **Mobile first** means starting with the smallest screen and adding content and columns as space grows. Starting small forces you to focus on what's truly essential, which is why many teams prefer it for new products. Both work; what matters is that you design and check every key size before development starts.

## Responsive layouts improve the experience

A layout that doesn't respond causes problems you've probably seen yourself: a button that's cut off at the edge, text that needs pinching and zooming to read, or a page that scrolls sideways. Planning breakpoints prevents these issues before anyone writes code. As you plan, look at how your competitors' websites and websites you admire change on different devices, and note what works and what doesn't.

*WashSlot example:* the designer plots the WashSlot homepage at three sizes on dot grid paper:

| Element | Desktop | Tablet | Phone |
| --- | --- | --- | --- |
| Main navigation | Links across the header | Links across the header, with "Laundry guide" and "Notices" moved into a "More" menu | Menu icon |
| Machine cards | 6 in one row | 3 in each of 2 rows | 2 in each of 3 rows |
| Next booking and CTA | 2 columns side by side | 2 columns side by side | Stacked: CTA first, then next booking |
| Notices | 3 cards in a row | 2 cards, with a "See all" link | 1 card, with a "See all" link |
| Footer | 3 columns of links | 3 columns of links | 1 column |

On the phone, the "Book a slot" button moves above the next booking, because Kofi usually opens the website on his phone to book quickly before a shift. The designer also sketches the layout for the laundry room tablet, which hangs on the wall in landscape orientation: it uses the tablet layout, but with extra-large machine cards that are readable from two meters away.

::: tip Key takeaway
A responsive layout changes at breakpoints, the screen widths where the current arrangement stops working. Design a few key sizes, typically phone, tablet, and desktop, and plot them on grid paper, deciding what moves, scales, changes, or disappears. Whether you start with desktop or mobile, check every key size before development begins.
:::
