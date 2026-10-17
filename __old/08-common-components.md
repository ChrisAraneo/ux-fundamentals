# Common components

![Common components](/images/common-website-components.png)

## Quick reference table

| Element | Description | Use Case |
|---------|-------------|----------|
| **Headings** | Titles or subtitles that organize content into clear sections using hierarchical levels (H1-H6). Larger and bolder than body text with increased spacing to establish visual hierarchy and content structure | Organizes content for visual scanning and enables screen reader navigation to specific sections |
| **Hamburger menus** | Collapsible navigation with three-line icon. Hide full navigation lists behind a clickable icon, revealing them only when needed (vs. showing all navigation links at once) | Condenses navigation lists for small screens |
| **Cards** | Surfaces containing content about a single subject. Fit related information into compact, stackable units that can be arranged efficiently in vertical columns on narrow screens | Organizes information in scannable, stackable units |
| **Carousels** | Scrollable feeds of images or cards. Allow multiple images/items to occupy the same horizontal space by letting users swipe through them sequentially (vs. displaying all items side-by-side) | Displays multiple items in limited horizontal space |
| **CTA buttons** | Call-to-action buttons that prompt users to take specific actions. Feature prominent styling with action-oriented text (e.g., "Get Started", "Buy Now", "Sign Up") to drive conversions and guide users toward desired outcomes | Drives user actions and conversions with clear, visible prompts |
| **Icons** | Simple visual symbols replacing text labels in mobile interfaces. Provide compact shortcuts for common actions (search, cart, account, menu) using universally recognized imagery instead of words | Maximizes limited screen space while maintaining functionality |

## Headings

### Purpose

Headings are titles or subtitles that organize website content into clear sections and establish visual hierarchy. They help all users navigate and scan content efficiently while enabling screen reader users to jump directly to specific sections without experiencing the entire page sequentially.

### Visual characteristics

- Larger font size than body text (H1: 32-48px, H2: 24-32px, H3: 20-24px)
- Bolder weight than surrounding text (600-700)
- Increased spacing above and below (16-32px margins)
- Clear visual hierarchy showing importance levels

### Functionality

**Visual hierarchy support:**
- Creates clear organizational structure for sighted users
- Guides eye movement through page content
- Enables quick content scanning and comprehension

**Screen reader navigation:**
- Screen readers navigate via headings menu
- Users listen to list of all headings at once
- Users jump directly to desired heading
- Dramatically faster than listening to entire page

### Placement and usage

**Heading hierarchy:**
- **H1** - main page title (one per page)
- **H2** - major section headings
- **H3** - subsections within H2 sections
- **H4-H6** - further nested subsections as needed

**Best practices:**
- Never skip heading levels (H1 → H2 → H3, not H1 → H3)
- Don't use headings for styling only
- Maintain logical document outline
- Keep heading text concise (5-10 words maximum)
- Annotate heading levels in wireframes for developer handoff
- Test with screen readers to verify navigation flow

## Hamburger menu icon

### Purpose

The hamburger menu icon toggles hidden navigation menus, primarily for responsive web design. It saves screen space, maintains clean interfaces, and provides a universally recognized symbol for collapsed navigation on mobile and small screens.

### Visual characteristics

- Three horizontal lines stacked vertically with equal spacing
- Uniform line thickness and equal length
- Minimal, unambiguous design
- Monochromatic, matching site color scheme
- Square aspect ratio (approximately 1:1)
- Typical size: 24x24px to 48x48px

### Functionality

**Primary interaction:**
- Tap/click opens hidden navigation menu
- Often transforms visually when active (e.g., rotates to "X")
- Triggers slide-out panel, dropdown, overlay, or full-screen navigation
- Second tap/click closes the menu

**Accessibility:**
- Include ARIA labels (`aria-label="Menu"` or `aria-label="Toggle navigation"`)
- Must be keyboard accessible (Tab + Enter/Space)
- Announce state changes to screen readers
- Minimum touch target: 44x44px

### Placement and usage

**Optimal placement:**
- **Mobile** - top-left corner (most common) or top-right corner (RTL interfaces)
- **Desktop/Tablet** - less common; used in header when full navigation doesn't fit
- **Fixed position** - often remains visible while scrolling

