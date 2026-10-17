# Digital wireframes for websites

## Are you ready to go digital?

Paper is fast and cheap; digital wireframes take more effort, so don't switch too early. You're ready when you can answer "yes" to these questions:

1. **Do you know the layout you want?** - you've chosen a homepage layout and plotted the key screen sizes.
2. **Have you iterated on paper?** - you've sketched several versions and combined the best ideas.
3. **Have you had feedback?** - peers or a manager have looked at your sketches, and you've used what you learned.
4. **Are you ready to think about details?** - you're ready to consider sizes, text, and how visual elements like type, color, and images will fit in later.

## Desktop wireframes in Figma

### 1. Create a desktop frame

Create a new Figma file for the website. Select the **Frame** tool (shortcut F) and, in the right panel, pick a desktop preset. A width of **1440 px** is a common choice for desktop web design; Figma's presets include a 1440 × 1024 px frame. Name the frame clearly, for example "Desktop / 01 Home".

Upload photos of your paper wireframes next to the frame, so you can see them while you work.

### 2. Add a layout grid

Your paper sketches used a grid to keep spacing consistent; your digital wireframes need one too. Select the frame and add a **layout grid** in the right panel, then change its type from a uniform grid to **Columns**. A column grid has three settings:

- **Columns** - the number of evenly spaced vertical columns. Desktop layouts often use 12, because 12 divides neatly into halves, thirds, quarters, and sixths.
- **Gutters** - the empty space between columns.
- **Margins** - the gap from the frame's outer edge to the first and last columns.

You set up grids for the app in [Chapter 5](../high-fidelity-design/07-layout-grids); the steps for websites are the same, just with more columns.

### 3. Fill the frame with placeholders

Use rectangles, circles, and lines to block out the page, following your paper wireframe. Keep the **fold** in mind: on a typical laptop, only the top 700 to 800 px or so are visible without scrolling.

- **Above the fold** - the header with the logo, navigation, and important actions such as search or login, plus the beginning of the main content and the main CTA.
- **Below the fold** - the rest of the main content and the footer with contact details, social media links, and the full logo.

There are no strict rules, but putting the navigation and main CTA above the fold means visitors see the most important things straight away.

### 4. Add placeholder text

Replace the lines from your sketches with text. Use short, real labels for headings, navigation, and buttons, because these words affect how people find their way. For long body text, use **lorem ipsum**, meaningless Latin-like placeholder text that shows where content will go without distracting anyone.

### 5. Repeat for all pages

Build a wireframe for every page in the main user flow, starting with the homepage. A complete set should include at least three pages, make a full user flow possible, clearly show UI elements such as navigation, buttons, images, and input fields, and show the hierarchy of content on each page.

## Wireframes for smaller screens

Once the desktop wireframes are done, create the other sizes from your plotted paper sketches.

1. **Create a new frame** - choose a phone or tablet preset from the Frame tool, such as a 360 × 800 px Android phone or a 768 × 1024 px tablet, and name it clearly, for example "Phone / 01 Home".
2. **Add a matching grid** - for example, 8 columns on a tablet and 4 columns on a phone, with smaller margins and gutters.
3. **Copy and adapt the desktop elements** - paste the elements from the desktop wireframe, then resize some, rearrange others, and remove those that don't fit. Use your paper sketch for the smaller screen as the guide.
4. **Add the space savers** - replace the header links with a hamburger menu, and add the extra frames that appear on demand, such as the flyout menu and the pop-up search.
5. **Repeat for every page** - so you end up with a full set for each screen size.

### Building a hamburger menu and flyout in Figma

1. **Draw the icon** - draw a short, narrow rectangle with the Rectangle tool, duplicate it twice, and space the three bars evenly.
2. **Group and name it** - select all three rectangles with Shift held down, group them (Ctrl/Cmd + G), and name the group "Hamburger menu" in the Layers panel.
3. **Create the flyout frame** - duplicate the phone homepage frame and name the copy "Flyout menu". Draw a panel on top of it and move the navigation links into the panel.
4. **Add a close button** - draw two thin rectangles, rotate them to form an X, group them, and name the group "Close".
5. **Use placeholders for icons** - circles drawn with the Ellipse tool can stand for search, account, or calendar icons until you add real icons in the mockup stage.

You'll connect the hamburger icon to the flyout frame later, when you build the prototype.

## Example: WashSlot wireframes

The designer sets up three sizes:

| Size | Frame | Grid |
| --- | --- | --- |
| Desktop | 1440 px wide | 12 columns, 80 px margins, 24 px gutters |
| Tablet | 768 px wide | 8 columns, 32 px margins, 16 px gutters |
| Phone | 360 px wide | 4 columns, 16 px margins, 16 px gutters (the same as the app) |

On the desktop homepage, the six machine cards each span two of the twelve columns, and the "Your next booking" box and the "Book a slot" panel each span six. The fold sits just below the CTA, so status, next booking, and the CTA are all visible without scrolling on a typical laptop.

For the phone, the designer resizes the machine cards, the headings, and the notice cards; changes the header links into a hamburger menu with a separate flyout frame; and stacks the next booking below the CTA. The machine names stay in full ("Washer 3", not "W3"), because short codes confused Kofi in the app study.

::: tip Key takeaway
Move to digital wireframes once your layout is clear and you've iterated on paper with feedback. In Figma, create a desktop frame, add a column grid with margins and gutters, block out the page with placeholders while keeping the fold in mind, and add placeholder text. Then create frames for tablet and phone, reuse and adapt the desktop elements, and add space-saving components such as a hamburger and flyout menu.
:::
