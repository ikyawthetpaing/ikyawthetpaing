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
  creator: {
    name: string;
    username: string;
    email: string;
  };
  keywords: string[];
};

export type BaseConfig = {
  mainNavItems: NavItem[];
  socialLinks: IconNavItem[];
  services: Service[];
  bigBrands: BigBrand[];
  featuredProjects: FeaturedProject[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

type Icon = keyof typeof Icons;

type IconNavItem = NavItem & {
  icon: Icon;
};

type Service = {
  title: string;
  description: string;
  icon: Icon;
  href: string;
};

type BigBrand = {
  name: string;
  icon: Icon;
};

type FeaturedProject = {
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
