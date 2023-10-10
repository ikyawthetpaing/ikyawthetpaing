import { env } from "@/env.mjs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path?: string) {
  const appUrl = env.NEXT_PUBLIC_APP_URL;
  if (!path) {
    return appUrl;
  }
  const formattedPath = path.replace(/^\//, "");
  return `${appUrl}/${formattedPath}`;
}
