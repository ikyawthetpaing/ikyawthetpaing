import Link from "next/link";

import { generateSocialMediaFollowLinks } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  username: string;
}

export function BlogFollowDialog({ username }: Props) {
  const followLinks = generateSocialMediaFollowLinks(username);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 rounded-full px-5">
          Follow
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[425px]">
        <DialogHeader className="p-6">
          <DialogTitle>Connect with me on social media</DialogTitle>
          <DialogDescription>
            Stay connected and engage with me on various social media platforms.
          </DialogDescription>
        </DialogHeader>
        <div>
          {followLinks.map(({ followLink, platformName }, index) => (
            <Link key={index} href={followLink} target="_blank">
              <div
                className={cn(
                  "hover:bg-accent text-muted-foreground flex items-center justify-center gap-2 py-3",
                  {
                    "border-t": index < followLinks.length,
                  }
                )}
              >
                Follow on {platformName}
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
