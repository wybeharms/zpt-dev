# ZPT Brand — Single Source of Truth

> Brand redesigned **2026-05-02**. This file is canonical. If `CLAUDE.md`, `ZPT Design System/`, or `app/globals.css` disagree with this file, this file wins. Live site code may still reference legacy tokens until the landing-page rebuild — that's expected.

## Logo system

The brand is a **wordmark + monogram** lockup. No symbol-only mark.

- **Wordmark** — "ZPT Partners" (or just "ZPT"). Used wherever the full brand fits: site header, email signatures, business cards, presentations, OG images.
- **Monogram** — `./Z`. The compressed mark for tight contexts: favicon, app icon, social avatar, watermarks. References Unix path syntax / Claude Code slash commands.

The two share the same `Z` letterform — the entire brand collapses into one letter at small sizes.

## Typography

| Use | Font | Weight | Notes |
|-----|------|--------|-------|
| Wordmark letters (Z, P, T, "Partners") | **Instrument Serif** | 400 | Modern transitional serif. Loaded via Google Fonts. |
| Monogram `./` punctuation | **Old Standard TT** | 400 | Used specifically for the dot and slash because it gives the punctuation more breathing room than Instrument Serif's `./` would. |
| Monogram `Z` | Instrument Serif | 400 | Same as wordmark, for visual continuity. |

Site body/heading/chrome fonts (Cormorant Garamond / Geist / Source Code Pro) remain unchanged for now and may be revisited during the landing-page rebuild.

## Colors

| Role | Hex | Used for |
|------|-----|----------|
| Navy | `#0C0C28` | Primary background, header, footer, "ZPT" wordmark on cream |
| Cream | `#EDE4D3` | Wordmark on navy, primary text on dark, warm canvas |
| Cognac | `#A5663C` | Accent, CTAs, "Partners" subtitle on cream/light backgrounds |
| Cognac (on navy) | `#B97A4B` | Lighter cognac variant for use on navy — meets WCAG AA (5.2:1 contrast). Use this for "Partners" subtitle and accent text on dark. |
| Cognac deep | `#7A3E1F` | Gradient terminus, hover state on light |

**Why two cognacs:** the chic dark cognac (`#A5663C`) reads beautifully on cream but only achieves ~3:1 contrast on navy — borderline for accessibility. The lighter cognac (`#B97A4B`) hits 5.2:1 on navy, passing WCAG AA for body text, while still reading as cognac (not orange). Use the right one for the surface.

**Legacy palette (DEPRECATED):** Gold `#C9A96E`, Off-white `#FAFAF7`, Sand `#EAE8DE`. Live site still references these. Do not use in new components.

## Asset locations

**Production (`dev/public/`):**
```
public/
├── favicon.ico
├── favicon.svg
├── favicon-96x96.png
├── apple-touch-icon.png
├── web-app-manifest-192x192.png
├── web-app-manifest-512x512.png
├── site.webmanifest
├── og-image.png                                     ← 1200×630, navy ground, centered wordmark
├── Old_Logos/                                       ← deprecated prism mark
└── brand/
    ├── zpt-wordmark-{dark,light,cognac}.{svg,png}
    ├── zpt-monogram-{dark,light,cognac}.{svg,png}
    └── zpt-favicon-source.png                       ← 512×512, source for favicon generator
```

**Design system mirror (`dev/ZPT Design System/assets/`):** same brand files, alongside the partner logos, profile pics, decks, and one-pager. Old logos archived in `assets/Old_Logos/`.

## When to use which variant

| Surface | Use |
|---------|-----|
| Site header on navy | `zpt-wordmark-dark.svg` |
| Site header on cream/white section | `zpt-wordmark-light.svg` |
| Cognac feature block / pricing card | `zpt-wordmark-cognac.svg` |
| Favicon, browser tab | favicon files at `public/` root |
| App icon, social avatar, watermark | `zpt-monogram-dark.svg` (or light/cognac variant matching the surface) |
| LinkedIn / Twitter / Slack link previews | `og-image.png` (auto-served via `<meta property="og:image">`) |

## What NOT to do

- Don't use the old prism mark (triangle + refraction lines). It's deprecated. Files moved to `Old_Logos/`.
- Don't pair `Z` with anything other than Instrument Serif. Don't pair `./` with anything other than Old Standard TT.
- Don't use cognac `#A5663C` as foreground text on navy — contrast fails. Use `#B97A4B` instead.
- Don't use pure white (`#FFFFFF`). Always use cream `#EDE4D3` for warmth.
- Don't introduce gradients on the wordmark or monogram. The mark is solid color only.

## Open questions (landing-page rebuild)

- Whether headings move from Cormorant Garamond → Instrument Serif (would unify the typographic system but is a bigger lift).
- Whether the maritime painting hero treatment (Dutch 17th-century seascape, "guide through the AI revolution" angle) ships with subtle scroll animation or a Veo-generated 8-second loop.
- Whether the legacy gold/off-white tokens get fully removed or retained for backward compat with marketing-page recreations in `ZPT Design System/ui_kits/`.
