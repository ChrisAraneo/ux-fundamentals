# Layout grids

## Why use grids?

A **layout** is the way elements are arranged on a screen. A grid is the invisible structure behind a good layout, like the lines in a school notebook that keep your handwriting straight. Grids help you:

- **Create order** - elements line up, so the screen looks calm and is easy to scan.
- **Work faster** - you don't have to decide each element's position from scratch.
- **Collaborate** - other designers and developers can follow the same structure.
- **Fit the screen** - content stays inside the screen's boundaries and adapts to different sizes.

## Types of grids

- **Basic grid** - lines that cross at equal distances and divide the screen into small squares, like graph paper. Figma calls it a **uniform grid**. It's useful for drawing icons and placing small elements precisely.
- **Layout grid** - a set of vertical **columns** separated by gaps, called **gutters** (or alleys). Elements are placed so that their edges line up with the columns. This is the grid designers use most for screens.
- **Row grid** - horizontal rows instead of columns. It helps keep vertical spacing consistent.

A layout grid also has **margins**, the empty space between the outer columns and the edges of the screen.

### Typical grids for different devices

Common starting points are 4 columns for phones, 8 columns for tablets, and 12 columns for desktops, with 16 px margins and gutters on phones and wider ones on larger screens. These numbers aren't strict rules; they're conventions that many design systems use because they divide space evenly.

## Adding a grid in Figma

1. **Select the frame** - click the frame's name on the canvas or in the Layers panel. Make sure you've selected the frame itself, not an element inside it.
2. **Add a layout grid** - in the right panel, find the **Layout grid** section (called **Layout guide** in newer versions of Figma) and click the plus icon. Figma adds a uniform grid by default.
3. **Open the grid settings** - click the grid icon next to the grid to change its type to **Columns**, **Rows**, or **Grid**.
4. **Set the values** - choose the number of columns, the type (for example "Stretch", which makes columns fill the frame), the gutter, and the margin. You can also change the grid's color so it's visible but not distracting.
5. **Combine grids** - you can add more than one grid to a frame, for example columns plus an 8 px uniform grid, and turn each one on or off.

*WashSlot example:* every WashSlot mockup uses a 4-column grid with 16 px margins and 16 px gutters, plus an 8 px uniform grid for spacing. All spacing values in the design are multiples of 8 (8, 16, 24, 32 px), which keeps the screens consistent and easy for developers to build.

## Aligning elements to the grid

Once the grid is in place, align your elements to it:

- **Edge alignment** - line up the edges of buttons, cards, and images with the edges of the columns.
- **Center alignment** - place smaller elements in the center of one or more columns.
- **Mixed alignment** - combine both methods where it makes sense.

Figma's **alignment controls** at the top of the right panel help you do this precisely. They let you align selected elements to the left, right, top, bottom, or center, distribute them with equal spacing horizontally or vertically, and "tidy up" a group so it's evenly spaced in all directions.

*WashSlot example:* the machine cards on the home screen span all four columns, the "Book a slot" button spans all four columns at the bottom, and the seven day tabs on the booking screen form a scrolling row in which each tab is one column wide.

## Auto Layout

**Auto Layout** is a Figma feature that makes a frame grow or shrink automatically when its content changes, while keeping the spacing you set. For example, a button with Auto Layout gets wider when you write a longer label, and a list with Auto Layout adds space for a new item automatically.

You can add Auto Layout in three ways: select an element and press **Shift + A**, use the plus button in the "Auto layout" section of the right panel, or right-click and choose "Add auto layout". In the Auto Layout settings, you choose the direction (horizontal or vertical), the gap between items, and the padding.

*WashSlot example:* the status label on each machine card uses Auto Layout. When "Free" changes to the longer "Busy, free in 25 min", the label's background grows with the text, and the padding stays the same.

::: tip Key takeaway
Grids bring order, speed, and consistency to a design. Basic grids divide the screen into squares; layout grids use columns, gutters, and margins. Align elements to the grid with Figma's alignment controls, use a consistent spacing scale such as multiples of 8, and use Auto Layout so elements adapt to their content.
:::
