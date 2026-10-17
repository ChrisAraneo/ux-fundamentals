# Links, buttons, and inputs

Mockups contain more than text, color, and icons. Users also need to tap things and type things. This page covers three interactive elements you'll use on almost every screen: links, buttons, and inputs.

## Links

A **hyperlink** (or simply link) takes users from one page, screen, or file to another. On the web, the classic style is blue, underlined text, and many people still recognize links by that look.

### How to design good links?

1. **Keep pages uncluttered** - links help people move around, but too many of them make a page hard to read. Link only what's useful.
2. **Respect conventions** - if text is underlined, people expect it to be a link. Don't underline text just for emphasis.
3. **Expect variety** - a brand may use a different link color, and images can be links too. For example, most people expect a company's logo to take them to the home page.
4. **Describe the destination** - the link text should say where it leads. Instead of "Click here", write "Read the house rules". Descriptive links also help screen reader users, who often jump from link to link.

## Buttons

**Buttons** let users take an action, such as "Save", "Cancel", or "Book a slot".

### How to design good buttons?

1. **Make buttons look like buttons** - people recognize buttons by their shape, size, and color. Rectangles, rounded rectangles, and pill shapes work; a star-shaped button would be confusing. Common styles include filled buttons with square or rounded corners, filled buttons with a shadow, and **outlined buttons** (sometimes called ghost buttons), which have a border but no fill.
2. **Show importance** - use a filled button for the main action on a screen and an outlined or text button for secondary actions. One main action per screen is a good rule.
3. **Stay consistent** - use the same button styles throughout the product, so people learn quickly what's tappable.
4. **Leave space** - add **padding** (space inside the button, around the label) and negative space around it. This makes buttons easier to tap and reduces accidental taps on the wrong one. Platform guidelines recommend touch targets of at least 44 × 44 points on iOS and 48 × 48 dp on Android.
5. **Use clear labels** - start with a verb that says what will happen: "Book a slot", not "OK".

*WashSlot example:* the summary screen has one filled, deep-teal "Confirm booking" button at the bottom, full-width and 56 px high, so it's easy to reach with a thumb. Above it, "Change time" is an outlined button, so it's clearly the less important option.

## Inputs

**Inputs** (or text fields) are the places where users enter information, such as a name, an email address, or a date. A good input makes it obvious what belongs in it, and it's big enough for the information.

### How to design good inputs?

1. **Use a visible label** - put a short label above every input, such as "Flat number". Labels stay visible while users type, which helps people with memory or attention difficulties.
2. **Give hints** - **hint text** (also called ghost text) shows an example of the expected format, such as "e.g. 4B" or "DD/MM/YYYY". It's usually lighter than other text and disappears when users start typing, so it should never replace the label.
3. **Choose the right keyboard** - on mobile, show a number keyboard for phone numbers and an email keyboard for email addresses.
4. **Group long forms** - if a screen has more than about six inputs, group them into sections with headings, such as "Personal details" and "Contact details". Groups make long forms feel shorter and show users how far they've come.
5. **Explain errors clearly** - show what went wrong and how to fix it, next to the input, with text and an icon, not only a red border.

*WashSlot example:* when residents sign up, the app asks for only three things: first name, flat number, and email address. The flat number input has the label "Flat number" and the hint text "e.g. 4B". If a resident types a number that doesn't exist in the building, the message "We couldn't find this flat. Check the number on your door." appears under the field with a warning icon.

::: tip Key takeaway
Links should look like links and say where they lead. Buttons should look tappable, show which action matters most, have enough padding, and use clear verb labels. Inputs need visible labels, helpful hints, the right keyboard, logical groups, and clear error messages.
:::