**When to Use:**
- Mobile-first responsive websites
- Applications with extensive navigation options
- Interfaces prioritizing content over navigation

**Best practices:**
- Maintain consistent placement across pages
- Ensure sufficient color contrast (4.5:1 minimum)
- Consider pairing with "Menu" label for clarity
- Provide visual feedback on hover/tap
- Open menu quickly (< 300ms) with smooth animation

## Cards

### Purpose

Cards are container components that group related content and actions into digestible units. They organize information into scannable sections, provide clickable surfaces for navigation, and adapt responsively to different screen sizes.

Common uses: product listings, article previews, user profiles, dashboard widgets, and feature highlights.

### Visual characteristics

**Container:** Defined boundaries with white/light background, subtle drop shadows (1-8dp elevation), rounded corners (2-8px), internal padding (16-24px)

**Structure:** Header (title, icon), media area (image/video, optional), body content (text, data), footer (buttons, metadata)

**Typography:** Title (18-24px), body (14-16px), metadata (12-14px)

**States:** Default, hover (elevated shadow), active (scale reduction), focus (visible outline), disabled (reduced opacity)

### Functionality

**Interaction types:**
- **Clickable** - entire card navigates to detail page
- **Action-based** - multiple buttons for specific actions
- **Informational** - display-only with possible interactive elements
- **Expandable** - reveals additional content on interaction
- **Selectable** - multi-select with checkboxes

**Features:** Dynamic updates, lazy loading, filtering/sorting, keyboard navigation, screen reader support, semantic HTML with ARIA labels, minimum touch targets (44x44px)

### Placement and usage

**Layout patterns:**
- **Grid** - responsive columns (1 mobile, 2-3 tablet, 3-4 desktop) with 16-32px gaps
- **List/Feed** - single column, full-width stacked vertically
- **Masonry** - variable heights for dynamic layouts
- **Dashboard** - mixed sizes (1x1, 2x1, 2x2) for metrics

**Best practices:**
- Keep content concise and scannable
- Use high-quality, optimized images
- Maintain consistent styling (padding, shadows, typography)
- Stack vertically on mobile with proper breakpoints
- Ensure 4.5:1 color contrast for accessibility

**When to use:**
Collections of similar content, browsable catalogs, content previews

**When to avoid:**
Simple lists, dense data tables, sequential forms, long-form reading content

**Common types:**
Product cards, article cards, profile cards, media cards, statistic cards, action cards

## Carousel

### Purpose

Carousels are interactive components that display multiple content items in a rotating slideshow format. They maximize screen space by showing one item at a time while allowing users to browse through a collection sequentially or automatically.

Common uses: featured content highlights, product showcases, image galleries, testimonials, and promotional banners.

### Visual characteristics

**Container:** Fixed-width/height viewport with overflow hidden, displaying one slide at a time

**Structure:** Content slides (images, text, or mixed), navigation arrows (left/right), indicator dots/thumbnails, optional auto-play controls

**Transitions:** Slide, fade, or custom animations (typically 300-600ms duration)

**States:** Active slide (fully visible), inactive slides (hidden or partially visible), hover (reveals controls), focus (keyboard navigation indicators)

### Functionality

**Navigation methods:**
- **Arrow buttons** - previous/next controls on left/right edges
- **Indicator dots** - clickable position markers below carousel
- **Touch gestures** - swipe left/right on mobile devices
- **Keyboard** - arrow keys for navigation, Tab for focus
- **Auto-play** - automatic rotation with configurable interval (3-5 seconds typical)

**Features:** Infinite loop (cycles back to start), pause on hover/interaction, lazy loading for performance, responsive resizing, optional thumbnails preview

**Accessibility:** ARIA roles (`role="region"`, `aria-roledescription="carousel"`), keyboard navigation, pause controls, screen reader announcements for slide changes

### Placement and usage

**Layout patterns:**
- **Hero section** - full-width at top of page for featured content
- **Product gallery** - product detail pages with image carousel
- **Content showcase** - homepage sections highlighting features or offerings
- **Testimonials** - customer reviews or quotes rotation

**Best practices:**
- Limit to 3-7 slides for optimal engagement
- Use clear, visible navigation controls
- Provide pause/play controls for accessibility
- Ensure touch targets minimum 44x44px
- Include alternative navigation (not carousel-only)
- Avoid auto-play for text-heavy content

