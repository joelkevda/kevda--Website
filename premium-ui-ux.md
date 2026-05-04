---
name: premium-ui-ux
description: "Produces world-class, agency-grade UI/UX design for web interfaces. Use this skill whenever building any web UI, component, landing page, dashboard, or visual design — especially when the goal is high-end, premium, or impressive output. Trigger on: 'make it look premium', 'high-end design', 'wow factor', 'looks cheap', 'make it better', 'redesign this', 'more professional', 'like a top agency', 'best possible design', 'world class UI', 'impressive', 'luxury feel', 'editorial', 'modern and clean', or any request where visual quality is the primary goal. This skill should be used AGGRESSIVELY — if there is any design or UI work happening, use this skill. Do not produce mediocre UI when this skill is available."
---

# Premium UI/UX Design Standard

## The Fundamental Principle

**Clients don't read. They feel.**

A visitor decides within 3 seconds whether a site feels trustworthy, serious, and expensive — or generic and forgettable. Every design decision either earns or loses that trust. This skill produces design that earns it.

The target: design that looks like it was produced by a senior designer at a top agency (Pentagram, Collins, Huge, Instrument) — not like an AI generated it or a developer styled it.

---

## WHAT SEPARATES PREMIUM FROM GENERIC

### Generic UI does this:
- Cards with equal padding on all sides, same size, same weight
- Blue primary buttons on white backgrounds
- Google Fonts Roboto or Inter at 16px
- Full-width sections with centered text
- Rounded corners on everything
- Gradient backgrounds that glow
- Stock icons from Heroicons or FontAwesome
- Sections that look identical to each other
- Information arranged for completeness, not hierarchy
- Animations that animate just to animate

### Premium UI does this:
- **Typographic hierarchy that earns attention** — display type at 80–120px, body at 14–15px, captions at 10–11px. Three sizes maximum. No middle ground.
- **Whitespace as a design element** — negative space is not waste. It signals confidence.
- **Color used with restraint** — 2 brand colors max, applied at 10–20% of the surface area. The rest is neutral.
- **Grid with intention** — asymmetric layouts, offset elements, content that bleeds to the edge deliberately
- **Motion that means something** — elements reveal themselves because it helps the user understand, not because it looks cool
- **One visual statement per section** — a section earns the right to exist by doing one thing exceptionally

---

## TYPOGRAPHY SYSTEM

### Display (headlines, heroes)
```css
font-family: 'Cormorant Garamond', Georgia, serif;
font-size: clamp(64px, 7vw, 110px);
font-weight: 300;
line-height: 0.97;
letter-spacing: -0.02em;
```
Use italic for secondary thoughts:
```css
font-style: italic;
color: rgba(currentColor, 0.45);
```

### Body / UI
```css
font-family: 'Space Grotesk', system-ui, sans-serif;
font-size: 14px;
line-height: 1.75;
font-weight: 300;
```

### Labels / Eyebrows / Captions
```css
font-size: 10px;
letter-spacing: 0.22em;
text-transform: uppercase;
font-weight: 500;
```

**Rule:** Never use more than 3 font sizes in a single section. Never use font-weight: bold on body text. Let size create hierarchy, not weight.

---

## COLOR DISCIPLINE

```
Primary surface:   White (#ffffff) or off-white (#f4f6f5)
Secondary surface: Light tint of brand color (5–8% opacity)
Dark section:      Brand primary at full saturation
Accent:            Gold/sand — used ONLY on interactive elements and key moments
Text:              Near-black (#0a1510) not pure black
Muted text:        50–60% opacity of text color — not a grey
```

**The 10% rule:** The accent color should appear on no more than 10% of the visible surface area at any scroll position. If you see gold everywhere, it means nothing.

**Section contrast:** Every section should feel different from the one before it. Alternate: white → tinted → dark → white. Never two identical background colors in a row.

---

## LAYOUT PRINCIPLES

### The Asymmetric Hero
```
LEFT (40%):  Text stack — eyebrow, headline, rule, body, CTAs
RIGHT (60%): Visual — 3D, large image, data visualization, abstract graphic
```
The visual should bleed off the right edge. Text never touches the visual.

### Section Structure
Every section needs:
1. **Anchor** — eyebrow label that names the section (10px, uppercase, gold accent bar before it)
2. **Statement** — the headline. One idea. No more than 8 words.
3. **Support** — 1–2 sentences of body. Never a paragraph.
4. **Evidence** — the actual content (cards, list, image, diagram)
5. **Exit** — a CTA or transition into the next section

If a section doesn't have all 5, it isn't a section — it's a component.

### The Editorial Rule
Never center-align hero headlines. Left-aligned text reads faster, feels more authoritative, and respects reading direction. Center-align only for short standalone statements or pull quotes.

---

## COMPONENT PATTERNS

### Cards
```
Background: white
Border: none (use shadow OR border, never both)
Hover: background shift (not scale, not box-shadow growth)
Top accent: 2px solid brand color — appears on hover only
Padding: 44px 48px (generous — premium needs room)
```

