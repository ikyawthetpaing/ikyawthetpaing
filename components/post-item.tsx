import Image from "next/image";
import Link from "next/link";
import { Post } from "@/.contentlayer/generated";

import { formatDate } from "@/lib/utils";

interface Props {
  post: Post;
}

export function PostItem({ post }: Props) {
  return (
    <article className="group relative flex flex-col space-y-2">
      {post.image && (
        <div className="bg-muted aspect-video overflow-x-hidden rounded-3xl border transition-colors">
          <Image
            src={post.image}
            alt={post.title}
            width={9999}
            height={9999}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <h2 className="text-2xl font-extrabold">{post.title}</h2>
      {post.description && (
        <p className="text-muted-foreground">{post.description}</p>
      )}
      {post.date && (
        <p className="text-muted-foreground text-sm">{formatDate(post.date)}</p>
      )}
      <Link href={post.slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
