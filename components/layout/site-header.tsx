import Link from "next/link";
import { Icons } from "@/components/icons";
import { MainNavItems } from "@/components/layout/main-nav-items";
import { MainNavSheet } from "@/components/layout/main-nav-sheet";
import { NavItem } from "@/types";

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
        <MainNavItems navItems={navItems} className="hidden md:flex gap-12" />
        <MainNavSheet navItems={navItems} />
      </div>
    </header>
  );
}
