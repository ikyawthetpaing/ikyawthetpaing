import { BlogPost } from "@/components/blog-post-item";
import { BlogPostItem } from "@/components/blog-post-item";

const blogPosts: BlogPost[] = [
  {
    title: "Introduction to TypeScript",
    publishDate: new Date("2023-10-01"),
    fullContent:
      "This is a detailed introduction to TypeScript. It covers the basic concepts, features, and benefits of using TypeScript in web development.",
    description:
      "Learn the basics of TypeScript and its advantages in this introductory post.",
    thumnail: "/images/projects/voxellax/thumbnail.png",
    slug: "fjalf",
  },
  {
    title: "Mastering React Hooks",
    publishDate: new Date("2023-09-15"),
    fullContent:
      "In this blog post, we dive deep into React Hooks, exploring useState, useEffect, useContext, and custom hooks. You'll learn how to use them effectively in your React applications.",
    description:
      "Explore the power of React Hooks and enhance your React skills.",
    thumnail: "/images/projects/nexus/thumbnail.png",
    slug: "fjalf",
  },
  {
    title: "Creating RESTful APIs with Express.js",
    publishDate: new Date("2023-08-25"),
    fullContent:
      "Discover the process of building RESTful APIs using Express.js. This post covers routing, middleware, error handling, and best practices for creating robust APIs.",
    description:
      "Learn how to build RESTful APIs with Express.js in this comprehensive guide.",
    thumnail: "/images/projects/nexus/thumbnail.png",
    slug: "fjalf",
  },
];

export default function BlogPage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Blogs</h2>
          <p className="text-muted-foreground">
            I consider those projects as my top selections to exhibit my skills.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((blogPost, index) => (
            <li key={index}>
              <BlogPostItem blogPost={blogPost} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
