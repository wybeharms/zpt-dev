const CtaSection = () => (
  <section className="bg-off-white px-8 py-24">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-heading text-4xl font-light tracking-tight text-navy">
        Ready to See What ZPT Can Do for Your Business?
      </h2>
      <a className="mt-6 inline-block cursor-pointer font-logo rounded bg-gold px-8 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light shimmer">
        Book a Call
      </a>
      <p className="mt-3 text-sm text-text-muted">
        Or email{" "}
        <a className="text-slate-blue underline underline-offset-2 transition-colors hover:text-navy cursor-pointer">
          request@zptpartners.com
        </a>
      </p>
    </div>
  </section>
);

window.CtaSection = CtaSection;
