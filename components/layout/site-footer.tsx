import Link from "next/link";
import { NavItem } from "@/types";

import { developerConfig } from "@/config/developer";

import { Icons } from "@/components/icons";
import { MainNavItems } from "@/components/layout/main-nav-items";

interface Props {
  navItems: NavItem[];
}

export function SiteFooter({ navItems }: Props) {
  return (
    <footer>
      <div className="flex flex-col gap-12">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="text-xl font-semibold">Keep In Touch</h2>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-lg text-muted-foreground">Bangkok, Thailand</h3>
            <Link
              href={`mailto:${developerConfig.email}`}
              className="text-2xl font-medium sm:text-3xl"
            >
              {developerConfig.email}
            </Link>
            <Link
              href={`tel:${developerConfig.tel.value}`}
              className="text-lg font-light"
            >
              {developerConfig.tel.label}
            </Link>
          </div>
          <ul className="flex gap-4">
            {developerConfig.media.map((media, index) => {
              const Icon = Icons[media.icon];
              return (
                <li key={index}>
                  <Link href={media.href} target="_blank">
                    <div className="rounded-full bg-accent p-4">
                      <Icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container flex justify-between gap-12">
          <div>
            <Link href="/">
              <Icons.kyax className="h-5" />
            </Link>
          </div>
          <MainNavItems
            navItems={navItems}
            className="flex flex-wrap justify-end gap-8"
          />
        </div>
        <p className="text-center text-sm uppercase">
          &copy; {new Date().getFullYear()} ikyawthetpaing. All rights reserved.
        </p>
        <ul className="flex">
          {["#ed5b42", "#f4aa85", "#c3dae0", "#414247"].map((color, index) => {
            return (
              <li
                key={index}
                className="h-4 flex-1"
                style={{ backgroundColor: color }}
              ></li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
