import { Metadata } from "next";

import { posts } from "@/lib/helpers";
import { absoluteUrl } from "@/lib/utils";
import { PostItem } from "@/components/post-item";

const title = "Blogs";
const description =
  "Dive into my blog, where I articulate a spectrum of topics within the realm of software engineering.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: absoluteUrl("/blog"),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
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
