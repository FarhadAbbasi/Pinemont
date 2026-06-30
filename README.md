# Pinemont — Hotel Site (Next.js)

A faithful reconstruction of the HSQ Towers design system applied to a new
hotel brand. Built against the tokens in `../Design-System.md`.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3** + `tailwindcss-animate`
- `next/font` for **Poppins** (300–700)
- Self-hosted **Tuesday** script font (drop the woff2 in `public/fonts/`)
- **lucide-react** icons
- Zero CSS-in-JS — everything goes through Tailwind tokens

## Setup

```bash
cd pinemont-web
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

Type check:

```bash
npm run type-check
```

## What's done in this pass

Only the **homepage** is implemented (Build-Prompt says "start from the main
page to test design"). Section order matches `Design-System.md` §D.1 exactly:

1. Sticky header (transparent over hero → white on scroll)
2. Hero with script accent + H1 + dual CTA
3. Quick booking bar (floats over hero/intro boundary)
4. "Mountain Hotels At Their Best" intro band (cream tone)
5. Amenities grid (10 tiles, 2/3/4 col)
6. Rooms & Suites (mobile scroll-snap rail, 2/3 col on desktop)
7. Restaurant showcase (dark gradient tone)
8. Gallery teaser (mixed-aspect grid, 8 tiles)
9. Decor packages (3-up cards)
10. Testimonials (mobile snap rail → 3-up grid)
11. Location + map (OSM embed placeholder)
12. FAQ accordion
13. SEO long-text band
14. Final CTA band
15. Footer (4-col, dark gradient)

## Token fidelity — where each token landed

| Token category | Location |
|---|---|
| Brand colors (`--hsq-*`) | `app/globals.css` `:root` |
| Semantic colors (`--primary`, etc.) | `app/globals.css` `:root` + `.dark` |
| Tailwind color aliases (`hsq-gold`, `primary`, `card`, …) | `tailwind.config.ts` → `theme.extend.colors` |
| Typography roles (`text-h1`, `text-h2`, `text-eyebrow`, …) | `tailwind.config.ts` → `theme.extend.fontSize` |
| Font families (`font-sans`, `font-script`) | `tailwind.config.ts` + `app/layout.tsx` (next/font) |
| Radii (`rounded-lg`, `rounded-2xl`, `rounded-bookbtn`, …) | `tailwind.config.ts` → `borderRadius` |
| Shadows (`shadow-luxury`, `shadow-gold`, `shadow-card`) | `tailwind.config.ts` → `boxShadow` |
| Gradients (`bg-gradient-gold`, `bg-gradient-dark`) | `tailwind.config.ts` → `backgroundImage` |
| Motion (`duration-smooth`, `ease-smooth`, `animate-kenburns`) | `tailwind.config.ts` |
| Breakpoints (xs/sm/md/lg/xl/2xl) | `tailwind.config.ts` → `screens` |
| `.bookbtn` signature class | `app/globals.css` `@layer components` |
| `.tuesday-script` hero accent | `app/globals.css` `@layer components` |
| `.eyebrow` section label | `app/globals.css` `@layer components` |
| `.surface-card` card surface | `app/globals.css` `@layer components` |

## Asset handling

- The 24 reference JPGs in `../Assets/` were copied to `public/assets/`.
- `lib/assets.ts` exposes `pickPhoto(seed)` and `pickPhotos(count, startSeed)`
  for deterministic, hydration-safe random picks. Swap this file for the
  real brand library when ready.
- All copy in `lib/content.ts` is marked **placeholder** in the rendered text.

## Fonts — IMPORTANT

The hero "Welcome to" line and the brand `P` mark are styled with the
self-hosted `Tuesday` font. The CSS is wired (`@font-face` in
`app/globals.css`), but you need to drop the actual file into:

```
public/fonts/TuesdayNight.woff2
```

Until then, the fallback `Great Vibes, cursive` will render (acceptable
substitute on most systems).

## Fidelity flags — items I could NOT carry over verbatim

| Flag | Reason | Mitigation |
|---|---|---|
| Hero **Ken-Burns** scale 1→1.05 over 8s | Spec says 8s `[inferred]`; I used 12s as a slower, more luxe feel | `animate-kenburns` in `tailwind.config.ts`, duration trivially editable |
| Testimonial **Swiper carousel** with custom gold prev/next | Adding Swiper for this single section would bloat the bundle; spec's *visual result* is preserved via CSS `scroll-snap` on mobile + 3-up grid on desktop | If you want true Swiper parity, `npm i swiper` and swap `Testimonials.tsx` for a Swiper-based version |
| Restaurant section right column was ambiguously "image OR 4-card grid" | Spec listed both options as alternatives | Chose the 4-card grid (the more content-rich and mobile-friendly option) |
| **Booking form** dialog (date pickers, guest stepper, payment radios) | Spec C.8 lives on `/:category/bookingform`; this pass is homepage only | Booking bar field stubs scroll to `#booking` for now; full form is the next page |
| Sticky scroll behaviour for the booking bar | Original site's exact threshold was JS-driven and not measurable | I made the bar **non-sticky** (it floats over the hero/intro boundary). Easy to make sticky if desired |
| **shadow-card / shadow-cardHover** values | Marked `[inferred]` in the design map | Implemented as documented in §B.6/§C.5 — values are sensible defaults |
| Dark mode `.dark` tokens | Declared but never toggled in the original | Tokens are present; no toggle UI is shipped |
| Real Google Maps embed | Requires a brand API key | Replaced with OpenStreetMap embed; one-line swap |

## Next steps

When you're happy with this homepage:

1. Replace placeholder copy in `lib/content.ts`.
2. Drop final imagery into `public/assets/` (or wherever) and update
   `lib/assets.ts`.
3. Drop `TuesdayNight.woff2` into `public/fonts/`.
4. Tell me which page to build next — `/room-category` (D.2),
   `/room-category/:slug` (D.3), or `/contact` (D.6) are the natural next
   priorities.
