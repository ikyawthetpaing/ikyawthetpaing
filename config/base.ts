import { BaseConfig } from "@/types";

export const baseConfig: BaseConfig = {
  mainNavItems: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
    {
      title: "Work",
      href: "/Work",
      disabled: true,
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
};
