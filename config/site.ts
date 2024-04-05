import { SiteConfig } from "@/types";

import { creatorConfig } from "@/config/creator";

import { generateProfileLink } from "@/lib/helpers";
import { absoluteUrl } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  name: creatorConfig.name,
  title: `${creatorConfig.name} | ${creatorConfig.role}`,
  description:
    "Discover my world of web development expertise through a portfolio of innovative projects and meticulously crafted code.",
  siteUrl: absoluteUrl(),
  ogImageUrl: absoluteUrl("/og.jpg"),
  authors: [
    {
      name: creatorConfig.name,
      url: generateProfileLink(creatorConfig.username, "linkedin"),
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
