/**
 * Marine icon set. All single-stroke, 32x32 viewBox, stroke-width 1.5,
 * currentColor. Used across the home page and sub-pages to keep the
 * visual vocabulary consistent.
 */

import type { SVGProps } from "react";

type IconProps = { className?: string } & Omit<SVGProps<SVGSVGElement>, "className">;

const baseProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* ---------- Engagement-type and qualifier icons (used on the home page) ---------- */

export function CompassIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <circle cx="16" cy="16" r="12.5" />
      <polygon points="16,7 19,16 16,25 13,16" />
    </svg>
  );
}

export function SextantIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <path d="M5 24 L27 24 L16 6 Z" />
      <path d="M9 24 A 7 7 0 0 1 23 24" />
      <line x1="16" y1="14" x2="20" y2="11" />
    </svg>
  );
}

export function SailboatIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <line x1="16" y1="5" x2="16" y2="22" />
      <path d="M16 8 L9 22 L23 22 Z" />
      <path d="M4 24 L28 24 L25 28 L7 28 Z" />
    </svg>
  );
}

export function AnchorIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <circle cx="16" cy="6" r="2" />
      <line x1="16" y1="8" x2="16" y2="26" />
      <line x1="11" y1="13" x2="21" y2="13" />
      <path d="M6 22 A 10 10 0 0 0 26 22" />
    </svg>
  );
}

export function FogIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <line x1="5" y1="11" x2="27" y2="11" />
      <line x1="3" y1="17" x2="25" y2="17" />
      <line x1="7" y1="23" x2="29" y2="23" />
    </svg>
  );
}

/* ---------- Process-step icons (used on /how-it-works) ---------- */

/** Lighthouse: tower with light room and side beams. Educate. */
export function LighthouseIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <path d="M 16 4 L 13 8 L 19 8 Z" />
      <path d="M 13 8 L 13 13 L 19 13 L 19 8" />
      <path d="M 13 13 L 11 28 L 21 28 L 19 13" />
      <line x1="11" y1="28" x2="21" y2="28" />
      <line x1="6" y1="11" x2="10" y2="11" />
      <line x1="22" y1="11" x2="26" y2="11" />
    </svg>
  );
}

/** Folded paper chart with a target X. Understand. */
export function ChartIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <rect x="4" y="8" width="24" height="16" />
      <line x1="12" y1="8" x2="12" y2="24" />
      <line x1="20" y1="8" x2="20" y2="24" />
      <line x1="14" y1="14" x2="18" y2="18" />
      <line x1="18" y1="14" x2="14" y2="18" />
    </svg>
  );
}

/** Two interlocking ovals: chain link, sailor's knot abstraction. Build. */
export function KnotIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <ellipse cx="11" cy="16" rx="6" ry="4.5" />
      <ellipse cx="21" cy="16" rx="6" ry="4.5" />
    </svg>
  );
}

/** Ship's wheel: outer rim, hub, four spokes, four handle nubs. Test. */
export function HelmIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="16" r="2" />
      <line x1="7" y1="16" x2="25" y2="16" />
      <line x1="16" y1="7" x2="16" y2="25" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="25" y1="16" x2="29" y2="16" />
      <line x1="16" y1="25" x2="16" y2="29" />
      <line x1="3" y1="16" x2="7" y2="16" />
    </svg>
  );
}

/** Lifering: outer + inner ring with four crossbars at compass points. Maintain. */
export function LiferingIcon({ className = "", ...rest }: IconProps) {
  return (
    <svg {...baseProps} className={className} {...rest}>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="5" />
      <line x1="16" y1="5" x2="16" y2="11" />
      <line x1="21" y1="16" x2="27" y2="16" />
      <line x1="16" y1="21" x2="16" y2="27" />
      <line x1="5" y1="16" x2="11" y2="16" />
    </svg>
  );
}
