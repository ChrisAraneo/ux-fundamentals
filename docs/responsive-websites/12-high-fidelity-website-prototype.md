# High-fidelity website prototype

## What a high-fidelity prototype needs

A **high-fidelity prototype** turns your mockups into something people can use. Mockups focus on how the website looks; the prototype focuses on how it works. As you learned in [Chapter 5](../high-fidelity-design/14-high-fidelity-prototypes), it needs three things:

1. **Final visual elements** - confirmed text, images, icons, illustrations, and links. In the real world, some content may not be ready yet; use realistic placeholders, such as believable names and prices, rather than "Name 1" or lorem ipsum in the parts people will read during a test.
2. **Navigation** - the buttons, links, and icons that move users between pages, including back links and close buttons. Ask how users get from one page to the next, how easy it is to find the way back, and where the journey ends.
3. **Interactivity** - the connections, interactions, and animations that make the prototype respond to clicks, taps, and gestures.

## Building it in Figma

The six steps from Chapter 5 apply to websites too:

1. **Lay out the mockups** - create a "Prototype" page in the same file as your wireframes and mockups, copy the mockups onto it, and arrange them in the order of the user flow.
2. **Connect the screens** - in the Prototype tab, select a **hotspot**, the element users interact with, and drag the blue node with the plus sign onto the **destination** frame. The connection must end on a frame, not on an element inside a frame. The first connection you make sets the starting frame, so begin with the first step of the flow.
3. **Add interaction details** - set the trigger (such as "On click"), the action (such as "Navigate to" or "Open overlay"), and the destination for each connection.
4. **Adjust the animation** - choose how one page changes into the next and how fast.
5. **Complete all screens** - connect every page in the flow, including ways back and ways out.
6. **Share your work** - test it yourself, then share it with teammates, stakeholders, and study participants.

## What's different for a responsive website?

### One flow per screen size

Build a separate flow for each screen size you want to test, for example "Desktop: book a slot" and "Phone: book a slot". In Figma, every flow gets its own starting point, so you can share a link to exactly the version you want people to try. Test each version on the device it's meant for: open the desktop flow on a computer and the phone flow on a real phone, for example in the Figma mobile app.

### Menus as overlays

On the phone layout, the flyout menu shouldn't be a separate page. Connect the hamburger icon to the flyout frame with the **Open overlay** action, position the overlay at the left edge, and add a "Move in" animation from the left. Connect the close button with **Close overlay**, and turn on the option to close the overlay when users click outside it. The same technique works for a pop-up search bar or a confirmation dialog.

### Hover and scrolling

Desktop visitors use a mouse, so use the **While hovering** trigger to show hover states on links and buttons, ideally with interactive components that contain the states. Long pages should scroll naturally inside the frame. For a header that stays in place while the page scrolls, set the header's scroll behavior to **Fixed** (or **Sticky**) in Figma.

### Gestures where they help

Phone versions can respond to gestures, such as swiping through a carousel. As in the app, a gesture should be a shortcut, never the only way to do something, so always offer a visible button too.

*WashSlot example:* the designer builds two flows from the same mockups: "Desktop: book a slot" and "Phone: book a slot". In the phone flow, the hamburger icon opens the flyout menu as an overlay that slides in from the left in 200 milliseconds, and the close button and a click on the dimmed page behind it both close it. On desktop, every link and button shows its hover state, and the header stays fixed while the long "House rules" page scrolls. The content is real: actual machine names, realistic times, and the three latest notices from the cooperative's real notice board, so testers react to the website rather than to placeholders. The designer then tries the phone flow on Kofi's old phone and the desktop flow on Tomasz's laptop, and adds a third flow for the tablet layout to try on the laundry room tablet in its wall holder.

::: tip Key takeaway
A high-fidelity prototype needs final visuals, complete navigation, and interactivity. For a responsive website, build a separate flow for each screen size, open menus and pop-ups as overlays, add hover states and fixed headers for desktop, and keep gestures as optional shortcuts. Test each flow on the device it was designed for.
:::
