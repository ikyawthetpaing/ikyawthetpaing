import { notFound } from "next/navigation";
import { allPosts, allProjects } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdx-components";

import "@/styles/mdx.css";

import { Metadata } from "next";
import Image from "next/image";

import { absoluteUrl, formatDate } from "@/lib/utils";

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

  const ogUrl = new URL(absoluteUrl(project.image));
  ogUrl.searchParams.set("heading", project.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: project.title,
    description: project.description,
    authors: project.authors.map((author) => ({
      name: author,
    })),
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

  if (!project) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        <div className="text-muted-foreground text-sm">
          {project.date && (
            <time dateTime={project.date} className="block">
              Published on {formatDate(project.date)}
            </time>
          )}
        </div>
        <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
          {project.title}
        </h1>
      </div>
      {project.image && (
        <div className="bg-muted my-8 aspect-video overflow-x-hidden rounded-lg border transition-colors">
          <Image
            src={project.image}
            alt={project.title}
            width={9999}
            height={9999}
            className="h-full w-full object-cover"
            priority
            quality={100}
          />
        </div>
      )}
      <Mdx code={project.body.code} />
      <hr className="mt-12" />
    </article>
  );
}
