"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { baseConfig } from "@/config/base";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header>
      <div className="container flex items-center justify-between py-8 sm:py-12">
        <Link href="/" className="flex items-center">
          <Icons.kyax className="h-5" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-12">
            {baseConfig.mainNavItems.map((navItem, index) => (
              <li key={index}>
                <Link href={navItem.href}>
                  <span
                    className={cn(
                      "uppercase text-lg font-medium",
                      pathname === navItem.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {navItem.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icons.menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
}
