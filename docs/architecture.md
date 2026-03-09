# ZPT Website & Customer Portal — Architecture

## Overview

zpteam.ai is a Next.js 16 application deployed on Vercel. The site serves two purposes:

1. **Marketing site** — public pages describing ZPT products and services
2. **Customer portal** — auth-gated area where customers view enriched prospect lists, competitor analyses, and upload onboarding files

Wybe does all data processing locally in ZPT project folders. The portal is a read-only window into S3-synced outputs.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.6 (server mode, Turbopack) |
| Hosting | Vercel (auto-deploy from `main` branch) |
| Styling | Tailwind CSS v4 (inline theme in `globals.css`) |
| Auth | NextAuth v5 (beta) + AWS Cognito OIDC |
| Storage | AWS S3 (`zpt-portal-data` bucket) |
| Language | TypeScript 5, React 19 |
| i18n | Custom I18nProvider (en, nl, es, it) |

---

## Repository Structure

```
dev/                              # Root of the Next.js app
├── app/
│   ├── layout.tsx                # Root layout (fonts, metadata, I18nProvider — no Header/Footer)
│   ├── globals.css               # Tailwind v4 theme (colors, fonts)
│   ├── (marketing)/              # Route group — public marketing pages
│   │   ├── layout.tsx            # Wraps children with Header + Footer
│   │   ├── page.tsx              # / — homepage
│   │   ├── about/page.tsx        # /about
│   │   ├── sales/page.tsx        # /sales
│   │   ├── advisory/page.tsx     # /advisory
│   │   ├── resources/page.tsx    # /resources — case studies
│   │   └── trial/page.tsx        # /trial — trial onboarding wizard
│   ├── portal/                   # Auth-gated customer portal
│   │   ├── layout.tsx            # Server component: checks session, renders PortalShell
│   │   ├── page.tsx              # Redirects to /portal/prospects
│   │   ├── onboarding/page.tsx   # File upload (drag-and-drop)
│   │   ├── prospects/page.tsx    # Enriched contacts table
│   │   └── competitors/page.tsx  # Competitor analysis cards
│   └── api/
│       ├── auth/[...nextauth]/route.ts  # NextAuth handlers (GET/POST)
│       ├── portal/
│       │   ├── upload/route.ts   # Generates presigned S3 PUT URLs
│       │   └── data/route.ts     # Fetches S3 data (files list or JSON)
│       └── trial/
│           ├── submit/route.ts   # Validates + writes trial submission to S3
│           └── upload/route.ts   # Presigned URL for trial file uploads (no auth)
├── components/
│   ├── Header.tsx                # Sticky nav (marketing + Portal link)
│   ├── Footer.tsx                # Site footer
│   ├── portal/
│   │   ├── PortalShell.tsx       # Client shell: sidebar + header + content area
│   │   ├── PortalSidebar.tsx     # Nav links + admin customer picker
│   │   └── PortalHeader.tsx      # User name, customer name, sign out
│   └── pages/                    # Page-level content components
│       ├── HomeContent.tsx
│       ├── AboutContent.tsx
│       ├── SalesContent.tsx
│       ├── AdvisoryContent.tsx
│       ├── ResourcesContent.tsx
│       └── TrialContent.tsx      # Trial wizard (3-step form, submit logic)
│   ├── trial/                    # Trial wizard sub-components
│   │   ├── TrialProgressBar.tsx
│   │   ├── TrialStepBasicInfo.tsx
│   │   ├── TrialStepICP.tsx
│   │   └── TrialStepDeliverable.tsx
├── lib/
│   ├── auth.ts                   # NextAuth config (Cognito provider, JWT/session callbacks)
│   ├── auth-types.ts             # Type extensions for Session and JWT
│   └── s3.ts                     # S3 utilities (get, list, put, upload, listCustomerIds)
├── proxy.ts                      # Route protection — redirects unauthenticated /portal/* to login
├── next.config.ts                # Server mode (no static export)
├── .env.local                    # Secrets (gitignored) — see "Environment Variables" below
└── docs/
    └── architecture.md           # This file
```

