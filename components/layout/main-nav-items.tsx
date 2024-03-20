"use client";

import { HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLUListElement> {
  navItems: NavItem[];
}

export function MainNavItems({ navItems, ...props }: Props) {
  const pathname = usePathname();
  return (
    <ul {...props}>
      {navItems.map((navItem, index) => {
        const isActive =
          pathname === navItem.href ||
          (navItem.href !== "/" && pathname.startsWith(navItem.href));
        return (
          <li key={index}>
            <Link
              href={navItem.href}
              className={cn(
                "text-lg font-medium uppercase underline-offset-4 hover:underline",
                isActive ? "text-foreground underline" : "text-muted-foreground"
              )}
            >
              {navItem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
