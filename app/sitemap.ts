import { type MetadataRoute } from "next";
import { allDocuments } from "contentlayer/generated";

import { baseConfig } from "@/config/base";

import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = allDocuments.map((doc) => ({
    url: absoluteUrl(`${doc.slug}`),
    lastModified: new Date().toISOString(),
  }));

  const routes = baseConfig.mainNavItems.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...docs];
}
