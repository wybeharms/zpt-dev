"use client";

import { useState } from "react";

/**
 * Hover-swap (desktop) + tap-toggle (touch) portrait card. Each portrait
 * file under /public/team/ is a 1536×1024 (3:2) composite — professional
 * half on the left, marine half on the right. Each half is 768×1024 = 3:4
 * portrait.
 *
 * The wrapper uses `aspect-[3/4]` so it matches the natural half-aspect
 * exactly: a 3:2 source with `object-cover object-left` shows the left
 * 768 pixels (= the professional half) at full vertical extent inside a
 * 3:4 frame, with no cropping and no background bleed.
 *
 * Two stacked images cross-fade. Desktop uses `:hover` via the `group`
 * pattern. Touch devices have no hover state, so a `toggled` flag layered
 * on top forces the marine half visible after a tap. Tap again (or click
 * outside on hover devices) returns to the professional half. The global
 * prefers-reduced-motion rule in globals.css clamps the transition to
 * ~0 for users who opt out of motion (the swap still happens, just
 * instantly).
 */
type Props = {
  src: string;
  alt: string;
};

export default function PortraitSwap({ src, alt }: Props) {
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
      {/* Professional half — default visible. Fades out on hover (desktop)
          OR when `toggled` is true (touch tap). The clip-path crops a 3px
          sliver off the right edge so the seam at the center of the 3:2
          composite never appears as a hairline. */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover object-left [clip-path:inset(0_3px_0_0)] transition-opacity duration-[350ms] ease-out group-hover:opacity-0 ${
          toggled ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Marine half — fades in on hover OR when toggled. Same 3px clip,
          mirrored to the left edge for the same reason. */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover object-right [clip-path:inset(0_0_0_3px)] transition-opacity duration-[350ms] ease-out group-hover:opacity-100 ${
          toggled ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
