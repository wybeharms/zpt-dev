"use client";

import { useEffect, useRef } from "react";
import TrustedLogoTapCard, { type TrustedLogo } from "./TrustedLogoTapCard";

/**
 * Mobile auto-scrolling marquee with native swipe support.
 *
 * The desktop marquee uses a CSS keyframe animating translateX, which is
 * great visually but doesn't compose with native overflow-scroll — the
 * user can't grab and drag a CSS-transformed track. On mobile that
 * matters: people expect to swipe through carousels.
 *
 * So this version drives the strip via JS instead. Each frame we bump
 * `scrollLeft` by a small delta. When the user touches the strip we
 * pause; ~1.2s after they lift their finger we resume. When the scroll
 * position reaches half the track's full width, we silently jump back
 * to 0 — and because the track contains two identical copies of the
 * logo set in sequence, the wraparound is invisible. The user can also
 * scroll past the wrap point manually; the same reset logic catches
 * that.
 *
 * prefers-reduced-motion users get a static, fully-swipeable strip
 * (the rAF loop never starts).
 */
export default function TrustedMarqueeMobile({
  logos,
}: {
  logos: TrustedLogo[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour reduced-motion preference: no auto-scroll, just a static
    // swipeable strip.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    // Pixels-per-frame at ~60fps. 0.4 ≈ 24px/sec, which feels close to
    // the desktop marquee tempo without being so fast that names blur.
    const SPEED = 0.4;
    // How long to keep auto-scroll paused after the user lifts their
    // finger. Short enough to feel responsive, long enough that the
    // user doesn't fight the animation while reading.
    const RESUME_DELAY_MS = 1200;

    let raf = 0;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (!paused && el) {
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          // Wraparound: jump back by exactly half so the visible cards
          // line up with what was just scrolled past.
          el.scrollLeft -= half;
        }
        el.scrollLeft += SPEED;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onTouchStart = () => {
      paused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    };
    const onTouchEnd = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, RESUME_DELAY_MS);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  // Two copies of the logo list so the rAF loop can wrap seamlessly.
  // Keys are namespaced by index so React doesn't complain about
  // duplicates across the two halves.
  const trackLogos = [...logos, ...logos];

  return (
    <div
      ref={ref}
      className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2"
      style={{ scrollbarWidth: "none" }}
    >
      {trackLogos.map((logo, i) => (
        <TrustedLogoTapCard key={`${logo.name}-${i}`} logo={logo} />
      ))}
    </div>
  );
}
