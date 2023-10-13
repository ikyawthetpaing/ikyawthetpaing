import { ProjectItem } from "@/components/project-item";
import { creatorConfig } from "@/config/creator";

export default function WorkPage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Works</h2>
          <p className="text-muted-foreground">
            I consider those projects as my top selections to exhibit my skills.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {creatorConfig.featuredProjects.map((project, index) => (
            <li key={index}>
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
