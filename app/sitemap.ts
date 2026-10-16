import type { MetadataRoute } from "next";

const BASE_URL = "https://www.zptpartners.com";

const routes = [
  "",
  "/how-it-works",
  "/our-work",
  "/resources",
  "/team",
  "/technology",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
