# ZPT Landing Page -- Plan of Action

## Goal

Launch a professional, multi-page website at **zpteam.ai** that communicates the ZPT vision. No login, no dashboard, no backend. A static site with proper SEO foundations, language support, and a clear path to conversion.

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js** (static export) | React-based (same family as PAAI), static export = portable to any host |
| Styling | **Tailwind CSS** | Same as PAAI, responsive, fast to build |
| Hosting | **Vercel** (free tier) | Zero-config deploys, free SSL, custom domain |
| Domain | **zpteam.ai** | Purchased via Namecheap (active, Mar 2026 - Mar 2028) |
| Repo | **GitHub** (`wybeharms/zpt-dev`) | Auto-deploys to Vercel on push to `main` |
| i18n | **next-intl** or manual JSON files | Language selector for EN, NL, ES, IT |

### Vercel Lock-in Avoidance

The following Vercel-specific features will **not** be used:
- No Vercel Edge Functions / Serverless Functions
- No Vercel KV, Blob, or Postgres storage
- No Vercel Analytics
- No `middleware.ts`
- No `next/image` with Vercel image optimization (use standard `<img>` tags)
- No ISR (Incremental Static Regeneration)
- Static export only via `output: 'export'` in `next.config.js`

The build output is plain HTML/CSS/JS. Deployable to AWS Amplify, S3+CloudFront, or any static host without code changes.

---

## Domain + DNS Setup

Domain is purchased and active on Namecheap. Next steps:

1. In Vercel: create project, add `zpteam.ai` as custom domain
2. In Namecheap: add CNAME/A records pointing to Vercel (keep Namecheap as DNS provider for easier future migration)
3. Vercel auto-provisions SSL
4. Verify both `zpteam.ai` and `www.zpteam.ai` resolve correctly

---

## Email

- Contact email: **request@zpteam.ai**
- Wybe needs to set up email forwarding or a mailbox (Namecheap Private Email, Google Workspace, or simple forwarding to personal email)
- This is separate from the website build but needed before launch

---

## Site Structure (Multi-Page)

```
zpteam.ai/
  /              Home (landing page)
  /product       Product details, how it works, enrichment examples
  /about         Minimal company page (no personal founder info)
  /resources     Case studies, proof points (blog later)
```

---

## Design Direction

### Inspiration
- **LVMH**: dark navy backgrounds, warm accents, generous whitespace, serif/sans-serif pairing, editorial luxury feel
- **PAAI Tailwind palette**: #0C0C28 (dark navy header), #F5F4ED (warm cream), #2A4365 (brand blue)

### Proposed Color Palette

| Role | Color | Hex | Notes |
|------|-------|-----|-------|
| Primary (dark) | Deep navy | `#0C0C28` | Header, hero backgrounds, dark sections (from PAAI) |
| Secondary | Slate blue | `#2A4365` | Buttons, links, accents |
| Accent | Warm gold | `#C9A96E` | Subtle highlights, hover states (LVMH-inspired warmth) |
| Background | Off-white | `#FAFAF7` | Main page background |
| Surface | Warm cream | `#F5F4ED` | Cards, sections with contrast (from PAAI widget header) |
| Text primary | Near-black | `#07111E` | Body text on light backgrounds |
| Text on dark | White | `#FFFFFF` | Text on navy backgrounds |
| Text muted | Gray | `#64748B` | Secondary text, captions |
| Border | Warm gray | `#E7E2D4` | Card borders, dividers (from PAAI) |

### Typography

| Role | Font | Style |
|------|------|-------|
| Logo | **Source Code Pro** | Monospace, medium weight. Text logo: "Zero Person Team" (until custom logo is ready) |
| Headings | **Cormorant Garamond** | Elegant serif. Gives editorial, LVMH-like quality. Light/regular weight for large sizes. |
| Body | **Inter** | Clean sans-serif. Highly legible, widely used in tech/SaaS. |

All fonts are Google Fonts (free, self-hostable, no vendor dependency).

### Design Principles
- Clean, minimal, professional. Not flashy startup aesthetic.
- Dark navy sections alternating with warm off-white. High contrast.
- Generous whitespace. Let content breathe (LVMH style).
- No stock photos. Use abstract visuals, subtle gradients, or typography-only sections.
- Mobile-first. Many prospects arrive via LinkedIn on mobile.
- No em dashes anywhere in the text.

---

## Page-by-Page Wireframes

### Header (all pages)

```
+------------------------------------------------------------------------+
|  Zero Person Team          Product   About   Resources   [EN v]  [CTA] |
|  (Source Code Pro)                                                      |
+------------------------------------------------------------------------+
```

