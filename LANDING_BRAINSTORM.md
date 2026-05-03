# ZPT Landing Page Brainstorm

> Working brief for designing zptpartners.com. Captures brand vision, theme, voice, and page-by-page direction. Reads alongside [BRAND.md](BRAND.md) (canonical brand reference: colors, typography, logo, asset paths) and [`business/marketing/zpt-one-pager.md`](../business/marketing/zpt-one-pager.md) (current product overview handed to prospects).
>
> Written for Claude Design (or any designer with zero project context). Everything needed to start designing should be reachable from this document or its references.

## How to use this document

This is a brief, not a spec. Every claim is a working hypothesis, refinable in execution. Where ambiguity exists, an "open question" line surfaces it.

For canonical brand tokens (logo files, colors, typography, asset paths), defer to [BRAND.md](BRAND.md). This document covers strategy, theme, voice, and page-by-page narrative.

Last updated: 2026-05-03.

---

## What ZPT is, in one minute

ZPT Partners is an AI implementation agency. Wybe Harms (founder, sole operator at present) goes on-site to organizations, shadows employees, maps their workflows, then builds a **custom AI package** for the company. The package contains automated skills, integrations, and documentation. The client's team runs it independently using Claude Desktop or Codex. The client owns everything (no vendor lock-in).

ZPT is not generic AI consulting. ZPT is not tool setup. ZPT is not "which AI should I buy" advice. ZPT builds. The deliverable is a working system, not a report.

**Engagements completed or in progress:**

- Cypress Creek Partners (PE fund-of-funds, Austin TX). Started with a 5-day comprehensive engagement, now embedded weekly.
- Marquette Associates (investment consultant, ~$26B AUM, Chicago). 2-day discovery plus follow-up build.
- New Vintage Partners (secondaries VC, NYC). 3-day focused build.
- MDV Design (interior design firm, Manhattan). One-day on-site, two-folder plan.
- Brutalia (Barcelona pasta chain). Operational AI setup.
- Plus an active pipeline including Kimmeridge (alt asset manager) and others.

**Pricing:** $1K to $4-5K per multi-day engagement; embedded model is $125/hr ongoing.

---

## The brand spine: two woven metaphors

### Structural metaphor: the package

ZPT delivers a package. Equipment plus documentation. Custom-built for the organization. Owned by the organization.

"Package" is the right word because it is concrete, ownable, tangible, and avoids the technical jargon ("folder," "directory") that loses half the buyer base on first read. Public-facing copy uses "package." Technical and internal copy can still use folder, directory, skills, CLAUDE.md.

Visually, the package is most easily expressed as a tangible artifact: a captain's chest, a leather portfolio with charts and a brass compass, a wooden crate with brass corners. Pencil-illustrated in 1700s style, never a photograph or stock vector.

### Emotional metaphor: the maritime journey

ZPT helps organizations sail through the turbulent AI revolution. Imagery is anchored in 17th-century Dutch maritime painting (Willem van de Velde the Younger, Aelbert Cuyp seascapes, Ludolf Bakhuizen). Ships sailing through chop. Ships being built in dry dock. Expeditions underway with shared charts.

The aesthetic is **craft, calm, weathered, navigational**. Not hype, not tech, not slick. The painting style itself is a positioning statement: ZPT is patient, expert, and grounded in real tradecraft.

### The bridge

Ships carry packages. The client organization is the ship. ZPT is the shipwright and navigator who provisions the ship for the journey.

This connection is what keeps the brand from splitting into "elegant marine art on top, dry consultancy below." Every page should feel like one idea, not two.

---

## Positioning: craft studio with advisory restraint

Two reference points to anchor the choice:

- **Premium boutique advisory** (McKinsey, Bridgewater, BCG): sparse copy, big single statements, gravitas. "We don't need to convince you."
- **Craft studio** (Linear, Basecamp, Pitch in its boutique era, Mast Coffee): denser content, visible work, specific proof. "Look at what we have made."

ZPT sits closer to **craft studio** than advisory. Reasons:

- Wybe is one person scaling to a small team. McKinsey gravitas would feel hollow.
- Buyers are CFOs, founders, and PE principals at mid-market firms, not Fortune 500.
- The actual moat is *demonstration*. Wybe has built workflows in PE, investment consulting, secondaries VC, interior design, and restaurants. The variety is the proof.

But hold the **visual restraint of advisory.** Generous whitespace. Calm typography. Restrained color use. The maritime paintings carry the elegance; the rest of the page should breathe.

### Reference sites

