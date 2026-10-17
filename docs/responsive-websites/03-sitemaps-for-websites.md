# Sitemaps for websites

## Why a website needs a sitemap

A **sitemap** maps out every page of a website or app in one diagram, showing which pages matter most, how they connect, and what they're called. You drew one for the WashSlot app in [Chapter 3](../wireframes-and-prototypes/05-information-architecture). For a website, a sitemap is just as useful, and often more important, because websites tend to have more pages than apps.

A sitemap helps in several ways:

- **It reveals gaps and duplicates** - when you see all pages at once, you notice pages you forgot, pages you don't need, and pages you can merge.
- **It shows the paths users take** - you can check that every important page is easy to reach and see where extra links might help.
- **It helps search engines** - a structured list of pages helps search engines such as Google understand and **index** the website, so new visitors can find it through search.
- **It supports accessibility** - a clear, predictable structure helps everyone, and especially people using screen readers or keyboards, move through the website efficiently.

Fixing a missing page in a diagram takes minutes. Fixing it after the website is built takes days, so a sitemap saves the team time and money.

## Parts of a hierarchical sitemap

Most websites start with a hierarchical sitemap, built from rectangles and lines:

1. **Homepage** - the rectangle at the top. Almost every website has one, and it's usually where visitors arrive first.
2. **Parent pages** - the row of rectangles directly below the homepage. These are the main categories, and they usually become the items in the main navigation bar.
3. **Child pages** - the columns of rectangles below each parent page. These are the subcategories. Parent pages don't need the same number of children.

## How to build a sitemap

1. **Look at common pages** - think about pages that most websites of this type have, such as a homepage, search results, a product page, a cart, or an account page. Your competitive audit is a great source: note which pages appear on almost every competitor's website.
2. **Return to your research** - review your personas, user stories, and journey maps. List the actions users take to reach their goals, and make sure each action has a page.
3. **Choose a structure** - decide whether the website is hierarchical, sequential, matrix, database, or a mix. If you start from a common structure, you can use a ready-made sitemap template.
4. **Start with the homepage** - place it at the top. It's the entry point and the first impression of your product.
5. **Add the main categories** - add the parent pages in a row below the homepage. Keep the labels short and clear, because they'll become navigation links.
6. **Add the subcategories** - add the child pages below each parent. Then step back and look for pages to merge, rename, move, or remove.

Expect the sitemap to change. It's a planning tool, not a contract, and you'll refine it as you sketch and test.

## Flat and deep sitemaps

The size of a website affects the shape of its sitemap:

- **Flat sitemap** - has no more than four levels from top to bottom. It's typical for small websites with fewer than about 100 pages.
- **Deep sitemap** - has five or more levels. It's typical for very large websites with a thousand pages or more, such as big online stores or news websites.

Flatter is usually easier for users, because they reach any page in a few clicks. If your sitemap grows deep, check whether some levels can be combined.

## Example: the WashSlot website sitemap

The designer builds the sitemap in six steps.

1. **Common pages** - competitors' websites all have a live status page, a booking calendar, an account area, and a page with rules. Two of them also have a news page.
2. **Research** - the journey maps show that residents check status first, then book, and later look up their bookings. Grace often asks the caretaker about house rules, and Kofi struggles with the program names printed on the machines.
3. **Structure** - hierarchical, with a sequential booking flow and a searchable guide, as described in [Website structures](./02-website-structures).
4. **Homepage** - the homepage shows the live status of all machines, because that's the first thing every persona wants to know.
5. **Main categories** - "Book a slot", "My bookings", "Laundry guide", "Notices", "Report a problem", and "Account".
6. **Subcategories** - added below each category, as shown below.

```
Home (live machine status)
├── Book a slot
│   ├── Choose day and time
│   ├── Summary
│   └── Confirmation
├── My bookings
│   ├── Upcoming
│   └── Past
├── Laundry guide
│   ├── Machines and programs
│   ├── House rules
│   └── Search the guide
├── Notices
├── Report a problem
└── Account
    ├── Profile and flat number
    ├── Reminders
    └── Display and language
```

The footer, which appears on every page, links to "Contact the board", "Accessibility statement", and "Privacy".

With only three levels, this is a flat sitemap. While drawing it, the designer notices two problems. First, "Notices" had no way to reach residents who rarely visit the website, so the latest notice will also appear on the homepage. Second, an early draft had separate pages for "Washing machines" and "Dryers", which the designer merges into "Machines and programs", because residents treat them as one topic.

::: tip Key takeaway
A sitemap shows how a website's pages are prioritized, linked, and named. It reveals missing or unnecessary pages early, helps search engines index the website, and supports accessibility. Build it from common pages and your research: start with the homepage, add parent pages, then child pages. Small websites usually have flat sitemaps with four levels or fewer.
:::
