"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

export type EntryPointsRowProps = {
  // The icon arrives pre-rendered as a ReactNode (with className already
  // baked in) so the server parent can construct it. Passing a component
  // reference across the server -> client boundary breaks the React
  // payload serializer, since functions are not serializable.
  icon: ReactNode;
  name: string;
  duration: string;
  copy: string;
};

/**
 * One row of the Pick Your Entry Point list. Client component so the
 * row can track the cursor position and update a CSS custom property
 * used by a radial-gradient glow overlay, rendered on a cream background
 * with cognac glow tuned to read on light cream.
 */
export default function EntryPointsRow({
  icon,
  name,
  duration,
  copy,
}: EntryPointsRowProps) {
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
      className="group relative overflow-hidden border-b border-navy/10 transition-colors duration-200 hover:bg-cognac/[0.22]"
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
      <RevealOnScroll className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 px-3 py-5 md:grid-cols-[64px_280px_minmax(0,1fr)] md:gap-8 md:px-5 md:py-6">
        <div className="text-cognac md:flex md:items-start md:pt-1">
          {icon}
        </div>
        <div>
          <p className="font-serif text-[20px] leading-snug text-navy md:text-[22px]">
            {name}
          </p>
          <p className="mt-1 text-[12.5px] italic leading-snug text-cognac/85">
            {duration}
          </p>
        </div>
        <p className="col-span-2 text-[14px] leading-[1.6] text-navy/75 transition-colors duration-200 group-hover:text-navy md:col-span-1 md:pt-0.5">
          {copy}
        </p>
      </RevealOnScroll>
    </li>
  );
}
