import { ProjectItem } from "@/components/project-item";
import { developerConfig } from "@/config/developer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "I've carefully selected these projects to showcase my skills as a software engineer. These projects demonstrate my ability to design, develop, and deliver high-quality software solutions.",
};

export default function WorkPage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Works</h2>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;ve carefully selected these projects to showcase my skills as
            a software engineer. These projects demonstrate my ability to
            design, develop, and deliver high-quality software solutions.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {developerConfig.featuredProjects.map((project, index) => (
            <li key={index}>
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
