"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/portal/onboarding", label: "Onboarding" },
  { href: "/portal/prospects", label: "Prospects" },
  { href: "/portal/competitors", label: "Competitors" },
];

export default function PortalSidebar({
  isAdmin,
  customerIds,
  currentCustomerId,
  onCustomerChange,
}: {
  isAdmin: boolean;
  customerIds: string[];
  currentCustomerId: string;
  onCustomerChange?: (id: string) => void;
}) {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col bg-navy text-white">
      <div className="px-6 py-6">
        <Link href="/" className="font-logo text-lg font-medium tracking-tight">
          ZPT
        </Link>
        <span className="ml-2 text-xs text-white/40">Portal</span>
      </div>

      {isAdmin && customerIds.length > 0 && (
        <div className="px-6 pb-4">
          <label className="mb-1 block text-xs text-white/40">Customer</label>
          <select
            value={currentCustomerId}
            onChange={(e) => onCustomerChange?.(e.target.value)}
            className="w-full rounded bg-navy-light px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-gold"
          >
            {customerIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </div>
      )}

      <nav className="flex-1 px-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-1 block rounded px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-gold/10 text-gold font-medium"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
