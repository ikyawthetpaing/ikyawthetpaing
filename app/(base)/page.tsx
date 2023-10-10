import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { baseConfig } from "@/config/base";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
          <div className="flex flex-1 gap-4 justify-center">
            <div className="flex flex-col justify-center gap-12">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl uppercase">
                  Kyaw Thet Paing
                </h1>
                <h2 className="text-2xl font-light uppercase">
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
                className="object-cover w-full h-full opacity-25"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
