import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creatorConfig } from "@/config/creator";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Explore my journey and expertise in creating robust and impactful software applications.",
};

export default function AboutPage() {
  return (
    <section className="container flex flex-col gap-8">
      <h2 className="text-3xl font-medium">About Me</h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium">
              I&apos;m Kyaw Thet Paing. A software developer, creator, and
              puzzle solver.
            </h3>
          </div>
          <div className="flex flex-col gap-8 flex-1 justify-end">
            <p>
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
                className="text-lg hover:underline hover:underline-offset-4 flex gap-2 items-center hover:gap-4 duration-150 transition-all font-medium"
              >
                Let&apos;s Chat <Icons.moveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-accent rounded-3xl flex items-end">
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
            <p>
              Fast forward to {new Date().getFullYear()} and I&apos;ve immersed
              myself in a variety of technologies, ranging from PHP, NextJS,
              NodeJS, and Django for web development, to C/C++, Python, and
              React Native for software development. Every project, whether big
              or small, has played a pivotal role in shaping my skills and
              expertise. Each endeavor has been a significant stepping stone,
              guiding me to where I am in my software development journey today.
            </p>
            <p>
              What excites me as a Software Developer is creating purposeful
              solutions. It&apos;s not just about writing code, but designing
              seamless digital experiences that solve real problems. I thrive on
              user feedback, understanding needs, and refining solutions over
              time for lasting impact.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <p>
              One of my favorite quotes, attributed to Peter Drucker, guides my
              work:
            </p>
            <p className="text-4xl font-medium">
              “There is nothing so useless as doing efficiently that which
              should not be done at all.”
            </p>
            <p>
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
                {creatorConfig.skills.map((skill, index) => (
                  <li key={index}>
                    <Badge variant="outline" key={index}>
                      {skill}
                    </Badge>
                    {/* <div className="p-2">{skill}</div> */}
                  </li>
                ))}
              </ul>
              <Button className="w-fit rounded-full px-8 hover:px-12 duration-150 transition-all">
                My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
