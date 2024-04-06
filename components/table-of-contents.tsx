import { TableOfContentsItems } from "@/lib/toc";
import { cn } from "@/lib/utils";

interface TocProps {
  tocItems: TableOfContentsItems;
}

export function TableOfContents({ tocItems }: TocProps) {
  return (
    <div className="flex flex-col gap-4 border-b pb-6">
      <h2 className="font-heading font-bold">Table of Contents</h2>
      <Tree tree={tocItems} />
    </div>
  );
}

interface TreeProps {
  tree: TableOfContentsItems;
  level?: number;
}

function Tree({ tree, level = 1 }: TreeProps) {
  return tree.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index}>
            <a
              href={item.url}
              className="text-muted-foreground hover:text-foreground mb-2 inline-block leading-none tracking-tight no-underline transition-colors"
            >
              {item.title}
            </a>
            {item.items?.length ? <Tree tree={item} level={level + 1} /> : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
