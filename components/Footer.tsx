"use client";

import Link from "next/link";
import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="font-logo text-lg font-medium tracking-tight"
            >
              Zero Person Team
            </Link>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-white/70">
            <Link
              href="/sales"
              className="transition-colors hover:text-white"
            >
              {t("nav.sales")}
            </Link>
            <Link
              href="/advisory"
              className="transition-colors hover:text-white"
            >
              {t("nav.advisory")}
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              {t("nav.about")}
            </Link>
            <Link
              href="/resources"
              className="transition-colors hover:text-white"
            >
              {t("nav.resources")}
            </Link>
          </nav>

          <div className="flex flex-col gap-3 text-sm text-white/70">
            <a
              href="mailto:request@zpteam.ai"
              className="transition-colors hover:text-white"
            >
              request@zpteam.ai
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
