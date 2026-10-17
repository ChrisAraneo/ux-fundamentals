# User stories and edge cases

## User stories

A **user story** is a single invented sentence, written in a persona's voice. It names the type of user, the thing they want to do, and the reason they want it. Some teams call user stories "scenarios" or "use cases". You saw the basic idea in [Chapter 1](../foundations/08-empathize-and-define); here you will learn how to write good ones.

### The user story template

User stories follow a simple template that answers three questions:

> As a **type of user** (who), I want to **action** (what) so that **benefit** (why).

- **Who** - the type of user you are designing for.
- **What** - the action the user wants to take or wants to happen.
- **Why** - the benefit the user gets from that action.

### Why write user stories?

User stories are short, but they do a lot of work:

- **They set priorities** - when you have many user needs, stories help you decide which ones matter most.
- **They unite the team** - everyone works toward the same clearly described goal.
- **They keep design user-centered** - every feature can be traced back to a real need.
- **They convince stakeholders** - you can show how a design change helps a specific type of person, not just "users" in general.
- **They act as a checklist** - later in the project, you can check whether your design actually supports every story.

### WashSlot user stories

Here are user stories for the three WashSlot personas:

- **Tomasz** - As a parent who does laundry every day, I want to see which machines are free from my phone so that I don't waste trips to the basement.
- **Grace** - As a resident who can't hear the machine's signal, I want a visible alert when my cycle ends so that I can collect my laundry on time and avoid conflicts with neighbors.
- **Kofi** - As a student who works evening shifts, I want to book a machine for late at night so that I can do laundry when it fits my schedule.

### How to check your user stories

Compare your stories with these questions:

- **Variety** - do your stories cover a diverse and representative set of personas?
- **Who** - does each story describe the type of user clearly, including their key situation?
- **What** - does each story name a specific action, connected to a real pain point?
- **Why** - does each story show a meaningful benefit, not just the absence of a problem?
- **Length** - is each story short, clear, and to the point?

## Happy paths and edge cases

### The happy path

The **happy path** is the ideal journey through a product: everything works as expected, and the user reaches their goal without any trouble. Designers naturally focus on the happy path first, but real life is rarely that smooth.

### Edge cases

An **edge case** is a rare or unexpected situation that interrupts the normal user experience. Often the cause is outside the user's control, so they can't fix the problem themselves and get stuck.

*Example:* a person living abroad tries to buy a gift on an online shop. The address form requires a postal code in a specific national format. Her foreign postal code is rejected, she can't skip the field, and she has to give up. The designers only imagined local customers.

Good UX design anticipates edge cases and helps users get **back on the happy path** when something goes wrong.

### WashSlot edge cases

The WashSlot designer lists situations that could break the experience:

- **A machine breaks during a booked slot** - the app should mark it as out of order and offer another machine or time.
- **A resident has no smartphone** - bookings should also be possible on a tablet in the laundry room or with the building caretaker.
- **Someone forgets their laundry** - the next user needs a clear and fair rule for what to do, and the owner needs a reminder.
- **The internet connection fails** - the machine status should still be visible in the laundry room.

### How to find edge cases before launch

1. **Create diverse personas and user stories** - the wider the range of users and situations you consider, the fewer people will fall off the happy path.
2. **Review the whole product from the user's perspective** - before launch, go through every flow and ask "What if...?" at each step.
3. **Use wireframes** - simple sketches of screens make it easier to see where a flow might break.
4. **Watch real users** - edge cases often appear only when real people use a product in their real lives. What you expect to happen is not always what actually happens.

::: tip Key takeaway
A user story describes who the user is, what they want to do, and why, in a single sentence. While designing for the happy path, also anticipate edge cases, the rare situations that can block users, and plan ways to get them back on track.
:::
