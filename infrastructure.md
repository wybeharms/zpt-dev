# ZPT Dev Site Infrastructure

The zptpartners.com marketing website. Stack details live in `package.json` (Next.js 16, React 19, Tailwind 4).

## Domains

- **`zptpartners.com`** — primary (renamed 2026-05-01)
- **`zpteam.ai`** — legacy, running in parallel during cutover

Both should resolve to the same site. **`www.zptpartners.com` is the canonical host** (it is the base used in the sitemap, canonical tags, and OG URLs). `zpteam.ai` already 308-redirects to `www.zptpartners.com`, so the planned cutover redirect is effectively live.

## Registrar: Namecheap

Both domains are registered at Namecheap. DNS is managed under **Domain List → Manage → Advanced DNS** for each domain.

To add or edit DNS records (TXT for verification, MX for email, A/CNAME for hosting): sign in to Namecheap, find the domain, open Advanced DNS, add the record. Changes typically propagate in a few minutes.

## Hosting

Vercel project **`zpt-dev`** (default URL: `zpt-dev.vercel.app`), deployed from `github.com/wybeharms/zpt-dev` on Wybe's personal Vercel account (Hobby tier).

## Email

Google Workspace seat under `zptpartners.com`. Primary: `wybe@zptpartners.com`. Alias `wybe@zpteam.ai` still works on the same seat.

### Mail Authentication And Amazon SES

The client portal sends its mail through Amazon SES on the ZPT Partners AWS account, so `zptpartners.com` has two senders: Google Workspace for normal company mail and SES for portal mail. They coexist because each signs with its own DKIM selector.

Added at Namecheap on September 4th, 2026, TTL Automatic on all three:

| Type | Host | Value |
|---|---|---|
| CNAME | `b53u6j4qxhbhqot6ogse2ysdoflkzk6k._domainkey` | `b53u6j4qxhbhqot6ogse2ysdoflkzk6k.dkim.amazonses.com` |
| CNAME | `jxbofcohifasic7jdvzuoo7tnq6yz3as._domainkey` | `jxbofcohifasic7jdvzuoo7tnq6yz3as.dkim.amazonses.com` |
| CNAME | `7ikgpvwceedfsx45rrfrgvkfdziqsm6e._domainkey` | `7ikgpvwceedfsx45rrfrgvkfdziqsm6e.dkim.amazonses.com` |

Namecheap appends the domain to whatever goes in the Host field, so the host is the selector plus `._domainkey` and never the full hostname. Pasting the full name produces `..._domainkey.zptpartners.com.zptpartners.com`, which never verifies.

🔴 **Never add a second SPF record.** The existing `v=spf1 include:_spf.google.com ~all` serves Google Workspace, and two SPF records break both senders at once. SES uses the default `amazonses.com` MAIL FROM, so it needs nothing in this domain's SPF. Only a custom MAIL FROM subdomain would change that, and none is configured.

Left untouched on purpose: the Google SPF record, the MX record pointing at `smtp.google.com`, the `google._domainkey` TXT record, and DMARC at `v=DMARC1; p=none;`.

Account, region, and SES sandbox detail: `~/Sites/cloud-accounts.md`, ZPT Partners section.

## Google Search Console

Both domains added as **Domain properties** (covers all subdomains, http/https). Verification is via Namecheap TXT record. The properties are owned by the **`wybeharms@gmail.com`** Google account (not `wybe@zptpartners.com` or the Coghill account), so sign in with that account to manage them.

- `zptpartners.com` — verified 2026-05-10
- `zpteam.ai` — verified earlier

**Sitemap:** `https://www.zptpartners.com/sitemap.xml` was submitted on 2026-06-03. Google re-reads it automatically on its own schedule, so there is no need to resubmit after a deploy or to upload a file anywhere. A "Couldn't fetch" status in the first hours after submission is normal (Google has not crawled it yet) and clears on its own; only worth a look if it persists past two or three days.

**Change of Address:** not done, and not planned. `zpteam.ai` has no meaningful traffic, so transferring its search equity is not worth the effort. The 308 redirect to `www.zptpartners.com` already covers it.

## SEO files (auto-generated, do not upload by hand)

These are produced by the Next.js build, not stored as static files. They regenerate on every deploy and are served live:

- **`/sitemap.xml`** comes from `app/sitemap.ts`. The route list is hardcoded. **When a page is added or removed, edit the `routes` array in `app/sitemap.ts` and redeploy.** The live file and Google's copy update on their own after that.
- **`/robots.txt`** comes from `app/robots.ts`. Allows all crawlers and points to the sitemap.
- **Canonical tags** come from each page's `metadata.alternates.canonical` (a relative path), resolved against `metadataBase` (`https://www.zptpartners.com`) set in `app/layout.tsx`. Every page declaring its own canonical is what cleared the www/non-www "duplicate without canonical" flag in Search Console.
- **Organization JSON-LD** is an inline `<script type="application/ld+json">` block in `app/page.tsx` (home page only), using `apple-touch-icon.png` as the logo.

Nothing here is uploaded manually. To change any of it, edit the relevant file and push; Vercel rebuilds and Google re-reads on its next crawl.
