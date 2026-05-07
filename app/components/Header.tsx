"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/zptpartners/30min";

/**
 * Sub-pages featured in the mega panel that opens under "How It Works."
 * The whole column is the link target; the "View →" line is visual
 * reinforcement, not a separate href.
 */
type MegaColumn = {
  title: string;
  descriptor: string;
  href: string;
};

const MEGA_COLUMNS: MegaColumn[] = [
  {
    title: "How It Works",
    descriptor: "Engagement types and process",
    href: "/how-it-works",
  },
  {
    title: "Our Work",
    descriptor: "Examples of past workflows",
    href: "/our-work",
  },
  {
    title: "Technology",
    descriptor: "What an agent is and where it runs",
    href: "/technology",
  },
];

type NavItem = {
  label: string;
  href: string;
  hasMega?: boolean;
};

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works", hasMega: true },
  { label: "Testimonials", href: "/#trusted-by" },
  { label: "Resources", href: "/resources" },
  // About points to /team for now — it's the only "about" content that
  // exists. When /about and /testimonials are built, this can be
  // promoted to its own mega menu (Team, About, Testimonials).
  { label: "About", href: "/team" },
];

// Per-column class strings: hairline lives on cols 2 and 3, padding shifts
// per column so the inner content sits flush with the panel edges on the
// outside columns and 32px clear of each hairline.
const COLUMN_CLASSES = [
  "pr-8",
  "px-8 border-l border-navy/10",
  "pl-8 border-l border-navy/10",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Header transitions from translucent → solid cream once the user
    // scrolls past the page's "hero watch" target. The home page uses
    // #trusted-by as that target. Sub-pages with a visual hero (a
    // painting that benefits from a transparent header on top) opt in
    // by adding `data-hero-watch` to the hero element. Pages with
    // neither default to solid from the top.
    const heroWatch = document.querySelector("[data-hero-watch]");
    const trustedBy = document.querySelector("#trusted-by");
    const watchTarget = heroWatch || trustedBy;
    const header = document.querySelector("header");
    if (!header) return;

    if (!watchTarget) {
      setScrolled(true);
      return;
    }

    const update = () => {
      const headerBottom = header.getBoundingClientRect().bottom;
      const targetBottom = watchTarget.getBoundingClientRect().bottom;
      setScrolled(targetBottom < headerBottom + 24);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const headerBg = scrolled ? "bg-cream" : "bg-cream/85";

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // 120ms grace window so the user can move the cursor across the gap
    // between the trigger and the panel without the panel collapsing.
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
    >
      {/* Top bar */}
      <div className="border-b border-navy/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10 md:py-4">
          <Link href="/" aria-label="ZPT Partners home" className="block">
            <img
              src="/brand/zpt-monogram-dark.png"
              alt="ZPT"
              className="h-11 w-11 rounded-md md:h-12 md:w-12"
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <div
                  key={link.label}
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                  onFocus={openMega}
                  onBlur={scheduleCloseMega}
                >
                  <Link
                    href={link.href}
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    className="inline-flex items-center gap-1 text-[14px] tracking-wide text-navy/80 transition-colors duration-150 hover:text-navy"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`text-[10px] transition-transform duration-150 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] tracking-wide text-navy/80 transition-colors duration-150 hover:text-navy"
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[5px] bg-cognac px-5 py-2.5 text-[14px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
            >
              Book a Call
            </a>
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[5px] bg-cognac px-4 py-2 text-[13px] font-medium text-cream md:hidden"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Mega panel — desktop only. Always rendered (so the fade transition
          has a "from" state); pointer-events disabled while closed so it
          doesn't intercept clicks. Shadow bumped a touch from the previous
          iteration so the panel reads as a distinct floating card. */}
      <div
        aria-hidden={!megaOpen}
        onMouseEnter={openMega}
        onMouseLeave={scheduleCloseMega}
        onFocus={openMega}
        onBlur={scheduleCloseMega}
        className={`absolute left-0 right-0 top-full hidden transition-all duration-200 md:block ${
          megaOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-1 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 pt-2 md:px-10">
          <div
            role="menu"
            aria-label="How It Works"
            className="rounded-md border border-navy/10 bg-cream px-12 py-9 shadow-[0_18px_44px_-14px_rgba(12,12,40,0.28)]"
          >
            <div className="grid grid-cols-3">
              {MEGA_COLUMNS.map((col, i) => (
                <Link
                  key={col.title}
                  href={col.href}
                  role="menuitem"
                  className={`group block ${COLUMN_CLASSES[i]}`}
                >
                  <h4 className="font-serif text-[22px] leading-snug text-navy transition-colors duration-150 group-hover:text-cognac">
                    {col.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-snug text-navy/65">
                    {col.descriptor}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-cognac">
                    View
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