---

## Route Architecture

### Route Groups

Next.js route groups (parenthesized folders) allow different layouts without affecting URLs:

- **`(marketing)/`** — wraps pages with `Header` + `Footer`
- **`portal/`** — wraps pages with `PortalShell` (sidebar + portal header)

The root `layout.tsx` only provides: html/body shell, fonts, `I18nProvider`, metadata, and `JsonLd`.

### URL Map

| URL | Type | Description |
|-----|------|-------------|
| `/` | Static | Homepage |
| `/about` | Static | About page |
| `/sales` | Static | Sales product page |
| `/advisory` | Static | Advisory/custom workflows |
| `/resources` | Static | Case studies |
| `/trial` | Static | Trial onboarding wizard (3-step form) |
| `/portal` | Dynamic | Redirects to `/portal/prospects` |
| `/portal/onboarding` | Dynamic | File upload |
| `/portal/prospects` | Dynamic | Enriched contacts table |
| `/portal/competitors` | Dynamic | Competitor analysis cards |
| `/api/auth/*` | Dynamic | NextAuth endpoints |
| `/api/portal/upload` | Dynamic | Presigned URL generation |
| `/api/portal/data` | Dynamic | S3 data fetching |
| `/api/trial/submit` | Dynamic | Write trial submission to S3 |
| `/api/trial/upload` | Dynamic | Presigned URL for trial file uploads |

---

## Authentication

### Flow

1. User visits `/portal/*`
2. `proxy.ts` intercepts — if no session, redirects to Cognito hosted login
3. Cognito authenticates, redirects back with auth code
4. NextAuth exchanges code for tokens, extracts `custom:role` and `custom:customer_id` from Cognito profile
5. JWT callback stores role + customerId in the token
6. Session callback exposes role + customerId to components

### Roles

| Role | Behavior |
|------|----------|
| `admin` | Sees all customers, can switch between them via sidebar dropdown |
| `customer` | Sees only own data (locked to their `custom:customer_id`) |

### Key Files

- `lib/auth.ts` — NextAuth config with Cognito provider and callbacks
- `lib/auth-types.ts` — Extends `Session` and `JWT` types with `role` and `customerId`
- `proxy.ts` — Exports `auth` as `proxy` with matcher for `/portal/:path*`
- `app/api/auth/[...nextauth]/route.ts` — Exposes GET/POST handlers

---

## S3 Data Model

```
s3://zpt-portal-data/
├── trials/                       # Trial submissions (public, no auth)
│   └── tr_{hex12}/
│       ├── submission.json       # Full wizard data
│       ├── icp_documents/        # ICP docs uploaded in Step 2 (optional)
│       └── contacts.csv          # Contact list for enrichment (optional)
└── {customer_id}/                # Customer data (auth-gated via portal)
    ├── onboarding/               # Customer-uploaded files (via presigned URL)
    ├── enrichment/               # Wybe-synced prospect JSONs
    │   └── contacts.json         # Array of prospect objects
    └── competitors/              # Wybe-synced analysis JSONs
        └── analysis.json         # Array of competitor objects
```

### Expected JSON Formats

**`enrichment/contacts.json`** — array of objects:
```json
[
  {
    "name": "Jane Doe",
    "company": "Acme Corp",
    "title": "VP Sales",
    "email": "jane@acme.com",
    "linkedin": "https://linkedin.com/in/janedoe",
    "score": 85
  }
]
```

**`competitors/analysis.json`** — array of objects:
```json
[
  {
    "name": "CompetitorX",
    "website": "https://competitorx.com",
    "summary": "Enterprise sales platform focused on...",
    "strengths": ["Strong brand", "Large team"],
    "weaknesses": ["Expensive", "Slow onboarding"]
  }
]
```

