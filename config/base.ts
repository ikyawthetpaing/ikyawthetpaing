import { Icons } from "@/components/icons";

type BaseConfig = {
  mainNavItems: NavItem[];
  socialLinks: IconNavItem[];
};

type NavItem = {
  title: string;
  href: string;
};

type IconNavItem = NavItem & {
  icon: keyof typeof Icons;
};

export const baseConfig: BaseConfig = {
  mainNavItems: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  socialLinks: [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ikyawthetpaing",
      icon: "linkedin",
    },
    {
      title: "X",
      href: "https://www.twitter.com/ikyawthetpaing",
      icon: "twitter",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/ikyawthetpaing",
      icon: "instagram",
    },
  ],
};
