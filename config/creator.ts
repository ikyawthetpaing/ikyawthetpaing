import { CreatorConfig } from "@/types";

import { generateProfileLink } from "@/lib/helpers";

export const creatorConfig: CreatorConfig = {
  name: "Kyaw Thet Paing",
  role: "Software Engineer",
  bio: "I am a software engineer with a passion for building innovative and user-friendly applications. I have a strong foundation in full stack development, including experience with a variety of programming languages, frameworks, and databases.",
  username: "ikyawthetpaing",
  email: "ikyawthetpaing@gmail.com",
  avatarImageUrl: "/images/portrait_1.jpg",
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
        "Leveraging my expertise in various programming languages and frameworks, I offer tailored solutions for clients seeking custom software development. Whether it's web applications, mobile apps, or enterprise-level systems, I specialize in creating innovative and efficient software solutions that meet specific business needs.",
      icon: "smartphone",
      href: "/project",
    },
    {
      title: "Full Stack Development",
      description:
        "As a full-stack developer, I provide end-to-end development services, covering both frontend and backend aspects of applications. From creating intuitive user interfaces to designing robust server-side architecture, I ensure seamless integration and optimal performance across the entire software stack.",
      icon: "globe",
      href: "/project",
    },
    {
      title: "Technical Consultation and Support",
      description:
        "Beyond development, I offer technical consultation services to guide clients through the software development lifecycle. This includes advising on technology stack selection, system architecture, and best practices. Additionally, I provide ongoing support to address any issues, implement updates, and ensure the continued success of the developed software.",
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
    "Programming Languages: Java, Python, C++, JavaScript",
    "Web Development: HTML, CSS, JavaScript, React, Angular, Node.js",
    "Backend Development: Node.js, Express.js, Django, Flask",
    "Database Management: MySQL, MongoDB, PostgreSQL, Redis",
    "Full Stack Development",
    "Software Architecture and Design Patterns",
    "API Development and Integration",
    "Version Control: Git, GitHub, GitLab",
    "Testing: Unit Testing, Integration Testing",
    "Agile and Scrum Methodologies",
    "DevOps: Continuous Integration, Continuous Deployment (CI/CD)",
    "Cloud Computing: AWS, Azure, Google Cloud Platform",
    "Mobile App Development: iOS, Android, React Native",
    "Security: Application Security, Secure Coding Practices",
    "Problem Solving and Algorithmic Thinking",
    "Debugging and Performance Optimization",
    "Collaboration and Teamwork",
    "Technical Documentation",
    "Continuous Learning and Adaptability",
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
