import { Icons } from "@/components/icons";
import Link from "next/link";
import { MainNavItems } from "@/components/layout/main-nav-items";
import { developerConfig } from "@/config/developer";
import { NavItem } from "@/types";

interface Props {
  navItems: NavItem[];
}

export function SiteFooter({ navItems }: Props) {
  return (
    <footer>
      <div className="flex flex-col gap-12">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <div className="text-center flex flex-col gap-2">
            <h3 className="text-lg text-muted-foreground">Bangkok, Thailand</h3>
            <Link
              href={`mailto:${developerConfig.email}`}
              className="text-2xl sm:text-3xl font-medium"
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
                    <div className="bg-accent rounded-full p-4">
                      <Icon className="w-6 h-6 text-muted-foreground" />
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
            className="flex gap-8 flex-wrap justify-end"
          />
        </div>
        <p className="text-sm uppercase text-center">
          &copy; {new Date().getFullYear()} ikyawthetpaing. All rights reserved.
        </p>
        <ul className="flex">
          {["#ed5b42", "#f4aa85", "#c3dae0", "#414247"].map((color, index) => {
            return (
              <li
                key={index}
                className="flex-1 h-4"
                style={{ backgroundColor: color }}
              ></li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
