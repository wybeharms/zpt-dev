"use client";

import { useState } from "react";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy"
    >
      {/* Background: video (with poster) or fallback image */}
      {videoFailed ? (
        <img
          src="/landing_page/Main Landing Page.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-left"
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
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
      )}

      {/* Soft blur on the video under the right ~40% */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 z-[1] w-[42%] backdrop-blur-md"
      />

      {/* Cream gradient: transparent at ~60% across to solid cream at right edge */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, transparent 55%, rgba(237, 228, 211, 0.55) 70%, rgba(237, 228, 211, 0.92) 88%, #EDE4D3 100%)",
        }}
      />

      {/* Content sits on the cream side */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-10">
        <div className="ml-auto w-full max-w-[560px] pt-24 md:pt-0">
          <h1 className="font-serif text-[clamp(2.5rem,5.2vw,4.5rem)] font-normal leading-[1.04] tracking-[-0.01em] text-navy">
            Your company knows AI is powerful. We make it happen.
          </h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] text-navy/85 md:text-[18px]">
            ZPT builds a custom AI directory for your company. Your team uses it
            through Claude, ChatGPT, or any compatible app. You own everything.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full bg-cognac px-7 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-[var(--color-cognac-deep)]"
            >
              Book a Call
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-navy/85 px-7 py-3.5 text-[15px] font-medium tracking-wide text-navy transition-colors duration-150 hover:bg-navy hover:text-cream"
            >
              Download the One-Pager
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
