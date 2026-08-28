import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/zptpartners/30min";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const exploreLinks: FooterLink[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Work", href: "/our-work" },
  { label: "Technology", href: "/technology" },
  { label: "Resources", href: "/resources" },
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Book a Call", href: CALENDLY_URL, external: true },
];

const connectLinks: FooterLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zptpartners/",
    external: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC9xs3YM_JUMP-Dt6RZ5wf4w",
    external: true,
  },
  { label: "Email", href: "mailto:wybe@zptpartners.com" },
  { label: "Schedule", href: CALENDLY_URL, external: true },
];

/**
 * External links render with target="_blank" rel="noopener noreferrer"
 * and a small ↗ glyph in cream/40 trailing the label. Internal Next.js
 * routes use <Link>. mailto: counts as internal-style (no glyph,
 * no target=_blank).
 */
function ColumnLink({ label, href, external }: FooterLink) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[13px] tracking-wide text-cream/75 transition-colors duration-150 hover:text-cream"
      >
        {label}
        <span aria-hidden="true" className="text-[10px] text-cream/40">
          ↗
        </span>
      </a>
    );
  }
  if (href.startsWith("mailto:") || href.startsWith("/#")) {
    return (
      <a
        href={href}
        className="text-[13px] tracking-wide text-cream/75 transition-colors duration-150 hover:text-cream"
      >
        {label}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="text-[13px] tracking-wide text-cream/75 transition-colors duration-150 hover:text-cream"
    >
      {label}
    </Link>
  );
}

function ColumnHeading({ children }: { children: string }) {
  return (
    <h4 className="mb-5 text-[12px] font-medium uppercase tracking-[0.22em] text-cognac-light">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      {/* Decorative ornament band, full-width above the column area. */}
      <img
        src="/landing_page/Footer Ornament Navy.webp"
        alt=""
        aria-hidden="true"
        className="mx-auto block h-auto w-full max-w-[240px]"
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
          {/* Column 1: brand + tagline + email */}
          <div>
            <img
              src="/brand/zpt-wordmark-light.svg"
              alt="ZPT Partners"
              className="h-8 w-auto rounded-md"
            />
            <p className="mt-5 max-w-[280px] font-serif text-[18px] leading-snug text-cream/85">
              We help you navigate the uncharted AI waters.
            </p>
            <a
              href="mailto:wybe@zptpartners.com"
              className="mt-5 inline-block text-[13px] tracking-wide text-cream/65 transition-colors duration-150 hover:text-cream"
            >
              wybe@zptpartners.com
            </a>
          </div>

          {/* Column 2: Explore */}
          <div>
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <ColumnLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <ColumnHeading>Company</ColumnHeading>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <ColumnLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <ColumnHeading>Connect</ColumnHeading>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <ColumnLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hairline + bottom row: copyright on the left, policy links on the right */}
        <div className="flex flex-col items-center gap-3 border-t border-cream/15 py-6 sm:flex-row sm:justify-between">
          <p className="text-[12px] tracking-wide text-cream/55">
            © 2026 ZPT Partners
          </p>
          <nav className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[12px] tracking-wide text-cream/55 transition-colors duration-150 hover:text-cream/85"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-[12px] tracking-wide text-cream/55 transition-colors duration-150 hover:text-cream/85"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
