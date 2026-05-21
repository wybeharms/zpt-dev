// Sync downloadable assets from the zpt-business repo into public/resources/.
//
// Source of truth: ~/Sites/zpt/business/marketing/
// Mirror (served by Next.js): ~/Sites/zpt/dev/public/resources/
//
// Why a sync script instead of reading directly?
//   zpt-dev and zpt-business are separate GitHub repos. Vercel only clones
//   zpt-dev at build time, so the PDFs have to physically live inside
//   public/resources/ for production to serve them. This script keeps that
//   mirror in lock-step with the marketing folder so the marketing copy
//   stays the single source of truth.
//
// Behaviour:
//   * Locally: copies each allowlisted file from marketing/ into
//     public/resources/, overwriting. Runs before `next dev` and `next build`.
//   * On Vercel (or anywhere the business folder is absent): logs a notice
//     and exits 0. The committed copies in public/resources/ are used as-is.
//
// To add a new downloadable asset: drop it in business/marketing/ and add
// its filename to FILES_TO_SYNC below.

import { copyFileSync, existsSync, mkdirSync, statSync, utimesSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEV_ROOT = resolve(__dirname, "..");
const MARKETING_DIR = resolve(DEV_ROOT, "../business/marketing");
const PUBLIC_RESOURCES_DIR = resolve(DEV_ROOT, "public/resources");

const FILES_TO_SYNC = [
  "zpt-one-pager.pdf",
  "2026_Agentic-Workflows.pdf",
];

function main() {
  if (!existsSync(MARKETING_DIR)) {
    console.log(
      `[sync-marketing-assets] business/marketing/ not found at ${MARKETING_DIR}. ` +
        "Skipping sync (this is expected on Vercel and CI). Using committed copies in public/resources/.",
    );
    return;
  }

  mkdirSync(PUBLIC_RESOURCES_DIR, { recursive: true });

  let copied = 0;
  let skipped = 0;
  const missing = [];

  for (const filename of FILES_TO_SYNC) {
    const src = join(MARKETING_DIR, filename);
    const dest = join(PUBLIC_RESOURCES_DIR, filename);

    if (!existsSync(src)) {
      missing.push(filename);
      continue;
    }

    const srcStat = statSync(src);
    const destExists = existsSync(dest);
    const destStat = destExists ? statSync(dest) : null;

    const isSameSize = destStat && destStat.size === srcStat.size;
    // utimesSync loses sub-millisecond precision on macOS, so compare with
    // a 1ms tolerance to avoid re-copying on every run.
    const isSameMtime =
      destStat && Math.abs(destStat.mtimeMs - srcStat.mtimeMs) < 1;

    if (isSameSize && isSameMtime) {
      skipped += 1;
      continue;
    }

    copyFileSync(src, dest);
    // Preserve mtime so the next run can short-circuit.
    try {
      utimesSync(dest, srcStat.atime, srcStat.mtime);
    } catch {
      // Best-effort; not fatal if utimes fails.
    }
    copied += 1;
    console.log(`[sync-marketing-assets] copied ${filename}`);
  }

  if (missing.length > 0) {
    console.warn(
      `[sync-marketing-assets] missing from business/marketing/: ${missing.join(", ")}`,
    );
  }
  console.log(
    `[sync-marketing-assets] done. copied=${copied} unchanged=${skipped} missing=${missing.length}`,
  );
}

main();
