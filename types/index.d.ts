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
  telephone: ContactOption;
  socialMediaLinks: SocialMediaLink[];
  services: Service[];
  bigClients: ClientInfo[];
  skills: string[];
  imageGallery: ImageInfo[];
  portraitSketchImage: ImageInfo;
};

export type NavItem = {
  title: string;
  href: string;
};

export type IconName = keyof typeof Icons;

export type ContactOption = {
  label: string;
  value: string;
};

export type SocialMediaShare = {
  iconName: IconName;
  platformName: string;
  shareLink: string;
};

export type SocialMediaPlatform =
  | "linkedin"
  | "facebook"
  | "instagram"
  | "github"
  | "dribbble"
  | "medium"
  | "twitter";

export type SocialMediaLink = {
  title: string;
  href: string;
  icon: IconName;
};

export type Service = {
  title: string;
  description: string;
  icon: IconName;
  href: string;
};

export type ClientInfo = {
  name: string;
  icon: IconName;
};

export type ImageInfo = {
  src: string;
  alt: string;
};
