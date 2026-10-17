# Website structures

## Information architecture for websites

Before you sketch a single page, decide how the website's content is organized. As you learned in [Chapter 3](../wireframes-and-prototypes/05-information-architecture), **information architecture (IA)** organizes content so that people know where they are and where to find what they need. Good IA comes from research: your personas and journey maps tell you what users look for, and your competitive audit shows how similar websites are organized.

For websites, IA matters for the whole team, not only for users:

- **It defines the structure** - an organized website is easier to navigate and easier to extend later.
- **It gives a big-picture view** - you see how all the pages relate before you design any of them.
- **It helps stakeholders review** - they can check that the right content sits in the right place to meet business goals.
- **It helps developers** - they can organize data and code in a way that matches the design, which saves development time.
- **It supports iteration** - a clear structure makes it easier to add, merge, or move pages as the project changes.

## Four common website structures

Most websites follow one of four well-known patterns, or a mix of them. People have used these patterns for years, so they already know how to move around in them.

### Hierarchical model

The **hierarchical model** organizes pages from general to specific, like a family tree. The homepage sits at the top. Below it are the main categories, called **parent pages**, which usually appear in the main navigation. Each parent has more specific **child pages** below it. **Hierarchy** here simply means arranging content by importance: the broadest and most important content sits highest.

This is the most widely used structure. Think of an online bookshop: the homepage leads to "Fiction", "Non-fiction", and "Children's books", and "Fiction" leads to "Crime", "Fantasy", and "Romance".

### Sequential model

The **sequential model** guides users through steps in a fixed order, from the first page to the final one. Users move forward with a "Next" button and sometimes back with "Previous", but they can't jump ahead or skip steps. Sequential structures suit tasks where order matters, such as an online tax form, a job application, or a quiz. Each page has one purpose: to move the user to the next step.

### Matrix model

The **matrix model** links content in many directions, so users choose their own path. From any page, they can reach many other pages through links in the text, related items, and menus. Because everything connects to everything, it's sometimes called the **web model**. A wiki or an online encyclopedia works this way: an article about volcanoes links to articles about earthquakes, islands, and geology.

The matrix model encourages exploration, but it can be hard to navigate if users don't already know what they're looking for. Some designers consider it outdated for that reason. It still works well when the goal is to let people browse a lot of content rather than lead them through a specific task.

### Database model

The **database model** combines a **database**, an organized collection of information, with search and filtering. Instead of browsing a fixed tree of pages, users search, filter, or tag content, and the website builds the results for them. A recipe website where you filter by ingredient, cooking time, and diet uses a database model, and so does an online map where you search for "pharmacy near me".

## Why use a common structure?

1. **Users know them** - people bring expectations from other websites, so a familiar structure feels natural from the first visit.
2. **They make navigation easier** - a clear structure gives you logical places for menus, links, and cues that orient users.
3. **They are proven** - these patterns have been tested and refined by designers and users over many years.
4. **They save time** - you start from a working framework instead of inventing a structure from scratch.

## Choosing and combining structures

There is no single best structure. The right one depends on your content and on what users want to do. In practice, most websites **combine** structures: a hierarchical website might contain a sequential checkout and a database-style search. Treat the four models as starting points. Some brands deliberately break the patterns to create something unusual, but whatever you choose, users must still be able to find their way easily.

*WashSlot example:* the designer combines three structures for the WashSlot website:

- **Hierarchical** - the homepage leads to the main sections: "Book a slot", "My bookings", "Laundry guide", "Notices", and "Report a problem".
- **Sequential** - booking is a strict sequence: choose a day and time, review the summary, and see the confirmation. Residents can go back a step, but they can't reach the summary without choosing a time first.
- **Database** - the "Laundry guide" has a search box and filters, because residents ask very specific questions, such as "Which program is safe for wool?" or "What can go in the dryer?".

The designer considers a matrix structure for the guide, with articles linking to one another, but rejects it: in the research, residents looked for a quick answer, not for something to browse.

::: tip Key takeaway
Information architecture organizes a website's content and helps users, stakeholders, and developers alike. The four common structures are hierarchical (general to specific), sequential (fixed steps), matrix (everything linked), and database (search and filters). Most websites combine them, and the right mix depends on your content and your users' goals.
:::
