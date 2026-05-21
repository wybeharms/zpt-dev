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

const CALENDLY_URL = "https://calendly.com/zptpartners/30min";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  const mediaNode = videoFailed ? (
    <img
      src="/landing_page/Main Landing Page.webp"
      alt=""
      aria-hidden="true"
      className="absolute top-0 left-0 h-full w-auto max-w-none"
    />
  ) : (
    <video
      src="/landing_page/ShipAnimation.mp4"
      poster="/landing_page/Main Landing Page.webp"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      onError={() => setVideoFailed(true)}
      className="absolute top-0 left-0 h-full w-auto max-w-none"
      style={{ transform: `translateX(-${BLACK_BORDER_PCT})` }}
    />
  );

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-cream"
    >
      {/* ---------- Mobile layout (stacked) ----------
          Painting renders full-width on top in a fixed-aspect window.
          Content sits below on solid cream so headline, subhead, and both
          buttons are always legible. The mobile-only block is hidden at
          md+; the overlay layout below takes over from md upward. */}
      <div className="md:hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {mediaNode}
        </div>
        <div className="px-6 pt-10 pb-12">
          <h1 className="font-serif text-[2.25rem] leading-[1.05] tracking-[-0.01em]">
            <span className="block font-normal text-navy">
              Your company knows AI is powerful.
            </span>
            <span className="mt-1 block font-bold text-cognac">
              We make it happen.
            </span>
          </h1>
          <p className="mt-5 text-[15px] leading-[1.6] text-navy/85">
            ZPT Partners helps you navigate the uncharted AI waters.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-cognac px-6 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
            >
              Book a Call
            </a>
            <a
              href="/resources/zpt-one-pager.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-[5px] border border-navy/85 px-6 py-3.5 text-[15px] font-medium tracking-wide text-navy transition-colors duration-150 hover:bg-navy hover:text-cream"
            >
              Download One-Pager
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Desktop / tablet overlay layout (md and up) ---------- */}
      <div className="relative hidden h-[100svh] min-h-[640px] w-full md:block">
        {/* Painting frame: anchored left, height = hero, sized to the painting's
            true 3:2 aspect. Mask feathers the right edge so the painting blurs
            softly into the cream rather than ending in a hard vertical line. */}
        <div
          className="absolute top-0 left-0 z-[1] h-full aspect-[3/2] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, #000 0%, #000 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, #000 0%, #000 50%, transparent 100%)",
          }}
        >
          {mediaNode}
        </div>

        {/* Cream overlay: extended horizontal fade from 35% to 55%, solid cream
            from 55% rightward so the headline + subhead sit fully on solid cream.
            Vertical mask keeps the top solid (text legibility) and fades the
            bottom toward 35% opacity so waves read through. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, transparent 35%, #EDE4D3 55%, #EDE4D3 100%)",
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.55) 85%, rgba(0,0,0,0.35) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.55) 85%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Content sits on the cream side */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-10">
          <div className="ml-auto w-full max-w-[600px]">
            <h1 className="font-serif text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.01em]">
              <span className="block font-normal text-navy">
                Your company knows AI is powerful.
              </span>
              <span className="mt-1 block whitespace-nowrap font-bold text-cognac">
                We make it happen.
              </span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[16px] leading-[1.65] text-navy/85">
              ZPT Partners helps you navigate the uncharted AI waters.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[5px] bg-cognac px-7 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
              >
                Book a Call
              </a>
              <a
                href="/resources/zpt-one-pager.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[5px] border border-navy/85 px-7 py-3.5 text-[15px] font-medium tracking-wide text-navy transition-colors duration-150 hover:bg-navy hover:text-cream"
              >
                Download One-Pager
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
