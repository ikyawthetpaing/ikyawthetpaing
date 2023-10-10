"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { baseConfig } from "@/config/base";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MainNavItems } from "./main-nav-items";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header>
      <div className="container flex items-center justify-between py-6 sm:py-12">
        <Link href="/" className="flex items-center">
          <Icons.kyax className="h-5" />
        </Link>
        <MainNavItems
          navItems={baseConfig.mainNavItems}
          className="hidden md:flex gap-12"
        />
        <button className="md:hidden">
          <Icons.menu className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
}
