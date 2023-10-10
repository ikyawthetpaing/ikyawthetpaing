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
  socialLinks: IconNavItem[];
  services: Service[];
  bigBrands: BigBrand[];
  featuredProjects: FeaturedProject[];
};

export type NavItem = {
  title: string;
  href: string;
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
  image: string;
};

type FeaturedProject = {
  name: string;
  description: string;
};
