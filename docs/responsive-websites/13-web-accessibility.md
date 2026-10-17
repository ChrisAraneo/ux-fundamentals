# Web accessibility

## WCAG and the designer's role

Before you test or hand off a website, make sure people with disabilities can use it. The main reference is the **Web Content Accessibility Guidelines (WCAG)**, published by the World Wide Web Consortium (W3C). WCAG explains how to make web content, such as text, images, sound, and interactive controls, accessible to as many people as possible. You don't need to know every guideline by heart, but you should know the main ideas and look up the details when needed.

Developers write the code, but many accessibility decisions are design decisions. The best way to pass them on is through **annotations**, notes added to your mockups and prototypes that explain things the visuals can't show. Three kinds of annotations matter most: focus order, heading levels, and labels.

## Focus order

**Focus order**, also called **traversal order** or navigation order, is the order in which people move through the interactive elements of a page, such as links, buttons, and form fields. Screen reader users follow this order, and so do people who use a keyboard instead of a mouse or touch screen, pressing the Tab key to move from one element to the next.

The standard order runs from the top left to the bottom right, the way a left-to-right reader scans a page. Annotate the order with **numbers in circles** next to each interactive element. It's especially important to mark elements that break the standard order, and pages where the initial focus should start somewhere other than the first element at the top left. Developers use these numbers to build the right order into the code.

## Heading levels

**Hierarchy** orders elements by importance, and headings are the clearest way to show it. Heading text is larger than body text, and the most important headings are the largest. As you learned in [Refining wireframes](./09-refining-wireframes), HTML uses heading tags from H1 to H6: H1 for the page title, H2 for main sections or highlighted callouts, and H3 and below for subsections. Screen readers announce these levels and let users jump between headings, so annotate the level of every heading in your mockups.

## Labels

A **label** (also called a screen reader verbalization) is the text that assistive technology reads out for an interactive element. A good label removes any doubt about what a button, menu, or checkbox does. An icon-only button needs a label most urgently: a magnifying glass icon should be read as "Search", not "Button".

When annotating labels, describe three things:

- **The label** - the words the screen reader says, such as "Open menu" or "Book Washer 2 for 9:00".
- **The role** - what kind of control it is, such as a button, a link, a checkbox, or a tab. Developers call this the **semantic role**.
- **Grouping** - which controls belong together. Grouping a set of checkboxes or time slots lets screen reader users understand how they relate and move through them quickly.

Developers use these annotations to choose the right HTML elements and, where needed, extra attributes from **ARIA** (Accessible Rich Internet Applications), a set of attributes that add accessibility information to web elements.

## Color and contrast

The contrast rules from [Accessible color](../high-fidelity-design/04-accessible-color) apply to every screen size. Choose dark text on light backgrounds or light text on dark backgrounds, and check every pair with a contrast checker, such as the one from **WebAIM** (Web Accessibility in Mind), against the WCAG minimums: 4.5:1 for normal text and 3:1 for large text and important graphics. Avoid pairs that people with color blindness confuse, such as red and green, and pairs too similar for people with low contrast sensitivity, such as light gray on white.

## Zoom and large text

A responsive website must stay usable when people **zoom in** or **increase the text size**, which many people with low vision do every day. When the page is magnified, the layout should reflow, with elements rearranging just as they do on a smaller screen, instead of overlapping, getting cut off, or forcing people to scroll sideways to read each line. WCAG expects text to work at 200% size and content to reflow without sideways scrolling even at 400% zoom on a desktop browser.

Show developers how this should work. Create an extra version of key mockups that shows the zoomed or enlarged view next to the default one, and add notes about what moves where.

*WashSlot example:* the designer annotates the desktop booking page:

| # | Element | Label | Role |
| --- | --- | --- | --- |
| 1 | "Skip to main content" link | Skip to main content | Link (visible on focus) |
| 2 | Day tabs, Monday to Sunday | "Saturday, 3 free slots" | Tab, grouped as "Choose a day" |
| 3 | Time slots for the selected day | "9:00, Washer 2, free" | Button, grouped as "Free times on Saturday" |
| 4 | "Back" link | Back to homepage | Link |
| 5 | "Continue" button | Continue to summary | Button |

The H1 is "Book a slot", and the selected day is an H2. The designer also creates a zoomed version of the homepage: at 400% zoom, the desktop page shows the phone layout, with machine cards in a single column and the navigation in the hamburger menu, and nothing is cut off. Finally, the designer checks the new notice cards: their gray date text on pale teal measures only 3.1:1, so it's darkened to charcoal.

::: tip Key takeaway
WCAG explains how to make web content accessible. Designers support it with annotations: numbered focus order, heading levels from H1 to H6, and labels with their roles and groupings. Check color contrast with a tool such as WebAIM's checker, and make sure the layout reflows when people zoom in or enlarge text. Show the zoomed view in extra mockups so developers know what to build.
:::
