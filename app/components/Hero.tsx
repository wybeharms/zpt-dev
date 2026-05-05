"use client";

import { useState } from "react";

/**
 * The source Ship Animation.mp4 is 1920x1080 (16:9) but the actual painting
 * is letterboxed inside it: 150px black bars on the left and right edges.
 * The painting content is 1620x1080 (3:2). We render the video at native
 * aspect (height-driven, width:auto) inside a 3:2 wrapper and shift it left
 * by 150/1920 ≈ 7.81% so the left black bar is clipped off-wrapper. The
 * right black bar then ends exactly at the wrapper's right edge.
 */
const BLACK_BORDER_PCT = "7.81%";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cream"
    >
      {/* Painting frame: anchored left, height = hero, sized to the painting's
          true 3:2 aspect. Wherever this wrapper doesn't reach, the cream
          section bg shows through. */}
      <div className="absolute top-0 left-0 z-[1] h-full aspect-[3/2] overflow-hidden">
        {videoFailed ? (
          <img
            src="/landing_page/Main Landing Page.png"
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 h-full w-auto max-w-none"
          />
        ) : (
          <video
            src="/landing_page/Ship%20Animation.mp4"
            poster="/landing_page/Main Landing Page.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
            className="absolute top-0 left-0 h-full w-auto max-w-none"
            style={{ transform: `translateX(-${BLACK_BORDER_PCT})` }}
          />
        )}
      </div>

      {/* Cream overlay: solid on the right ~40%, fading to transparent at
          the 55-60% mark. Vertical mask keeps the top solid (text legibility)
          and fades the bottom toward 35% opacity so waves read through. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, transparent 55%, #EDE4D3 62%, #EDE4D3 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.55) 85%, rgba(0,0,0,0.35) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.55) 85%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Content sits on the cream side */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-10">
        <div className="ml-auto w-full max-w-[600px] pt-24 md:pt-0">
          <h1 className="font-serif text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.01em]">
            <span className="block font-normal text-navy">
              Your company knows AI is powerful.
            </span>
            <span className="mt-1 block whitespace-nowrap font-bold text-cognac">
              We make it happen.
            </span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.6] text-navy/85 md:text-[18px]">
            ZPT helps companies understand AI and put it to work. We start by
            mapping how your team operates, then design and build what fits.
            From a half-day workshop to a full implementation, you own
            everything we deliver.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-[5px] bg-cognac px-7 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
            >
              Book a Call
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[5px] border border-navy/85 px-7 py-3.5 text-[15px] font-medium tracking-wide text-navy transition-colors duration-150 hover:bg-navy hover:text-cream"
            >
              Download the One-Pager
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
