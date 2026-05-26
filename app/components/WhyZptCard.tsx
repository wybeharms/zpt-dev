"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

export type WhyZptCardProps = {
  /** Pre-rendered icon node — passed in by the parent server component
   *  since Next.js cannot serialize a component function across the
   *  server/client boundary. */
  icon: ReactNode;
  lead: string;
  copy: string;
  expanded: string;
};

/**
 * Why-ZPT card. Visible card with the main copy and a permanently
 * visible gray "Example" footer below it. No hover reveal that swaps
 * content (earlier crossfade lost the user's reading context); the
 * example sits there from the start, styled lighter so it reads as
 * supporting detail.
 *
 * Adds a cursor-tracking radial glow on hover: a soft cognac-tinted
 * spotlight follows the mouse around the card. Pure visual polish,
 * does not affect layout or content.
 */
export default function WhyZptCard({
  icon,
  lead,
  copy,
  expanded,
}: WhyZptCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-navy/10 bg-white/55 p-6 transition-colors duration-200 hover:border-navy/20 md:p-7"
    >
      {/* Cursor-tracking glow. Anchored to the live mouse position via
          CSS custom properties (--mx, --my) updated on mousemove. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(165, 102, 60, 0.10), transparent 70%)",
        }}
      />

      {/* Content sits above the glow. Flex column so the example footer
          can hug the bottom regardless of copy length, keeping every
          card the same height in the row. */}
      <div className="relative flex flex-grow flex-col">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 text-cognac">{icon}</span>
          <h3 className="font-serif text-[22px] leading-snug text-navy">
            {lead}
          </h3>
        </div>
        <p className="mt-4 text-[15px] leading-[1.65] text-navy/75">{copy}</p>

        {/* Example footer — always visible, pinned to the bottom of the
            card via mt-auto so cards line up across the row even when
            the main copy lengths differ. */}
        <div className="mt-auto rounded-lg bg-navy/[0.04] px-4 py-3.5">
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-cognac/70">
            Example
          </p>
          <p className="text-[14px] leading-[1.6] text-navy/60">{expanded}</p>
        </div>
      </div>
    </div>
  );
}
