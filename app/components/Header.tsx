"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#our-approach" },
  { label: "Case Studies", href: "#trusted-by" },
  { label: "Resources", href: "#watch" },
  { label: "About", href: "#why-zpt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const trustedBy = document.querySelector("#trusted-by");
    if (!trustedBy) return;

    const update = () => {
      const rect = trustedBy.getBoundingClientRect();
      setScrolled(rect.bottom < 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const headerBg = scrolled ? "bg-cream" : "bg-cream/85";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-navy/10 transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10 md:py-4">
        <Link href="/" aria-label="ZPT Partners home" className="block">
          <img
            src="/brand/zpt-monogram-dark.png"
            alt="ZPT"
            className="h-11 w-11 md:h-12 md:w-12"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] tracking-wide text-navy/80 transition-colors duration-150 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
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
