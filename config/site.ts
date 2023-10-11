import { SiteConfig } from "@/types";

import { absoluteUrl } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  name: "Kyaw Thet Paing",
  title: "Kyaw Thet Paing: A Professional Software Developer",
  description:
    "Explore Kyaw Thet Paing's Portfolio: Professional Software Developer. Discover innovative projects, sleek interfaces, and robust solutions. Expert in software development, Kyaw Thet Paing transforms ideas into reality. Explore now!",
  url: absoluteUrl(),
  ogImage: absoluteUrl("/og.png"),
  links: {
    twitter: "https://twitter.com/ikyawthetpaing",
    github: "https://github.com/ikyawthetpaing/ikyawthetpaing",
  },
  authors: [
    { name: "@ikyawthetpaing", url: "https://twitter.com/ikyawthetpaing" },
  ],
  creator: {
    name: "Kyaw Thet Paing",
    username: "@ikyawthetpaing",
    email: "ikyawthetpaing@gmail.com",
  },
  keywords: [
    "Freelance Software Developer",
    "Software Development Services",
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Software Engineer for Hire",
    "Frontend Development",
    "Backend Development",
    "Full Stack Developer",
    "UI/UX Design and Development",
    "Database Development",
    "API Integration",
    "E-commerce Development",
    "Responsive Web Design",
    "WordPress Development",
    "Java Developer",
    "Python Developer",
    "JavaScript Developer",
    "React.js Developer",
    "Node.js Developer",
    "PHP Developer",
    "Mobile App Developer (iOS/Android)",
    "Database Management",
    "Cloud Computing Solutions",
    "Software Maintenance and Support",
    "Agile Software Development",
    "Freelance Programmer",
    "Software Prototyping",
    "Code Optimization",
    "Software Consulting Services",
  ],
};