- [linear.app](https://linear.app) — visual restraint and content density done right.
- [mast.com](https://mast.com) — craft, premium typographic restraint, warm palette.
- [anrok.com](https://anrok.com) — clean B2B authority without coldness.
- Sigma Computing's pre-2024 site for editorial layouts.

### Anti-references

- Stripe, Vercel — too tech-coded for the non-technical buyer.
- McKinsey, BCG — too cold, too far above the customer.
- Any generic AI-agency Webflow template — too hype, gradient-heavy, "transform your business" energy.

---

## The visual system: maritime imagery as the centerpiece

One major painting per page, in the established 17th-century Dutch maritime style, palette aligned to brand (navy, cream, cognac, with cream-beige clouds and dark cognac accents on hulls and sails).

### The three paintings

**1. Main landing page: The Sailing Ship.** A 3-masted Dutch warship sailing right, through choppy seas, beige clouds piling up behind. ZPT flag flying from the stern. Wybe will render with ChatGPT or Gemini and refine in Figma.

Refinement notes for the current first draft:
- Ship should sail right, not left.
- Waves redrawn in navy (currently too white).
- Clouds in cream, not pure white.
- Hull and sails with cognac and dark brown accents.
- Add ZPT flag (or wordmark on the existing Dutch tri-color flag).

**2. Technology page: The Shipwright.** A ship being built in dry dock. Frames, joinery, planks, ropes. Pencil-and-wash style. Speaks to "ZPT BUILDS, not advises."

This pairs naturally with the technical detail the page delivers (folder structure, integrations, security model).

**3. How It Works page: The Expedition.** ZPT and the client sailing together. Shared charts on a deck, brass compass, captain's chest open showing the package contents. Echoes "Partners" in the wordmark. Implies embedded partnership rather than vendor handoff.

### Footer ornament (every page)

A small, low-opacity etched line drawing in 1700s ornamental style. Sits above the navy footer band on every page. Same asset across the site for cohesion.

Options to render:
- Cresting waves
- A compass rose with detailed pencil rendering
- A wood-grain texture
- A combination of these, very minimal

Restraint here: the ornament should feel like a watermark or print flourish, not a decorative banner. Low opacity, single-color (cognac on cream, or cream on navy if used in the dark band).

### Constraints on imagery

- No photography of real oceans or ships. Always painted or illustrated.
- No stock vector ships, no flat graphic-design icons.
- No glow effects, gradients, or backdrop blur on the paintings.
- The paintings always sit on a navy or cream band, not floated mid-page on white.
- No cropping that loses important details (Dutch flag, ZPT flag, ship orientation).
- Paintings render at 1.5x to 2x display resolution for retina screens. Optimize file size aggressively.

---

## Motion principles

**Motion must be earned by user action.** No autonomous loops, no marquees, no glow pulses. Nothing that competes with the headline for attention while the user reads.

### Allowed motion

- **Scroll-triggered reveals** of the maritime imagery: parallax wave layers, fade-in transitions, three-frame ship motion.
- **Three-frame hero motion (fallback for Veo).** Render three slightly different versions of the hero painting (ship slightly rotated, waves slightly shifted, sails subtly different). As the user scrolls down 100-300px, swap frames in sequence. The effect is subtle ship motion: deliberate, editorial, low-bandwidth.
- **Hover transitions** on cards, links, and buttons. Short (150ms) and subtle (color or border change). No scale-on-hover.

### Exploratory: Veo-rendered 8-second hero loop

Wybe is exploring whether Google's Veo can render an editorial 8-second loop of the ship sailing through waters, in the same painting style.

- If quality is editorial (no AI artifacts, no over-saturated motion, restrained), ship it.
- If not, fall back on the three-frame scroll trick.
- Either way, the loop never plays autonomously while the user reads. It plays on first scroll, then settles.

### Off limits

- Marquee text.
- Autoplay video with sound.
- Scroll-jacking (taking control of scroll position).
- Scale-on-hover.
- Glass morphism, glow effects, gradient sweeps.
- Loading spinners that run more than 200ms (use skeleton states instead).

---

## Voice and copy principles

### Core rules

- **Use "package" in landing-page copy.** "Folder," "directory," and "skills" are jargon for half the buyers. Reserve technical terms for the Technology page and the buyer who is evaluating depth.
- **Professional, not founder-voice.** "I built this for 6 companies and learned X" is wrong for the landing page. Save founder-voice for the YouTube channel and the About page.
- **Calm and declarative.** Short sentences. Second person ("you," "your team"). No exclamation marks. No hype words: transform, supercharge, unlock, revolutionize, AI-powered.
- **Specific over abstract.** Real client names. Real workflows. Real numbers when they exist (4 hours to 30 minutes). Real folder structures on the Technology page.
- **The "this is hard" subtext.** "Synthesizing years of expert process for an agent is not a one-hour task." Stay clear that this is real engineering work that requires real expertise. Anti-DIY framing without arrogance.

### Words to retire from existing copy

- "Mirror your workflows." (Implies 1:1 copy of human process; conflicts with the first-principles edge below.)
- Any reference to the client's existing folders being "messy" or "disorganized."
- Hype verbs: transform, supercharge, unlock, revolutionize.

### Words and phrases to weave in

- "Custom AI package"
- "Equipment and documentation"
- "Codify your workflows" / "Organize your workflows"
- "Built for your organization, owned by your organization"
- "Sail through the AI revolution"
- "Documentation detailed enough that the agent can explain itself"
- "Years of expert knowledge, captured in a package your team runs"

---

## Messaging pillars

Five things every visitor should leave knowing. Each pillar can be phrased differently across sections, but the substance recurs.

### 1. The deliverable is a package

Equipment plus documentation. Custom-built for the organization. The client owns everything. Runs on Claude or Codex (vendor-agnostic).

### 2. ZPT is the AI expert that has done this many times

Across PE, investment consulting, secondaries VC, interior design, and restaurants. The expertise is in the nuances:

- SharePoint and Dropbox permissions
- Microsoft Copilot vs Claude vs ChatGPT vs Codex trade-offs
- GitHub workflow and repo hygiene
- Naming conventions, security, authentication
- The right connectors (MCPs, APIs)
- Folder management, version control

This is not a generalist consultancy. The depth of nuance is the moat.

### 3. This is not a one-hour task

Synthesizing years of process knowledge into a structure an agent can execute is real engineering work. The reason the package works is that someone obsessed with AI spent days inside the workflows mapping them at the right level of detail.

This pillar is the anti-DIY message. It is what justifies pricing.

### 4. The agent can fix flaws, not just mirror them

When the human process has known shortcuts, the package can mirror the flaw or fix it. ZPT works workflows from first principles.

**Concrete example for copy or proof section:** At Marquette Associates, the human share-class review process accepts the prior consultant's (Fairview's) suggestion without checking other candidates against the threshold. The human skips the verification. The agent ZPT builds can either mirror this shortcut or do the threshold check the human skips. ZPT chooses the latter. The agent is faster *and* higher quality than the human it replaces.

### 5. Reliable partnership, not vendor lock-in

ZPT builds it, ZPT maintains it (recurring fee), but the client team runs it day-to-day, owns the code, and can walk away with everything. The "Partners" in the name is real: this is an embedded, ongoing relationship, not a one-time install.

---

## Page-by-page vision

### Main landing page

**Hierarchy was the biggest issue with the existing site.** Visitors did not know where to look first. The fix: one strong hero statement, one CTA, and a clear narrative arc with no competing side paths.

#### Section 1: Hero

- **Taller than the current hero.** Roughly 80-90vh on desktop.
- The Sailing Ship painting is the dominant visual element. Either as a full-width band beneath the headline, or as a half-width image to the right of the headline. Designer's call; test both.
- One headline (pick a direction in design):
  - "A custom AI package, built for your organization."
  - "Equip your team to run on AI agents."
  - "We codify your workflows into a system your team owns."
  - "Sail through the AI revolution with the right equipment."
- One subhead. Adds the deliverable detail. Example: "ZPT delivers equipment and documentation, built on-site, owned by you."
- **One primary CTA: "Book a Call"** (per existing brand convention).
- One secondary link: "How it works" (anchor or page link).
- Hero motion plays only on scroll, never autonomously (see Motion section).

#### Section 2: The problem

Calm, no fear-mongering. Three or four short statements about the failure modes:

- AI tools without context produce generic output.
- Point solutions accumulate; nothing talks to each other.
- Off-the-shelf AI products lock you into someone else's roadmap.
- Most teams know they should be using AI; few know how to start.

#### Section 3: How ZPT solves it (high-level)

The package framing introduced for the first time.

- Visual element: the package as object. Illustrated captain's chest or wooden crate with brass corners, opened to show its contents (markdown files, a compass, charts). Illustrated, not stock.
- Three-bullet summary: equipment, documentation, ownership.
- Link to "How It Works" for depth.

#### Section 4: YouTube placeholder

Roughly mid-page. A clickable thumbnail of a future ZPT YouTube video.

- Placeholder for now: a still frame from the painting with a play-button overlay and the caption "Watch a 2-minute introduction" or similar.
- When a real video exists, embed it inline (lazy-loaded).
- **Why this matters:** video gives buyers a face and a voice, which increases credibility for a small consulting firm. Wybe will record this when the brand is ready.

#### Section 5: Proof (clients and testimonials)

Featured client names: Marquette Associates, New Vintage Partners, MDV Design, Brutalia. (Cypress Creek Partners is also a customer; check whether they want public attribution.)

Format options to consider:

- Pull-quote testimonials with name, title, firm.
- A "where ZPT has built packages" panel listing the firms with one-line context for each.
- Both.

**No logo wall.** The firms are mid-market and the logos do not carry recognition value. Names plus one-line context do more work.

The variety is the proof. Frame it that way: "ZPT has built packages for funds, consultants, designers, and restaurants. The architecture is the same. The content is custom every time."

#### Section 6: Pricing or engagement types

Four engagement types from the playbook (full detail in `business/playbook/engagement-framework.md`):

- **Discovery** (1-2 days): Map workflows across departments, identify automation opportunities, build a proof-of-concept.
- **Focused Build** (2-3 days): Automate 1-2 well-defined workflows end-to-end with real data.
- **Comprehensive** (4-5+ days): Full discovery followed by a multi-workflow build.
- **Embedded** (ongoing): Regular weekly or monthly sessions, building the package incrementally.

Display as a clean table or card grid. Each with a one-line "when to use" and a price range.

**Open question:** transparent prices on the landing page, or "Starts at $X" with details on intro call? Recommend transparency unless Wybe disagrees.

**Avoid:** the temptation to name the engagement types after vessel sizes (sloop, clipper, etc.). It pulls the metaphor too hard and looks cute. The maritime imagery in the hero and footer is enough.

#### Section 7: Final CTA

Second "Book a Call" with a one-line context. Example: "Wybe handles all initial conversations personally."

Link to email and Calendly.

#### Section 8: Footer ornament + footer

- Etched line ornament (waves, compass, or wood) above the navy footer.
- Footer holds: links to subpages, contact, legal, social (LinkedIn), email signup for "Notes from the journey" (a future content and educational arm).

---

### Technology page

**Hero painting:** The Shipwright. A ship being built in dry dock. Frames, joinery, ropes.

**Headline candidate:** "How ZPT builds the package."

**Body sections:**

- The architecture of a ZPT package: equipment (skills, integrations) and documentation (CLAUDE.md, company-context, terminology, templates), plus the connectors (Microsoft 365, Google Workspace, Dropbox, SharePoint, GitHub, custom MCPs).
- Show actual structure. This is the page where it is appropriate to render a folder tree. Buyers on this page are evaluating depth:
  ```
  your-company/
  ├── CLAUDE.md
  ├── company-context/
  │   ├── overview.md
  │   ├── team-structure.md
  │   └── terminology.md
  ├── skills/
  │   ├── analyze-documents/
  │   ├── draft-memo/
  ├── templates/
  └── example-docs/
  ```
- The moat: ZPT understands the nuances of permissions, authentication, security, naming conventions, and the trade-offs between Microsoft Copilot, Claude, ChatGPT, and Codex. Most buyers do not know what they do not know.
- Footer ornament at the bottom.

---

### How It Works page

**Hero painting:** The Expedition. ZPT and the client at sea together. Shared charts. Brass compass. Captain's chest open showing the package contents.

**Headline candidate:** "How an engagement works."

**Body sections:**

- Walk through the four engagement types (Discovery, Focused Build, Comprehensive, Embedded). Pull day-by-day breakdowns from `business/playbook/engagement-framework.md`.
- The systems-thinking framing:

  > "We start by mapping your workflows and tackling them one at a time. Each workflow we automate adds context to the system. Over time, your AI setup reflects your entire organization."

- The gentle "we capture how the organization actually works" framing. Phrase carefully: ZPT captures and codifies how the organization operates AND fixes workflows that have known flaws. This is not 1:1 mirroring.
- Footer ornament at the bottom.

---

### Other pages (later, not for first draft)

- **About:** Wybe's background, founder story, ZPT origin. This is where founder-voice is allowed.
- **Resources / Notes from the journey:** The educational arm. Blog or newsletter shell. Empty for now; create the surface so when content lands the brand exists.
- **Personal AI setups:** A small subsection or footer link. ZPT also builds personal packages for individuals (executives, founders). Not the lead offering, but worth signaling.

---

## Hierarchy: addressing the tester feedback

Existing site failed because users did not know where to look first. Fix:

1. **One headline, one CTA per section.** No competing buttons in the hero. Just "Book a Call."
2. **Linear narrative arc.** Hero → problem → solution overview → YouTube → proof → pricing → CTA. No optional side paths in the main flow.
3. **Maximum five items in the top nav.** "How It Works," "Technology," "Pricing," "About," and "Book a Call" (CTA-styled).
4. **Visual rhythm.** Alternate navy and cream bands. Each section ends with the next being visually distinct, so the user feels the page progressing.
5. **Footer ornament.** Tells the user they have reached the bottom and the design is intentional.

---

## Things to avoid (consolidated)

From the existing brand documentation and from this brief:

### Visual
- No emoji anywhere on the site.
- Bullets use a literal `+`, not disc markers (per existing convention).
- Checks are Heroicons v2 solid.
- Borders are 1px solid `#E7E2D4` (warm beige) on light, `rgba(255,255,255,0.10)` on dark.
- No backdrop blur, no glass effects, no 2xl rounding, no glows (with the single exception of the existing quote-mark glow if reused).
- No pure white (`#FFFFFF`). Use cream (`#EDE4D3`).
- No gradients on the wordmark or monogram.
- No fourth color in the palette. Pastel blue was considered and rejected.
- No photography of oceans or ships. Always painted or illustrated.

### Motion
- No autonomous animation. Motion must be earned by user action.
- No scale-on-hover.
- No marquee text.
- No autoplay video with sound.
- No scroll-jacking.

### Copy
- No founder-voice on the main landing page. Save for About and YouTube.
- No "your folders are messy" framing.
- No "mirror your workflows" framing (use "codify" or "capture").
- No hype words: transform, supercharge, unlock, revolutionize, AI-powered.
- No exclamation marks.
- CTA copy is always "Book a Call."

### Brand
- No Stripe / Vercel / generic-AI-Webflow aesthetics.
- No McKinsey-style cold gravitas.
- No vessel-named pricing tiers (sloop, clipper, etc.). Holds the metaphor too tight.

---

## Open questions for Claude Design

These are decisions to make in execution. None block starting the design.

1. **Hero layout.** Painting full-width band beneath headline, or half-width to the right of the headline? Test both.
2. **Hero motion.** If Veo loop renders well, ship it. If not, the three-frame scroll-triggered approach. Decide based on Veo output.
3. **Pricing transparency.** Name actual prices, or "starts at $X" with details on call? Default to transparent unless Wybe disagrees.
4. **Testimonial format.** Pull-quotes vs firm-list vs both? Visit each and propose.
5. **Logo wall.** Avoiding for now (mid-market firms do not carry logo recognition). Revisit if a marquee client signs.
6. **Personal AI setups surfacing.** Footer link, sidebar mention on About, or dedicated page? Recommend smallest possible footprint until volume justifies more.
7. **Final colors of the painting.** Current draft is too saturated and too "modern reinterpretation." Final paintings should feel like Willem van de Velde the Younger: navy seas, cream sky, cognac accents on the hull, dark brown rigging. Wybe will iterate the prompt with ChatGPT/Gemini and refine in Figma.
8. **Icon system.** Heroicons v2 is the existing brand standard. Maritime imagery does not extend to icons (no compass icons in the UI). Confirm Heroicons v2 stays as the system icon set, with maritime imagery restricted to hero paintings and the footer ornament.
9. **Headings: Cormorant Garamond vs Instrument Serif.** Current site uses Cormorant. The new logo uses Instrument Serif. Open whether to unify under Instrument Serif during this rebuild or keep them split. A bigger lift but more cohesive.

---

## Reference materials

- [`BRAND.md`](BRAND.md) — canonical logo, palette, typography, asset paths, theme principles.
- [`ZPT Design System/README.md`](ZPT%20Design%20System/README.md) — full brand foundation, components, motion specs.
- [`ZPT Design System/colors_and_type.css`](ZPT%20Design%20System/colors_and_type.css) — design tokens (Tailwind utilities mirror these).
- `ZPT Design System/preview/` — HTML specimens for colors, type, components.
- `ZPT Design System/ui_kits/marketing/` — current home-page recreation (still on the legacy gold/Cormorant brand; refer for layout patterns, not for current colors).
- [`business/marketing/zpt-one-pager.md`](../business/marketing/zpt-one-pager.md) — current public-facing one-pager handed to prospects.
- [`business/playbook/engagement-framework.md`](../business/playbook/engagement-framework.md) — detailed breakdown of the four engagement types.
- [`business/company-context/overview.md`](../business/company-context/overview.md) — internal company context (vision, services, credibility).

---

## What changes after this document

This brainstorm is the starting point. Designer iterations will refine specifics. As decisions land, update [BRAND.md](BRAND.md) (canonical) and add a note here pointing to the updated section.
