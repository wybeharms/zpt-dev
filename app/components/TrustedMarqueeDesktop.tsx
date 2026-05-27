"use client";

import { useEffect, useRef } from "react";
import type { TrustedLogo } from "./TrustedLogoBody";
import TrustedLogoBody from "./TrustedLogoBody";

/**
 * Desktop auto-scrolling marquee with click-and-drag scrubbing.
 *
 * Mirrors the mobile component's drive (rAF nudging scrollLeft, two
 * copies of the logo list for a seamless wraparound) and keeps the
 * pause-on-hover behavior the old CSS marquee had. Mouse-down on the
 * strip enters drag mode: grab any logo and push the whole chain left
 * or right. Release schedules the auto-scroll to pick back up 1.2s
 * later, matching the mobile resume cadence.
 *
 * prefers-reduced-motion users see the static wrap-list fallback
 * rendered alongside this in Sections.tsx; this wrapper is hidden via
 * motion-reduce:hidden for them, and the rAF guard inside is belt and
 * braces.
 */
export default function TrustedMarqueeDesktop({
  logos,
}: {
  logos: TrustedLogo[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Two copies of the logo list so the rAF loop can wrap seamlessly.
  const trackLogos = [...logos, ...logos];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Pixels-per-frame at ~60fps. Matches the mobile cadence.
    // Note: at sub-pixel speeds (anything below ~0.5) `el.scrollLeft +=
    // SPEED` doesn't progress, because most browsers round scrollLeft
    // to whole pixels and the fractional increment never accumulates.
    // The fix below keeps a JS-side `position` accumulator that holds
    // the true float position and writes rounded values to scrollLeft.
    const SPEED = 0.125;
    // Brief beat so a quick release doesn't cause a visible stutter.
    // The chain picks back up almost immediately on letting go.
    const RESUME_DELAY_MS = 100;

    let raf = 0;
    let hoverPaused = false;
    let dragPaused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;
    // Float-precision scroll position kept in JS so fractional speeds
    // accumulate across frames. scrollLeft itself gets rounded by the
    // browser but the source of truth lives here.
    let position = el.scrollLeft;

    const tick = () => {
      if (!hoverPaused && !dragPaused) {
        const half = el.scrollWidth / 2;
        position += SPEED;
        if (position >= half) {
          // Wraparound: jump back by exactly half so the visible cards
          // line up with what was just scrolled past.
          position -= half;
        }
        el.scrollLeft = position;
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduceMotion) raf = requestAnimationFrame(tick);

    const scheduleResume = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        dragPaused = false;
      }, RESUME_DELAY_MS);
    };

    const onMouseEnter = () => {
      hoverPaused = true;
    };
    const onMouseLeave = () => {
      hoverPaused = false;
      // If the user dragged off the strip without releasing, treat as
      // a release so the resume timer can run.
      if (isDragging) {
        isDragging = false;
        el.style.cursor = "";
        position = el.scrollLeft;
        scheduleResume();
      }
    };
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartScroll = el.scrollLeft;
      dragPaused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
      el.style.cursor = "grabbing";
      // Block native image/text drag while scrubbing.
      e.preventDefault();
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - dragStartX;
      const next = dragStartScroll - delta;
      el.scrollLeft = next;
      // Keep the float accumulator in sync with the drag-set position
      // so auto-scroll picks back up from where the user let go.
      position = next;
    };
    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      el.style.cursor = "";
      position = el.scrollLeft;
      scheduleResume();
    };

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mousedown", onMouseDown);
    // mousemove and mouseup on window so a drag that escapes the strip
    // still updates and releases cleanly.
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative hidden cursor-grab overflow-x-auto select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:hidden md:block"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
      }}
    >
      <div className="flex w-max">
        {trackLogos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="group block flex-shrink-0"
          >
            <TrustedLogoBody logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}
