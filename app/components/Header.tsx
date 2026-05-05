"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-we-work" },
  { label: "Case Studies", href: "#trusted-by" },
  { label: "Resources", href: "#watch" },
  { label: "About", href: "#why-zpt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-out ${
        scrolled
          ? "bg-navy/95 border-b border-cream/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" aria-label="ZPT Partners home" className="-ml-3 block">
          {/* SVG is 320x320 with the wordmark text occupying the center ~40%.
              Render larger so the visible letters land around 28px tall. */}
          <img
            src="/brand/zpt-wordmark-light.svg"
            alt="ZPT Partners"
            className="h-16 w-16 md:h-[68px] md:w-[68px]"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] tracking-wide text-cream/85 transition-colors duration-150 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#final-cta"
            className="rounded-full bg-cognac px-5 py-2.5 text-[14px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-[var(--color-cognac-deep)]"
          >
            Book a Call
          </a>
        </nav>

        <a
          href="#final-cta"
          className="rounded-full bg-cognac px-4 py-2 text-[13px] font-medium text-cream md:hidden"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