### S3 Utilities (`lib/s3.ts`)

| Function | Purpose |
|----------|---------|
| `getJsonFromS3(key)` | Fetch and parse a JSON file |
| `listS3Objects(prefix)` | List files under a prefix |
| `putJsonToS3(key, data)` | Write a JSON object to S3 (used by trial submit) |
| `getUploadUrl(key, contentType)` | Generate a 1-hour presigned PUT URL |
| `listCustomerIds()` | List top-level prefixes (admin customer list) |

---

## Vercel Deployment

### Configuration

- **Framework**: Next.js (auto-detected)
- **Build command**: `next build`
- **Output**: Server mode (no `output: 'export'`)
- **Root directory**: `dev/` (or repo root, depending on Vercel project config)

### Environment Variables (Vercel Dashboard)

All values from `.env.local` must be added to Vercel project settings:

| Variable | Description |
|----------|-------------|
| `NEXTAUTH_URL` | Production URL: `https://zpteam.ai` |
| `NEXTAUTH_SECRET` | Random secret for signing JWTs |
| `COGNITO_CLIENT_ID` | Cognito app client ID |
| `COGNITO_CLIENT_SECRET` | Cognito app client secret |
| `COGNITO_ISSUER` | `https://cognito-idp.eu-north-1.amazonaws.com/{pool-id}` |
| `AWS_ACCESS_KEY_ID` | IAM user access key (S3 permissions) |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_REGION` | `eu-north-1` |
| `S3_BUCKET_NAME` | `zpt-portal-data` |

### Important Notes

- `images.unoptimized: true` is kept in `next.config.ts` — Vercel image optimization is not needed for this site
- Static marketing pages are pre-rendered at build time
- Portal pages and API routes are server-rendered on demand

---

## Design System

### Colors (defined in `globals.css` as Tailwind v4 inline theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#0C0C28` | Headers, sidebar, dark backgrounds |
| `navy-light` | `#161640` | Hover states on navy |
| `gold` | `#C9A96E` | Primary accent, CTAs, active states |
| `gold-light` | `#D4BA8A` | Gold hover states |
| `off-white` | `#FAFAF7` | Page backgrounds |
| `cream` | `#F5F4ED` | Table headers, subtle backgrounds |
| `text-primary` | `#07111E` | Body text |
| `text-muted` | `#64748B` | Secondary text |
| `border-warm` | `#E7E2D4` | Borders and dividers |

### Fonts

| Token | Family | Usage |
|-------|--------|-------|
| `--font-heading` | Cormorant Garamond | Headings (serif) |
| `--font-body` | Plus Jakarta Sans | Body text (sans-serif) |
| `--font-logo` | Source Code Pro | Logo, code elements (monospace) |

---

## Local Workflow (Wybe)

After processing data locally in ZPT project folders, Wybe syncs results to S3:

```bash
# Pull customer onboarding files
aws s3 sync s3://zpt-portal-data/acme/onboarding/ ~/Sites/zpt/acme/company-context/

# Push enrichment results
aws s3 cp contacts.json s3://zpt-portal-data/acme/enrichment/contacts.json

# Push competitor analysis
aws s3 cp analysis.json s3://zpt-portal-data/acme/competitors/analysis.json
```

---

## Domain & Email Infrastructure

### DNS (Namecheap)

Namecheap is the domain registrar for `zpteam.ai` and manages all DNS records:

| Record Type | Purpose |
|-------------|---------|
| A + CNAME | Website routing to Vercel |
| TXT | Google Workspace domain verification |
| MX | Email routing to Google Workspace |
| TXT (SPF) | Authorizes Google as valid sender for `@zpteam.ai` |
| TXT (DKIM) | Cryptographic email signing via Google-generated key |
| TXT (DMARC) | Email authentication monitoring (currently no enforcement) |

### Google Workspace (Email)

