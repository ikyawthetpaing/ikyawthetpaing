import { SiteConfig } from "@/types";

import { creatorConfig } from "@/config/creator";

import { absoluteUrl } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  name: creatorConfig.name,
  title: `${creatorConfig.name} | ${creatorConfig.role}`,
  description:
    "Discover my world of software development expertise through a portfolio of innovative projects and meticulously crafted code.",
  url: absoluteUrl(),
  ogImage: absoluteUrl("/og.jpg"),
  authors: [
    { name: "Kyaw Thet Paing", url: "https://twitter.com/ikyawthetpaing" },
  ],
  creator: creatorConfig.username,
  keywords: [
    "Software Engineer",
    "Product Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "Product Designer",
    "Web Designer",
  ],
};
