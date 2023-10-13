// import { BlogPost } from "@/components/blog-post-item";
// import { BlogPostItem } from "@/components/blog-post-item";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";

// const blogPosts: BlogPost[] = [
//   {
//     title: "Introduction to TypeScript",
//     publishDate: new Date("2023-10-01"),
//     fullContent:
//       "This is a detailed introduction to TypeScript. It covers the basic concepts, features, and benefits of using TypeScript in web development.",
//     description:
//       "Learn the basics of TypeScript and its advantages in this introductory post.",
//     thumnail: "/images/projects/voxellax/thumbnail.png",
//     slug: "fjalf",
//   },
//   {
//     title: "Mastering React Hooks",
//     publishDate: new Date("2023-09-15"),
//     fullContent:
//       "In this blog post, we dive deep into React Hooks, exploring useState, useEffect, useContext, and custom hooks. You'll learn how to use them effectively in your React applications.",
//     description:
//       "Explore the power of React Hooks and enhance your React skills.",
//     thumnail: "/images/projects/nexus/thumbnail.png",
//     slug: "fjalf",
//   },
//   {
//     title: "Creating RESTful APIs with Express.js",
//     publishDate: new Date("2023-08-25"),
//     fullContent:
//       "Discover the process of building RESTful APIs using Express.js. This post covers routing, middleware, error handling, and best practices for creating robust APIs.",
//     description:
//       "Learn how to build RESTful APIs with Express.js in this comprehensive guide.",
//     thumnail: "/images/projects/nexus/thumbnail.png",
//     slug: "fjalf",
//   },
// ];

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
          <p className="text-muted-foreground">
            I consider those projects as my top selections to exhibit my skills.
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
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={9999}
                    height={9999}
                    className="rounded-xl border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
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