- **Plan**: Business Starter
- **Primary user**: wybe@zpteam.ai
- **Aliases** (deliver to wybe@zpteam.ai inbox):
  - `request@zpteam.ai` — used as the mailto CTA in the site header and sales page
  - `help@zpteam.ai` — support alias
- **Authentication**: SPF + DKIM configured; DMARC in monitoring mode
- **Admin console**: admin.google.com (logged in as wybe@zpteam.ai)

All email for `@zpteam.ai` routes through Google Workspace. Additional paid seats can be added later if separate mailboxes are needed; aliases allow multiple sender identities on a single seat.

---

## AWS Infrastructure

### Cognito User Pool

- **Region**: eu-north-1
- **Custom attributes**: `custom:role` (admin/customer), `custom:customer_id` (e.g., "acme")
- **App client**: Authorization code flow, OIDC scopes (`openid`, `profile`, `email`)
- **Callback URLs**: `http://localhost:3000/api/auth/callback/cognito`, `https://zpteam.ai/api/auth/callback/cognito`
- **Sign-out URLs**: `http://localhost:3000`, `https://zpteam.ai`

### S3 Bucket

- **Name**: `zpt-portal-data`
- **Region**: eu-north-1
- **Public access**: Blocked
- **Structure**: `{customer_id}/{onboarding|enrichment|competitors}/`

### IAM

- **Portal IAM user** (`zpt-portal-s3`): GetObject, PutObject, ListBucket on `zpt-portal-data`
- Access keys stored in `.env.local` and Vercel env vars

### Creating Cognito Users

```bash
aws cognito-idp admin-create-user \
  --user-pool-id <pool-id> \
  --username wybe@zpteam.ai \
  --user-attributes Name=custom:role,Value=admin Name=custom:customer_id,Value=all

aws cognito-idp admin-create-user \
  --user-pool-id <pool-id> \
  --username client@example.com \
  --user-attributes Name=custom:role,Value=customer Name=custom:customer_id,Value=acme
```

---

## Portal UI Patterns

### Server vs Client Components

- `app/portal/layout.tsx` — **Server component**: calls `auth()` to check session, fetches customer IDs from S3
- `components/portal/PortalShell.tsx` — **Client component**: manages customer-switching state, wraps sidebar + header + content
- Portal pages (`onboarding`, `prospects`, `competitors`) — **Client components**: fetch data via `/api/portal/data`

### Data Flow

1. Portal layout (server) checks auth and passes session info to PortalShell
2. PortalShell (client) renders sidebar + header + content slot
3. Each portal page (client) fetches its own data from `/api/portal/data?type={type}`
4. Upload page posts to `/api/portal/upload` to get presigned URL, then uploads directly to S3

### Admin Customer Switching

Admin users see a dropdown in the sidebar listing all customer IDs (fetched from S3 top-level prefixes). Selecting a different customer re-renders the page. The data API accepts an optional `customerId` query param that admins can use to view other customers' data.

---

## Trial Onboarding Flow

### Vision

The primary sales CTA is a **10-day free trial** with a self-service onboarding wizard at `/trial`. Prospects "brief their AI team" — framing a form as a mission assignment rather than lead capture. This lowers the barrier to entry and lets prospects experience the product before committing to a call.

### How It Works (User Journey)

1. Prospect visits `/sales` and clicks **"Start Free Trial"** (or clicks the header CTA on any page)
2. Lands on `/trial` — a 3-step wizard on a navy background with a progress bar
3. **Step 1 "About You"** (~30s): Company name, contact name, email, website (optional)
4. **Step 2 "Your Ideal Customer"** (~45-60s): Structured fields (industry, company size, geography) + freeform fields (ICP description, example companies) + optional ICP document upload (PDF/DOCX/PPTX/Excel)
5. **Step 3 "Choose Your First Deliverable"** (~45s): Three selectable cards with conditional fields:
   - **Test Our Enrichment** — upload a CSV/Excel contact list for enrichment
   - **Find New Prospects** — toggle between 25 or 50 prospects
   - **Competitor Analysis** — enter 1-3 competitor names
