import Image from "next/image";
import Link from "next/link";
import { Project } from "@/.contentlayer/generated";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  return (
    <div className="bg-accent flex h-full flex-col justify-between overflow-hidden rounded-3xl border">
      <div className="flex flex-col gap-4 p-6 sm:px-12 sm:py-8 ">
        <div className="flex gap-4">
          <Link
            href={project.live_demo_url}
            target="_blank"
            className="bg-background aspect-square h-14 rounded-full"
          >
            <Image
              src={project.logo_image_url}
              alt={project.name}
              className="h-full w-full"
              width={192}
              height={192}
            />
          </Link>
          <div>
            <p className="text-2xl font-medium">{project.name}</p>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>
      </div>
      <Link href={project.slug}>
        <Image
          src={project.thumbnail_url}
          alt={project.title}
          width={9999}
          height={9999}
          className="aspect-video w-full object-cover"
          quality={100}
        />
      </Link>
    </div>
  );
}
