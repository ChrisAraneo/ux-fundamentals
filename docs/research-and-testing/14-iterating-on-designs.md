# Iterating on designs

## From insights to design changes

You've shared your insights, and the team has agreed which ones to act on. Now it's time to improve the design. Every pain point found in research is a chance to make the experience better before the product launches, when changes are still cheap.

## Prioritizing insights

A study can reveal many problems, and you can't fix everything at once. Prioritize insights together with stakeholders, such as other designers, the product manager, or the engineering lead, from most to least urgent. Many teams use priority levels:

### Priority 0 (P0): must fix

P0 problems must be fixed for the product to work properly. Ask:

- **Does anything stop users from completing the main flow?** - for example, users can't complete a booking.
- **Did users feel tricked anywhere?** - this may point to a [deceptive pattern](../wireframes-and-prototypes/12-deceptive-patterns), even an unintended one, such as a charge without a clear confirmation.
- **Is anything inequitable or inaccessible?** - people of all abilities, identities, and experiences must be able to use the product.

### Priority 1 (P1) and Priority 2 (P2)

**P1** issues improve the experience a lot, but users can still complete the main flow without them. They're good candidates for the next prototype. If you have many P1 issues, split them further: those you'll address now stay **P1**, and those for later become **P2**. This helps small teams focus on the most important changes first.

### WashSlot priorities

| Insight | Priority | Reason |
| --- | --- | --- |
| Status icons can't be read by screen readers, and text is too small | **P0** | The design is inaccessible to some residents |
| Changing the day is almost impossible to find | **P0** | It blocks the main flow for any booking that isn't for today |
| Busy machines don't show how much time is left | **P1** | Users can still book, but planning is harder |
| The reminder switch is easy to miss | **P1** | It doesn't block booking, but it causes forgotten laundry |
| House rules are hidden in settings | **P2** | It affects fewer users and can wait for the next iteration |

## Know the limits of your study

A usability study with five to eight participants reveals the most common problems, but it can't tell you everything. You may still have open questions after prioritizing. Whether you can do more research depends on your team, timeline, and budget. Make a special effort to include groups whose needs are often overlooked, because UX designers and researchers are often the ones who have to speak up for them.

## Research is a loop, not a line

Research, synthesis, and iteration repeat many times. You test a prototype, learn, improve the design, and test again. Courses often present the process as a straight line, but in real projects you'll go around the loop again and again.

## Edit the wireframes, not the prototype

Make changes in your **wireframes**, not in the prototype connections. Think of a theater rehearsal: when a scene doesn't work, the director changes the script and the staging first, and only then runs the whole play again. In the same way, you update the wireframes first, and once all changes are done, you reconnect them into a new low-fidelity prototype for the next round of testing.

## Example: WashSlot iteration

Based on the P0 and P1 insights, the designer updates the wireframes:

1. **Day tabs** - the booking screen now shows the next seven days as tabs at the top, with today selected by default.
2. **Accessible status** - every machine row shows its status in large text ("Free", "Busy", "Out of order"), and every icon has a text label for screen readers.
3. **Remaining time** - busy machines show the minutes left, for example "Busy, free in 25 min".
4. **Reminder on by default** - the reminder is switched on automatically, with a clearly labeled switch to turn it off.

Then the designer reconnects the wireframes into a new prototype and plans a short second study with three new residents, to check whether the changes solved the problems.

::: tip Key takeaway
Prioritize insights with stakeholders: P0 issues block the main flow, trick users, or exclude people; P1 and P2 issues improve the experience and can be scheduled. Update the wireframes first, then reconnect them into a new prototype and test again. Research is a loop, not a line.
:::