6. Submit → success screen: "Your AI agents are being briefed. Results within 48 hours."
7. Behind the scenes: submission.json written to S3. Wybe reviews, fulfills, creates a Cognito account, syncs results to customer folder, emails the prospect.

### CTA Routing

All primary sales CTAs now point to `/trial` instead of `mailto:request@zpteam.ai`:

| Location | CTA Text | Destination |
|----------|----------|-------------|
| Header (desktop + mobile) | "Set Up Intro Call" | `mailto:request@zpteam.ai` |
| Sales hero primary button | "Start Free Trial" | `/trial` |
| Sales pricing buttons (x3) | "Start Free Trial" | `/trial` |
| Sales hero sub-text | "Your first assignment is on us." | (not a link) |

**The header CTA stays as a mailto on every page** — it's the universal "book a call" action. Only the sales page CTAs route to `/trial`. Home page CTAs (link to `/sales` and `/advisory`), advisory page CTAs (keep mailto), and footer email (informational) are also unchanged.

### File Structure

```
app/(marketing)/trial/page.tsx              # Route: metadata + renders TrialContent
components/pages/TrialContent.tsx            # Main wizard: step state, form data, submit logic
components/trial/TrialProgressBar.tsx        # Visual 1-2-3 step indicator
components/trial/TrialStepBasicInfo.tsx      # Step 1: company + contact fields
components/trial/TrialStepICP.tsx            # Step 2: ICP structured/freeform + doc upload
components/trial/TrialStepDeliverable.tsx    # Step 3: three cards + conditional fields + file upload
app/api/trial/submit/route.ts               # POST: validate, generate trialId, write submission.json to S3
app/api/trial/upload/route.ts               # POST: presigned URL for trial file uploads (no auth)
```

### API Routes

**`POST /api/trial/submit`**

Accepts the full wizard payload. Generates a `trialId` (format: `tr_` + 12 hex chars), writes `submission.json` to S3, returns `{ trialId }`.

Request body:
```json
{
  "trialId": "tr_a1b2c3d4e5f6",
  "company": { "name": "TransLog BV", "website": "translog.nl" },
  "contact": { "name": "Sarah de Vries", "email": "sarah@translog.nl" },
  "icp": {
    "industry": "Logistics",
    "companySize": "50-200",
    "geography": "Europe",
    "description": "Freight forwarders and 3PL companies...",
    "exampleCustomers": "Rhenus Logistics, Geodis",
    "documents": ["target_customer.pdf"]
  },
  "deliverable": { "type": "prospect", "prospectCount": 50 }
}
```

Deliverable variants:
- `{ type: "prospect", prospectCount: 25 | 50 }`
- `{ type: "enrich", uploadedFile: "contacts.csv" }`
- `{ type: "competitor", competitors: ["Comp A", "Comp B"] }`

**`POST /api/trial/upload`**

Generates a presigned S3 PUT URL for file uploads during the wizard. No auth required — uses `trialId` for scoping.

Request body:
```json
{
  "trialId": "tr_a1b2c3d4e5f6",
  "fileName": "contacts.csv",
  "contentType": "text/csv",
  "folder": "icp_documents"
}
```

If `folder` is `"icp_documents"`, files go to `trials/{trialId}/icp_documents/{fileName}`. Otherwise files go to `trials/{trialId}/{fileName}`.

### S3 Data Model for Trials

```
s3://zpt-portal-data/
├── trials/                           # All trial submissions
│   └── tr_a1b2c3d4e5f6/
│       ├── submission.json           # Full wizard data (written by /api/trial/submit)
│       ├── icp_documents/            # ICP docs uploaded in Step 2 (optional)
│       │   └── target_customer.pdf
│       └── contacts.csv              # Contact list uploaded in Step 3 (enrichment only)
└── {customer_id}/                    # Created later when Wybe provisions the customer
    ├── enrichment/
    ├── competitors/
    └── onboarding/
```