### Buttons
```
Primary:   Solid brand primary. All-caps. 11px. Letter-spacing 0.14em. No border-radius (or max 2px).
Secondary: Outline or text + animated underline. Never a filled grey button.
Disabled:  30% opacity. Never a different color.
```
Clip-path for angular premium feel:
```css
clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
```

### Proof Strips / Stats
```
Large number:  Cormorant Garamond, 48–64px, weight 300
Label:         Space Grotesk, 10px, uppercase, 50% opacity
Separator:     1px vertical line, not a card
Background:    Cream or white with very subtle bottom border
```

### Process / Steps
Never number steps 1, 2, 3 in circles. Instead:
- Roman numerals (I, II, III) in large Cormorant italic, 160px, 5% opacity watermark
- Or: labeled verb (Align / Execute / Deliver) in 10px uppercase
- Connect with a hairline arrow, not a bold connector

---

## MOTION & INTERACTION

### Scroll Reveal
```javascript
// Intersection Observer — the only animation library you need
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
```

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
```

Stagger children: `transition-delay: calc(var(--i) * 80ms)`

### What not to animate
- Do not animate scale on hover for cards (feels cheap)
- Do not use `transition: all` — specify properties explicitly  
- Do not animate color changes (use opacity)
- Do not animate things that weren't there — only reveal, never distract

### Custom Cursor
For premium desktop experiences:
```javascript
// Dot + lagging ring. The ring lag creates perceived physicality.
const dot = { x: 0, y: 0 };
const ring = { x: 0, y: 0 };
document.addEventListener('mousemove', e => { dot.x = e.clientX; dot.y = e.clientY; });
(function animate() {
  ring.x += (dot.x - ring.x) * 0.1;
  ring.y += (dot.y - ring.y) * 0.1;
  // apply to elements
  requestAnimationFrame(animate);
})();
```

---

## SCROLL PROGRESS & NAVIGATION

### Scroll progress bar
```css
#progress-bar {
  position: fixed; top: 0; left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--brand-teal), var(--gold));
  z-index: 200;
  transition: width 0.08s linear;
}
```

### Nav on scroll
- Transparent at top
- On scroll: `background: rgba(255,255,255,0.96); backdrop-filter: blur(20px); box-shadow: 0 1px 0 rgba(0,77,67,0.08);`
- Never use a solid white nav at the top — it breaks the hero

---

## 3D INTEGRATION RULES

When combining 3D with text:

1. **Position 3D on the right, text on the left** — never centered 3D with text below
2. **Use a gradient overlay** on the left edge of the 3D canvas so it bleeds into the background naturally
3. **The 3D should be large** — minimum 50% of viewport width. Small 3D looks like a decoration. Large 3D is a statement.
4. **Light the 3D with brand colors** — never leave it grey or white on a light background
5. **Mouse parallax on the camera** — even 2–3 degrees of parallax makes the scene feel alive
6. **Load with a fade** — opacity 0 → 1 over 0.6s so there's no flash

---

## THE WOW FACTOR CHECKLIST

Before calling any design done, check:

- [ ] Would a senior designer at a top agency be embarrassed to show this? (If yes, it's not done)
- [ ] Is there a single visual statement that makes someone stop scrolling?
- [ ] Does the typography make you want to read it?
- [ ] Is the white space doing work or is it just empty?
- [ ] Do the colors feel intentional or accidental?
- [ ] Does anything feel generic (rounded buttons, blue links, centered text on hero)?
- [ ] Is motion purposeful or decorative?
- [ ] Does each section feel distinct from the one before it?
- [ ] Would you screenshot this to show someone?

If any answer is wrong, fix it before delivering.

---

## REFERENCE BENCHMARKS

Sites that set the standard this skill aims for:
- **Pentagram** — typography and whitespace
- **Vercel** — technical precision, clean hierarchy  
- **Linear** — motion and interaction quality
- **Stripe** — section structure and proof patterns
- **Lusion** — 3D integration done right
- **Resend** — developer-facing premium without being cold

Use these as mental benchmarks, not templates.

---

## ANTI-PATTERNS — NEVER DO THESE

| Pattern | Why it fails |
|---------|-------------|
| Gradient glow backgrounds | Looks like 2021 SaaS. Generic. |
| Cards with box-shadow on hover | Overused. Use background shift instead. |
| Centered hero headline | Slower to read. Feels uncertain. |
| More than 2 accent colors | Looks uncontrolled. |
| Animations on page load that delay content | Frustrates users. Content first. |
| Progress indicators as numbered circles | Looks like a template. |
| Full-width colored CTAs at bottom | Looks like every Webflow template. |
| Emoji in UI | Never. Not even one. |
| `font-weight: bold` on body text | Aggressive. Use size for hierarchy. |
| `border-radius: 12px` on everything | Too friendly. Use 2–4px for professional tone. |
