# Handoff and case study

## When is a design finished?

You could keep improving a design forever. At some point, though, you have to stop and let developers build it. Running out of time or money shouldn't be the reason you stop. Instead, ask these questions:

1. **Does the design show the intended experience?** - the screens and flows match what users need and what the project set out to do.
2. **Is all content final?** - placeholder text, icons, and images have been replaced with final assets.
3. **Can people use it without help?** - participants can understand and complete the main tasks without explanations.
4. **Does it follow the design system?** - components, styles, and spacing are consistent with the system the product uses.
5. **Does it follow platform conventions?** - interactions match what users expect on Android, iOS, or the web.
6. **Is there a way out when something goes wrong?** - error states give users a clear next step.
7. **Is it accessible?** - the design meets accessibility guidelines and works with assistive technologies.

When every answer is "yes", the design is ready for handoff. Remember that "finished" doesn't mean "never changing". Once real people use the product, they'll find new problems and needs, and the design will be updated after launch, sometimes after a few weeks, sometimes after months. A product is never truly done. With experience, deciding when to stop gets easier.

## Handing off to developers

**Handoff** is the moment when designers pass their work to developers (also called engineers), who turn it into a working product. Designers provide the mockups, the prototype, the design specifications (often called specs), and the design system or sticker sheet.

### Two ways to hand off

- **Sequential handoff** - designers finish everything, then pass it to developers, like runners passing a baton in a relay race. This is common at agencies and small companies. It's clear and simple, but problems found during development can be costly to fix, because the designers have moved on.
- **Collaborative handoff** - designers and developers work together throughout the project. Developers might build one part, such as the profile screen, while designers still work on another, such as the home screen. This is faster and catches problems early, but some work may need to be redone when designs change.

As a new designer, you won't decide which approach your team uses, but you'll be part of it. Good relationships with developers make every handoff easier: involve them early, ask what they need, and be available for questions.

### What to document

Figma already shows developers most of what they need, such as sizes, colors, fonts, and spacing. Add notes for things the mockups don't show:

- **Edge cases** - unusual situations, such as an empty list, a very long name, a lost internet connection, or an error.
- **Accessibility details** - the reading and focus order, the labels screen readers should announce, the heading levels, and how the design behaves with large text or "reduce motion".
- **Interactions and motion** - which gestures do what, and the duration and easing of animations.

## Preparing a Figma file for handoff

1. **Create a cover** - add a thumbnail frame (1920 × 960 px is the recommended size) showing the project name, its status, such as "Ready for development", the team, and links to important pages. Right-click the frame and choose "Set as thumbnail".
2. **Clean up** - name all layers and frames clearly, delete unused elements, and move old versions to the archive page.
3. **Invite collaborators** - share the file with developers. With **view access**, people can select layers, view frames, comment, inspect the design, and export assets, but they can't change anything.
4. **Point to the inspect panel** - in Figma's developer view, developers can select any element to see its properties, the style names it uses, and code snippets they can copy.
5. **Prepare assets for export** - mark icons and images for export. Figma can export in PNG, JPG, SVG, and PDF formats, at several sizes (such as 1x, 2x, and 3x) for screens with different pixel densities. Icons are usually exported as SVG.

*WashSlot example:* the cooperative hired two freelance developers, so the designer uses a mostly **sequential** handoff, with a weekly call during development. The handoff notes cover edge cases: what happens when two residents try to book the same slot at the same moment, when a machine breaks down during a booking, and when there's no mobile signal in the basement. The accessibility notes describe the focus order on each screen, the screen reader labels for every status ("Machine 2, busy, free in 25 minutes"), and the behavior with 200% text size and "reduce motion".

## Creating a case study

A **case study** is a short, visual story of a design project. It usually includes the project goal, your role, the process you followed, and the outcome. Recruiters and hiring managers look for case studies in your portfolio, because they show how you think, how you work with others, and whether you can take an idea from start to finish.

### What to include in a case study

1. **Project overview** - the project title, a striking **hero image** (a large image at the top of the page), and a one-sentence summary.
2. **Your role** - what you did. In this course, you did everything yourself; on a team, describe your specific responsibilities and mention who else was involved.
3. **The problem and the users** - who you designed for and what problem they had, based on research.
4. **Challenges** - constraints such as time, budget, or technology.
5. **Research** - which methods you used and why, and the most important insights. Show insights, not every artifact you produced.
6. **The design process** - how you went from ideas to sketches, wireframes, and prototypes, and how research shaped your decisions.
7. **Usability study results** - what you learned from testing and how you changed the design, ideally with before-and-after images.
8. **Accessibility** - the accessibility considerations you applied, such as contrast, labels, and alternatives to gestures.
9. **Final design** - your mockups and a link to the high-fidelity prototype or a short animated GIF of the main flow. Make sure the link works for anyone.
10. **Takeaways and next steps** - what you learned, what surprised you, what you'd do differently, and what could come next. In real projects, you can also add results, such as the number of active users.

### Tips for a strong case study

- **Tell a story** - following the design process (empathize, define, ideate, prototype, test) is a simple, clear structure.
- **Keep it short and skimmable** - use headings, short paragraphs, and lots of visuals. Readers should understand the project in a few minutes.
- **Show your iterations** - employers want to see how you handled feedback from users and stakeholders.
- **Link to details** - if you have more to show, link to a slide deck or PDF instead of putting everything on one page.
- **Get feedback** - share a draft with friends, other designers, or an online UX community before publishing.
- **Update as you go** - add new material to your portfolio throughout a project, not only at the end.

*WashSlot example:* the WashSlot case study opens with a hero image of the home screen on a phone, held in front of a laundry room. It states the problem in one sentence: residents of a 60-flat building wasted trips to the basement and argued about who was next. It then summarizes the research, the three personas, the sitemap, the paper wireframes, the two usability studies, and the most important changes, each with a before-and-after image. It ends with the final mockups, a prototype link, and the next steps: the "Add to calendar" feature and a shared tablet in the laundry room.

::: tip Key takeaway
A design is ready for handoff when it shows the intended experience, uses final content, works without help, follows the design system and platform conventions, handles errors, and is accessible. Hand off with clear documentation of edge cases, accessibility, and interactions, and prepare your Figma file for developers. Then tell the project's story in a short, visual case study.
:::
