// @ts-nocheck
"use client";

import { useEffect, useMemo, useState } from "react";

import { TableOfContentsItems } from "@/lib/toc";
import { cn } from "@/lib/utils";

interface TocProps {
  tocItems: TableOfContentsItems;
}

export function TableOfContents({ tocItems }: TocProps) {
  const itemIds = useMemo(() => {
    return tocItems.items
      ? tocItems.items
          .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
          .flat()
          .filter(Boolean)
          .map((id) => id?.split("#")[1])
      : // .filter((value) => value != undefined)
        [];
  }, [tocItems]);

  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();
  const [showAll, setShowAll] = useState(false);

  const displayedTocItems = useMemo(() => {
    return showAll
      ? tocItems
      : { ...tocItems, items: tocItems.items?.slice(0, 4) };
  }, [tocItems, showAll]);

  return (
    <div className="flex flex-col gap-4 py-8">
      {displayedTocItems.items && mounted && (
        <>
          <h2 className="font-heading font-bold">Table of Contents</h2>
          <Tree tree={displayedTocItems} activeItem={activeHeading} />
          <div className="relative mt-4 border-b">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-secondary absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-0.5 text-sm"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContentsItems;
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "hover:text-foreground inline-block no-underline transition-colors",
                item.url === `#${activeItem}`
                  ? "text-foreground auto font-medium underline"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
