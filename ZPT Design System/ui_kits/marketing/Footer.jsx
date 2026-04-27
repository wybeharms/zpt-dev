const MktFooter = () => (
  <footer className="border-t border-white/10 bg-navy text-white">
    <div className="mx-auto max-w-7xl px-8 py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <a className="flex items-center gap-2.5 font-logo text-lg font-medium tracking-tight">
            <img src="../../assets/favicon.png" alt="" className="h-7 w-7" />
            Zero Person Team
          </a>
        </div>
        <nav className="flex flex-col gap-3 text-sm text-white/70">
          <a className="font-logo transition-colors hover:text-white cursor-pointer">How It Works</a>
          <a className="font-logo transition-colors hover:text-white cursor-pointer">Technology</a>
          <a className="font-logo transition-colors hover:text-white cursor-pointer">Case Studies</a>
        </nav>
        <div className="flex flex-col gap-3 text-sm text-white/70">
          <a className="font-logo transition-colors hover:text-white cursor-pointer">request@zpteam.ai</a>
          <a className="font-logo transition-colors hover:text-white cursor-pointer">LinkedIn</a>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © 2026 ZPT — Zero Person Team
      </div>
    </div>
  </footer>
);

window.MktFooter = MktFooter;
