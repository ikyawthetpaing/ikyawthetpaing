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
      <Image
        src={post.image}
        alt={post.title}
        width={9999}
        height={9999}
        className="bg-muted aspect-video w-full rounded-3xl border object-cover"
      />
      <h2 className="font-heading text-2xl font-medium">{post.title}</h2>
      <p className="text-muted-foreground text-sm uppercase">
        {formatDate(post.date)}
      </p>
      <p className="text-muted-foreground">{post.description}</p>
      <Link href={post.slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
