"use client";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Icons } from "./icons";

interface Props {
  url: string;
  title: string;
  description?: string;
}

export function BlogShareDialog({ url, title, description }: Props) {
  const shares = [
    <TwitterShareButton url={url} title={description} className="w-full">
      <div className="hover:bg-accent flex items-center justify-center gap-2 py-3">
        <TwitterIcon className="h-6 w-6 rounded-full" />
        <span className="text-muted-foreground font-medium">Twitter</span>
      </div>
    </TwitterShareButton>,
    <FacebookShareButton url={url} className="w-full">
      <div className="hover:bg-accent flex items-center justify-center gap-2 py-3">
        <FacebookIcon className="h-6 w-6 rounded-full" />
        <span className="text-muted-foreground  font-medium">Facebook</span>
      </div>
    </FacebookShareButton>,
    <LinkedinShareButton
      url={url}
      className="w-full"
      title={title}
      summary={description}
      source={siteConfig.url}
    >
      <div className="hover:bg-accent flex items-center justify-center gap-2 py-3">
        <LinkedinIcon className="h-6 w-6 rounded-full" />
        <span className="text-muted-foreground  font-medium">Linkedin</span>
      </div>
    </LinkedinShareButton>,
    <EmailShareButton
      url={url}
      subject={title}
      body={description}
      className="w-full"
    >
      <div className="hover:bg-accent flex items-center justify-center gap-2 py-3">
        <EmailIcon className="h-6 w-6 rounded-full" />
        <span className="text-muted-foreground  font-medium">Email</span>
      </div>
    </EmailShareButton>,
  ];

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
            <div
              key={index}
              className={cn("flex justify-center", {
                "border-t": index < shares.length,
              })}
            >
              {share}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