### S3 Utility Added

`putJsonToS3(key, data)` in `lib/s3.ts` — server-side JSON write using PutObjectCommand. Used by the trial submit route to write `submission.json`.

### Wizard Technical Details

- **TrialId generation**: Client generates the trialId on step 1→2 transition using `crypto.getRandomValues()` so that file uploads in steps 2 and 3 can reference it before final submission. The server also generates one on submit; the server-generated ID is used for `submission.json`.
- **File uploads**: Reuse the same presigned URL pattern as `app/api/portal/upload/route.ts`, but without auth. Files upload directly to S3 from the browser.
- **Conditional fields**: Step 3 cards use `grid-rows-[1fr]/[0fr]` expand animation (same pattern as `FaqAccordion.tsx`).
- **i18n**: All trial strings live under `trial.*` in locale JSON files. Non-English locales have English placeholder text.
- **No auth required**: The entire trial flow is public. No Cognito session needed.

### Wybe's Fulfillment Workflow (Manual, V1)

1. Check S3 `trials/` prefix for new submissions (via AWS console or `aws s3 ls`)
2. Review `submission.json` — understand the prospect's ICP and chosen deliverable
3. Spin up ZPT agents to fulfill the deliverable (enrichment, prospecting, or competitor analysis)
4. Create a Cognito account for the prospect (`custom:role=customer`, `custom:customer_id=<id>`)
5. Sync results to S3 under the new customer prefix (e.g., `translog/enrichment/contacts.json`)
6. Email the prospect with results + portal login credentials

---

## Trial Onboarding — Remaining Work

### V2: SES Email Notification on Submission

**Goal**: Wybe gets an email at `request@zpteam.ai` every time a trial is submitted, so no manual S3 polling is needed.

**Implementation plan**:
- Set up AWS SES in eu-north-1 (verify `zpteam.ai` domain or at minimum `request@zpteam.ai` as sender)
- Add `@aws-sdk/client-ses` dependency
- Create a `sendTrialNotification()` utility in `lib/ses.ts` (or `lib/email.ts`)
- Call it from `app/api/trial/submit/route.ts` after writing `submission.json` to S3
- Email should include: company name, contact name/email, chosen deliverable, link to S3 submission
- Non-blocking: if SES fails, the submission still succeeds (log the error, don't fail the request)

### V2: Trial Admin View in Portal

**Goal**: Wybe sees a list of pending trial submissions in the portal instead of checking S3 manually.

**Implementation plan**:
- Add a `/portal/trials` page (admin-only) that lists all `trials/*/submission.json` files from S3
- Show company name, contact, deliverable type, submitted timestamp, and status
- Could add a status field to `submission.json` (pending → in-progress → delivered)

### V2: Auto-Create Cognito Account on Submission

**Goal**: Automatically provision a Cognito account when a trial is submitted so the prospect can log into the portal immediately (even before results are ready).

**Implementation plan**:
- Use `@aws-sdk/client-cognito-identity-provider` AdminCreateUser
- Set `custom:role=customer`, `custom:customer_id=tr_{id}` (or a derived slug)
- Send a welcome email via Cognito's built-in messaging or SES
- Create the S3 customer prefix structure

### Future: Rate Limiting / Abuse Prevention

The trial endpoints (`/api/trial/submit` and `/api/trial/upload`) are currently public with no rate limiting. For V1 this is fine given low traffic. If abuse becomes a concern:
- Add Vercel Edge rate limiting
- Add basic honeypot fields or CAPTCHA
- Validate email domain (reject disposable email providers)

### Future: Trial Analytics

Track trial funnel metrics: step completion rates, deliverable choice distribution, time-to-submit. Could use Vercel Analytics, a simple S3 events log, or a lightweight analytics service.
