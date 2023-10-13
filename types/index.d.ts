import { Icons } from "@/components/icons";

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  authors: Author[];
  creator: string;
  keywords: string[];
};

export type BaseConfig = {
  mainNavItems: NavItem[];
};

export type CreatorConfig = {
  name: string;
  username: string;
  email: string;
  tel: Option;
  media: {
    title: string;
    href: string;
    icon: Icon;
  }[];
  services: { title: string; description: string; icon: Icon; href: string }[];
  bigClients: {
    name: string;
    icon: Icon;
  }[];
  featuredProjects: Project[];
  skills: string[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Icon = keyof typeof Icons;

export type Option = {
  label: string;
  value: string;
};

export type Project = {
  name: string;
  description: string;
  icon: Icon;
  thumbnail: string;
  githubLink: string;
  preview: {
    label: string;
    href: string;
  };
};
