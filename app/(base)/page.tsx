import Image from "next/image";
import Link from "next/link";

import { developerConfig } from "@/config/developer";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { ProjectItem } from "@/components/project-item";

export default function Home() {
  return (
    <main className="grid gap-32">
      <section className="container">
        <div className="flex gap-12">
          <div className="flex flex-col justify-end">
            <ul className="flex flex-col gap-4">
              {developerConfig.media.map((media, index) => (
                <li key={index}>
                  <Link href={media.href} target="_blank">
                    <Icon
                      name={media.icon}
                      className="text-muted-foreground h-5 w-5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-4 max-md:items-end md:flex-row md:justify-center">
            <div className="flex flex-col justify-center gap-12">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-medium uppercase sm:text-4xl md:text-5xl lg:text-6xl">
                  {developerConfig.name}
                </h1>
                <h2 className="text-xl font-light uppercase md:text-2xl">
                  {developerConfig.role}
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  {developerConfig.description}
                </p>
              </div>

              <div className="flex gap-6">
                <Link href="/contact" className={buttonVariants()}>
                  Let&apos;s Chat
                </Link>
                <Link
                  href={developerConfig.resumeFilePath}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Resume
                </Link>
              </div>
            </div>
            <div className="max-w-lg overflow-hidden rounded-full">
              <Image
                src="/images/landing.png"
                alt="Kyaw Thet Paing's Art Sketch Image"
                width={9999}
                height={9999}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex gap-12">
          <div className="flex flex-1">
            <ul className="flex w-full flex-col gap-12">
              {developerConfig.services.map((service, index) => (
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
                          <Icon name={service.icon} className="h-5 w-5" />
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
                <li
                  key={index}
                  className="rotate-90 text-center leading-[0.75]"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
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
              {developerConfig.bigClients.map((bigClient, index) => (
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
              <h3 className="text-6xl font-medium">73</h3>
              <p className="text-muted-foreground">
                Satisfied
                <br />
                Clients
              </p>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="text-6xl font-medium">237</h3>
              <p className="text-muted-foreground">
                Projects Completed In
                <br />
                34 Countries
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold">Works</h2>
            <p className="text-muted-foreground">
              Featured projects, which are my best choices to showcase.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {developerConfig.featuredProjects.map((project, index) => (
              <li key={index}>
                <ProjectItem project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container">
        <div className="mx-auto w-full lg:w-3/4">
          <div>
            <Image
              src="/images/pet.png"
              alt="Pet Image"
              width={9999}
              height={9999}
              className="ml-12 w-28 translate-y-2 object-cover"
            />
          </div>
          <div className="bg-accent rounded-3xl p-8 sm:p-12 md:p-24 lg:px-32">
            <div className="flex flex-col justify-between gap-8 sm:flex-row">
              <div className="flex flex-col gap-4 sm:gap-8">
                <h2 className="text-4xl font-semibold">Work Inquiry</h2>
                <p className="text-muted-foreground">
                  Let&apos;s work together and I&apos;ll help you by all my
                  best.
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
    </main>
  );
}
