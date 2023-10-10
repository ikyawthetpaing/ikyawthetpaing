import { baseConfig } from "@/config/base";
import { Icons } from "../icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn, getRandomColor } from "@/lib/utils";
import { MainNavItems } from "./main-nav-items";

export function SiteFooter() {
  return (
    <footer>
      <div className="flex flex-col gap-12">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <div className="text-center flex flex-col gap-2">
            <h3 className="text-lg text-muted-foreground">Bangkok, Thailand</h3>
            <Link
              href={"mailto:ikyawthetpaing@gmail.com"}
              className="text-2xl sm:text-3xl font-medium"
            >
              ikyawthetpaing@gmail.com
            </Link>
            <Link href="tel:+66937418692" className="text-lg font-light">
              (+66) 937-418-692
            </Link>
          </div>
          <ul className="flex gap-4">
            {baseConfig.socialLinks.map((socialLink, index) => {
              const Icon = Icons[socialLink.icon];
              return (
                <li key={index}>
                  <Link href={socialLink.href}>
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
            <Link href={"/"}>
              <Icons.kyax className="h-5" />
            </Link>
          </div>
          <MainNavItems
            navItems={baseConfig.mainNavItems}
            className="flex gap-12 flex-wrap justify-end"
          />
        </div>
        <p className="text-sm uppercase text-center">
          &copy; {new Date().getFullYear()} ikyawthetpaing. All rights reserved.
        </p>
        <ul className="flex">
          {new Array(5).fill(null).map((_, index) => {
            return (
              <li
                key={index}
                className="flex-1 h-4"
                style={{ backgroundColor: getRandomColor() }}
              ></li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
