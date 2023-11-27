import { type MetadataRoute } from "next";
import { allPosts, allProjects } from "contentlayer/generated";

import { baseConfig } from "@/config/base";

import { absoluteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allPosts.map((post) => ({
    url: absoluteUrl(`${post.slug}`),
    lastModified: new Date().toISOString(),
  }));

  const projects = allProjects.map((project) => ({
    url: absoluteUrl(`${project.slug}`),
    lastModified: new Date().toISOString(),
  }));

  const routes = baseConfig.mainNavItems.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...projects];
}
