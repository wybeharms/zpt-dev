"use client";

import { useState } from "react";

/**
 * Mobile tappable card for the Trusted By strip. Touch devices have no
 * hover state, so tapping the card toggles its description inline rather
 * than navigating immediately. The "See Testimonials" CTA below the
 * strip handles navigation. Lives in its own client file so Sections.tsx
 * can stay a server component.
 *
 * The visual body is duplicated rather than imported so the server-side
 * Section file doesn't need to ship to the client. If the body shape
 * ever changes, update both this file and the desktop card in Sections.tsx.
 */
export type TrustedLogo = {
  file: string;
  name: string;
  location: string;
  description: string;
  emphasis?: boolean;
};

export default function TrustedLogoTapCard({ logo }: { logo: TrustedLogo }) {
  const [open, setOpen] = useState(false);
  const imgClass = logo.emphasis
    ? "h-14 w-auto max-w-[180px] object-contain md:h-20"
    : "h-12 w-auto max-w-[160px] object-contain md:h-14";

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="snap-center flex-shrink-0 cursor-pointer text-left"
    >
      <div className="flex w-[200px] flex-shrink-0 flex-col items-center px-6 text-center">
        <div className="flex h-14 items-center justify-center md:h-20">
          <img src={logo.file} alt={logo.name} className={imgClass} />
        </div>
        <p className="mt-7 text-[12px] font-medium uppercase tracking-[0.18em] text-navy">
          {logo.name}
        </p>
        <p className="mt-1 text-[12px] tracking-wide text-navy/55">
          {logo.location}
        </p>
        <p
          className={`mt-1.5 text-[12px] leading-[1.4] text-navy/65 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {logo.description}
        </p>
      </div>
    </button>
  );
}
