"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
};

/**
 * YouTube facade. Renders the video's maxresdefault thumbnail with a
 * cognac play triangle on first paint. Clicking the button swaps in
 * the real iframe (with autoplay) — which keeps the YouTube SDK
 * (~500 KB) out of the initial page load.
 *
 * Hover effect is scoped to the play triangle: nudges from cognac to
 * cognac-deep and scales 1.05 over 150ms. The global
 * prefers-reduced-motion rule in globals.css clamps that transition
 * to ~0 for users who opt out of motion.
 */
export default function YoutubeFacade({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const wrapperClasses =
    "mx-auto block aspect-video w-full max-w-[960px] overflow-hidden rounded-lg border border-navy/10 bg-black shadow-[0_18px_44px_-14px_rgba(12,12,40,0.28)]";

  if (playing) {
    return (
      <div className={wrapperClasses}>
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Play: ${title}`}
      onClick={() => setPlaying(true)}
      className={`group relative ${wrapperClasses}`}
    >
      <img
        src={thumb}
        alt={`${title} thumbnail`}
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-navy/30 md:h-[112px] md:w-[112px]">
          <svg
            viewBox="0 0 64 64"
            aria-hidden="true"
            className="h-12 w-12 text-cognac transition-all duration-150 group-hover:scale-105 group-hover:text-cognac-deep md:h-16 md:w-16"
          >
            <path d="M 22 16 L 52 32 L 22 48 Z" fill="currentColor" />
          </svg>
        </span>
      </span>
    </button>
  );
}
