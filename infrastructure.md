# ZPT Dev Site Infrastructure

The zptpartners.com marketing website. Stack details live in `package.json` (Next.js 16, React 19, Tailwind 4).

## Domains

- **`zptpartners.com`** — primary (renamed 2026-05-01)
- **`zpteam.ai`** — legacy, running in parallel during cutover

Both should resolve to the same site. Once cutover is complete, `zpteam.ai` will 301 to `zptpartners.com`.

## Registrar: Namecheap

Both domains are registered at Namecheap. DNS is managed under **Domain List → Manage → Advanced DNS** for each domain.

To add or edit DNS records (TXT for verification, MX for email, A/CNAME for hosting): sign in to Namecheap, find the domain, open Advanced DNS, add the record. Changes typically propagate in a few minutes.

## Hosting

Vercel project **`zpt-dev`** (default URL: `zpt-dev.vercel.app`), deployed from `github.com/wybeharms/zpt-dev` on Wybe's personal Vercel account (Hobby tier).

## Email

Google Workspace seat under `zptpartners.com`. Primary: `wybe@zptpartners.com`. Alias `wybe@zpteam.ai` still works on the same seat.

## Google Search Console

Both domains added as **Domain properties** (covers all subdomains, http/https). Verification is via Namecheap TXT record.

- `zptpartners.com` — verified 2026-05-10
- `zpteam.ai` — verified earlier

Once the cutover is final, use **Change of Address** in the `zpteam.ai` property to point Google to `zptpartners.com`.
