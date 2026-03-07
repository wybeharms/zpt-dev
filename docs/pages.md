# Landing Page Sections

Reference for all homepage sections, their purpose, and i18n keys.

## Section order (top to bottom)

| # | Section | i18n prefix | Purpose |
|---|---------|-------------|---------|
| A | Hero | `home.hero` | Title, subtitle, CTA, two product links |
| B | Quote | `home.quote` | David Sacks quote + news headlines |
| C | What this means for you | `home.practical` | Empathy line (names buzzwords), card with value prop |
| D | How it works | `home.howItWorks` | Agent diagram: Brain + Hands + Folder, harness label |
| E | Real-life examples | `home.bottleneck` | 4 use case cards (hover reveals "why"), screenshot |
| F | A setup that grows | `home.growing` | Day 1 vs Month 3 tool comparison |
| G | Two products | `home.products` | Sales + Advisory cards |
| H | Already operational | `home.proof` | 3 proof points |
| I | CTA | `home.cta` | Final call to action |

## Key content locations

- **Buzzword terms** (skills, MCPs, plugins, CLIs): Section C intro (`home.practical.intro`)
- **Sub-agents, MCPs, plugins**: Section D hands description (`home.howItWorks.hands.description`)
- **CLI products + "what is an agent?" link**: Section D harness label (`home.howItWorks.harnessLabel`)
- **News screenshots**: Section B — collage of 4 screenshots below the Sacks quote (stacked on mobile, overlapping on sm+). Images in `public/screenshots/`
- **Use cases**: Section E (`home.bottleneck.useCases`) — array of `{title, description, why}`

## Component

`components/pages/HomeContent.tsx` — single client component rendering all sections.
Uses `useI18n()` hook for `t()` (strings) and `tArray()` (arrays/objects).
HTML in i18n values rendered via `dangerouslySetInnerHTML` (harness label, folder description).
