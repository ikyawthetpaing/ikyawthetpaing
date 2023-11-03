import Link from "next/link";
import { NavItem } from "@/types";

import { Icons } from "@/components/icons";
import { MainNavItems } from "@/components/layout/main-nav-items";
import { MainNavSheet } from "@/components/layout/main-nav-sheet";

interface Props {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: Props) {
  return (
    <header>
      <div className="container flex items-center justify-between py-6 sm:py-12">
        <Link href="/" className="flex items-center">
          <Icons.kyax className="h-5" />
        </Link>
        <MainNavItems navItems={navItems} className="hidden gap-12 md:flex" />
        <MainNavSheet navItems={navItems} />
      </div>
    </header>
  );
}
