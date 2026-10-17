# User flows

## What is a user flow?

A **user flow** maps the route a typical user takes through an app or website to finish one task, from the first step to the last. It shows every action the user takes, every screen they see, and every decision they make along the way.

Think of a good waiter. Before you ask, they bring water with your coffee, because they know that's what most guests want next. Designers do something similar: they use research to predict what users will need at each step and plan the product around it. A user flow is how they write that plan down.

User flows are created **before** designing screens. They give the team an overview of how the product works as a whole, so you know which screens you need and how they connect. A user flow doesn't contain finished content; it uses simple shapes and short labels.

## Questions a user flow answers

While drawing a user flow, you decide three things:

- **Actions** - the steps users perform in the product.
- **Decisions** - the choices users face along the way.
- **Screens** - what users see after each action or choice.

## User flow shapes

User flows usually use the same shapes as classic flowcharts. The meaning of the shapes isn't universal, so always add a legend when you share a flow, but most teams use this convention:

| Shape | Meaning | Example |
| --- | --- | --- |
| **Circle** | An action the user takes | "Open the app", "Tap Book" |
| **Rectangle** | A screen the user sees | "Home screen", "Confirmation screen" |
| **Diamond** | A decision the user makes | "Is this time slot OK?" |
| **Arrow** | The direction of the flow | Solid arrows go forward; dotted arrows go back to an earlier step |

## How to create a user flow

### 1. Identify the main task

Start from your [goal statement](../design-process/13-ideation-and-goal-statements). It tells you the most important thing users should be able to do. Turn it into one clear user task. A good task also tells you when the user has succeeded.

*WashSlot example:* the goal statement is about checking availability and booking in advance, so the main task is: **"Book a free washing machine for a specific time."** The task is complete when the user sees a booking confirmation.

### 2. List the steps

Write down every step from the entry point (where users start, usually opening the app) to task completion.

*WashSlot example:*

1. Open the app.
2. See the home screen with the live status of all machines.
3. Tap "Book a slot".
4. See the booking screen with machines and times.
5. Choose a machine and a time.
6. Decide: is this slot OK? If not, choose again.
7. See the summary screen.
8. Decide: add a reminder before the cycle ends? Yes or no.
9. Tap "Confirm".
10. See the confirmation screen.

### 3. Draw the diagram

Turn the list into a diagram using the shapes above. Keep it simple; the goal is to show the shortest, clearest path from the entry point to the goal.

```
(Open app) ──▶ [Home: machine status] ──▶ (Tap "Book a slot")
                                                │
                                                ▼
            ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄ no ┄┄┄┄┄┄┄┄ [Booking: machines and times]
            ┆                                   │
            ▼                                   ▼
   (Choose machine and time) ──▶ <Is this slot OK?> ── yes ──▶ [Summary]
                                                                   │
                                                                   ▼
   [Confirmation] ◀── (Tap "Confirm") ◀── <Add a reminder?> ◀──────┘
```

In this text version, `( )` stands for a circle (action), `[ ]` for a rectangle (screen), and `< >` for a diamond (decision). The dotted line shows the way back when the user decides the slot isn't right.

### 4. Check the flow

A good user flow has:

- **Clear start and end points** - the entry point and the completed task are easy to find.
- **Easy-to-follow steps** - each step leads logically to the next.
- **Correct shapes and labels** - every step uses the right shape and a short, clear name.
- **Connected steps** - arrows link every step, with solid lines going forward and dotted lines going back.

## User flows change

A user flow is never final. If your research or your problem statement changes, the flow changes too. For example, if testing shows that many WashSlot users first want to read the house rules, you might add a side branch from the home screen to a "House rules" screen and back.

You don't need a separate flow for every possible situation. Focus on the flows that most users will follow, and consider the most important [edge cases](../design-process/07-user-stories-and-edge-cases).

In real jobs, you will often work on existing products with established flows. There, research may show that screens should be reorganized, merged, or removed. Whether the product is new or existing, users' needs always come first.

::: tip Key takeaway
A user flow maps the path a typical user takes to complete one task. Use circles for actions, rectangles for screens, diamonds for decisions, and arrows for direction. Start from your goal statement, list the steps, draw the diagram, and keep it as simple as possible.
:::
