const PricingSection = () => {
  const tiers = [
    { name: "Starter", time: "1 day", description: "Team presentation + Q&A + account setup. Walk away with a working base." },
    { name: "Workflow", time: "1-2 weeks", description: "One key workflow picked together, automated end-to-end, handed off to the team." },
    { name: "Department", time: "3-4 weeks", description: "Full department setup: skills, context, integrations, and training for everyone." },
    { name: "Company", time: "6-8 weeks", description: "Company-wide directory, connected to core systems, maintained with regular check-ins." },
  ];
  return (
    <section className="bg-cream px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-heading text-4xl font-light tracking-tight text-navy">
          Advisory Engagements
        </h2>
        <p className="mt-3 text-center text-text-muted">
          Pick the depth that fits. You own everything we build.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col items-center rounded-xl border border-navy/15 bg-navy p-8 text-center"
            >
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-xs font-medium text-gold">{tier.time}</p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/50">
                {tier.description}
              </p>
              <a className="mt-6 block w-full cursor-pointer font-logo rounded-lg border border-white/20 py-2.5 text-center text-xs font-medium text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy">
                Book a Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.PricingSection = PricingSection;
