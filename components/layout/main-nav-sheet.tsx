"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { MainNavItems } from "@/components/layout/main-nav-items";
import { NavItem } from "@/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  navItems: NavItem[];
}

export function MainNavSheet({ navItems }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Icons.menu className="w-7 h-7" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <MainNavItems
          navItems={navItems}
          className="h-full flex-col flex justify-center items-center gap-8"
        />
      </SheetContent>
    </Sheet>
  );
}
