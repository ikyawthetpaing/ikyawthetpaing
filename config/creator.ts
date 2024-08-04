import { CreatorConfig } from "@/types";

import { generateProfileLink } from "@/lib/helpers";

export const creatorConfig: CreatorConfig = {
  name: "Kyaw Thet Paing",
  role: "Web Development & Design Expert",
  bio: "I'm a freelance full-stack developer & web designer passionate about crafting innovative and user-friendly websites that make a real impact.",
  username: "ikyawthetpaing",
  email: "contact@ikyawthetpaing.com",
  avatarImageUrl: "/images/portrait-1.jpg",
  resumeFileUrl: "/files/resume.pdf",
  location: "Bangkok, Thailand",
  telephone: {
    label: "(+66) 93-741-8692",
    value: "+66937418692",
  },
  portraitSketchImage: {
    src: "/images/portrait-sketch.png",
    alt: "Detailed portrait sketch of Kyaw Thet Paing",
  },
  socialMediaLinks: [
    {
      title: "Github",
      href: generateProfileLink("ikyawthetpaing", "github"),
      icon: "github",
    },
    {
      title: "Twitter",
      href: generateProfileLink("ikyawthetpaing", "twitter"),
      icon: "twitter",
    },
    {
      title: "LinkedIn",
      href: generateProfileLink("ikyawthetpaing", "linkedin"),
      icon: "linkedin",
    },
  ],
  services: [
    {
      title: "Website Development & Design",
      description:
        "I craft visually stunning and user-friendly websites that are tailored to your brand and business goals. I handle both the design and development aspects, ensuring a seamless and effective online presence.",
      icon: "appWindow",
      href: "/project",
    },
    {
      title: "E-commerce Development",
      description:
        "I offer comprehensive e-commerce development services to help businesses establish a strong online presence. From custom shopping carts to secure payment gateways, I create robust and scalable e-commerce platforms tailored to your specific requirements.",
      icon: "store",
      href: "/project",
    },
    {
      title: "Custom Software Development",
      description:
        "I offer tailored solutions for clients seeking custom software development. Whether it's web applications, mobile apps, or enterprise-level systems, I specialize in creating innovative and efficient software solutions that meet specific business needs.",
      icon: "smartphone",
      href: "/project",
    },
  ],
  bigClients: [
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
  skills: [
    "Programming Languages: Java, C#, JavaScript, PHP, Python, C/C++, Rust",
    "Web Development: HTML, CSS, JavaScript, React, Angular, Node.js",
    "Backend Development: Node.js, Express.js, Django, Flask, Laravel, .NET",
    "Database Management: MySQL, MongoDB, PostgreSQL, Redis",
    "Cloud Computing: AWS, Azure, Google Cloud Platform",
    "Version Control: Git, GitHub, GitLab",
    "Testing: Unit Testing, Integration Testing",
    "Full Stack Development",
    "API Development and Integration",
    "Collaboration and Teamwork",
    "Technical Documentation",
    "Problem Solving and Algorithmic Thinking",
  ],
  imageGallery: [
    {
      alt: "Selfie at the beach wearing a black t-shirt",
      src: "/images/portrait-1.jpg",
    },
    {
      alt: "Beach trip selfie with black t-shirt",
      src: "/images/portrait-2.jpg",
    },
    {
      alt: "Sunny day selfie in black t-shirt at the beach",
      src: "/images/portrait-3.jpg",
    },
    {
      alt: "Relaxing by the shore in a black t-shirt",
      src: "/images/portrait-4.jpg",
    },
  ],
};
