import { Metadata } from "next";

import { projects } from "@/lib/helpers";
import { ProjectItem } from "@/components/project-item";

export const metadata: Metadata = {
  title: "Project",
  description:
    "I've carefully selected these projects to showcase my skills as a full-stack developer. These projects demonstrate my ability to design, develop, and deliver high-quality software solutions.",
};

export default function ProjectPage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;ve carefully selected these projects to showcase my skills as
            a full-stack developer. These projects demonstrate my ability to
            design, develop, and deliver high-quality software solutions.
          </p>
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
