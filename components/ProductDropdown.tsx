"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useI18n } from "./I18nProvider";

export default function ProductDropdown({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/sales"
        onClick={() => onNavigate?.()}
        className="flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white"
      >
        <span>{t("nav.product")}</span>
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-[140px] rounded bg-navy-light shadow-lg ring-1 ring-white/10">
          <Link
            href="/sales"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
            className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {t("nav.sales")}
          </Link>
          <Link
            href="/advisory"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
            className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {t("nav.advisory")}
          </Link>
        </div>
      )}
    </div>
  );
}
