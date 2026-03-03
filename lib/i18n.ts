import en from "@/locales/en.json";
import nl from "@/locales/nl.json";
import es from "@/locales/es.json";
import it from "@/locales/it.json";

export type Locale = "en" | "nl" | "es" | "it";

const locales: Record<Locale, Record<string, unknown>> = { en, nl, es, it };

export function getTranslations(locale: Locale) {
  const messages = locales[locale];
  // Fallback to English for missing keys
  const fallback = locales.en;

  function t(key: string): string {
    const value = getNestedValue(messages, key) ?? getNestedValue(fallback, key);
    return typeof value === "string" ? value : key;
  }

  function tArray(key: string): unknown[] {
    const value = getNestedValue(messages, key) ?? getNestedValue(fallback, key);
    return Array.isArray(value) ? value : [];
  }

  return { t, tArray, locale };
}

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}
