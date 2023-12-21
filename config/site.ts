import { SiteConfig } from "@/types";

import { creatorConfig } from "@/config/creator";

import { absoluteUrl } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  name: creatorConfig.name,
  title: `${creatorConfig.name} | ${creatorConfig.role}`,
  description:
    "Discover my world of software development expertise through a portfolio of innovative projects and meticulously crafted code.",
  siteUrl: absoluteUrl(),
  ogImageUrl: absoluteUrl("/og.jpg"),
  authors: [
    {
      name: creatorConfig.name,
      url: `https://linkedin.com/in/${creatorConfig.username}`,
    },
  ],
  creatorName: creatorConfig.name,
  keywords: [
    "Software Engineer",
    "Product Engineer",
    "Software Developer",
    "Full-Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "Product Designer",
    "Web Designer",
  ],
};
