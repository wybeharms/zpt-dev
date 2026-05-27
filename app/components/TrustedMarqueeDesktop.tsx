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
    const SPEED = 0.4;
    // How long to keep the auto-scroll paused after the user releases
    // a drag. Long enough to read what got scrolled into view, short
    // enough that the chain doesn't feel dead.
    const RESUME_DELAY_MS = 1200;

    let raf = 0;
    let hoverPaused = false;
    let dragPaused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    const tick = () => {
      if (!hoverPaused && !dragPaused) {
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
      el.scrollLeft = dragStartScroll - delta;
    };
    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      el.style.cursor = "";
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
