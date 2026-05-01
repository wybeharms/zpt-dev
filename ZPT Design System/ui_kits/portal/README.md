# Portal UI Kit — `zptpartners.com/portal`

Click-through recreation of the ZPT customer portal: sign-in → sidebar-shell → three inner pages (Onboarding, Prospects, Competitors).

## Components
- `SignInScreen.jsx` — off-white, paper card, magic-link form.
- `PortalSidebar.jsx` — navy rail, customer `<select>` (admin), nav links with gold-active state.
- `PortalHeader.jsx` — white top bar with warm hairline: customer name left, user + sign-out right.
- `OnboardingPage.jsx` — drag-and-drop uploader + file list.
- `ProspectsPage.jsx` — table with gold-chip scores.
- `CompetitorsPage.jsx` — competitor-landscape table.

## Click-through

1. Lands on sign-in.
2. Click "Send magic link" → enter the shell.
3. Switch customer in the sidebar select (admin only).
4. Navigate Onboarding / Prospects / Competitors.
5. Drag files into the onboarding dropzone — they append to the list.
6. Sign out returns to the sign-in screen.

## Differences from production

- Auth is mocked (no NextAuth / email).
- Data is seeded client-side; the real portal reads from `/api/portal/data` (S3).
- Admin customer list is stubbed with three names.
