# Digital prototypes in Figma

## Wireframes vs. prototypes

Wireframes show the **structure** of each screen. Prototypes show **how users interact** with the design: what follows a tap on a button or the opening of a menu. A digital low-fidelity prototype connects your digital wireframes, so they behave like a real app.

Figma covers both design and prototyping in one place, but the skills on this page transfer to other tools too.

## Before you start

Think about how people will use your product:

- **Flows** - what are the most common user flows?
- **Interactions** - which buttons will users press, and in what order?
- **Expectations** - what do users expect to happen after they tap a button or submit a form?

Your answers, together with your wireframes and paper prototype, are the plan for your digital prototype. Remember that the design will keep changing; it's normal not to know exactly where everything goes yet.

## How to create a low-fidelity prototype in Figma

### 1. Create the wireframes

Create a frame for each screen of the user flow, using the shape and text tools as described on the [digital wireframes](./07-digital-wireframes) page. Arrange the frames on the canvas in a logical order, from left to right, which makes prototyping easier.

**Make long screens tall.** If a screen should scroll, such as a long list of time slots, make the frame taller than the phone screen. Figma will let users scroll through it in the prototype.

### 2. Name the frames

Rename each frame in the layers panel with a number and a clear name, for example "1 Home", "2 Booking", "3 Summary", "4 Confirmation". Clear names make connections easier and explain each screen's purpose.

### 3. Switch to the Prototype tab

At the top of the right panel, switch from the **Design** tab to the **Prototype** tab. In this mode, you create connections instead of editing shapes. Always check which tab you are in; many actions behave differently in each.

### 4. Create connections

Every prototype connection has three parts:

1. **Hotspot** - the element where the interaction starts, such as a button.
2. **Connection** - the arrow that stores what happens, for example "on tap, navigate to".
3. **Destination** - the frame the user arrives at. The destination must be a frame, not an element inside a frame.

When you hover over an element in Prototype mode, a small circle with a plus sign appears on its edge. This is the **connection node**. Drag from the node to the destination frame and release. An arrow now shows the connection.

*WashSlot example:* the designer connects "Book a slot" on the home screen to the booking screen, the chosen time slot to the summary, and "Confirm" to the confirmation screen.

### 5. Connect every interactive element

Go through each interactive element **in order** and ask: "Where should this take the user?" Treat it as an audit of your design. If an element has no destination, either create the missing screen or remove the element. Don't forget:

- **Repeated elements** - in a list, connect every item, not only the first one. In a low-fidelity prototype, they can all lead to the same example screen.
- **Back buttons** - each back arrow should return to the previous screen. Figma also has a **Back** action that returns users to wherever they came from.
- **Cancel buttons** - "Cancel" should usually return users to a safe starting point, such as the home screen.
- **Alternative paths** - secondary elements, such as the avatar or a "House rules" link, need screens too.

### 6. Choose interactions and animations

For each connection, you can choose a **trigger** (such as tap, click, or hover), an **action** (such as navigate to, open overlay, or back), and an **animation**. "Instant" changes the screen immediately. Animations such as "move in" or "push" show how screens relate to each other, for example a menu sliding in from the side. In low-fidelity prototypes, keep animations simple.

### 7. Test in presentation mode

Click the **Play** (present) button in the top right corner to open the prototype. Go through the main flow as a user would, then try other paths: choose a different item in a list, press back, press cancel, tap the secondary elements. Every time something doesn't work, return to the editor, fix the connection, and test again.

### 8. Share and collect feedback

Use the **Share** button to send a link to teammates or test participants. With view access, they can click through the prototype and leave **comments** directly on the screens. You can also open the prototype in Figma's mobile app to see how it looks on a real phone. Seeing your design at the right size on the intended device is very valuable.

## Check your prototype

A good low-fidelity prototype:

- **Completes the main flow** - it connects at least four screens and lets users finish the main task.
- **Allows moving forward and back** - users can go to the next step and return to previous ones.
- **Has clear navigation cues** - buttons look like buttons, and section titles look like titles, so users know what they can tap.
- **Shows success** - there is a clear message when the task is completed, such as "Machine 2 is yours at 19:00".
- **Leads back to the start** - after finishing, users can return to the home screen.

::: tip Key takeaway
A digital low-fidelity prototype connects wireframes so users can click through them. In Figma, name your frames, switch to the Prototype tab, and drag connections from hotspots to destination frames. Connect every interactive element, test all paths in presentation mode, and share a link to collect feedback.
:::
