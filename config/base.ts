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
      icon: "upwork",
    },
    {
      name: "Fiverr",
      icon: "fiverr",
    },
    {
      name: "envato",
      icon: "envato",
    },
    {
      name: "ASUS",
      icon: "asus",
    },
  ],
  featuredProjects: [
    {
      name: "Voxellax",
      description: "E-commerce website for selling digital products.",
      icon: "globe",
      thumbnail: "/images/projects/voxellax/thumbnail.png",
      githubLink: "https://github.com/ikyawthetpaing/voxellax",
      preview: {
        label: "View",
        href: "https://voxellax.vercel.app",
      },
    },
    {
      name: "Nexus",
      description: "A social media platform resembling Twitter.",
      icon: "smartphone",
      thumbnail: "/images/projects/nexus/thumbnail.png",
      githubLink: "https://github.com/ikyawthetpaing/nexus",
      preview: {
        label: "Download",
        href: "https://github.com/ikyawthetpaing/nexus/releases/download/v1.0.0/nexus-v1.0.0.apk",
      },
    },
  ],
};
