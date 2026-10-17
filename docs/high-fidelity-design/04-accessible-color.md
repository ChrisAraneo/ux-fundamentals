# Accessible color

## Why color needs extra care

Color helps you draw attention and express a brand, but not everyone sees color the same way. If important information depends on color alone, some users will miss it. Designing with accessibility in mind doesn't only help people with disabilities. Clear contrast also helps someone reading a phone in bright sunlight or in a dim basement laundry room.

The main reference for accessible digital design is the **Web Content Accessibility Guidelines (WCAG)**, published by the World Wide Web Consortium (W3C). WCAG addresses many kinds of disability, including visual, hearing, motor, speech, cognitive, and neurological ones. This page focuses on three things that affect color: color blindness, low contrast sensitivity, and light sensitivity.

## Color blindness

**Color blindness** (also called color vision deficiency) makes it hard to tell certain colors apart. The most common type is red-green color blindness; blue-yellow color blindness is less common, and total color blindness, where a person sees no color at all, is rare.

### How to design for color blindness?

1. **Never rely on color alone** - pair color with an icon, a text label, or a pattern. An error field should show a red outline **and** a warning icon **and** a message such as "Enter a valid email address".
2. **Add patterns or textures** - in charts, give bars or segments different patterns, such as stripes and dots, so they can be told apart without color.
3. **Avoid risky pairs next to each other** - combinations such as red and green, green and brown, blue and purple, green and blue, light green and yellow, and blue or green with gray are hard to distinguish for many people. You can still use these colors, but don't place them side by side for critical information.
4. **Test with a simulator** - color blindness simulators and Figma plugins show how your design looks with different types of color vision.

*WashSlot example:* in the first mockup, the machine status was shown only by a colored dot: green for free, amber for busy, red for out of order. Viewed through a red-green simulator, "free" and "out of order" looked almost the same. The designer added a text label and an icon to every status: a check mark with "Free", a clock with "Busy, free in 25 min", and a warning triangle with "Out of order".

## Low contrast sensitivity

**Contrast sensitivity** is the ability to tell an object from its background. People with **low contrast sensitivity** see objects as dim or blurry. It becomes more common with age, and anyone experiences it in tricky conditions, for example a dark screen in bright light.

**Contrast ratio** measures the difference in brightness (luminance) between text and its background. It ranges from 1:1 (no contrast, such as white on white) to 21:1 (black on white). WCAG sets these minimums for level AA, the level most organizations aim for:

- **Normal text** - needs a ratio of at least **4.5:1**.
- **Large text** - at least **3:1**. "Large" means about 24 px regular or 19 px bold and larger.
- **Icons, input borders, and other important graphics** - at least **3:1** against their surroundings.

The stricter level AAA asks for 7:1 for normal text. You don't have to calculate ratios yourself: online contrast checkers and Figma plugins do it when you enter two hex codes.

*WashSlot example:* the first "busy" label was bright amber #F2B705 on the pale teal card. A contrast checker showed only 1.55:1, far below the minimum. The designer darkened it to #8A5A00, which reaches 5.05:1. The green "free" label on the same card was also checked and darkened from #1B7F3B (4.32:1, just failing) to #146C2E (5.57:1). White text on the deep teal "Book a slot" button reaches 6.61:1.

## Light sensitivity

**Light sensitivity** (photophobia) means that bright light and bright colors cause discomfort or even pain. People with light sensitivity often dim their screens or use **dark mode**. Most operating systems let users choose light mode, dark mode, or a high-contrast mode, and well-designed apps respect that choice.

To support light sensitivity, design both a light and a dark version of your color palette, avoid large areas of very saturated color, and make sure contrast still meets the minimums in both modes.

*WashSlot example:* Kofi often books machines late at night after his shift, so the designer creates a dark version of every mockup. The off-white background becomes dark charcoal, the pale teal cards become a dark teal-gray, and all text and status colors are checked again for contrast.

## Accessibility helps everyone

Accessible color choices follow one simple idea: give every important piece of information **more than one signal**. Color plus an icon, color plus text, color plus a pattern. Then the message gets through, whatever the user's eyes, screen, or surroundings.

::: tip Key takeaway
Never use color as the only way to show information; add icons, labels, or patterns. Meet the WCAG contrast minimums: 4.5:1 for normal text and 3:1 for large text and important graphics. Offer a dark mode for people with light sensitivity, and check your designs with contrast checkers and color blindness simulators.
:::
