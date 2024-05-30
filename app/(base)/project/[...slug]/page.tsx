import { notFound } from "next/navigation";
import { allPosts, allProjects } from "contentlayer/generated";

import "@/styles/mdx.css";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getAuthor, projects } from "@/lib/helpers";
import { absoluteUrl, formatDate } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Mdx } from "@/components/mdx/mdx";
import { MdxPager } from "@/components/mdx/mdx-pager";
import { SharePost } from "@/components/share-post";

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  const ogUrl = new URL(absoluteUrl(project.thumbnail_url));
  ogUrl.searchParams.set("heading", project.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(project.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1920,
          height: 1080,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);
  const owner = project?.owner ? getAuthor(project.owner) : null;

  if (!project || !owner) {
    notFound();
  }

  return (
    <article className="container flex flex-col gap-8">
      <Link
        href="/project"
        className="w-max underline-offset-4 hover:underline"
      >
        {"<- Back"}
      </Link>
      <div className="flex flex-col items-center gap-4">
        <Link href="/project" className="rounded-lg border px-3 py-1 text-sm">
          Project
        </Link>
        <h1 className="max-w-[720px] text-center text-3xl font-medium sm:text-4xl">
          {project.title}
        </h1>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          Published on
          <time dateTime={project.publish_date} className="block">
            {formatDate(project.publish_date)}
          </time>
        </div>
        <div className="bg-muted aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={project.thumbnail_url}
            alt={project.title}
            width={9999}
            height={9999}
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col gap-8 md:w-60 lg:w-80">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Overview</h2>
            <ul className="flex flex-col gap-2">
              <li>
                Project Name:{" "}
                <span className="text-muted-foreground">{project.name}</span>
              </li>
              <li>
                Type:{" "}
                <span className="text-muted-foreground capitalize">
                  {project.project_type}
                </span>
              </li>
              <li>
                Technologies Used:{" "}
                <span className="text-muted-foreground">
                  {project.technologies_used}
                </span>
              </li>
              <li>
                Published on:{" "}
                <time
                  dateTime={project.publish_date}
                  className="text-muted-foreground"
                >
                  {formatDate(project.publish_date)}
                </time>
              </li>
              {(project.live_demo_url || project.repository_url) && (
                <li>
                  Links:{" "}
                  <span className="text-muted-foreground">
                    {project.live_demo_url && (
                      <Link
                        href={project.live_demo_url}
                        className="underline underline-offset-4"
                        target="_blank"
                      >
                        Preview
                      </Link>
                    )}
                    {project.live_demo_url && project.repository_url && ", "}
                    {project.repository_url && (
                      <Link
                        href={project.repository_url}
                        className="underline underline-offset-4"
                        target="_blank"
                      >
                        Source Code
                      </Link>
                    )}
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Project Owner</h2>
            <Link
              href={owner.github_profile_url}
              className="flex w-max items-center gap-3"
            >
              <Image
                src={owner.avatar_image_url}
                alt={owner.name}
                width={56}
                height={56}
                className="bg-muted aspect-square w-14 rounded-full object-cover"
              />
              <div>
                <p className="flex items-center gap-2 font-semibold">
                  {owner.name}
                </p>
                <p className="text-muted-foreground text-sm">{owner.role}</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Share This Project</h2>
            <SharePost
              title={project.title}
              description={project.description}
              url={absoluteUrl(project.slug)}
            />
          </div>
        </div>
        <Mdx content={project.body.raw} className="min-w-0 max-w-max flex-1" />
      </div>
      <hr />
      <MdxPager currentItem={project} allItems={projects} />
    </article>
  );
}
