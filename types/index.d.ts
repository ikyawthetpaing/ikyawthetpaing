import { Icons } from "@/components/icons";

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  creator: string;
  url: string;
  ogImage: string;
  authors: Author[];
  keywords: string[];
};

export type BaseConfig = {
  mainNavItems: NavItem[];
};

export type CreatorConfig = {
  name: string;
  username: string;
  description: string;
  role: string;
  email: string;
  location: string;
  resumeFilePath: string;
  tel: Option;
  media: {
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
  disabled?: boolean;
};

export type IconName = keyof typeof Icons;

export type Option = {
  label: string;
  value: string;
};

export type Share = {
  iconName: IconName;
  mediraName: string;
  link: string;
};
