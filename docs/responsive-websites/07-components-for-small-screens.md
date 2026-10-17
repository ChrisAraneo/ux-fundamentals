# Components for small screens

## Less space, same features

When a desktop page shrinks to phone size, there's far less room for links, images, and text. You still want visitors to reach every feature, so you need components that save space without hiding important things. Using familiar components helps, because people already know how they work. Elements also need to stay large enough to read and to tap, which may mean shortening text rather than making it smaller.

This page covers five components that appear on almost every responsive website.

## Hamburger menu

A **hamburger menu** hides the navigation links behind an icon of three horizontal lines, which look a bit like a burger between two buns. When a user taps or clicks the icon, the menu slides in from the side or covers the whole screen, showing a list of links. You met it as the navigation menu in [Chapter 5](../high-fidelity-design/09-common-screens-and-navigation).

On a desktop page, the main navigation usually sits in a row across the header. On a phone, that row doesn't fit, so the links move into a hamburger menu. This keeps the page clean and focused on the main content.

The trade-off is visibility. Items inside a hamburger menu are out of sight, and people use hidden items less often. Keep the one or two most important destinations visible on the page, and put the rest in the menu.

## Flyout menu

A **flyout menu** is a panel that slides in from the edge of the screen when the user taps a menu icon, or appears next to a menu item on hover or click. On a phone, the hamburger icon usually opens a flyout menu with the navigation links, a search field, or account options. A flyout menu needs an obvious way to close it, typically a **close button** with an X icon, and it should also close when users tap outside it.

A related space saver is a **pop-up search bar**: instead of showing a full search field in the header, the phone layout shows only a magnifying glass icon, and the field appears when it's tapped.

## Cards

**Cards** are compact surfaces that hold content and actions about one subject, like a playing card that holds a value. You've seen them as article previews, product tiles, and profiles in an app. Because a card has little room, it shows just enough to make people curious and invites them to tap for more.

Cards are especially useful in responsive design, because they rearrange predictably. A desktop page might show five columns of cards and a phone just two, while each card keeps similar content. Inside each card, keep a clear hierarchy, such as image, then title, then one short detail, so people can scan many cards quickly.

## Carousels

A **carousel** (or slideshow) is a strip of images or cards that users move through by clicking arrows, swiping, or waiting while it loops automatically. Carousels save space by showing several items in the area of one. They're common on photo galleries, social media, and online stores, which use them to show popular or featured products. On desktop, a carousel can show several items at once or fill the whole width; on a phone, it often shows one item at a time, sometimes cropped to a square.

Carousels need care, though. Many visitors only look at the first slide, and automatic movement can distract people, cause problems for people with cognitive or vision disabilities, and confuse screen reader users. If you use a carousel, avoid automatic looping or provide a pause button, show clearly that more items exist, and make every slide reachable with a keyboard.

## Call-to-action buttons

A **call-to-action (CTA) button** invites users to take a specific action, such as "Buy now", "Sign up", or "Confirm". It usually stands out from everything around it through color, size, or typeface. A CTA can also lead to another page, for example from a short preview on the homepage to a detailed page that has room for all the information.

CTAs appear on every screen size, but they can change. On a phone, a CTA often becomes wider, sometimes full-width, so it's easy to hit with a thumb. Touch screens also allow gestures beyond a simple click. Whatever the size, make every tappable element at least about 44 to 48 px in both directions, with enough space around it so people don't tap the wrong thing.

*WashSlot example:* the designer uses all five components on the phone layout of the WashSlot website:

- **Hamburger menu** - holds "Laundry guide", "Notices", "Report a problem", and "Account".
- **Visible shortcut** - "My bookings" stays visible as a calendar icon next to the hamburger menu, because residents use it almost as often as booking.
- **Flyout menu** - slides in from the left, contains the links and a search field for the guide, and has a large close button at the top.
- **Cards** - the six machines appear as cards in two columns, each showing the machine name, its status, and the remaining time.
- **Carousel** - the notices become a carousel on phones, but it never moves on its own. It shows a small part of the next card at the edge and has visible arrow buttons, so Grace doesn't have to guess that she can swipe.
- **CTA** - "Book a slot" becomes a full-width, 56 px high button in the deep teal accent color, the same as in the app.

::: tip Key takeaway
Small screens need components that save space without hiding important features. Hamburger and flyout menus hold navigation, cards rearrange easily across screen sizes, carousels show several items in little space but need careful, accessible design, and CTA buttons must stay prominent and easy to tap on every device.
:::
