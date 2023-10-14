import { type MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

import { absoluteUrl } from "@/lib/utils";
import { baseConfig } from "@/config/base";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allPosts.map((post) => ({
    url: absoluteUrl(`${post.slug}`),
    lastModified: new Date().toISOString(),
  }));

  const routes = baseConfig.mainNavItems.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
