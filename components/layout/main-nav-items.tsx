"use client";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLUListElement> {
  navItems: NavItem[];
}

export function MainNavItems({ navItems, ...props }: Props) {
  const pathname = usePathname();
  return (
    <ul {...props}>
      {navItems.map((navItem, index) => (
        <li key={index}>
          {navItem.disabled ? (
            <span className="uppercase text-lg font-medium cursor-not-allowed text-muted-foreground">
              {navItem.title}
            </span>
          ) : (
            <Link
              href={navItem.href}
              className={cn(
                "uppercase text-lg font-medium",
                pathname === navItem.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {navItem.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
