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
│   │   └── resources/page.tsx    # /resources — case studies
│   ├── portal/                   # Auth-gated customer portal
│   │   ├── layout.tsx            # Server component: checks session, renders PortalShell
│   │   ├── page.tsx              # Redirects to /portal/prospects
│   │   ├── onboarding/page.tsx   # File upload (drag-and-drop)
│   │   ├── prospects/page.tsx    # Enriched contacts table
│   │   └── competitors/page.tsx  # Competitor analysis cards
│   └── api/
│       ├── auth/[...nextauth]/route.ts  # NextAuth handlers (GET/POST)
│       └── portal/
│           ├── upload/route.ts   # Generates presigned S3 PUT URLs
│           └── data/route.ts     # Fetches S3 data (files list or JSON)
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
│       └── ResourcesContent.tsx
├── lib/
│   ├── auth.ts                   # NextAuth config (Cognito provider, JWT/session callbacks)
│   ├── auth-types.ts             # Type extensions for Session and JWT
│   └── s3.ts                     # S3 utilities (get, list, upload, listCustomerIds)
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
| `/portal` | Dynamic | Redirects to `/portal/prospects` |
| `/portal/onboarding` | Dynamic | File upload |
| `/portal/prospects` | Dynamic | Enriched contacts table |
| `/portal/competitors` | Dynamic | Competitor analysis cards |
| `/api/auth/*` | Dynamic | NextAuth endpoints |
| `/api/portal/upload` | Dynamic | Presigned URL generation |
| `/api/portal/data` | Dynamic | S3 data fetching |

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
└── {customer_id}/
    ├── onboarding/           # Customer-uploaded files (via presigned URL)
    ├── enrichment/           # Wybe-synced prospect JSONs
    │   └── contacts.json     # Array of prospect objects
    └── competitors/          # Wybe-synced analysis JSONs
        └── analysis.json     # Array of competitor objects
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
