"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-logo text-lg font-medium tracking-tight"
            >
              <Image src="/favicon.png" alt="" width={28} height={28} className="h-7 w-7" />
              ZPT Partners
            </Link>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-white/70">
            <Link
              href="/how-it-works"
              className="font-logo transition-colors hover:text-white"
            >
              {t("nav.howItWorks")}
            </Link>
            <Link
              href="/technology"
              className="font-logo transition-colors hover:text-white"
            >
              {t("nav.technology")}
            </Link>
            <Link
              href="/case-studies"
              className="font-logo transition-colors hover:text-white"
            >
              {t("nav.caseStudies")}
            </Link>
          </nav>

          <div className="flex flex-col gap-3 text-sm text-white/70">
            <a
              href="mailto:request@zptpartners.com"
              className="font-logo transition-colors hover:text-white"
            >
              request@zptpartners.com
            </a>
            <a
              href="https://www.linkedin.com/company/zpteam/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-logo transition-colors hover:text-white"
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
