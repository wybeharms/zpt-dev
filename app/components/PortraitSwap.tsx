"use client";

import { useState } from "react";

/**
 * Hover-swap (desktop) + tap-toggle (touch) portrait card. Each member has
 * two separate 766×1024 (3:4) portraits under /public/team/: a professional
 * `photo` and a stylized `marine` painting.
 *
 * The wrapper uses `aspect-[3/4]` to match the portraits' native aspect, so
 * `object-cover` fills the frame with no cropping and no background bleed.
 *
 * Two stacked images cross-fade. Desktop uses `:hover` via the `group`
 * pattern. Touch devices have no hover state, so a `toggled` flag layered
 * on top forces the marine portrait visible after a tap. Tap again (or click
 * outside on hover devices) returns to the professional photo. The global
 * prefers-reduced-motion rule in globals.css clamps the transition to
 * ~0 for users who opt out of motion (the swap still happens, just
 * instantly).
 */
type Props = {
  photo: string;
  marine: string;
  alt: string;
};

export default function PortraitSwap({ photo, marine, alt }: Props) {
  const [toggled, setToggled] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={toggled}
      aria-label={
        toggled ? `Show professional photo of ${alt}` : `Show fun photo of ${alt}`
      }
      onClick={() => setToggled((v) => !v)}
      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-md border border-navy/10 cursor-pointer"
    >
      {/* Professional photo — default visible. Fades out on hover (desktop)
          OR when `toggled` is true (touch tap). */}
      <img
        src={photo}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[350ms] ease-out group-hover:opacity-0 ${
          toggled ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Marine portrait — fades in on hover OR when toggled. */}
      <img
        src={marine}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[350ms] ease-out group-hover:opacity-100 ${
          toggled ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
