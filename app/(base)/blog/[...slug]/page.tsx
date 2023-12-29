import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdx-components";

import "@/styles/mdx.css";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { creatorConfig } from "@/config/creator";

import { generateProfileLink, posts } from "@/lib/helpers";
import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BlogFollowDialog } from "@/components/blog-follow-dialog";
import { BlogShareDialog } from "@/components/blog-share-dialog";
import { Icons } from "@/components/icons";
import { MdxPager } from "@/components/mdx/mdx-pager";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params.slug.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogUrl = new URL(absoluteUrl(post.image));
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1920,
          height: 1080,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        <div className="text-muted-foreground flex items-center space-x-2 text-sm">
          {post.date && (
            <time dateTime={post.date} className="block">
              Published on {formatDate(post.date)}
            </time>
          )}
          {post.date ? <span>•</span> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex justify-between space-x-4">
          <Link
            href={generateProfileLink(creatorConfig.username, "linkedin")}
            target="_blank"
          >
            <div className="flex items-center space-x-2 text-sm">
              <Image
                src={creatorConfig.avatarImageUrl}
                alt={creatorConfig.name}
                width={42}
                height={42}
                quality={100}
                className="rounded-full bg-white"
              />
              <div className="flex-1 space-y-1 text-left leading-tight">
                <p className="font-medium">{creatorConfig.name}</p>
                <p className="text-muted-foreground text-[12px]">
                  @{creatorConfig.username}
                </p>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <BlogFollowDialog username={creatorConfig.username} />
            <BlogShareDialog
              url={absoluteUrl(post.slug)}
              title={post.title}
              description={post.description}
            />
          </div>
        </div>
      </div>
      {post.image && (
        <div className="bg-muted my-8 aspect-video overflow-x-hidden rounded-lg border transition-colors">
          <Image
            src={post.image}
            alt={post.title}
            width={9999}
            height={9999}
            className="h-full w-full object-cover"
            priority
            quality={100}
          />
        </div>
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="py-6">
        <MdxPager currentItem={post} allItems={posts} />
      </div>
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
}