**When to use:**
Featured content rotation, image galleries, space-constrained showcases

**When to avoid:**
Critical information (may be missed), content requiring comparison, forms or interactive elements within slides, more than 7-10 slides

**Common types:**
Image carousel, content carousel, product carousel, testimonial carousel, banner carousel

## Call-to-action buttons

### Purpose

Call-to-action (CTA) buttons prompt users to take specific, desired actions that drive conversions and achieve business goals. They guide users through the customer journey by providing clear next steps and reducing decision paralysis.

Common uses: Sign-ups, purchases, downloads, subscriptions, form submissions, navigation to key pages, and lead generation.

### Visual characteristics

**Container:** Rectangular shape with rounded corners (4-8px), solid background color (high contrast with page), clear padding (12-16px vertical, 24-48px horizontal)

**Typography:** Bold or medium weight (500-700), larger than body text (16-18px minimum), sentence case or title case, action-oriented verbs

**Colors:** Primary brand color for main CTA, high contrast with background (4.5:1 minimum), secondary/tertiary CTAs use outline or muted colors

**States:** Default (solid color), hover (darker shade or elevation), active (pressed appearance), focus (visible outline), disabled (grayed out, reduced opacity)

### Functionality

**Primary actions:**
- **Submit forms** - complete purchases, registrations, or data submissions
- **Navigate** - direct users to landing pages, product details, or key sections
- **Download** - trigger file downloads or app installations
- **Share/Save** - enable social sharing or content bookmarking
- **Contact** - open contact forms, chat, or email clients

**Interaction behavior:** Single click/tap triggers action, provides immediate feedback (loading states, confirmation messages), prevents double-submission, accessible via keyboard (Enter/Space)

**Features:** Clear action text (2-5 words), sense of urgency when appropriate ("Get Started Now", "Limited Offer"), tooltip on hover for additional context, icon support for visual reinforcement

### Placement and usage

**Strategic placement:**
- **Hero section** - primary CTA above the fold for maximum visibility
- **End of content** - after value proposition or product description
- **Navigation bar** - top-right corner for persistent access
- **Modals/Forms** - bottom-right or centered for form submission
- **Cards** - bottom or top-right within card boundaries

**Best practices:**
- One primary CTA per section to avoid confusion
- Use action verbs ("Buy", "Start", "Join", "Download", "Learn")
- Create visual hierarchy (size, color, position)
- Ensure minimum touch target size (44x44px)
- Place where users naturally look (F-pattern, Z-pattern)
- Test with A/B testing for optimal performance

**When to use:** Driving conversions, guiding user flow, highlighting primary actions, completing transactions

**When to avoid:** Overusing multiple CTAs that compete for attention, unclear value proposition, premature asks before establishing trust

**Common types:** Primary CTA (most important action), secondary CTA (alternative action), tertiary CTA (low-priority action), floating/sticky CTA (persistent visibility)

## Icons

### Purpose

Icons replace text labels in mobile interfaces to maximize limited screen space while maintaining functionality. They serve as compact visual shortcuts for quick recognition and interaction, reducing clutter and improving navigation efficiency on small screens.

### Visual characteristics

**Structure:**
- Simple, recognizable symbols representing actions or concepts
- Minimal visual complexity for quick comprehension
- Consistent visual style across entire interface
- Monochromatic or limited color palette
- Typical size: 24x24px to 48x48px

**Variations:** Filled vs. outlined styles, active vs. inactive states, labeled icons (icon + minimal text), icon badges (notification counters)

### Functionality

**Space efficiency:**
- Reduces horizontal space by 60-80% compared to text labels
- Allows more navigation options in limited screen width
- Frees vertical space for primary content

**User benefits:**
- Faster visual scanning than reading text
- Language-independent communication
- Instant recognition for common actions
- Reduced cognitive load through familiar symbols

**Common icon replacements:** Search becomes magnifying glass, Shopping Cart becomes cart icon, User Account becomes person/avatar, Menu becomes hamburger icon, Share becomes share arrow, Favorites becomes heart, Settings becomes gear, and Home becomes house.

### Placement and usage

**Optimal placement:**
- **Top navigation** - primary actions (search, cart, account) right-aligned
- **Bottom navigation** - 3-5 main sections as icon-only tabs
- **Floating action buttons** - primary action icon prominently displayed

