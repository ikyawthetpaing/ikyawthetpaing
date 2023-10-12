import { Icon, Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creatorConfig } from "@/config/creator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-32">
      <section className="container">
        <div className="flex gap-12">
          <div className="flex flex-col justify-end">
            <ul className="flex flex-col gap-4">
              {creatorConfig.media.map((media, index) => {
                const Icon = Icons[media.icon];
                return (
                  <li key={index}>
                    <Link href={media.href} target="_blank">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-1 gap-4 md:justify-center max-md:items-end flex-col md:flex-row">
            <div className="flex flex-col justify-center gap-12">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl uppercase">
                  Kyaw Thet Paing
                </h1>
                <h2 className="text-xl md:text-2xl font-light uppercase">
                  Software Developer
                </h2>
                <p className="max-w-lg text-muted-foreground">
                  I specialize in software development and web technologies,
                  with a passion for fostering optimism and building vibrant
                  communities. My current role involves shaping developer
                  experiences and guiding a community around Next.js, an
                  open-source web framework developed using React.
                </p>
              </div>

              <div className="flex gap-6">
                <Button>Let&apos;s Chat</Button>
                <Button variant="outline">Resume</Button>
              </div>
            </div>
            <div className="max-w-lg overflow-hidden rounded-full">
              <Image
                src="/images/landing.png"
                alt="Kyaw Thet Paing: Software Developer Sketch Art Image"
                width={9999}
                height={9999}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex gap-12">
          <div className="flex flex-1">
            <ul className="flex flex-col gap-12 w-full">
              {creatorConfig.services.map((service, index) => (
                <li key={index}>
                  <div
                    className={cn(
                      "flex",
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    )}
                  >
                    <div className="p-6 sm:px-12 sm:py-8 bg-accent rounded-3xl w-full sm:w-3/4 flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <div className="p-4 rounded-full bg-background w-fit">
                          <Icon icon={service.icon} className="w-5 h-5" />
                        </div>
                        <h2 className="font-medium text-xl">{service.title}</h2>
                        <p className="max-w-lg text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                      <Link
                        href={service.href}
                        className="uppercase text-sm font-medium w-fit hover:underline underline-offset-4"
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
                  className="leading-[0.75] text-center rotate-90"
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
              {creatorConfig.bigClients.map((bigClient, index) => (
                <li key={index} className="px-12 flex-1 flex-shrink-0">
                  <Icon icon={bigClient.icon} className="h-24" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-12 flex-col md:flex-row md:justify-center">
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
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {creatorConfig.featuredProjects.map((project, index) => (
              <li key={index} className="flex-1">
                <div className="bg-accent rounded-3xl border overflow-hidden">
                  <div className="flex flex-col gap-4 p-6 sm:px-12 sm:py-8 ">
                    <div className="flex gap-4">
                      <div>
                        <div className="p-4 rounded-full bg-background w-fit">
                          <Icon icon={project.icon} className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex gap-4 flex-col">
                        <div>
                          <h3 className="text-2xl font-medium">
                            {project.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex gap-4">
                          <Link href={project.preview.href}>
                            <Badge>{project.preview.label}</Badge>
                          </Link>
                          <Link href={project.githubLink}>
                            <Badge>Code</Badge>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      width={9999}
                      height={9999}
                      className="w-full"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container">
        <div className="w-full lg:w-3/4 mx-auto">
          <div>
            <Image
              src="/images/pet.png"
              alt="Pet Image"
              width={9999}
              height={9999}
              className="object-cover w-28 ml-12 translate-y-2"
            />
          </div>
          <div className="p-8 sm:p-12 md:px-24 md:py-24 lg:px-32 bg-accent rounded-3xl">
            <div className="flex justify-between gap-8 flex-col sm:flex-row">
              <div className="flex flex-col gap-4 sm:gap-8">
                <h2 className="text-4xl font-semibold">Work Inquiry</h2>
                <p className="text-muted-foreground">
                  Let&apos;s work together and I&apos;ll help you by all my
                  best.
                </p>
              </div>
              <div className="flex items-center">
                <Button className="text-xl uppercase px-10 py-8 sm:px-12 sm:py-10 rounded-2xl font-bold min-w-max">
                  Let&apos;s Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
