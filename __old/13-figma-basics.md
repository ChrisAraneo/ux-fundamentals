# Figma basics

## Overview

This guide covers how to use **styles** and **components** in Figma to keep your designs consistent and save time. You'll learn to create reusable elements and build complete mockups for your website.

## Saving styles

### What are styles?

**Styles** are saved colors, text, and effects you can reuse. Change a style once, and it updates everywhere automatically.

### Why save styles?

- **Consistency:** - ensures your design looks cohesive across all pages
- **Efficiency:** - change a style once, updates everywhere automatically
- **Collaboration:** - team members can use the same styles
- **Professionalism:** - shows you understand systematic design thinking
- **Scalability:** - easy to maintain designs as they grow
- **Accessibility:** - helps maintain contrast ratios and readability standards

### How to save color styles

1. **Select** the design element with the color you want to save
2. Look at the **Design** tab on the right sidebar
3. Find the **Fill** section
4. Click the **four squares icon** to the right of the Fill section
5. Click the **plus sign (+)** to add and name the color
6. Give it a descriptive name (e.g., "Primary Blue", "Accent Orange", "Background Gray")

**Example naming convention:**
- Primary Button Color
- Heading Text Color
- Background White
- Border Light Gray
- Accent Red

**Pro tip:** Use descriptive names that indicate where or how the color is used, not just "Blue 1" or "Red 2". This helps you (and your team) understand the purpose of each color.

### How to save text styles

1. **Select** the text element you want to save as a style
2. In the **Design** tab (right sidebar), look at the text properties
3. Click the **four squares icon** next to the text properties
4. Click the **plus sign (+)** to add and name the text style
5. Name it descriptively

**Common text styles to create:**
- Heading 1 (H1)
- Heading 2 (H2)
- Heading 3 (H3)
- Body Text
- Button Text
- Caption Text
- Link Text
- Navigation Text

**What gets saved in a text style:**
- Font family (e.g., Roboto, Helvetica)
- Font weight (regular, bold, light)
- Font size
- Line height
- Letter spacing
- Text alignment
- Color

**Note:** Creating text styles enforces **typographic hierarchy**, making your designs more professional and user-friendly.

### How to save effect styles

Effects include shadows (drop shadows, inner shadows), blurs (layer blur, background blur), and other visual effects.

1. Select the element with the effect you want to save
2. Go to the **Design** tab
3. Find the **Effects** section
4. Click the **four squares icon**
5. Click the **plus sign (+)** to add and name the effect

**Common effects to save:**
- Button Shadow
- Card Drop Shadow
- Hover State Glow
- Image Overlay

### How to save stroke styles

**Strokes** are borders around elements.

1. Select element with the stroke you want to save
2. In **Design** tab, find **Stroke** section
3. Click the **four squares icon**
4. Click the **plus sign (+)** to add and name the stroke

**Common stroke styles:**
- Input Field Border
- Divider Line
- Card Outline

## Creating components

### What are components?

**Components** are reusable design elements like buttons, icons, and cards. They're like templates you can copy throughout your design.

### How to create a component

1. **Select the layers** you want to include in the component
   - For a button: include the rectangle background + text + icon
   - For a card: include the container + image + text + button
2. Click **Create component** in the toolbar
3. Figma creates a special component frame with a **purple icon** in the Layers panel

**Visual indicator:** Component frames have purple diamond icons (◆) in the Layers panel, distinguishing them from regular frames.

### Understanding the component system

#### Main component vs. instance

**Main component (Master):**
- The original component you created
- Purple diamond icon ◆
- Changes here affect ALL instances
- Think of it as the "master template"

**Instance (Copy):**
- A copy of the main component
- Purple diamond outline icon ◇
- Linked to the main component
- Receives updates when main component changes
- Can have minor individual customizations (overrides)

**Update the main componen**t once, and all instances update automatically across your entire design.

### How to use components

**Accessing components:**
1. Open the **Assets panel** (left sidebar)
2. Find your component
3. Drag it onto your canvas
4. This creates an **instance** of the component

**Placing instances:**
- Click and drag from Assets panel
- Instances can be placed anywhere in your document
- Use as many instances as needed

### Common components to create

**For a website design, create components for:**

**Navigation elements:** Navigation bar, menu items, and breadcrumbs.

**Interactive elements:** Primary buttons, secondary buttons, text links, and icon buttons.

**Content containers:** Product cards, blog post cards, team member cards, and testimonial boxes.

**Form elements:** Input fields, checkboxes, radio buttons, and dropdown menus.

**Media elements:** Image placeholders, video containers, and icon sets.

**Layout elements:** Headers, footers, sidebars, and grid sections.

### Component variants

Component variants let you group related components together with different states or options. Variants keep your components organized and make switching between states easy.

**Example: Button component with variants**
- Default state
- Hover state
- Active/pressed state
- Disabled state

**Example: Card component with variants**
- Horizontal layout
- Vertical layout
- With image
- Without image

### Benefits of using components

- **Consistency** - keeps familiar patterns across all pages
- **Efficiency** - no need to recreate elements from scratch
- **Easy updates** - change once, updates everywhere
- **Professional quality** - shows systematic design thinking

## Best practices

### Working with styles

**DO:**
- Create styles early in your design process
- Use descriptive names that indicate purpose
- Organize styles by category (colors, headings, body text)
- Document your color palette and typography choices
- Limit your color palette (3-5 main colors typically)
- Limit your font families (1-2 fonts usually sufficient)

**DON'T:**
- Create too many similar styles (leads to confusion)
- Use vague names like "Style 1" or "Blue"
- Skip creating styles "to save time" (costs more time later)
- Change colors/fonts manually instead of using styles

### Working with components

**DO:**
- Create components for any element you'll use more than once
- Name components clearly and descriptively
- Organize components in the Assets panel
- Test components before creating many instances
- Update the main component when you need to change all instances
- Use component variants for different states

**DON'T:**
- Create components for one-off elements
- Detach instances unnecessarily (breaks the connection)
- Forget to update the main component when changes are needed
- Create duplicate components instead of using variants

### Completing your mockups

**DO:**
- Work systematically (top to bottom)
- Reference your wireframes but allow for improvements
- Maintain consistency across all pages
- Use grids to align elements
- Check spacing and alignment carefully
- Review your work regularly
- Get feedback before moving to prototyping

**DON'T:**
- Rush through below-the-fold content
- Create different button styles on different pages
- Ignore spacing inconsistencies
- Skip creating mockups for important pages
- Forget to use your established styles and components
