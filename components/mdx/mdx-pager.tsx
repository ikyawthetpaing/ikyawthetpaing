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
          className="flex justify-start underline-offset-4 hover:underline"
        >
          &#129120; Previous: {pager.prev.title}
        </Link>
      ) : (
        <div></div>
      )}
      {pager?.next ? (
        <Link
          href={pager.next.slug}
          className="flex justify-end underline-offset-4 hover:underline"
        >
          Next: {pager.next.title} &#129122;
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
