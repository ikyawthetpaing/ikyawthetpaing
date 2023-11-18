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
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Blogs</h2>
          <p className="text-muted-foreground max-w-2xl">
            I am passionate about imparting knowledge and distilling my
            experiences into a treasure trove of valuable insights. Dive into my
            blog, where I articulate a spectrum of topics within the realm of
            software engineering.
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
