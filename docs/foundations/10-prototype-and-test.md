# Prototype and test

This page covers the last two phases of design thinking. In the **prototype** phase, you build early models of your solution. In the **test** phase, you try them with users. These two phases are closely connected and usually repeat in cycles.

## Phase 4: Prototype

The goal of prototyping is **not** to build the final product. A **prototype** is an early model that shows how the solution will look and work, so you can test it with users and show it to stakeholders. Designers use several tools to get from an idea to a prototype.

### Information architecture and sitemaps

**Information architecture (IA)** is the way information in a product is organized, categorized, and structured, so that users can find their way easily. To plan IA, designers often draw a **sitemap**, a diagram that shows the pages of a product and how they connect.

A good sitemap shows two things:

- **Hierarchy** - which topics are main ones and which are subtopics inside them. For example, "Catalog" is a main section that contains smaller sections like "Crime novels" and "Children's books".
- **Sequence** - the order in which users move through the hierarchy, for example from "Home" to "Catalog" to "Crime novels" to a specific book.

*Library example:* research showed that most members want one thing: to reserve a book quickly. So the designer places a large search field and a "Reserve a book" path right on the home page. The sitemap looks like this:

```
Home
├── Catalog
│   └── Book details
│       └── Reserve and choose pickup (desk or locker)
├── My account
│   ├── My reservations
│   └── Pickup codes
└── Visit us
    ├── Opening hours
    └── How the 24/7 locker works
```

### Wireframes

**Wireframes** are simple sketches of screens that bring the sitemap to life. They show how each page is laid out, where each element goes, and how users move from one page to another. Wireframes are intentionally basic: mostly boxes, lines, and a little text.

There are two kinds of wireframes:

1. **Paper wireframes** - quick sketches on paper. Horizontal lines stand for text, boxes with an "X" stand for images, and simple shapes stand for buttons. They are cheap and fast, so you can try many versions.
2. **Digital wireframes** - wireframes made in a design tool such as Figma or Penpot. They use grayscale, simple shapes, and placeholder text to show the structure of the screen more precisely.

### Fidelity

In UX, **fidelity** describes how closely a design resembles the final product. Prototypes are usually described as low fidelity or high fidelity.

### Low-fidelity prototypes

A **low-fidelity (lo-fi) prototype** is a simple, interactive model that gives a basic idea of how the product will look and how users will move through it. Designers often create one by connecting their wireframes, so that clicking a button opens the next screen. Lo-fi prototypes let you test ideas early, before you spend time on details.

### High-fidelity prototypes

A **high-fidelity (hi-fi) prototype** looks and works as close to the final product as possible. It includes real colors, typography, images, content, and interactions, although some content may still be realistic placeholders. A hi-fi prototype is not the finished product, but it lets testers and stakeholders experience the product almost as if it were real, which leads to richer feedback.

### Look back while you prototype

During prototyping, keep returning to your earlier work. Ask whether the layout, flow, and look of the prototype solve the problems you described in the define phase. *Library example:* Can Leo reserve a book on his phone during a short break? Can Irena read every screen comfortably with large text and still feel a personal connection to the library?

## Phase 5: Test

Testing shows how real people **think, feel, and behave** when they use your design. Testing usually happens in cycles with prototyping: you test a sketch, improve it, test a lo-fi prototype, improve it again, then test a hi-fi prototype. Don't wait until the prototype is perfect, because people give more honest feedback on designs that look unfinished.

### Plan your tests

Good testing starts with a plan. A simple way to build one is to answer six questions:

1. **Who will take part?** - early on, friends, colleagues, or other informal testers are fine. Later, test with real people who match your personas.
2. **What kind of tests will you run?** - for example, a usability study where people try to complete specific tasks.
3. **When and where will the tests happen?** - in person or online, in a lab, an office, or the user's own environment. Choose what fits both your needs and the business requirements.
4. **Why are you testing?** - the two most common reasons are to **validate decisions** made in earlier phases and to **find usability problems** (pain points) that stop users from reaching their goals.
5. **How will participants interact with the prototype?** - make sure the test itself is inclusive and accessible, including support for assistive technology.
6. **How will you collect information?** - for example, by observing participants, interviewing them afterward, or collecting data from the prototype itself.

*Library example:* the designer tests the lo-fi prototype with five members, including two shift workers and one retired member who uses large text. Almost everyone misses the pickup code because it is shown in small text at the bottom of the confirmation. The designer moves the code to the top and makes it much larger, then tests again with a hi-fi prototype.

### From prototype to product

When testing shows that the design is easy to use and solves the defined problem, the prototype is finalized and handed off to **developers**, who build the real product.

::: tip Key takeaway
Prototyping turns ideas into testable models: from information architecture and sitemaps, through wireframes, to low- and high-fidelity prototypes. Testing with real users, based on a clear plan, shows what to improve. Repeat both phases until the design solves the users' problem.
:::
