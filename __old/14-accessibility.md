# Accessibility

## Web Content Accessibility Guidelines (WCAG)

WCAG documents explain how to make web content more accessible to people with disabilities. Most standards focus on incorporating text, sounds, and images in ways that support more users.

There are **three ways to make web designs more accessible**.

## Annotations

**Annotations** are markers placed next to interactive UI elements (like call-to-action buttons) that demonstrate navigation flow.

**Purpose**:
- Indicate the **linear focus order** or **traversal order** for assistive technology like screen readers
- Set the order in which a user would tab through items using a keyboard instead of touchscreen or mouse

**How to use**:
- Use numbers in circles to indicate navigation order
- Show the number of key presses or tabs from one item to the next
- Standard navigation order: upper-left to lower-right
- Annotate any elements that fall outside standard order

**Who uses them**: Engineers use annotations to implement proper navigation order in development.

## Hierarchical headings

**Hierarchy** is a visual design principle that orders elements on a page by importance.

**Headings** are named sections using different font sizes (larger than body text) that show hierarchy and help users navigate.

**Heading tags in HTML**:
- **H1** - Most important heading (often used for titles)
- **H2** - Subtitles or callout boxes
- **H3, H4, etc.** - Further hierarchy levels

**Why they matter**: Specific heading tags allow screen readers to understand page hierarchy and help users navigate from the screen reader menu options more easily.

## Accessibility labels

**Labels** (also called screen reader verbalizations) add descriptive language to interactive UI elements on the webpage.

**What labels should indicate**:
- The purpose of the control
- The type or role of the control

**Example**: A floating action button in Gmail is labeled "compose" and the type is "button."

**Grouping similar controls**:
- Group related controls (like checkboxes) so assistive technology users understand relationships
- Helps users navigate to and from grouped elements quickly

**Who uses them**: Engineers use labels to determine the best implementation for the intended user experience.

### Accessible color and contrast

**Luminosity contrast ratio**: A measurement of contrast between background and text color.

**Best practices**:
- Light background with dark text, OR
- Dark background with light text

**Color combinations to avoid**:
- Red-green (problematic for colorblind users)
- Similar colors like light gray and white (low contrast sensitivity issues)

### Responsive accessibility

When designing responsive websites:
- Ensure all screen sizes are accessible
- Pages should automatically resize and rearrange when users zoom in or increase font size
- Avoid overlapping elements when sections are enlarged
- Create multiple mockup versions: default display and enlarged/zoomed display

**Why it matters**: Communicate different responsive interactions to engineers so magnification and accessibility requirements are built in before full development.

## Resources and standards on accessibility

- **WCAG** - Web Content Accessibility Guidelines
- **ARIA** - Accessible Rich Internet Applications
- **HTML** - HyperText Markup Language (used for heading tags and structure)
- **Material Design** - Google's accessibility design guidelines
- **The A11Y Project** - Community resources for digital accessibility
- **WebAIM** - Contrast and color requirement guidelines

## Accessibility checklist

Ensure that navigation order is annotated, hierarchical headings (H1, H2, H3) are marked, interactive elements have labels, color contrast meets WCAG standards, and responsive behavior is documented.