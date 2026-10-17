# High-fidelity prototypes

## From mockups to a working model

A **prototype** is a working preview of a product, made before the real thing is built. In Chapter 3, you built a **low-fidelity prototype**: interactive, but with simple placeholder content. A **high-fidelity prototype** is a detailed, interactive model that looks and behaves almost exactly like the final product. In short, it's your mockups brought to life.

Mockups focus on how the product **looks**; prototypes focus on how it **works**. A high-fidelity prototype is what you test with users and show to stakeholders for approval, so it should feel as real as possible.

## What a high-fidelity prototype needs

### Final visual elements

Every screen should use real content: final copy, images, icons, illustrations, and links. Ideally, you work with writers and other teammates to get realistic content. If something isn't ready yet, use realistic placeholders, such as believable names and dates, rather than "Name 1" or lines.

### Navigation

Users must be able to move through the main flow you want to test, often called the **critical user journey**. Check that each screen has the buttons and icons needed to move forward and back. Ask yourself: **Can users always tell how to reach the next screen? Are back arrows and close icons easy to spot? Is it clear where the journey ends?**

### Interactivity

**Interactivity** is what makes a prototype work: the connections between screens and the way the prototype reacts to taps, swipes, and other actions. In Figma, you add interactivity by **making connections**. As you learned in Chapter 3, a connection has three parts:

1. **Hotspot** - the element where the interaction starts, such as a button, an icon, or a card.
2. **Connection** - the arrow (sometimes called a "noodle") that links the hotspot to its destination. You create it by dragging the **connection node**, the small circle with a plus sign that appears on the edge of a selected element.
3. **Destination** - the frame or overlay that opens. A connection always ends on a frame, not on a single element inside a frame.

## Six steps to a high-fidelity prototype in Figma

1. **Lay out the mockups** - create a "Prototype" page and copy your final mockups onto it. Arrange the frames in the order of the user flow, from left to right.
2. **Connect the screens** - switch to the **Prototype** tab in the right panel. Select a hotspot and drag its connection node to the destination frame. The first connection you make sets the **starting frame** of the prototype, so start with the first action you want users to take.
3. **Add interaction details** - for each connection, set the **trigger**, the **action**, and the **destination** (see below).
4. **Adjust the animation** - choose how one screen changes into the next, and set the speed. You'll learn more about this in [Gestures, motion, and sound](./15-gestures-motion-and-sound).
5. **Complete all screens** - repeat these steps until every screen in the flow is connected, including ways back and ways to cancel.
6. **Share your work** - test the prototype yourself, then share it with teammates, stakeholders, and study participants.

## Triggers, actions, and destinations

When you create a connection, Figma opens the **interaction details** panel. It has three main settings:

- **Trigger** - what the user does to start the interaction. Examples include **On tap** (also called on click), **On drag**, **While hovering**, **While pressing**, **Key/Gamepad**, and **After delay**, which starts the interaction automatically after a set time.
- **Action** - what happens as a result. **Navigate to** opens another frame and is the most common action. Others include **Back** (return to the previous screen), **Open overlay** (show something on top of the current screen, such as a menu or a dialog), **Swap overlay**, **Close overlay**, **Scroll to**, and **Open link**.
- **Destination** - the frame or overlay that appears.

The **Back** action is especially handy: if users can reach a screen from several places, one "Back" connection returns them to wherever they came from.

*WashSlot example:* the designer connects the WashSlot screens like this:

| Hotspot | Trigger | Action | Destination | Animation |
| --- | --- | --- | --- | --- |
| "Book a slot" button on Home | On tap | Navigate to | 02 Booking | Push, from the right |
| A free time slot | On tap | Navigate to | 03 Summary | Push, from the right |
| Back arrow on Summary | On tap | Back | Previous screen | Push, to the right |
| "Confirm booking" button | On tap | Navigate to | 04 Confirmation | Dissolve |
| "Machine info" icon on a card | On tap | Open overlay | Machine info sheet | Move in, from the bottom |
| "Done" button on Confirmation | On tap | Navigate to | 05 My bookings | Instant |

## Testing and sharing the prototype

To test the prototype, click the **Present** button (the play icon) at the top right of Figma. The prototype opens in a new tab, inside a device frame if your frames have a device size. Click through the whole flow as a user would. Once you've added at least one connection, presentation view shows only frames that are part of a connected flow.

To share, click **Share** and invite people by email, or copy a link and set its access, for example "Anyone with the link can view". People with view access can open the prototype, click through it, and leave **comments** directly on the screens. Comments keep all feedback in one place, and you can resolve each one once you've handled it. During a remote usability study, you can even follow a participant's movements through the prototype.

## Checklist for your prototype

Before testing, check that your prototype has at least four connected screens in a realistic flow, lets users move forward and back, can be entered from more than one starting point, has clear navigation cues, uses animations that are short and smooth, shows a clear sign when a task is completed successfully, and lets users return to the starting screen after finishing a task.

*WashSlot example:* the WashSlot prototype covers the full booking flow and can also be entered from "My bookings", where residents can open an existing booking. After confirming, residents see a confirmation message and can return to Home with one tap.

::: tip Key takeaway
A high-fidelity prototype turns mockups into a realistic, interactive model. It needs final visual elements, complete navigation, and interactivity. In Figma, lay out the mockups, connect the screens, set triggers, actions, and destinations, adjust the animations, connect all screens, and then test and share your work.
:::
