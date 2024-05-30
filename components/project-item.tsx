import Image from "next/image";
import Link from "next/link";
import { Project } from "@/.contentlayer/generated";

import { Icon } from "./icons";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  return (
    <div className="bg-accent flex h-full flex-col justify-between overflow-hidden rounded-3xl border">
      <div className="flex flex-col gap-4 p-6 sm:px-12 sm:py-8 ">
        <div className="flex gap-4">
          {/* <Link
            href={project.live_demo_url}
            target="_blank"
            className="bg-background aspect-square h-14 rounded-full border"
          >
            <Image
              src={project.logo_image_url}
              alt={project.name}
              className="size-full"
              width={192}
              height={192}
            />
          </Link> */}
          <div className="bg-background flex aspect-square h-14 items-center justify-center rounded-full">
            <Icon
              name={
                project.project_type === "Web Design"
                  ? "appWindow"
                  : project.project_type === "Web Development"
                    ? "globe"
                    : project.project_type === "Custom Software Development"
                      ? "smartphone"
                      : project.project_type === "E-commerce Development"
                        ? "store"
                        : "globe"
              }
              className="text-muted-foreground size-5"
            />
          </div>
          <div>
            <p className="text-2xl font-medium">{project.name}</p>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>
      </div>
      <Link href={project.slug}>
        <div className="bg-muted aspect-video overflow-hidden">
          <Image
            src={project.thumbnail_url}
            alt={project.title}
            width={9999}
            height={9999}
            quality={100}
          />
        </div>
      </Link>
    </div>
  );
}
