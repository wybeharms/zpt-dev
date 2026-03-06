"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import ProductDropdown from "./ProductDropdown";
import { useI18n } from "./I18nProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4 lg:px-8">
        <Link href="/" className="font-logo text-lg font-medium tracking-tight">
          Zero Person Team
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden items-center gap-8 md:flex">
          <ProductDropdown />
          <Link
            href="/about"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/resources"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            {t("nav.resources")}
          </Link>
          <Link
            href="/portal"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            Portal
          </Link>
        </nav>

        {/* Right side — language + CTA */}
        <div className="hidden items-center justify-end gap-4 md:flex">
          <LanguageSelector />
          <a
            href="mailto:request@zpteam.ai?subject=Intro call request"
            className="rounded bg-gold px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-white/10 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">
              {t("nav.product")}
            </span>
            <Link
              href="/sales"
              className="pl-3 text-sm text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.sales")}
            </Link>
            <Link
              href="/advisory"
              className="pl-3 text-sm text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.advisory")}
            </Link>
            <Link
              href="/about"
              className="text-sm text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/resources"
              className="text-sm text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.resources")}
            </Link>
            <Link
              href="/portal"
              className="text-sm text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portal
            </Link>
            <LanguageSelector />
            <a
              href="mailto:request@zpteam.ai?subject=Intro call request"
              className="inline-block rounded bg-gold px-4 py-2 text-center text-sm font-medium text-navy transition-colors hover:bg-gold-light"
            >
              {t("nav.cta")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
