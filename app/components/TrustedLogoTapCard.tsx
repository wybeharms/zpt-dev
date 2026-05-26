"use client";

import { useState } from "react";
import TrustedLogoBody, { type TrustedLogo } from "./TrustedLogoBody";

/**
 * Mobile tappable card for the Trusted By strip. Touch devices have no
 * hover state, so tapping the card toggles its description inline rather
 * than navigating immediately. The "See Testimonials" CTA below the
 * strip handles navigation. Lives in its own client file so Sections.tsx
 * can stay a server component.
 *
 * The visual body is imported from TrustedLogoBody so this file and the
 * desktop card in Sections.tsx render the same markup. Only the wrapper
 * (button + tap state) differs.
 */
export default function TrustedLogoTapCard({ logo }: { logo: TrustedLogo }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="snap-center flex-shrink-0 cursor-pointer text-left"
    >
      <TrustedLogoBody logo={logo} descriptionVisible={open} />
    </button>
  );
}
