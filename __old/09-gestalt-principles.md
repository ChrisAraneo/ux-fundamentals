# Gestalt principles

![Gestalt principles](/images/gestalt-principles.png)

## What are Gestalt principles?

Originating from Gestalt psychology in the 1920s, these principles explain how people naturally group visual elements, recognize patterns, and simplify complex images into organized, meaningful wholes.

Gestalt principles guide how UX designers organize interface elements to create intuitive, visually coherent experiences that align with natural human perception patterns.

## Why they matter?

- **Reduces cognitive load** - helps users process information faster by leveraging natural perception patterns
- **Improves usability** - creates intuitive interfaces that feel natural to navigate
- **Enhances visual hierarchy** - guides user attention to important elements
- **Increases comprehension** - makes complex information easier to understand
- **Strengthens communication** - ensures design intent matches user perception
- **Creates visual harmony** - produces aesthetically pleasing, organized layouts

## 1. Proximity

***Elements close to each other are perceived as related or belonging to the same group.***

**How it works:**
- Spatial distance indicates relationships between elements
- Closer elements = stronger perceived connection
- White space separates unrelated groups

**UX applications:**
- Group form labels with their input fields
- Cluster navigation items into logical sections
- Separate content blocks with white space
- Position related buttons together (e.g., "Save" and "Cancel")

*Example:* Navigation menus group related links together with spacing between different categories.

**Best practices:**
- Use consistent spacing within groups
- Increase spacing between unrelated elements (at least 1.5x internal spacing)
- Don't rely on proximity alone for critical relationships

## 2. Similarity

***Elements sharing visual characteristics (color, shape, size, orientation) are perceived as related or part of the same group.***

**How it works:**
- Similar visual appearance suggests similar function or category
- Works across multiple attributes: color, shape, size, texture, typography
- Overrides proximity when strong enough

**UX applications:**
- Use consistent button styles for similar actions
- Apply same color to all clickable links
- Match card designs for similar content types
- Unify icon styles throughout interface

*Example:* All primary CTA buttons share the same color and style, making them instantly recognizable.

**Best practices:**
- Maintain consistent styling for same element types
- Use visual differences to indicate different functions
- Don't make unrelated elements look similar

## 3. Closure

***People mentally complete incomplete shapes or patterns, filling in missing information to perceive whole objects.***

**How it works:**
- Brain fills gaps to see complete forms
- Works with interrupted lines, partial shapes, negative space
- Allows simplified, minimal designs

**UX applications:**
- Use incomplete circles for loading indicators
- Create icons with minimal lines that suggest full shapes
- Design logos with negative space
- Employ progress indicators with partial fills

*Example:* Hamburger menu icon (three lines) suggests a complete menu without showing all elements.

**Best practices:**
- Ensure missing parts are predictable
- Don't make users work too hard to complete the image
- Test with users to verify recognizability

## 4. Continuity (Continuation)

***Elements arranged on a line or curve are perceived as related and following a path, and the eye naturally follows continuous lines.***

**How it works:**
- Eyes follow smooth paths rather than jumping between disconnected elements
- Prefers continuous, flowing arrangements
- Creates visual flow and direction

**UX applications:**
- Design navigation bars with linear arrangement
- Create visual flow through page layouts (F-pattern, Z-pattern)
- Connect related elements with lines or arrows
- Design step indicators showing sequential progress

*Example:* Breadcrumb navigation creates continuous path showing user location.

**Best practices:**
- Align elements along clear paths (horizontal, vertical, curved)
- Use continuation to guide eye movement toward important content
- Avoid disrupting natural flow with misaligned elements

## 5. Figure/Ground (Figure-Ground)

***People instinctively separate visual elements into foreground (figure) and background (ground), distinguishing objects from their surroundings.***

**How it works:**
- Creates depth and focal hierarchy
- Contrast helps define figure vs. ground
- Can be ambiguous or clearly defined

**UX applications:**
- Use modal overlays with darkened backgrounds
- Create cards with shadows to lift content from background
- Design hero sections with contrasting foreground text
- Employ color contrast to highlight interactive elements

*Example:* Modal dialogs appear as figures over dimmed background, focusing user attention.

**Best practices:**
- Ensure sufficient contrast between figure and ground (4.5:1 for text)
- Use shadows, borders, or color to define separation
- Make important elements clearly distinguishable from background

## 6. Common fate

***Elements moving in the same direction, at the same speed, or changing together are perceived as a unified group.***

**How it works:**
- Synchronized movement creates perceived relationship
- Applies to animation, scrolling, transitions
- Overrides static grouping principles when active

**UX applications:**
- Animate related elements together (e.g., menu items sliding in)
- Scroll related content in sync (parallax effects)
- Show grouped items responding to same interaction
- Transition card sets simultaneously

*Example:* Notification cards dismissing together when "Clear All" is clicked.

**Best practices:**
- Use consistent animation timing for related elements
- Keep animations smooth and synchronized
- Don't overuse—can become distracting

## 7. Symmetry

***Symmetrical elements are perceived as belonging together and forming coherent, stable shapes, even when separated by distance.***

**How it works:**
- Creates sense of balance and order
- Brain naturally seeks symmetrical patterns
- Can be vertical, horizontal, or radial symmetry

**UX applications:**
- Center-align logos and headlines for balance
- Create symmetrical button layouts (e.g., "Cancel" and "Confirm")
- Design balanced grid layouts
- Use symmetrical icon designs

*Example:* Login forms with vertically symmetrical input fields create organized, balanced appearance.

**Best practices:**
- Use symmetry for formal, professional designs
- Break symmetry intentionally to draw attention
- Balance symmetry with visual interest

## 8. Common region

***Elements enclosed within the same boundary (border, background color, container) are perceived as grouped together.***

**How it works:**
- Visible boundaries create strong grouping
- Works with boxes, borders, background colors, containers
- One of the strongest grouping principles

**UX applications:**
- Use cards to contain related information
- Create bordered sections for form groups
- Apply background colors to distinguish content areas
- Design panels or containers for widgets

*Example:* Dashboard widgets enclosed in bordered cards clearly separate different data sets.

**Best practices:**
- Use subtle borders or backgrounds (avoid heavy visual weight)
- Ensure clear visual separation between regions
- Don't over-containerize—can create cluttered appearance

## Applying Gestalt principles in practice

1. **Audit existing designs** - identify which principles are (or aren't) being applied
2. **Plan visual groupings** - decide which elements should be perceived together
3. **Use consistent patterns** - apply principles consistently across entire interface
4. **Test with users** - verify that perceived groupings match intended organization
5. **Iterate based on feedback** - adjust spacing, styling, and organization as needed

## Using Gestalt principles in common components

- **Navigation menus** - Proximity (grouped items) + Similarity (consistent styling) + Common Region (bordered containers)
- **Form design** - Proximity (labels near inputs) + Common Region (fieldsets) + Continuity (vertical flow)
- **Card layouts** - Common Region (borders) + Similarity (uniform cards) + Proximity (grouped within sections)

## Common mistakes to avoid

- **Inconsistent spacing** - undermines proximity principle
- **Too many visual styles** - confuses similarity-based groupings
- **Overcrowding** - prevents clear figure/ground separation
- **Breaking expected patterns** - disrupts continuity and flow
- **Over-reliance on single principle** - combine multiple principles for clarity

## Image attributions

- https://unsplash.com/photos/N7G5xtR28fo
