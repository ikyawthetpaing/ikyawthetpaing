import { Metadata } from "next";

import { posts } from "@/lib/helpers";
import { PostItem } from "@/components/post-item";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore my in-depth insights on programming, design patterns, and more, arranged chronologically for easy reading.",
};

export default function BlogPage() {
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
        {posts.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </section>
  );
}