- Logo on the left (text-based for now)
- Navigation center-right: Product | About | Resources
- Language selector: dropdown (EN, NL, ES, IT)
- CTA button on far right: "Set up intro call"

---

### HOME PAGE

```
+------------------------------------------------------------------------+
|                          [HEADER]                                       |
+------------------------------------------------------------------------+
|                                                                         |
|                    DARK NAVY HERO SECTION                               |
|                                                                         |
|    The output of a full sales team.                                     |
|    Without hiring one.                                                  |
|                                                                         |
|    ZPT handles sourcing, enrichment, and outreach using                 |
|    AI agents that connect to the tools a company already uses.          |
|                                                                         |
|    [ Set up 15 min intro call to learn more ]                           |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    OFF-WHITE SECTION: THE PROBLEM                                       |
|                                                                         |
|    A single SDR costs $50k+/year for 200-300 outreaches per month.      |
|    Most SMBs pay for tools they barely use, outreach happens in         |
|    bursts, and pipeline dries up between campaigns.                     |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    CREAM SECTION: TWO WAYS TO WORK WITH ZPT                            |
|                                                                         |
|    +---------------------------+  +---------------------------+         |
|    | MANAGED SERVICE           |  | SELF-DEPLOY               |         |
|    | (Recommended)             |  |                           |         |
|    |                           |  | ZPT deploys the local     |         |
|    | ZPT runs everything.      |  | folder structure and      |         |
|    | Enrichment, content,      |  | connects it to the        |         |
|    | outreach drafting. Output |  | company's Claude account. |         |
|    | delivered via dashboard   |  | Periodic updates and      |         |
|    | or pushed to integrations |  | support included.         |         |
|    | of choice (HubSpot, etc.) |  |                           |         |
|    +---------------------------+  +---------------------------+         |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    DARK NAVY SECTION: PROOF POINTS                                      |
|                                                                         |
|    Across Logistics        Aix Leasing        Financial Analytics       |
|    Enriched 20,000         Pipeline building   1,300+ contacts          |
|    contacts in one day.    in the Dutch        prospected across        |
|    Replaced $50k SDR.      market.             institutional inv.       |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    OFF-WHITE SECTION: CTA                                               |
|                                                                         |
|    Ready to see what ZPT can do for your business?                      |
|    [ Set up 15 min intro call to learn more ]                           |
|    Or email request@zpteam.ai                                           |
|                                                                         |
+------------------------------------------------------------------------+
|                          [FOOTER]                                       |
+------------------------------------------------------------------------+
```

---

### PRODUCT PAGE

```
+------------------------------------------------------------------------+
|                          [HEADER]                                       |
+------------------------------------------------------------------------+
|                                                                         |
|    HERO: How ZPT Works                                                  |
|                                                                         |
|    AI agents that chain multiple steps together autonomously.           |
|    Source, research, qualify, draft, follow up.                          |
|    Just like a human sales rep would.                                   |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    STEP-BY-STEP VISUAL (numbered, vertical flow)                        |
|                                                                         |
|    1. Connect existing tools                                            |
|       HubSpot, Apollo, LinkedIn, Google Maps, email.                    |
|       No migration. No new software.                                    |
|                                                                         |
|    2. ZPT sources and enriches prospects                                |
|       Multi-channel sourcing: LinkedIn, directories, maps,              |
|       conferences, competitor intel, job postings.                       |
|                                                                         |
|    3. Personalized outreach, ready for approval                         |
|       Every draft uses the company's voice, positioning,                |
|       and specific prospect research. Nothing generic.                  |
|                                                                         |
|    4. Pipeline managed end-to-end                                       |
|       Full activity logging, follow-up tracking,                        |
|       CRM sync, weekly reporting.                                       |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    CAPABILITIES GRID                                                    |
|                                                                         |
|    [Sourcing]  [Enrichment]  [Outreach]  [Pipeline]                     |
|    [CRM Sync]  [Content]     [Meetings]  [Reporting]                    |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    ENRICHMENT TEMPLATE EXAMPLES                                         |
|                                                                         |
|    "The company provides unstructured content and guidelines.            |
|     ZPT turns that into structured, actionable intelligence."           |
|                                                                         |
|    TAB 1: Simple Template                                               |
|    +---------------------------------------------------------------+   |
|    | Company    | Contact    | Role   | Email         | Status     |   |
|    |------------|------------|--------|---------------|------------|   |
|    | Acme Corp  | Jane Smith | CRO    | jane@acme.com | Verified   |   |
|    | Beta Inc   | Tom Brown  | VP Sal | tom@beta.io   | Enriched   |   |
|    +---------------------------------------------------------------+   |
|                                                                         |
|    TAB 2: Advanced Template (with ICP-Fit)                              |
|    +---------------------------------------------------------------+   |
|    | Company   | Contact  | ICP-Fit | Pain Signals   | Hook       |   |
|    |-----------|----------|---------|----------------|------------|   |
|    | Acme Corp | Jane S.  | 92/100  | Hiring SDR,    | "Saw your  |   |
|    |           |          |         | manual CRM,    |  SDR post  |   |
|    |           |          |         | low outreach   |  on LI..." |   |
|    +---------------------------------------------------------------+   |
|                                                                         |
|    Note: ICP scoring uses the company's own criteria and context.       |
|    The more detailed the input, the better the analysis.                |
|                                                                         |
+------------------------------------------------------------------------+
|                                                                         |
|    PRICING                                                              |
|                                                                         |
|    +------------------+  +------------------+  +------------------+     |
|    | Starter          |  | Growth           |  | Full Service     |     |
|    | ~$300/mo         |  | ~$600/mo         |  | ~$1,000/mo       |     |
|    |                  |  |                  |  |                  |     |
|    | Sourcing         |  | Everything in    |  | Everything in    |     |
|    | Enrichment       |  | Starter, plus:   |  | Growth, plus:    |     |
|    |                  |  | Outreach draft   |  | CRM sync         |     |
|    |                  |  | Pipeline mgmt    |  | Content creation |     |
|    |                  |  |                  |  | Meeting support  |     |
|    +------------------+  +------------------+  +------------------+     |
|                                                                         |
|    "A fraction of what a single SDR costs."                             |
|                                                                         |
+------------------------------------------------------------------------+
|                          [FOOTER]                                       |
+------------------------------------------------------------------------+
```

