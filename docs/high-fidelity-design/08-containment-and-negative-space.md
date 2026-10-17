# Containment and negative space

Grids decide where things go. Containment and negative space decide what belongs together and what stands apart. Both help users understand a screen at a glance.

## Containment

**Containment** uses visual boundaries to keep a design neat and organized. Lines, shapes, and color mark where one section ends and the next begins. There are four main methods.

### Dividers

A **divider** is one thin line that splits sections or items apart, for example the rows in a settings list. They're simple and light, so use them when content is related but needs a small break.

To create a divider in Figma, choose the **Line** tool from the shape tools menu (or press L), hold **Shift** while dragging to keep the line straight, and set its color and thickness in the **Stroke** section.

### Borders

**Borders** are continuous lines that form a shape, usually a rectangle, around an element or a group of elements. A border makes content stand out and shows that everything inside belongs together. Borders on buttons and cards also help people see that they're tappable.

To create a border in Figma, draw a rectangle around the content, remove its fill, and add a stroke with the thickness you want.

### Fill

**Fill** means coloring the background of a shape or a section. A colored background is a stronger way to separate content than a divider. It suggests that a section is a separate area, not just the next item in a list.

To add a fill in Figma, select a layer, click the plus icon in the **Fill** section, and choose a color or a color style.

### Shadow

**Shadows** create a feeling of depth. They often work together with borders or fill. There are two types:

- **Drop shadow** - falls outside the element, so it looks raised above the page. It's often used for cards and floating buttons.
- **Inner shadow** - falls inside the element, so it looks pressed in. It can suggest that a button is pushed down at that moment.

To add a shadow in Figma, select a layer, click the plus icon in the **Effects** section, and choose "Drop shadow" or "Inner shadow". Click the effect settings icon to adjust the shadow's position, blur, and color. Subtle shadows usually look better than strong ones.

*WashSlot example:* in the first mockup, the four machines were plain text rows on a white background, and it wasn't clear where one machine's information ended. The designer applied containment step by step: each machine became a card with a pale teal **fill** and a soft **drop shadow**, so every card looks tappable; a thin **divider** separates the machine name from the remaining time inside the card; and the "Today" section header got a light **border** at the bottom. The same treatment was then applied to the cards in "My bookings", so both screens look like one product.

## Negative space

**Negative space** (also called white space, even when it isn't white) is the empty area around and between elements. It isn't wasted space. It's one of the most powerful tools for making a screen calm and clear.

### Why negative space matters

1. **It shows what belongs together** - elements that are close together look related, and elements with more space between them look separate. This is the Gestalt principle of **proximity** you learned in [Chapter 3](../wireframes-and-prototypes/08-gestalt-principles).
2. **It directs attention** - an element surrounded by space stands out. Space around the main button pulls the eye to it.
3. **It gives the eyes a rest** - a crowded screen is tiring and overwhelming; space lets people scan content comfortably.
4. **It makes text easier to read** - space between lines and paragraphs keeps text from blurring into one block.

### Kinds of negative space

- **Line spacing** - the vertical space between lines of text. For body text, a line height of about 1.4 to 1.6 times the font size is comfortable.
- **Padding** - the space between an element's content and its edge, for example between a card's border and the text inside it.
- **Margins** - the space outside an element, between it and its neighbors or the edge of the screen.

### How to improve negative space

1. **Find crowded areas** - look for places where elements touch, text feels squeezed, or sections run into each other.
2. **Decide what each space should do** - group related items, emphasize the main action, or make text easier to read.
3. **Fix one screen first** - adjust spacing on one screen, using a consistent scale such as multiples of 8 px.
4. **Apply the same rules everywhere** - repeat the changes on every screen, so spacing is consistent.

*WashSlot example:* on the booking screen, the time slots were packed tightly together, and in a quick check, the designer's thumb kept hitting the wrong slot. The designer increased the space between slots to 8 px, gave each slot 16 px of padding, and added 24 px of space above the "Confirm booking" button. The screen now shows fewer slots at once, but each one is easy to read and to tap.

::: tip Key takeaway
Containment uses dividers, borders, fill, and shadows to separate content and show what belongs together. Negative space groups related items, directs attention, gives the eyes a rest, and improves readability. Fix spacing on one screen first, then apply the same rules everywhere.
:::
