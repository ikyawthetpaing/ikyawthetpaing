import Link from "next/link";
import { Icons } from "@/components/icons";
import { baseConfig } from "@/config/base";
import { MainNavItems } from "@/components/layout/main-nav";

export function SiteHeader() {
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
