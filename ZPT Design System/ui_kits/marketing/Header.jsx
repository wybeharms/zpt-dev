const MktHeader = ({ active = "home", onNav = () => {} }) => {
  const links = [
    { key: "how", label: "How It Works" },
    { key: "tech", label: "Technology" },
    { key: "case", label: "Case Studies" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8 py-4">
        <a
          onClick={() => onNav("home")}
          className="flex cursor-pointer items-center gap-2.5 font-logo text-lg font-medium tracking-tight"
        >
          <img src="../../assets/favicon.png" alt="" className="h-7 w-7" />
          ZPT Partners
        </a>
        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.key}
              onClick={() => onNav(l.key)}
              className={`cursor-pointer font-logo text-sm transition-colors ${
                active === l.key ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end">
          <a
            onClick={() => onNav("cta")}
            className="cursor-pointer font-logo rounded bg-gold px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
};

window.MktHeader = MktHeader;
