"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

/**
 * Flat list of every nav target shown in the mobile sheet. Includes the
 * sub-pages from the desktop mega panel (How It Works / Our Work /
 * Technology) as their own rows so a phone user can reach them in one
 * tap rather than navigating through a dropdown.
 */
const MOBILE_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Work", href: "/our-work" },
  { label: "Technology", href: "/technology" },
  { label: "Testimonials", href: "/#trusted-by" },
  { label: "Resources", href: "/resources" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // When the user pins the mega panel open by clicking the trigger, the
  // hover-out close timer is suppressed. Click outside the trigger/panel
  // or click the trigger again to unpin and close.
  const pinnedByClickRef = useRef(false);
  const megaTriggerRef = useRef<HTMLButtonElement | null>(null);
  const megaPanelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

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

  // Close the mobile sheet when the user navigates or presses Esc.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // Lock body scroll while the sheet is open so the user can't accidentally
    // scroll the page underneath.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  // Reset mega panel state on every client-side route change. The Header
  // itself doesn't unmount on navigation (it's in the root layout), so
  // without this the click-pinned panel would stay open after the user
  // navigates to a sub-page via a dropdown item.
  useEffect(() => {
    pinnedByClickRef.current = false;
    setMegaOpen(false);
  }, [pathname]);

  // Click-outside + Escape close the panel when it's pinned open.
  useEffect(() => {
    if (!megaOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (megaTriggerRef.current?.contains(target)) return;
      if (megaPanelRef.current?.contains(target)) return;
      pinnedByClickRef.current = false;
      setMegaOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        pinnedByClickRef.current = false;
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaOpen]);

  const headerBg = scrolled ? "bg-cream" : "bg-cream/85";

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    // Pinned-open via click — don't let hover-out close the panel.
    if (pinnedByClickRef.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // 120ms grace window so the user can move the cursor across the gap
    // between the trigger and the panel without the panel collapsing.
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };
  const toggleMegaByClick = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (megaOpen && pinnedByClickRef.current) {
      // Second click on the trigger collapses the pinned panel.
      pinnedByClickRef.current = false;
      setMegaOpen(false);
    } else {
      pinnedByClickRef.current = true;
      setMegaOpen(true);
    }
  };
  const closeMegaImmediately = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    pinnedByClickRef.current = false;
    setMegaOpen(false);
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
                  <button
                    type="button"
                    ref={megaTriggerRef}
                    onClick={toggleMegaByClick}
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    className="inline-flex cursor-pointer items-center gap-1 text-[14px] tracking-wide text-navy/80 transition-colors duration-150 hover:text-navy"
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
                  </button>
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

          {/* Mobile right-side cluster: Book a Call + hamburger. */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[5px] bg-cognac px-4 py-2 text-[13px] font-medium text-cream"
            >
              Book a Call
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-sheet"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[5px] border border-navy/15 text-navy transition-colors duration-150 hover:bg-navy/5"
            >
              {mobileOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1h18M1 7h18M1 13h18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mega panel — desktop only. Always rendered (so the fade transition
          has a "from" state); pointer-events disabled while closed so it
          doesn't intercept clicks. Shadow bumped a touch from the previous
          iteration so the panel reads as a distinct floating card. */}
      <div
        ref={megaPanelRef}
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
                  onClick={closeMegaImmediately}
                  onMouseMove={(e) => {
                    const t = e.currentTarget;
                    const r = t.getBoundingClientRect();
                    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    t.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                  className={`group relative block overflow-hidden ${COLUMN_CLASSES[i]}`}
                >
                  {/* Cursor-tracking glow — soft cognac spotlight follows
                      the mouse across each column. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(165, 102, 60, 0.10), transparent 70%)",
                    }}
                  />
                  <span className="relative block">
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
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sheet — slides down below the top bar on phones. Hidden
          at md+. Tapping a link or the backdrop closes it; the
          escape-key + body-lock effect lives in useEffect above. */}
      <div
        id="mobile-nav-sheet"
        aria-hidden={!mobileOpen}
        className={`md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 top-[64px] bg-navy/40 transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <div
          className={`absolute left-0 right-0 top-full bg-cream border-b border-navy/10 transition-all duration-200 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-[1400px] px-6 py-4">
            <ul className="flex flex-col">
              {MOBILE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-navy/10 py-4 text-[16px] tracking-wide text-navy transition-colors duration-150 hover:text-cognac"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-[5px] bg-cognac px-5 py-3 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
