"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SubLink = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  submenu?: SubLink[];
};

const NAV_LINKS: NavItem[] = [
  {
    label: "How It Works",
    href: "/how-it-works",
    submenu: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Our Work", href: "/our-work" },
      { label: "Technology", href: "/technology" },
    ],
  },
  { label: "Testimonials", href: "/#trusted-by" },
  { label: "Resources", href: "/#watch" },
  { label: "About", href: "/#why-zpt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
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

  const openSubmenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const scheduleCloseSubmenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-navy/10 transition-colors duration-300 ${headerBg}`}
    >
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
            link.submenu ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => openSubmenu(link.label)}
                onMouseLeave={scheduleCloseSubmenu}
                onFocus={() => openSubmenu(link.label)}
                onBlur={scheduleCloseSubmenu}
              >
                <Link
                  href={link.href}
                  aria-haspopup="menu"
                  aria-expanded={openMenu === link.label}
                  className="inline-flex items-center gap-1 text-[14px] tracking-wide text-navy/80 transition-colors duration-150 hover:text-navy"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`text-[10px] transition-transform duration-150 ${
                      openMenu === link.label ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </Link>
                {openMenu === link.label && (
                  <div
                    role="menu"
                    aria-label={link.label}
                    className="absolute left-0 top-full z-10 mt-1 min-w-[200px] rounded-md border border-navy/10 bg-cream py-2 shadow-[0_8px_28px_-12px_rgba(12,12,40,0.18)]"
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        role="menuitem"
                        className="block px-4 py-2 text-[14px] tracking-wide text-navy/80 transition-colors duration-150 hover:bg-navy/[0.03] hover:text-navy"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] tracking-wide text-navy/80 transition-colors duration-150 hover:text-navy"
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="#final-cta"
            className="rounded-[5px] bg-cognac px-5 py-2.5 text-[14px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
          >
            Book a Call
          </a>
        </nav>

        <a
          href="#final-cta"
          className="rounded-[5px] bg-cognac px-4 py-2 text-[13px] font-medium text-cream md:hidden"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
