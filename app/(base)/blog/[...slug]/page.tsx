import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { getAuthor, posts } from "@/lib/helpers";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl, formatDate } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Mdx } from "@/components/mdx/mdx";
import { MdxPager } from "@/components/mdx/mdx-pager";
import { PostItem } from "@/components/post-item";
import { SharePost } from "@/components/share-post";
import { TableOfContents } from "@/components/table-of-contents";

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
  const author = post?.author ? getAuthor(post.author) : null;

  if (!post || !author) {
    notFound();
  }

  const tocItems = await getTableOfContents(post.body.raw);

  return (
    <div className="container flex flex-col gap-16">
      <article className="relative flex flex-col gap-8">
        <Link href="/blog" className="w-max underline-offset-4 hover:underline">
          {"<- Back"}
        </Link>
        <div className="flex flex-col items-center gap-4">
          <Link href="/blog" className="rounded-lg border px-3 py-1 text-sm">
            Blog
          </Link>
          <h1 className="max-w-[720px] text-center text-3xl font-medium sm:text-4xl">
            {post.title}
          </h1>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            {post.date && (
              <time dateTime={post.date} className="block">
                {formatDate(post.date)}
              </time>
            )}
            {post.date ? <span>•</span> : null}
            <div>{post.readingTime} min read</div>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={9999}
            height={9999}
            className="bg-muted aspect-video w-full rounded-2xl border object-cover sm:rounded-3xl"
            priority
            quality={100}
          />
        </div>
        <div className="flex gap-8 max-md:flex-col">
          <div className="flex flex-col gap-8 md:w-60 lg:w-80">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Written by</h2>
              <Link
                href={author.linkedin_profile_url}
                target="_blank"
                className="flex w-max gap-3"
              >
                <Image
                  src={author.avatar_image_url}
                  alt={author.name}
                  className="bg-muted aspect-square w-14 rounded-full object-cover"
                  width={56}
                  height={56}
                />
                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-2 font-semibold">
                    {author.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{author.role}</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Share This Post</h2>
              <SharePost
                title={post.title}
                description={post.description}
                url={absoluteUrl(post.slug)}
              />
            </div>
            <div className="md:hide-scrollbar md:sticky md:top-0 md:max-h-screen md:overflow-y-scroll">
              <TableOfContents tocItems={tocItems} />
            </div>
          </div>
          <Mdx content={post.body.raw} className="min-w-0 max-w-max flex-1" />
        </div>
        <hr />
        <MdxPager currentItem={post} allItems={posts} />
      </article>
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">Latest Posts</h2>
        {posts.length ? (
          <div className="flex flex-col gap-12 sm:gap-16">
            <ul className="grid gap-10 sm:grid-cols-2">
              {posts.slice(0, 2).map((post, index) => (
                <li key={index}>
                  <PostItem post={post} />
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mx-auto hover:underline hover:underline-offset-4"
            >
              {"See All ->"}
            </Link>
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </section>
    </div>
  );
}
