"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { type Locale, getTranslations } from "@/lib/i18n";

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => unknown[];
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("zpt-locale") as Locale | null;
    if (stored && ["en", "nl", "es", "it"].includes(stored)) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("zpt-locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const { t, tArray } = getTranslations(locale);

  // Prevent hydration mismatch by showing English until mounted
  const { t: tFinal, tArray: tArrayFinal } = mounted
    ? { t, tArray }
    : getTranslations("en");

  return (
    <I18nContext.Provider value={{ locale: mounted ? locale : "en", setLocale, t: tFinal, tArray: tArrayFinal }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
