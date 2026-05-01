---
name: zpt-design
description: Use this skill to generate well-branded interfaces and assets for ZPT (ZPT Partners, zptpartners.com — an AI consulting and implementation agency), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files to consult, in order:

1. `README.md` — brand overview, content fundamentals, visual foundations, iconography.
2. `colors_and_type.css` — canonical tokens (navy, gold, off-white, cream, sand, border-warm, text-muted, slate-blue; Cormorant Garamond / Geist / Source Code Pro).
3. `preview/` — small HTML specimens for colors, type, components, motion — good references when building new cards/buttons/lists.
4. `ui_kits/marketing/` — home-page recreation with header, hero, quote, problem, process (4 animated visuals), agent diagram, proof, pricing, CTA, footer.
5. `ui_kits/portal/` — customer portal shell with sign-in, sidebar, onboarding uploader, prospects table, competitors table.
6. `assets/` — logos (full mark, favicon, horizontal, light variants), partner PNGs, founder profile pics.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and create static HTML files for the user to view. Load the three Google Fonts via `<link href="https://fonts.googleapis.com/...">` — the codebase uses them via `next/font/google` and no local TTF files exist.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand — the token names in `colors_and_type.css` match the Tailwind utilities used in the live repo (`bg-navy`, `text-gold`, `border-border-warm`, `font-heading`, `font-logo`, etc.), so patterns transfer cleanly.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, fidelity, variations), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Non-negotiables

- Headings: Cormorant Garamond, weight 300/400, tight tracking. Italic + gold on the most important line.
- Body: Geist. Short, declarative sentences. Second person ("you/your team").
- Chrome (nav links, button labels, logo): Source Code Pro.
- Never use emoji. Bullets use a literal `+`, not disc markers. Checks are Heroicons v2 solid.
- Borders are `1px solid #E7E2D4` (warm beige) on light; `rgba(255,255,255,0.10)` on dark.
- Gold (`#C9A96E`) is the accent — reserve it for CTAs, active states, and one italic phrase per section.
- Backgrounds alternate solid bands — navy, off-white, cream, sand, navy — never gradients-as-decoration.
- No backdrop-blur, no glass, no 2xl rounding, no glows (outside the one quote-mark glow), no scale-on-hover.
- CTA copy is always `Book a Call`.
