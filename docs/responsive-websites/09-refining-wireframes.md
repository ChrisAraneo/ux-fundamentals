# Refining wireframes

## Accessibility starts in the wireframe

It's much easier to build accessibility in from the start than to add it at the end. People with disabilities, and especially people who use assistive technology such as screen readers, rely on a clear page structure to get around. Three features in your digital wireframes make a big difference: headings, landmarks, and initial focus. After that, a quick check against Gestalt principles makes sure the layout is easy to understand for everyone.

## Headings

**Headings** are titles and subtitles at the start of a page, section, or group of content. They're usually larger and bolder than the body text, and they label page titles, sections, and menus.

Headings help two groups at once. Sighted visitors use them to scan the page and see its **hierarchy**, the order of importance. Screen reader users use them to navigate: screen readers can list all headings on a page and jump directly to any one of them, much like a table of contents.

On a website, headings are written in **HTML**, the language that structures web pages. HTML has six heading levels:

- **H1** - the main title of the page. Use one per page.
- **H2** - the main sections of the page.
- **H3 to H6** - subsections inside those sections, used in order without skipping levels.

Developers can't always guess the right level from the visual design, so **annotate** your wireframes: write "H1", "H2", or "H3" next to each heading. If you don't know the final wording yet, use placeholder words such as "Page title" or "Section heading".

## Landmarks

**Landmarks** mark the main regions of a page, such as the header, the navigation, the main content, a search area, a sidebar, and the footer. Like real landmarks, they stand out and help people orient themselves. Assistive technology uses them to jump from region to region. For example, screen readers offer a list of landmarks, so users can move straight to the main content without listening to the whole navigation first. Headings and landmarks work together: landmarks divide a page into regions, and headings label the content inside them.

Mark the regions in your wireframes too, for example with a labeled outline around the navigation, the main content, and the footer.

## Initial focus

**Initial focus** is where you direct a user's attention when a page opens, to help them start their task. On a page with one main job, such as a search page, the focus can go straight to the key element: on a search engine's homepage, the search box stands alone in the middle of the screen, so there's no doubt what to do. On a page with several tasks, the focus usually goes to the top or to the H1 heading.

Initial focus is also about simplicity. Every extra element competes for attention. Too much information or too many tasks at once cause **cognitive overload**, and people struggle to complete anything. The less clutter, the easier the page is to use.

*WashSlot example:* the designer annotates the WashSlot homepage. "Laundry room now" is the H1. "Your next booking" and "Notices" are H2s, and each notice title is an H3. The landmarks are the header with the navigation, the main area, and the footer. On the booking page, the initial focus goes to the H1 "Book a slot", and the first thing after it is the list of days. On the laundry room tablet, the page does one job, so the focus goes straight to the "Book a slot" button.

## Checking wireframes with Gestalt principles

**Gestalt principles** explain how people perceive what they see: we group things that look alike, notice patterns, and simplify complicated pictures, and we see the whole before the parts. You learned them in [Chapter 3](../wireframes-and-prototypes/08-gestalt-principles); three are especially useful for reviewing wireframes:

1. **Similarity** - elements that look alike, in shape, size, or color, seem to have the same function. Make elements with the same purpose look the same, and different elements look different.
2. **Proximity** - elements close together seem related, while elements far apart seem unrelated. Use spacing to show which pieces belong together.
3. **Common region** - elements inside the same boundary, such as a box or a background, seem to form a group. Use containers to group related information.

Go through each wireframe and ask: does anything look related that isn't, or unrelated that is? Should some elements move closer together, or be placed in a shared container?

*WashSlot example:* the review finds three things to improve:

- **Similarity** - in the desktop wireframe, the dryer cards were wider than the washer cards, which made them look like a different kind of element. The designer makes all six cards the same size and adds the label "Dryer" instead.
- **Proximity** - on the booking page, the day labels sat closer to the times of the previous day than to their own times. The designer adds more space above each day label, so every day clearly owns its times.
- **Common region** - the date, time, and machine of the next booking sat loosely on the page. The designer puts them in one box with a border, so residents read them as one booking.

::: tip Key takeaway
Build accessibility into your wireframes from the start. Annotate heading levels (H1 to H6), mark landmarks such as the navigation, main content, and footer, and decide where the initial focus goes on each page. Keep pages uncluttered to avoid cognitive overload. Then review the layout with the Gestalt principles of similarity, proximity, and common region.
:::
