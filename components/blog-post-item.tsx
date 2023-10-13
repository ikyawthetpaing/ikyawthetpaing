import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  title: string;
  description: string;
  publishDate: Date;
  fullContent: string;
  thumnail: string;
  slug: string;
};

interface Props {
  blogPost: BlogPost;
}

export function BlogPostItem({ blogPost }: Props) {
  return (
    <article className="group relative flex flex-col space-y-2">
      {blogPost.thumnail && (
        <Image
          src={blogPost.thumnail}
          alt={blogPost.title}
          width={804}
          height={452}
          className="rounded-xl border bg-muted transition-colors"
          // priority={index <= 1}
        />
      )}
      <h2 className="text-2xl font-semibold">{blogPost.title}</h2>
      {blogPost.description && (
        <p className="text-muted-foreground">{blogPost.description}</p>
      )}
      {blogPost.publishDate && (
        <p className="text-sm text-muted-foreground">
          {formatDate(blogPost.publishDate)}
        </p>
      )}
      <Link href={blogPost.slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}

{
  /* <p className="text-muted-foreground">
        {formatDate(blogPost.publishDate)}
      </p>
      <h2 className="text-2xl font-medium">{blogPost.title}</h2>
      <p>{blogPost.previewContent}</p> */
}
