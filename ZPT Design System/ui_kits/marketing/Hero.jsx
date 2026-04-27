const Hero = () => (
  <section className="overflow-hidden bg-navy px-8 py-28 text-white">
    <div className="mx-auto flex max-w-5xl items-center gap-8">
      <div className="flex-1">
        <h1 className="font-heading text-4xl font-light tracking-tight">
          Your company knows AI is powerful.
        </h1>
        <p className="mt-4 font-heading text-4xl font-light text-gold italic">
          We make it happen.
        </p>
        <p className="mt-12 max-w-xl text-base leading-relaxed text-white/70">
          ZPT builds a custom AI directory for your company. Your team uses it
          through Claude, ChatGPT, or any compatible app.{" "}
          <strong className="text-white">You own everything.</strong>
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a className="inline-block cursor-pointer font-logo rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light shimmer">
            Book a Call
          </a>
          <a className="inline-flex cursor-pointer items-center gap-2 font-logo rounded border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            One-Pager PDF
          </a>
        </div>
      </div>
      <div className="relative hidden flex-shrink-0 md:-mr-28 md:block md:w-96 lg:-mr-36 lg:w-[28rem]">
        {/* placeholder for hero video */}
        <div
          className="aspect-video w-full rounded-lg relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #161640 0%, #0C0C28 40%, #20204D 100%)",
            filter: "brightness(0.95) contrast(1.08) saturate(0.9)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <img src="../../assets/logo-icon-light.svg" alt="" className="w-32" />
          </div>
          <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
            video placeholder
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{ boxShadow: "inset 0 0 20px 10px #0C0C28" }}
        />
      </div>
    </div>
  </section>
);

window.Hero = Hero;
