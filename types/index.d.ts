import { Icons } from "@/components/icons";

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  creatorName: string;
  siteUrl: string;
  ogImageUrl: string;
  authors: Author[];
  keywords: string[];
};

export type BaseConfig = {
  mainNavItems: NavItem[];
};

export type CreatorConfig = {
  name: string;
  username: string;
  bio: string;
  role: string;
  email: string;
  location: string;
  avatarImageUrl: string;
  resumeFileUrl: string;
  telephone: Option;
  socialMediaLinks: {
    title: string;
    href: string;
    icon: IconName;
  }[];
  services: {
    title: string;
    description: string;
    icon: IconName;
    href: string;
  }[];
  bigClients: {
    name: string;
    icon: IconName;
  }[];
  skills: string[];
  imageGallery: { alt: string; url: string }[];
};

export type NavItem = {
  title: string;
  href: string;
};

export type IconName = keyof typeof Icons;

export type Option = {
  label: string;
  value: string;
};

export type SocialMediaShare = {
  iconName: IconName;
  platformName: string;
  shareLink: string;
};

export type SocialMediaFollowLink = {
  platformName: string;
  followLink: string;
};

export type SocialMediaPlatform =
  | "linkedin"
  | "facebook"
  | "instagram"
  | "github"
  | "dribbble"
  | "medium"
  | "twitter";
