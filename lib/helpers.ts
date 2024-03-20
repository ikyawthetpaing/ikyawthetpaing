import { allAuthors, allPosts, allProjects } from "@/.contentlayer/generated";
import { SocialMediaPlatform } from "@/types";
import { compareDesc } from "date-fns";

export const projects = allProjects.sort((a, b) => a.index - b.index);
export const posts = allPosts.sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
});

export function getAuthor(slug: string) {
  return allAuthors.find(({ slugAsParams }) => slugAsParams === slug) || null;
}

const platformUrls: Record<SocialMediaPlatform, string> = {
  linkedin: "https://www.linkedin.com/in/",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  github: "https://github.com/",
  dribbble: "https://dribbble.com/",
  medium: "https://medium.com/",
  twitter: "https://twitter.com/",
};

export function generateProfileLink(
  username: string,
  platformName: SocialMediaPlatform
) {
  const platformUrl = platformUrls[platformName];

  if (!platformUrl) {
    throw new Error("Unsupported platform");
  }

  return `${platformUrl}${username}`;
}
