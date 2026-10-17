# Gestures, motion, and sound

A prototype that only jumps from screen to screen feels stiff. Gestures, motion, and sound make it feel like a real app, and they help users understand what's happening. They also bring new accessibility responsibilities.

## Gestures

A **gesture** is a way of interacting with a device by touching its screen with a finger or a stylus. The most common gestures are:

- **Tap** - a quick touch of the screen. One finger usually selects something; some apps use a two-finger tap as a shortcut, for example to open a context menu.
- **Double tap** - two quick taps, often used to zoom in or to "like" something.
- **Long press** - touching and holding, often used to open extra options.
- **Swipe** - a quick slide of the finger across the screen, horizontally or vertically. It's used to move between screens, browse a carousel, or reveal actions on a list item.
- **Scroll** - a slower slide that moves content up, down, or sideways.
- **Drag** - touching an item, holding it, and moving the finger to move the item. Pulling down the notification panel on a phone is a drag.
- **Pinch** - moving two fingers together or apart to zoom out or in, for example on a map or a photo.

### Gestures differ between platforms

Android and iOS follow different design guidelines: Android follows **Material Design**, and iOS follows Apple's **Human Interface Guidelines (HIG)**. Some gestures work differently on each. For example, on iOS, people typically go back by swiping from the left edge of the screen or by tapping a back button in the top-left corner, while Android also has a system-wide back gesture or button. That's why anyone who borrows a friend's phone with a different system can suddenly feel lost. Learn the guidelines for the platforms you design for, and test your designs on real devices with different systems.

## Motion

**Motion** means animating design elements to guide attention and explain what's happening. Small animations help users notice changes they might otherwise miss and understand how screens relate to each other.

For example, when you add a product to a shopping cart, the cart icon might bounce briefly and show a new number. Without that animation, you might not notice that anything happened. The tap is the gesture; the bounce is the motion that gives you feedback.

Motion can:

- **Give feedback** - confirm that an action worked, like a check mark that draws itself after a booking.
- **Show relationships** - a screen sliding in from the right suggests "forward"; sliding out to the right suggests "back".
- **Guide attention** - a gentle movement draws the eye to something new, such as a notification.
- **Help with wayfinding** - consistent transitions help users build a mental map of the app.

### Animations in Figma

For each connection, Figma lets you choose an animation: **Instant** (no transition), **Dissolve** (a fade), **Smart animate** (smoothly animates layers that appear on both screens), **Move in** and **Move out** (the new screen slides over or away from the current one), **Push** (the new screen pushes the old one away), and **Slide in** and **Slide out** (similar to move, with a slight shift of the current screen). You can also set the **direction**, the **duration** in milliseconds, and the **easing**, which controls whether the movement speeds up or slows down, so it feels natural instead of robotic.

A good rule is that opposite actions get opposite animations. If a screen opens by sliding up from the bottom, it should close by sliding back down. Keep most transitions short, around 200 to 400 milliseconds, and keep them simple. "Instant" or a short push is often all you need.

*WashSlot example:* when a resident taps "Confirm booking", the designer uses **Smart animate**: the button shrinks into a circle and a check mark draws itself inside it in 400 milliseconds. On the booking screen, residents can **swipe** left and right to move between days, and the selected day tab moves with a short animation.

## Sound and video

### Sound

Sound can give useful feedback: a short tone when a message arrives, a soft click when a button is pressed, or a different tone when an upload fails. Sounds can make an interaction feel more human. But sound can also annoy or embarrass users, for example in a quiet office. Use sound only when it adds information, and always make it easy to turn it off.

### Video

Video can catch attention and explain things that are hard to describe, such as how to use a feature. Give users control: they should be able to play, pause, replay, and mute a video, and stop it from playing automatically.

## Accessibility for gestures, motion, and sound

1. **Never make a gesture the only way** - some people can't perform certain gestures, for example because of limited hand control or because they can't see the screen. Every action that works with a gesture should also work with a simple tap on a visible button.
2. **Keep motion calm and short** - very fast motion can be alarming, and long motion is distracting. WCAG requires that anything that moves, blinks, or scrolls automatically for more than five seconds can be paused, stopped, or hidden. Content should also never flash more than three times per second, because flashing can trigger seizures.
3. **Let users turn motion off** - some people feel dizzy or sick from animation. Respect the "reduce motion" setting of the operating system, and offer your own setting to turn off animations, looping effects, and autoplay.
4. **Provide alternatives to sound and video** - add captions and transcripts to videos, and give every sound a visual or vibration alternative, so the information reaches people who are deaf or hard of hearing, or who simply have the sound off.

*WashSlot example:* swiping between days is only a shortcut; residents can also tap any day tab. When "reduce motion" is turned on, the check mark animation is replaced by a simple fade. The reminder before a booking can be a sound, a vibration, a flash of the phone's light, or all three, which matters for Grace, who doesn't always hear her phone.

::: tip Key takeaway
Gestures such as tap, swipe, drag, and pinch let users interact through touch, and they differ between platforms. Motion gives feedback, shows relationships, and guides attention; keep it short and consistent. Use sound and video only when they help, and always provide alternatives: a button for every gesture, a way to turn off motion, and captions or visual signals for sound.
:::
