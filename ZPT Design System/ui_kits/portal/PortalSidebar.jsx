const PortalSidebar = ({ page, onNav, customerId = "acme-corp", isAdmin = true, customers = ["acme-corp", "beta-partners", "gamma-capital"], onCustomerChange }) => {
  const items = [
    { href: "onboarding", label: "Onboarding" },
    { href: "prospects", label: "Prospects" },
    { href: "competitors", label: "Competitors" },
  ];
  return (
    <aside className="flex w-64 flex-col bg-navy text-white">
      <div className="px-6 py-6">
        <a onClick={() => onNav && onNav("onboarding")} className="flex cursor-pointer items-center gap-2 font-logo text-lg font-medium tracking-tight">
          <img src="../../assets/favicon.png" alt="" className="h-6 w-6" />
          ZPT
          <span className="ml-2 text-xs text-white/40">Portal</span>
        </a>
      </div>

      {isAdmin && (
        <div className="px-6 pb-4">
          <label className="mb-1 block text-xs text-white/40">Customer</label>
          <select
            value={customerId}
            onChange={(e) => onCustomerChange && onCustomerChange(e.target.value)}
            className="w-full rounded bg-navy-light px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-gold"
          >
            {customers.map((id) => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
        </div>
      )}

      <nav className="flex-1 px-3">
        {items.map((item) => {
          const active = page === item.href;
          return (
            <a
              key={item.href}
              onClick={() => onNav && onNav(item.href)}
              className={`mb-1 block cursor-pointer rounded px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-gold/10 text-gold font-medium"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

window.PortalSidebar = PortalSidebar;
