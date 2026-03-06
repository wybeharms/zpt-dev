"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "./I18nProvider";

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function LocalizedMetadata() {
  const pathname = usePathname();
  const { t } = useI18n();

  useEffect(() => {
    const pageKey =
      pathname === "/sales"
        ? "sales"
        : pathname === "/about"
          ? "about"
          : pathname === "/advisory"
            ? "advisory"
            : pathname === "/resources"
              ? "resources"
              : pathname.startsWith("/portal")
                ? "portal"
                : "default";

    const title = t(`meta.${pageKey}.title`);
    const description = t(`meta.${pageKey}.description`);

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description" }, description);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
  }, [pathname, t]);

  return null;
}
