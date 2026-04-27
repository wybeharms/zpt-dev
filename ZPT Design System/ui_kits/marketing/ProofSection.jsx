const ProofSection = () => {
  const fitItems = [
    "Small to mid-size teams (up to ~200 people)",
    "Leadership that champions new tools",
    "Repeatable processes ready for automation",
  ];
  const whyItems = [
    "Full company ownership. No lock-in.",
    "Future-proof: the setup evolves as AI advances",
    "Faster and cheaper than building it internally",
  ];
  return (
    <section className="bg-navy px-8 py-32 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-heading text-4xl font-light tracking-tight">
          Is ZPT Right for Your Company?
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-gold">Good Fit If</h3>
            <ul className="mt-6 space-y-3">
              {fitItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm leading-relaxed text-white/70">
                  <svg className="h-4 w-4 flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold">Why ZPT</h3>
            <ul className="mt-6 space-y-3">
              {whyItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm leading-relaxed text-white/70">
                  <span className="flex-shrink-0 text-gold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

window.ProofSection = ProofSection;