---

### ABOUT PAGE

Minimal. Company-focused, not founder-focused.

```
+------------------------------------------------------------------------+
|                          [HEADER]                                       |
+------------------------------------------------------------------------+
|                                                                         |
|    About ZPT                                                            |
|                                                                         |
|    ZPT started as a sales folder for a financial analytics startup.     |
|    The system -- markdown files, AI agents, and structured workflows -- |
|    ended up more valuable than the product it was built to sell.        |
|                                                                         |
|    Two other companies asked for their own version.                     |
|    ZPT became a standalone product.                                     |
|                                                                         |
|    Today, ZPT operates across three industries: financial analytics,    |
|    equipment leasing, and logistics. Same system, different context.    |
|                                                                         |
|    The vision: give any B2B company the output of a full sales team     |
|    at a fraction of the cost, using AI agents that connect to the       |
|    tools the company already uses.                                      |
|                                                                         |
|    ZPT is based in Europe. The product is live and operational.         |
|                                                                         |
|    [ Set up 15 min intro call to learn more ]                           |
|    request@zpteam.ai                                                    |
|                                                                         |
+------------------------------------------------------------------------+
|                          [FOOTER]                                       |
+------------------------------------------------------------------------+
```

---

### RESOURCES PAGE

Initially lightweight. Expandable with blog posts and case studies later.

```
+------------------------------------------------------------------------+
|                          [HEADER]                                       |
+------------------------------------------------------------------------+
|                                                                         |
|    Resources                                                            |
|                                                                         |
|    CASE STUDIES (cards)                                                  |
|                                                                         |
|    +---------------------------+  +---------------------------+         |
|    | Logistics Company         |  | Equipment Leasing         |         |
|    | 20,000 contacts enriched  |  | Pipeline building in      |         |
|    | in a single day.          |  | the Dutch market.         |         |
|    | [Read more]               |  | [Read more]               |         |
|    +---------------------------+  +---------------------------+         |
|                                                                         |
|    (Blog section placeholder -- "Coming soon" or hidden until ready)    |
|                                                                         |
+------------------------------------------------------------------------+
|                          [FOOTER]                                       |
+------------------------------------------------------------------------+
```

---

### FOOTER (all pages)

```
+------------------------------------------------------------------------+
|  Zero Person Team           Product | About | Resources                 |
|                              request@zpteam.ai                         |
|                              LinkedIn                                  |
|                              [EN v]                                     |
|                                                                         |
|  (c) 2026 ZPT                                                          |
+------------------------------------------------------------------------+
```

---

## Content Rules

Source: `company-context/voice.md`

- Lead with real use cases, not abstract promises
- Explain what ZPT does today, not hypotheticals
- Share the technical approach openly (agentic AI, tool connections)
- No specific numbers without a real case backing them
- Frame AI as enhancing human work, not replacing humans
- Acknowledge that this is a new concept
- **No em dashes** anywhere in the text (use commas, periods, or restructure)

