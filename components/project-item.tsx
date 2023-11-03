import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icons";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  return (
    <div className="bg-accent rounded-3xl border overflow-hidden">
      <div className="flex flex-col gap-4 p-6 sm:px-12 sm:py-8 ">
        <div className="flex gap-4">
          <div>
            <div className="p-4 rounded-full bg-background w-fit">
              <Icon name={project.icon} className="w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div>
              <h3 className="text-2xl font-medium">{project.name}</h3>
              <p className="text-muted-foreground">{project.description}</p>
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
  );
}
