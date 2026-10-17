# Low-fidelity website prototype

## Prototypes, a quick reminder

A **prototype** is an early, working model of a product that demonstrates how it functions. You've built two kinds already:

- **Low-fidelity prototype** - a simple, interactive version with placeholders instead of final visuals and content. It communicates the big idea and tests whether the structure and flow work.
- **High-fidelity prototype** - a polished, interactive version that looks and behaves almost like the final product.

A digital low-fidelity prototype can look a lot like a set of digital wireframes, but there's an important difference. Wireframes are blueprints of individual pages. A prototype **connects** them, so people can click through and try to complete a task. That makes it possible to test the website's navigation and flow with real users before anyone spends time on visual design. If you need a refresher on prototypes for apps, see [Chapter 3](../wireframes-and-prototypes/09-low-fidelity-prototypes).

## Plan the user flow first

A prototype is built around one task that solves the user's problem. Before connecting anything, decide what users should be able to do and draw the ideal path. Ask yourself:

- **What should users accomplish?** - for example, "buy a T-shirt in the right size" or "book a room for Friday".
- **Where do they start?** - the **entry point** is the page where the flow begins. Many flows start on the homepage, but users may also arrive from a search engine, a link in an email, or another section.
- **How do they move between pages?** - list the buttons and links that take them from one page to the next.

### What a good prototype lets users do

1. **Move forward and backward** - users can go to the next step and return to the previous one.
2. **Enter from the starting point** - and, where it makes sense, from other entry points too.
3. **Recognize the end** - a clear message or page shows that the task is complete.
4. **Return to the start** - after finishing, users can get back to the entry point, ready for the next task.

## Building the prototype in Figma

1. **Open the wireframe file** - and arrange the frames in the order of the user flow.
2. **Switch to the Prototype tab** - it's at the top of the right panel.
3. **Connect the first element** - select the element users click, such as a button. A small blue circle (the **node**) appears on its edge. Drag the node to the destination frame and release.
4. **Repeat for every step** - connect each element in the flow, including back links and the way back to the start.
5. **Preview** - click the play button in the top-right corner, then click through the whole flow as a user would. Fix any connection that leads to the wrong page or leads nowhere.
6. **Check everything once more** - before you show the prototype to anyone, go through the entire experience again from start to finish.

For a responsive website, build the prototype for the screen size you want to test first, usually the desktop version. You can add a second flow for phones later, using the phone wireframes.

## Checklist for a low-fidelity website prototype

Your prototype is ready to test when it connects at least four wireframes into a complete user flow, lets users move forward and backward, shows clear navigation cues, clearly signals when the task is done, and brings users back to the starting point afterward.

## Example: the WashSlot booking flow

The designer prototypes the most important task: **"Book a free washing machine for Saturday morning."** The ideal desktop flow has five steps:

1. **Home** - the resident sees the machine status and clicks "Book a slot".
2. **Choose day and time** - the resident clicks "Saturday", then a free time, such as 9:00 on Washer 2.
3. **Summary** - the resident checks the details and clicks "Confirm booking", or clicks "Back" to change the time.
4. **Confirmation** - a message says "You're booked: Saturday, 9:00, Washer 2", with a link to "My bookings".
5. **Back to Home** - the "WashSlot" logo and the "Home" link return the resident to the homepage.

The prototype has three entry points: the "Book a slot" button on the homepage, the "Book a slot" link in the main navigation, and a "Book again" button on a past booking in "My bookings". In a quick test with two residents, one of them couldn't find a way to change the machine on the summary page. The designer adds a "Change" link next to the machine name before building the high-fidelity version.

::: tip Key takeaway
A low-fidelity prototype connects wireframes so people can try a task. Plan the user flow and its entry points first. Then connect the frames in Figma's Prototype tab, making sure users can move forward and backward, recognize the end, and return to the start. Preview and check the whole flow before testing it with users.
:::
