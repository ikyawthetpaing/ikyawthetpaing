"use client";

import Link from "next/link";

import { generateMediaShares } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon, Icons } from "@/components/icons";

interface Props {
  url: string;
  title: string;
  description?: string;
}

export function BlogShareDialog({ url, title, description = "" }: Props) {
  const shares = generateMediaShares(url, title, description);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Icons.share className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[425px]">
        <DialogHeader className="p-6">
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            Spread the word about this article.
          </DialogDescription>
        </DialogHeader>
        <div>
          {shares.map((share, index) => (
            <Link key={index} href={share.link} target="_blank">
              <div
                className={cn(
                  "hover:bg-accent text-muted-foreground flex items-center justify-center gap-2 py-3",
                  {
                    "border-t": index < shares.length,
                  }
                )}
              >
                <Icon name={share.iconName} className="h-5 w-5" />
                {share.mediraName}
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
