// import Image from "next/image";
// import Link from "next/link";
// import { Project } from "@/types";

// import { Badge } from "@/components/ui/badge";
// import { Icon } from "@/components/icons";

// interface Props {
//   project: Project;
// }

// export function ProjectItem({ project }: Props) {
//   return (
//     <div className="overflow-hidden rounded-3xl border bg-accent">
//       <div className="flex flex-col gap-4 p-6 sm:px-12 sm:py-8 ">
//         <div className="flex gap-4">
//           <div>
//             <div className="w-fit rounded-full bg-background p-4">
//               <Icon name={project.icon} className="h-5 w-5" />
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <div>
//               <h3 className="text-2xl font-medium">{project.name}</h3>
//               <p className="text-muted-foreground">{project.description}</p>
//             </div>
//             <div className="flex gap-4">
//               <Link href={project.preview.href} target="_blank">
//                 <Badge className="bg-background text-foreground hover:bg-background/75">
//                   {project.preview.label}
//                 </Badge>
//               </Link>
//               <Link href={project.githubLink} target="_blank">
//                 <Badge className="bg-background text-foreground hover:bg-background/75">
//                   Code
//                 </Badge>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Link href={`/project/voxellax`}>
//         <div className="aspect-video overflow-hidden">
//           <Image
//             src={project.thumbnail}
//             alt={project.name}
//             width={9999}
//             height={9999}
//             className="h-full w-full object-cover"
//             quality={100}
//           />
//         </div>
//       </Link>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/.contentlayer/generated";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icons";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  return (
    <div className="bg-accent flex h-full flex-col justify-between overflow-hidden rounded-3xl border">
      <div className="flex flex-col gap-4 p-6 sm:px-12 sm:py-8 ">
        <div className="flex gap-4">
          <div>
            <div className="bg-background w-fit rounded-full p-4">
              <Icon name="globe" className="h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-medium">{project.name}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            {/* <div className="flex gap-4">
              <Link href={project.preview.href} target="_blank">
                <Badge className="bg-background text-foreground hover:bg-background/75">
                  {project.preview.label}
                </Badge>
              </Link>
              <Link href={project.githubLink} target="_blank">
                <Badge className="bg-background text-foreground hover:bg-background/75">
                  Code
                </Badge>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <Link href={project.slug}>
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={9999}
            height={9999}
            className="h-full w-full object-cover"
            quality={100}
          />
        </div>
      </Link>
    </div>
  );
}
