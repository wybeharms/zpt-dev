"use client";

import { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from "react";
import { type Locale, getTranslations } from "@/lib/i18n";

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => unknown[];
};

const I18nContext = createContext<I18nContextType | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && ["en", "nl", "es", "it"].includes(value);
}

function getStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = localStorage.getItem("zpt-locale");
  return isLocale(stored) ? stored : "en";
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => callback();
  window.addEventListener("storage", handleChange);
  window.addEventListener("zpt-locale-change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("zpt-locale-change", handleChange);
  };
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getStoredLocale, () => "en" as Locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem("zpt-locale", newLocale);
    document.documentElement.lang = newLocale;
    window.dispatchEvent(new Event("zpt-locale-change"));
  }, []);

  const { t, tArray } = getTranslations(locale);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tArray }}>
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
