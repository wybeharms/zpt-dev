const QuoteSection = () => (
  <section className="bg-off-white px-8 py-24">
    <div className="mx-auto max-w-4xl text-center">
      <blockquote className="font-heading text-2xl font-light italic leading-relaxed tracking-tight text-navy">
        <span className="quote-glow">“</span>
        Every major technology shift creates a massive change management
        challenge for enterprises.
        <span className="quote-glow">”</span>
      </blockquote>
      <p className="mt-4 text-sm text-text-muted">
        -{" "}
        <a className="underline underline-offset-2 transition-colors hover:text-navy cursor-pointer">
          David Sacks
        </a>
      </p>
    </div>
  </section>
);

window.QuoteSection = QuoteSection;
