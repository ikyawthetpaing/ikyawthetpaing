import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore my in-depth insights on programming, design patterns, and more, arranged chronologically for easy reading.",
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Blogs</h2>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;m a software engineer with a passion for sharing my knowledge
            and experience with others. In my blog, I write about a variety of
            topics related to software engineering, including programming,
            design patterns, and more. I want my blog to be a resource for other
            software engineers who are looking to learn and grow.
          </p>
        </div>
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <div className="bg-muted aspect-video overflow-x-hidden rounded-lg border transition-colors">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={9999}
                      height={9999}
                      className="h-full w-full object-cover"
                      priority={index <= 1}
                    />
                  </div>
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-muted-foreground text-sm">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </section>
  );
}
