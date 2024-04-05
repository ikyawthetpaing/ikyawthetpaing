import { CreatorConfig } from "@/types";

import { generateProfileLink } from "@/lib/helpers";

export const creatorConfig: CreatorConfig = {
  name: "Kyaw Thet Paing",
  role: "Web Developer",
  bio: "I am a web developer with a passion for building innovative and user-friendly websites. I have a strong foundation in full stack development, including experience with a variety of programming languages, frameworks, and databases.",
  username: "ikyawthetpaing",
  email: "ikyawthetpaing@gmail.com",
  avatarImageUrl: "/images/portrait-1.jpg",
  resumeFileUrl: "/files/resume.pdf",
  location: "Bangkok, Thailand",
  telephone: {
    label: "(+66) 937-418-692",
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
      title: "Custom Software Development",
      description:
        "I offer tailored solutions for clients seeking custom software development. Whether it's web applications, mobile apps, or enterprise-level systems, I specialize in creating innovative and efficient software solutions that meet specific business needs.",
      icon: "smartphone",
      href: "/project",
    },
    {
      title: "Full Stack Development",
      description:
        "I provide end-to-end development services, covering both frontend and backend aspects of applications. From creating intuitive user interfaces to designing robust server-side architecture, I ensure seamless integration and optimal performance across the entire software stack.",
      icon: "globe",
      href: "/project",
    },
    {
      title: "Technical Consultation and Support",
      description:
        "I offer technical consultation services to guide clients through the software development lifecycle. This includes advising on technology stack selection, system architecture, and best practices. Additionally, I provide ongoing support to address any issues, implement updates, and ensure the continued success of the developed software.",
      icon: "helpingHand",
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
