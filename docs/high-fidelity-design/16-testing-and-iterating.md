# Testing and iterating

## Test again with the high-fidelity prototype

Your high-fidelity prototype looks and works almost like the real product, so it's time to test it with users again. The process is the same as for the low-fidelity prototype in [Chapter 4](../research-and-testing/), so here's a short reminder of the four steps:

1. **Plan the study** - write a research plan with the project background, research goals, research questions, KPIs, methodology, participants, and script. See [The research plan](../research-and-testing/03-research-plan).
2. **Conduct the study** - run moderated or unmoderated usability sessions and take careful notes. See [Moderating a usability study](../research-and-testing/09-moderating-a-usability-study) and [Taking notes](../research-and-testing/11-taking-notes).
3. **Analyze and synthesize** - turn your observations into themes and insights. See [From observations to insights](../research-and-testing/12-from-observations-to-insights).
4. **Share and act** - present the insights and update the design.

Testing a high-fidelity prototype often reveals different problems than testing a low-fidelity one. Participants now react to colors, wording, icons, animations, and details, not just to the structure. They also behave more naturally, because the prototype feels real.

*WashSlot example:* the second study tests the high-fidelity prototype with five residents who didn't take part in the first study, including an older resident who uses a screen reader and a resident who uses the app in dark mode. Each session takes 20 minutes in the laundry room, with the same main task as before ("Book a free machine for Saturday morning") plus two new ones: "Cancel your booking for Friday" and "Find out which machine is the largest".

## From observations to insights

To make sense of the results, follow the same four steps as in Chapter 4: gather all the data, organize it, find themes, and write insights.

### Organize the notes

Start by counting how many participants match each observation, for example "3 out of 5 couldn't find how to cancel". Put each observation on its own sticky note with that count, in a physical or digital affinity diagram. Then group the notes. One simple way is to sort them into three areas:

- **Said** - things participants said, including their tone, such as "Sounded unsure when choosing a machine".
- **Did** - things participants did, such as "Swiped left on the booking card to look for options".
- **Felt** - signs of how they felt, such as "Was relieved to see the confirmation".

### Turn themes into insights

Use the theme template from Chapter 4: "It was observed that [number] out of [total] participants [pattern]. This means that [what it tells us]." Then turn each theme into an insight with a simple sentence: "Because [theme], we need to [what the design should do]."

*WashSlot example:* the analysis produces four themes and insights.

1. **Canceling** - 3 out of 5 participants couldn't cancel a booking, because the only way was to swipe left on the booking card. Because cancellation is hidden behind a gesture, we need a visible "Cancel booking" button.
2. **Animation** - 2 out of 5 participants were distracted by the spinning drum animation on the home screen, which never stops. One of them said it made them feel dizzy. Because a looping animation distracts and can make people unwell, we need to stop it after a few seconds and respect "reduce motion".
3. **Machine size** - 4 out of 5 participants wanted to know which machine takes the most laundry, and they guessed from the picture. Because residents choose machines by capacity, we need to show the capacity on each card.
4. **Calendar** - 2 out of 5 participants asked whether they could add the booking to their phone's calendar. Because some residents plan their week in their calendar, we could offer an "Add to calendar" option.

## Prioritizing insights

As in Chapter 4, sort insights by urgency, ideally together with stakeholders such as other designers, product managers, and developers. Come prepared to explain why the most important insights matter for users.

- **Priority 0 (P0)** - must be fixed before launch, because the product doesn't work properly, users feel tricked or misled, or some people can't use it. Accessibility problems are usually P0.
- **Priority 1 (P1)** - doesn't block the main task, but fixing it would clearly improve the experience.
- **Priority 2 (P2)** - nice to have; it can wait until P0 and P1 are done, or until a later phase.

*WashSlot example:*

| Insight | Priority | Why |
| --- | --- | --- |
| Add a visible "Cancel booking" button | P0 | Gesture-only actions exclude people and block a key task. |
| Stop the looping animation and respect "reduce motion" | P0 | Endless motion is an accessibility problem. |
| Show machine capacity on each card | P1 | Residents can book without it, but choosing would be easier. |
| Offer "Add to calendar" | P2 | Useful, but not needed for booking; planned for a later version. |

## Iterating on the mockups

Once priorities are clear, make an **action plan**: list the changes for every P0 insight first, then P1, then P2 if there's time. Aim to test P0 and P1 changes quickly, to check whether they solved the problems.

Changing a prototype's connections is slow, so make changes in your **mockups** first, the same way you edited wireframes in Chapter 4. Then update the prototype:

1. **Duplicate the screens you'll change** - keep the old versions until the new ones are ready, so you can compare them.
2. **Make the changes** - update the mockups, and update your sticker sheet if a component changes.
3. **Reuse what exists** - for complex components, such as a calendar, use a component from a design system or a Figma Community file, and adapt it to your styles instead of drawing it from scratch.
4. **Rebuild the flow** - put the new screens in the right order and reconnect them.
5. **Archive the old versions** - move outdated screens to an "Archive" page, so they're out of the flow but still available for your case study.
6. **Test the whole prototype again** - click through the complete flow to make sure every connection works.

*WashSlot example:* the designer adds an outlined "Cancel booking" button to the booking details screen (the swipe still works as a shortcut), replaces the spinning drum with a still illustration that animates once for two seconds, and adds "7 kg" or "9 kg" under each machine name. The updated booking card is changed in the sticker sheet, so "My bookings" updates automatically. The "Add to calendar" idea goes into the list for version 2. A quick test with three residents confirms that everyone can now cancel a booking.

::: tip Key takeaway
Test your high-fidelity prototype with the same four research steps as before; realistic designs reveal new problems. Turn observations into themes and insights, prioritize them as P0, P1, and P2, and fix P0 issues first. Make changes in the mockups, reconnect the prototype, archive old versions, and test again.
:::