**When to use icons:** Screen width under 768px, universally recognized actions, repeated actions across screens, status indicators requiring minimal space

**When to keep text:** Primary CTAs (conversions matter), unfamiliar actions, complex concepts, first-time experiences, accessibility-critical actions

**Best practices:**
- Use standard, widely-recognized icons
- Maintain minimum 44x44px touch targets
- Provide aria-label for screen readers
- Test icon recognition with users
- Ensure 3:1 minimum color contrast

**Responsive strategy:**
Desktop (text + icons), Tablet (selective mix), Mobile (icon-only for secondary actions, labeled for primary CTAs)

## Choosing components for your project

1. **Navigation needs**
   - How many navigation items?
   - Will they fit horizontally on mobile?
   - Consider: Hamburger menu

2. **Content volume**
   - Lots of similar items to display?
   - Need scannable organization?
   - Consider: Cards

3. **Visual content**
   - Multiple images to showcase?
   - Limited screen space?
   - Consider: Carousel

4. **User actions**
   - Key actions users should take?
   - Need to drive conversions?
   - Consider: CTA buttons

## Flyout menu

### Purpose

Flyout menu is a hidden navigation panel that slides out from the screen edge when triggered, typically by a hamburger menu icon. It shows navigation options without cluttering the main screen.

### Visual characteristics

- Vertical panel that slides from screen edge
- Width: 250-350px on desktop, 70-85% on mobile
- Different background color from main content
- Shadow or blur to separate from page
- Dark overlay on remaining screen (optional)
- Smooth slide-in animation

### Functionality

**Primary interaction:**
- Opens when you tap hamburger menu icon
- Slides in from left or right edge
- Shows navigation links in a vertical list
- Closes with close button (X), tapping outside, or selecting a link

**Accessibility:**
- Include ARIA labels (`role="navigation"`, `aria-label="Main menu"`)
- Keyboard accessible (Tab + Enter/Space)
- Close with Escape key
- Minimum touch target: 44x44px

### Placement and usage

**Optimal placement:**
- **Mobile** - slides from left edge (most common) or right edge
- **Desktop/Tablet** - less common; used when navigation doesn't fit
- **Fixed position** - stays visible while scrolling

**When to use:**
- Mobile websites with multiple navigation items
- Clean layouts with hidden navigation
- Sites with many menu options

**Best practices:**
- Keep menu under 85% of screen width
- Include clear close button (X) in top corner
- Add dark overlay for separation
- Animate smoothly (200-300ms)
- Ensure 44x44px minimum touch targets

## Challenges and solutions

### Challenge 1: "Too much navigation to fit in flyout menu"

**Solutions:**
- Group related items under category headers
- Use accordion pattern (collapsible sections)
- Prioritize—remove truly unnecessary items
- Consider second level of flyout for subcategories
- Use search functionality to reduce visible navigation

### Challenge 2: "Hero image looks bad when scaled down"

**Solutions:**
- Use different crop/aspect ratio for mobile
- Choose mobile-specific hero image if needed
- Focus on different part of image (reposition, not just scale)
- Consider using smaller, more focused image
- Test with actual content, not just placeholder

### Challenge 3: "Desktop layout has 4 columns, how do I adapt?"

**Solutions:**
- **Option 1:** Stack vertically (1 column)
- **Option 2:** Use 2 columns if items are small
- **Option 3:** Use carousel/slider for horizontal browsing
- **Option 4:** Show fewer items with "see more" option
- Choose based on content type and user needs

### Challenge 4: "Text becomes unreadable when scaled down"

**Solutions:**
- Don't just scale—reset text sizes for mobile
- Use mobile-specific text styles
- Increase line height for better readability
- Reduce text amount (be more concise)
- Increase contrast for better visibility
- Test on actual device screens

### Challenge 5: "Components from desktop don't work on mobile"

**Solutions:**
- Create mobile-specific component variants
- Use component properties for responsive behavior
- Build separate mobile component library
- Detach instances and customize for mobile (if necessary)
- Document differences between desktop and mobile components

## Image attributions

- https://www.pexels.com/pl-pl/zdjecie/burger-z-plasterkami-warzyw-z-bliska-fotografia-2702674/
