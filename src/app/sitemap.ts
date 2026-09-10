import type { MetadataRoute } from "next";
import { products, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/products`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/faq`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: now,
    })),
  ];
}
