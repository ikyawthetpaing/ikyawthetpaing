import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientInfo, Service, SocialMediaLink } from "@/types";

import { creatorConfig } from "@/config/creator";

import { posts, projects } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icon, Icons } from "@/components/icons";
import { PostItem } from "@/components/post-item";
import { ProjectItem } from "@/components/project-item";

export default function HomePage() {
  const {
    name,
    role,
    bio,
    resumeFileUrl,
    socialMediaLinks,
    portraitSketchImage,
    services,
    bigClients,
  } = creatorConfig;

  return (
    <div className="grid gap-32">
      <IntroSection
        name={name}
        role={role}
        bio={bio}
        resumeFileUrl={resumeFileUrl}
        portraitSketchImage={portraitSketchImage}
        socialMediaLinks={socialMediaLinks}
      />
      <ServicesSection services={services} />
      <BigClientsSection bigClients={bigClients} />
      <WorksAndBlogsSection
        title="Works"
        description="Explore carefully curated projects that represent my best work."
        linkHref="/project"
        items={projects.slice(0, 4).map((project) => (
          <ProjectItem project={project} />
        ))}
      />
      <WorksAndBlogsSection
        title="Blogs"
        description="Explore my latest and best blog posts for insights and expertise."
        linkHref="/blog"
        items={posts.slice(0, 4).map((post) => (
          <PostItem post={post} />
        ))}
      />
      <WorkInquiry />
    </div>
  );
}

const IntroSection = ({
  name,
  role,
  bio,
  resumeFileUrl,
  portraitSketchImage,
  socialMediaLinks,
}: {
  name: string;
  role: string;
  bio: string;
  resumeFileUrl: string;
  portraitSketchImage: (typeof creatorConfig)["portraitSketchImage"];
  socialMediaLinks: SocialMediaLink[];
}) => (
  <section className="container">
    <div className="flex gap-12">
      <div className="flex flex-col justify-end">
        <ul className="flex flex-col gap-4">
          {socialMediaLinks.map((media, index) => (
            <li key={index}>
              <Link href={media.href} target="_blank">
                <Icon
                  name={media.icon}
                  className="text-muted-foreground hover:text-foreground size-5 transition-all duration-150"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 flex-col gap-4 max-md:items-end md:flex-row md:justify-center">
        <div className="flex flex-col justify-center gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="flex flex-col gap-4">
              <span className="font-bebas-neue text-7xl font-medium uppercase lg:text-8xl">
                {name}
              </span>
              <span className="text-muted-foreground font-sans text-lg font-light uppercase md:text-xl">
                {role}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-lg">{bio}</p>
          </div>

          <div className="flex gap-6">
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "transition-all duration-150 hover:px-6"
              )}
            >
              Let&apos;s Chat
            </Link>
            <Link
              href={resumeFileUrl}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "transition-all duration-150 hover:px-6"
              )}
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="max-w-lg overflow-hidden rounded-full">
          <Image
            src={portraitSketchImage.src}
            alt={portraitSketchImage.alt}
            width={9999}
            height={9999}
            className="size-full object-cover"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = ({ services }: { services: Service[] }) => (
  <section className="container">
    <div className="flex gap-8">
      <div className="flex flex-1">
        <ul className="flex w-full flex-col gap-12">
          {services.map((service, index) => (
            <li key={index}>
              <div
                className={cn(
                  "flex",
                  index % 2 === 0 ? "justify-end" : "justify-start"
                )}
              >
                <div className="bg-accent flex w-full flex-col gap-8 rounded-3xl p-6 sm:w-3/4 sm:px-12 sm:py-8">
                  <div className="flex flex-col gap-4">
                    <div className="bg-background w-fit rounded-full p-4">
                      <Icon name={service.icon} className="size-5" />
                    </div>
                    <h2 className="text-xl font-medium">{service.title}</h2>
                    <p className="text-muted-foreground max-w-lg">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="w-fit text-sm font-medium uppercase underline-offset-4 hover:underline"
                  >
                    See Projects
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {"SERVICES".split("").map((value, index) => (
            <li key={index} className="rotate-90 text-center leading-[0.75]">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const BigClientsSection = ({ bigClients }: { bigClients: ClientInfo[] }) => (
  <section className="container">
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-semibold">Big Clients</h2>
        <p className="text-muted-foreground">
          Work with many big brands, brings for me great experience.
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {bigClients.map((bigClient, index) => (
            <li key={index} className="flex-1 shrink-0 px-12">
              <Icon name={bigClient.icon} className="h-24" />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-12 md:flex-row md:justify-center">
        <div className="flex items-center gap-4">
          <h3 className="text-6xl font-medium">
            {new Date().getFullYear() - 2021}
          </h3>
          <p className="text-muted-foreground">
            Years
            <br />
            Experience
          </p>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-6xl font-medium">12</h3>
          <p className="text-muted-foreground">
            Satisfied
            <br />
            Clients
          </p>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-6xl font-medium">36</h3>
          <p className="text-muted-foreground">
            Projects Completed In
            <br />
            16 Countries
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WorksAndBlogsSection = ({
  title,
  description,
  items,
  linkHref,
}: {
  title: string;
  description: string;
  items: JSX.Element[];
  linkHref: string;
}) => (
  <section className="container">
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-end">
        <Link
          href={linkHref}
          className="font-medium hover:underline hover:underline-offset-4"
        >
          {"Explore More ->"}
        </Link>
      </div>
    </div>
  </section>
);

const WorkInquiry = () => (
  <section className="container">
    <div className="mx-auto w-full lg:w-3/4">
      <div>
        <Image
          src="/images/pet.png"
          alt="Cute border collie dog cartoon"
          width={9999}
          height={9999}
          className="ml-12 w-28 translate-y-1 object-cover"
        />
      </div>
      <div className="bg-accent rounded-3xl p-8 sm:p-12 md:p-24 lg:px-32">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h2 className="text-4xl font-semibold">Work Inquiry</h2>
            <p className="text-muted-foreground">
              Let&apos;s work together and I&apos;ll help you by all my best.
            </p>
          </div>
          <div className="flex items-center">
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "min-w-max rounded-2xl px-10 py-8 text-xl font-bold uppercase sm:px-12 sm:py-10"
              )}
            >
              Let&apos;s Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
