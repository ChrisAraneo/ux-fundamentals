# Color

## What color does in a design

Color is often the first thing people notice. Think of how a red traffic light makes you stop before you've even thought about it. In UX design, color has several jobs:

- **Emphasis** - a bright button stands out and shows users what to do next.
- **Meaning** - many people link green with "go" or "available" and red with "stop" or "error".
- **Brand** - consistent colors make a product recognizable.
- **Mood** - soft, calm colors feel different from bold, energetic ones.
- **Accessibility** - the right combinations make content readable for everyone; the wrong ones make it disappear.

Keep in mind that color meanings depend on culture. In some places, white is linked with weddings; in others, with mourning. Check what your colors mean to the people you design for.

## The properties of color

- **Hue** - the color family, such as red, green, or blue.
- **Value** - how light or dark a color is. Mix enough white into any color and you end up with white; mix in enough black and you end up with black. Differences in value create contrast.
- **Saturation** - how intense or pure a color is. Highly saturated colors are bold and grab attention, like a highlighter pen. Less saturated colors look muted, and zero saturation leaves only shades of gray.
- **Opacity** - how solid or see-through a color is. At 100%, a color is fully solid; at 50%, you can see what's behind it; at 0%, it's invisible.

## Building a color palette

A **color palette** is the limited set of colors you use across a product. Defining it before you start coloring screens saves time and keeps the design consistent: you always use the same color for the same kind of element.

A popular guideline for balancing a palette is the **60-30-10 rule**:

- **60% neutral** - a calm main color, often white, off-white, or light gray, for backgrounds.
- **30% secondary** - a supporting color for cards, sections, and headers.
- **10% accent** - a strong color for the most important elements, such as primary buttons.

Many apps also have **semantic colors** with fixed meanings, for example green for success, amber for warnings, and red for errors.

*WashSlot example:* the designer picks a calm, clean palette that fits a laundry app:

| Role | Color | Use |
| --- | --- | --- |
| Neutral (60%) | Off-white #F7F9FA | Screen backgrounds |
| Secondary (30%) | Pale teal #DDF1EF | Machine cards and section backgrounds |
| Accent (10%) | Deep teal #00695C | "Book a slot" button and selected day tab |
| Text | Charcoal #1F2933 | Headings and body text |
| Status: free | Green #146C2E | "Free" label with a check icon |
| Status: busy | Dark amber #8A5A00 | "Busy" label with a clock icon |
| Status: out of order | Red #B3261E | "Out of order" label with a warning icon |

The deep teal accent appears only on the actions residents need most, so it naturally draws the eye to them.

## Working with color in Figma

1. **Add a fill** - select a shape, find the **Fill** section in the right panel, and click the color swatch to open the color picker.
2. **Choose the paint type** - at the top of the picker, choose **solid**, **gradient**, **image**, or **video**. A gradient fades between colors and can be linear (in one direction), radial (outward from the center), angular (around a point), or diamond-shaped.
3. **Adjust the color** - drag in the color area, use the hue slider, type a hex code, or use the eyedropper to copy a color from another element.
4. **Set the opacity** - use the opacity slider or type a percentage.
5. **Add a stroke** - in the **Stroke** section, add an outline, choose its color and thickness, and decide whether it sits inside, centered on, or outside the shape's edge.

### How to save a color style?

Select a shape that has the color you want, open the style menu in the Fill section (the icon with four dots), click the plus icon, and name the style, for example "Accent" or "Status/Busy". To reuse it, select another shape and pick the style from the list. If you change the style later, every element that uses it updates.

Color choices aren't locked in. If testing shows a problem, change the color, then update the style and your palette, so your main reference always stays up to date.

::: tip Key takeaway
Color creates emphasis, meaning, mood, and brand recognition, but its meaning depends on culture. Hue, value, saturation, and opacity are the properties you can adjust. Define a limited palette, balance it with the 60-30-10 rule, and save colors as styles so they stay consistent.
:::
