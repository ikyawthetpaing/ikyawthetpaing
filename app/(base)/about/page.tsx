import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { developerConfig } from "@/config/developer";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer with 5+ years of experience building robust and impactful web, mobile, and cloud-based applications. Learn about my journey, my expertise, and how I can help you achieve your software goals.",
};

export default function AboutPage() {
  return (
    <section className="container flex flex-col gap-8">
      <h2 className="text-3xl font-light">About Me</h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex-1">
            <h1 className="text-4xl font-medium uppercase md:text-5xl lg:text-6xl">
              I&apos;m Kyaw Thet Paing. A software engineer, creator, and puzzle
              solver.
            </h1>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-8">
            <p className="text-muted-foreground">
              The intersection of art and technology has always intrigued me. I
              have a fearless approach to exploring this realm, diving into
              various tools and technologies without hesitation. From my early
              days with computers, I&apos;ve been captivated by the creative
              possibilities, continuously experimenting and pushing boundaries
              in software development.
            </p>
            <div className="flex justify-end">
              <Link
                href="/contact"
                className="flex items-center gap-2 text-lg font-medium transition-all duration-150 hover:gap-4 hover:underline hover:underline-offset-4"
              >
                Let&apos;s Chat <Icons.moveRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-accent flex items-end rounded-3xl">
            <Image
              src="/images/landing.png"
              alt="Kyaw Thet Paing: Software Developer Sketch Art Image"
              width={9999}
              height={9999}
              priority
              className="h-96 object-contain"
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-muted-foreground">
              Fast forward to {new Date().getFullYear()} and I&apos;ve immersed
              myself in a variety of technologies, ranging from PHP, NextJS,
              NodeJS, and Django for web development, to C/C++, Python, and
              React Native for software development. Every project, whether big
              or small, has played a pivotal role in shaping my skills and
              expertise. Each endeavor has been a significant stepping stone,
              guiding me to where I am in my software development journey today.
            </p>
            <p className="text-muted-foreground">
              What excites me as a Software Developer is creating purposeful
              solutions. It&apos;s not just about writing code, but designing
              seamless digital experiences that solve real problems. I thrive on
              user feedback, understanding needs, and refining solutions over
              time for lasting impact.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <p className="text-muted-foreground">
              One of my favorite quotes, attributed to Peter Drucker, guides my
              work:
            </p>
            <p className="text-2xl font-medium md:text-3xl">
              “There is nothing so useless as doing efficiently that which
              should not be done at all.”
            </p>
            <p className="text-muted-foreground">
              This quote deeply resonates with me. I am not interested in
              creating mere aesthetic illusions. My passion lies in developing
              software solutions that are purposeful, impactful, and meaningful.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-medium">Experience</h3>
              <ul>
                <li>
                  - 1 year experience in Software Development and Product
                  Development
                </li>
                <li>
                  - 2 years experience in Digital Design and Web Development
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-medium">Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {developerConfig.skills.map((skill, index) => (
                  <li key={index}>
                    <Badge variant="outline" key={index}>
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
              <Link
                href={developerConfig.resumeFilePath}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-fit rounded-full px-8 transition-all duration-150 hover:px-12"
                )}
              >
                My Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
