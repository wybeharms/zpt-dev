"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import RevealOnScroll from "./RevealOnScroll";

export type OurApproachRowProps = {
  number: string;
  label: string;
  copy: string;
};

/**
 * One row of the Our Approach editorial list. Client component so the
 * row can track the cursor position and update a CSS custom property
 * used by a radial-gradient glow overlay. The glow sits on top of the
 * static cognac hover tint; both reveal together on group-hover.
 */
export default function OurApproachRow({
  number,
  label,
  copy,
}: OurApproachRowProps) {
  const rowRef = useRef<HTMLLIElement>(null);

  const handleMouseMove = (e: ReactMouseEvent<HTMLLIElement>) => {
    const row = rowRef.current;
    if (!row) return;
    const rect = row.getBoundingClientRect();
    row.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    row.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <li
      ref={rowRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden border-b border-cream/15 transition-colors duration-200 hover:bg-cognac/[0.22]"
    >
      {/* Cursor-tracking glow, layered above the static cognac tint. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(165, 102, 60, 0.22), transparent 70%)",
        }}
      />
      <RevealOnScroll className="relative grid grid-cols-[64px_minmax(0,1fr)] gap-6 px-3 py-5 md:grid-cols-[80px_minmax(0,1fr)] md:gap-10 md:px-5 md:py-5">
        <span
          aria-hidden="true"
          className="select-none font-serif text-[28px] leading-none text-cognac-light md:text-[32px]"
        >
          {number}
        </span>
        <div>
          <p className="font-serif text-[22px] leading-snug text-cream md:text-[24px]">
            {label}
          </p>
          <p className="mt-3 text-[16px] leading-[1.65] text-cream/75">
            {copy}
          </p>
        </div>
      </RevealOnScroll>
    </li>
  );
}
