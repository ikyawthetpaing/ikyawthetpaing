import "@/styles/mdx.css";

import { createElement, HTMLAttributes, ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

import { cn, slugify } from "@/lib/utils";
import { Code } from "@/components/mdx/code";

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} className="bg-muted rounded-xl" {...props} />;
}

function Callout({
  children,
  emoji,
}: {
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mr-4 flex w-4 items-center">{emoji}</div>
      <div className="callout w-full">{children}</div>
    </div>
  );
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: ReactNode }) => {
    let slug = slugify(children?.toString() || "");
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  code: Code,
};

function CustomMDX({ ...props }: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      // @ts-ignore
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

interface Props extends HTMLAttributes<HTMLElement> {
  content: string;
}

export function Mdx({ content, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "prose prose-quoteless prose-neutral dark:prose-invert",
        className
      )}
      {...props}
    >
      <CustomMDX source={content} />
    </div>
  );
}
