import { Metadata } from "next";

import { projects } from "@/lib/helpers";
import { absoluteUrl } from "@/lib/utils";
import { ProjectItem } from "@/components/project-item";

const title = "Projects";
const description =
  "Explore my projects that demonstrate my ability to design, develop, and deliver high-quality products.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: absoluteUrl("/project"),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ProjectPage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>
        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
