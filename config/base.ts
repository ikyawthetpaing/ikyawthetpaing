import { Icons } from "@/components/icons";
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
  services: [
    {
      title: "Custom Software Development",
      description:
        "I engineer tailored software solutions. Share your needs, and I'll craft efficient, custom applications, turning your unique requirements into seamless, user-friendly software experiences.",
      icon: "smartphone",
      href: "/works/software-dev",
    },
    {
      title: "Website Development",
      description:
        "I craft exceptional websites. Share your vision, and I'll design a user-friendly, visually stunning site that represents your brand online, making your digital presence stand out.",
      icon: "globe",
      href: "/works/web-dev",
    },
    {
      title: "Web Design",
      description:
        "I design captivating websites. Share your vision, and I'll transform it into a visually appealing, user-friendly site that reflects your brand identity, ensuring a memorable online experience for your visitors.",
      icon: "appWindow",
      href: "/works/web-design",
    },
  ],
  bigBrands: [
    {
      name: "Upwork",
      image:
        "https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png",
    },
    {
      name: "Fiverr",
      image:
        "https://freelogopng.com/images/all_img/1656738037fiverr-icon-png.png",
    },
    {
      name: "Freelancer",
      image:
        "https://seeklogo.com/images/F/freelancer-com-logo-2B5CE1A961-seeklogo.com.png",
    },
    {
      name: "Shopify",
      image: "https://logosandtypes.com/wp-content/uploads/2020/11/shopify.svg",
    },
  ],
  featuredProjects: [
    {
      name: "Voxellax",
      description: "E-commerce website for digital products.",
    },
    {
      name: "Nexus",
      description: "A Twitter-like social media app.",
    },
  ],
};
