import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { baseConfig } from "@/config/base";
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
              {baseConfig.socialLinks.map(({ href, icon }, index) => {
                const Icon = Icons[icon];
                return (
                  <li key={index}>
                    <Link href={href} target="_blank">
                      <Icon className="w-5 h-5 text-foreground" />
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
                className="object-cover w-full h-full opacity-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex gap-12">
          <div className="flex flex-1">
            <ul className="flex flex-col gap-12 w-full">
              {baseConfig.services.map((service, index) => {
                const Icon = Icons[service.icon];
                return (
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
                            <Icon className="w-5 h-5" />
                          </div>
                          <h2 className="font-medium text-xl">
                            {service.title}
                          </h2>
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
                );
              })}
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
            <ul className="grid grid-cols-2 sm:grid-cols-4 w-fit gap-12">
              {baseConfig.bigBrands.map((brand, index) => (
                <li key={index}>
                  <div className="py-6 px-8 bg-accent rounded-3xl flex flex-col items-center gap-4 w-full h-full">
                    <img
                      src={brand.image}
                      alt={brand.image}
                      className="w-20 flex-1"
                    />
                    <h3 className="font-medium">{brand.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-12 flex-col md:flex-row md:justify-center">
            <div className="flex items-center gap-4">
              <h3 className="text-6xl font-medium">3</h3>
              <p className="text-muted-foreground">
                Years
                <br />
                Experience
              </p>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="text-6xl font-medium">102</h3>
              <p className="text-muted-foreground">
                Satisfied
                <br />
                Clients
              </p>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="text-6xl font-medium">285</h3>
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
            {baseConfig.featuredProjects.map((project, index) => (
              <li key={index} className="flex-1">
                <div className="p-6 sm:px-12 sm:py-8 bg-accent rounded-3xl">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold">{project.name}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="h-96"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
