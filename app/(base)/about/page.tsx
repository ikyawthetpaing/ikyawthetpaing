import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { creatorConfig } from "@/config/creator";

import { absoluteUrl, cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function generateMetadata(): Metadata {
  const title = "About Me";
  const description =
    "Learn about my journey, my expertise, and how I can help you achieve your software goals.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl("/about"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function AboutPage() {
  const { name, role, imageGallery, skills, resumeFileUrl } = creatorConfig;

  return (
    <section className="container flex flex-col gap-8">
      <h1 className="text-muted-foreground text-3xl font-light">About Me —</h1>
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex-1">
          <p className="text-4xl uppercase tracking-tighter md:text-5xl">
            I&apos;m {name}. A {role}, creator, and puzzle solver.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-8">
          <p>
            The intersection of art and technology has always intrigued me. I
            have a fearless approach to exploring this realm, diving into
            various tools and technologies without hesitation. From my early
            days with computers, I&apos;ve been captivated by the creative
            possibilities, continuously experimenting and pushing boundaries in
            software development.
          </p>
          <div className="flex justify-end">
            <Link
              href="/contact"
              className="underline-offset-4 hover:underline"
            >
              {"Let's Chat ->"}
            </Link>
          </div>
        </div>
      </div>
      <div className="columns-1 gap-8 sm:columns-2">
        <div className="grid gap-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {imageGallery.map((image, index) => (
              <div
                key={index}
                className="bg-muted aspect-square w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={9999}
                  height={9999}
                  className="size-full object-cover"
                  quality={100}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <p>
              As a {role.toLowerCase()}, my passion lies in crafting
              purpose-driven solutions that transcend mere code writing. I am
              dedicated to architecting seamless digital experiences that
              address tangible challenges. My approach centers around thriving
              on user feedback, keenly understanding user needs, and iteratively
              refining solutions over time to deliver enduring impact.
            </p>
            <p>
              What sets me apart is not only my technical proficiency but also
              my commitment to creating solutions that resonate with users and
              meet the genuine needs of businesses. I am adept at translating
              client requirements into innovative digital solutions, and I excel
              in the dynamic process of continuous improvement, ensuring that
              the solutions I build evolve alongside the ever-changing landscape
              of technology and user expectations.
            </p>
            <p>
              One of my favorite quotes, attributed to Peter Drucker, guides my
              work:
            </p>
            <p className="text-2xl font-medium md:text-3xl">
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
              <h3 className="text-2xl font-medium">Skills:</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="rounded-lg border px-3 py-1 text-xs font-semibold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <Link
                href={resumeFileUrl}
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
