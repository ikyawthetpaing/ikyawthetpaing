import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "../icons";

interface MdxPagerItem {
  title: string;
  slug: string;
}

interface MdxPagerProps extends React.HTMLAttributes<HTMLDivElement> {
  currentItem: MdxPagerItem;
  allItems: MdxPagerItem[];
}

export function MdxPager({
  currentItem,
  allItems,
  className,
  ...props
}: MdxPagerProps) {
  const pager = getPager(currentItem, allItems);

  if (!pager) {
    return null;
  }

  return (
    <div className={cn("flex justify-between gap-8", className)} {...props}>
      {pager?.prev ? (
        <Link
          href={pager.prev.slug}
          className="underline-offset-4 hover:underline"
        >
          {`<- Previous: `}{" "}
          <span className="text-muted-foreground">{pager.prev.title}</span>
        </Link>
      ) : (
        <div></div>
      )}
      {pager?.next ? (
        <Link
          href={pager.next.slug}
          className="underline-offset-4 hover:underline"
        >
          <span className="text-muted-foreground">{pager.next.title}</span>
          {`: Next ->`}
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export function getPager(currentItem: MdxPagerItem, allItems: MdxPagerItem[]) {
  const flattenedLinks = allItems.flat();
  const activeIndex = flattenedLinks.findIndex(
    (link) => currentItem.slug === link?.slug
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}