**Forbidden phrases:**
- "Revolutionary", "game-changing", "best-in-class"
- "Guaranteed results"
- "AI-powered" as a standalone selling point
- "Cutting-edge", "synergy", "leverage", "unlock"
- "Tokens", "API calls"

**Allowed technical language:**
- "LLM", "agentic", "MCP" / "Model Context Protocol"

---

## Language / i18n

- Launch language: **English**
- Language selector visible from day one (EN, NL, ES, IT)
- Translations can be added incrementally post-launch
- Implementation: JSON translation files per locale, no framework lock-in

---

## SEO Foundations

Based on the SEO audit framework from PAAI. Built in from day one.

### Per-Page SEO

| Page | Title Tag (50-60 chars) | H1 |
|------|------------------------|-----|
| Home | ZPT -- AI Sales Agents for B2B Companies | The output of a full sales team. Without hiring one. |
| Product | How ZPT Works -- AI-Powered Sales Operations | How ZPT Works |
| About | About ZPT -- AI Sales Agents | About ZPT |
| Resources | Case Studies -- ZPT | Resources |

### Technical SEO Checklist
- [ ] Unique title tag + meta description per page
- [ ] One H1 per page, proper heading hierarchy (H1 > H2 > H3)
- [ ] Canonical URLs on all pages
- [ ] XML sitemap generated at build time
- [ ] robots.txt allowing all crawling
- [ ] Structured data: Organization schema (JSON-LD)
- [ ] Open Graph + Twitter meta tags per page
- [ ] Alt text on all images
- [ ] Mobile-first responsive design
- [ ] Core Web Vitals optimized (static site = fast by default)
- [ ] Self-referencing canonical tags
- [ ] Clean URL structure (no trailing slashes, lowercase)

### Content SEO
- [ ] Keywords in first 100 words of each page
- [ ] Internal linking between all pages
- [ ] Descriptive anchor text
- [ ] No orphan pages

---

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Next.js project in `zpt/dev/` with Tailwind CSS
2. Configure `next.config.js` with `output: 'export'`
3. Set up Tailwind with the color palette and font configuration above
4. Set up i18n structure (JSON locale files, language selector component)
5. Initialize git repo, push to `wybeharms/zpt-dev` on GitHub

### Phase 2: Build Pages
6. Build shared layout: header (logo, nav, language selector, CTA), footer
7. Build Home page sections
8. Build Product page (how it works, capabilities, enrichment templates, pricing)
9. Build About page
10. Build Resources page (case studies)

### Phase 3: SEO + Polish
11. Add meta tags, structured data, sitemap, robots.txt
12. Mobile responsiveness pass
13. Performance check (Lighthouse)
14. Content review against voice.md rules

### Phase 4: Deploy
15. Connect GitHub repo to Vercel (Import Project)
16. Add `zpteam.ai` as custom domain in Vercel
17. Update DNS records in Namecheap (CNAME/A records to Vercel)
18. Verify SSL, both zpteam.ai and www.zpteam.ai
19. Set up email forwarding for request@zpteam.ai (separate from Vercel)

---

## Future Migration Path (Vercel to AWS)

When ready to add a dashboard/auth layer:

1. Remove `output: 'export'` from `next.config.js`
2. Deploy to AWS Amplify (native Next.js support)
3. Add Cognito for auth (same pattern as PAAI)
4. Update DNS in Namecheap: point zpteam.ai from Vercel to Amplify/CloudFront
5. Delete Vercel project

No code rewrite. React components, Tailwind styles, and pages carry over unchanged.

---

## Resolved Questions

- **Logo**: Wybe is creating one. For now, use "Zero Person Team" in Source Code Pro as text logo.
- **Colors**: PAAI navy (#0C0C28) + LVMH-inspired warm gold accents. Full palette above.
- **Contact method**: Email to request@zpteam.ai + CTA "Set up 15 min intro call to learn more"
- **Analytics**: Skip for v1. Add later if needed.
- **GDPR**: Skip for v1.
- **About page**: Minimal, company-focused, no personal founder details.
- **Fonts**: Cormorant Garamond (headings), Inter (body), Source Code Pro (logo).

## Open Questions

- [ ] Does Wybe want the intro call CTA to link to a Calendly page, or just to the email address for now?
- [ ] For the Resources page case studies, should Claude write detailed case study content, or keep it as brief proof points?
- [ ] Email setup: is Wybe setting up request@zpteam.ai via Namecheap Private Email, Google Workspace, or another provider?
