# ZPT Landing Page -- Deployment

## Tech Stack

- **Framework**: Next.js (App Router, static export)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (Hobby tier)
- **Domain**: zpteam.ai (Namecheap, active until Mar 2028)
- **Repo**: github.com/wybeharms/zpt-dev
- **SSL**: Auto-provisioned by Vercel

## How It Works

The site is fully static. `npm run build` generates plain HTML/CSS/JS in the `out/` directory. No server-side rendering, no API routes, no Vercel-specific features. Deployable to any static host.

## Deployment

Vercel auto-deploys on push to `main`. No manual steps needed after initial setup.

### Initial Setup (completed Mar 2026)

1. Imported `zpt-dev` repo into Vercel
2. Framework auto-detected as Next.js, default build settings used
3. Added `zpteam.ai` and `www.zpteam.ai` as custom domains in Vercel
4. Set `www.zpteam.ai` as primary (root redirects to www)

## DNS (Namecheap)

| Type | Host | Value |
|------|------|-------|
| A | @ | 216.198.79.1 |
| CNAME | www | 40eb4bbc083adbe7.vercel-dns-017.com |
| TXT | @ | google-site-verification=... |

Namecheap parking and redirect records were removed.

## Google Search Console

- Verified via TXT DNS record
- Sitemap submitted: https://www.zpteam.ai/sitemap.xml

## Email

Separate from the website. Email for request@zpteam.ai needs to be set up via Google Workspace (requires MX records in Namecheap).

## Future Migration (Vercel to AWS Amplify)

When a dashboard/auth layer is needed:

1. Remove `output: 'export'` from `next.config.ts`
2. Deploy to AWS Amplify (native Next.js support)
3. Add Cognito for auth
4. Update DNS: point zpteam.ai from Vercel to Amplify/CloudFront
5. Delete Vercel project

No code rewrite needed. Components, styles, and pages carry over unchanged.
