import Link from "next/link";
import { NavItem } from "@/types";

import { creatorConfig } from "@/config/creator";
import { siteConfig } from "@/config/site";

import { Icon, Icons } from "@/components/icons";
import { MainNavItems } from "@/components/layout/main-nav-items";

interface Props {
  navItems: NavItem[];
}

export function SiteFooter({ navItems }: Props) {
  return (
    <footer>
      <div className="flex flex-col gap-12">
        <div className="container flex flex-col items-center gap-8">
          <h3 className="text-xl font-semibold">Keep In Touch</h3>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-muted-foreground text-lg">
              {creatorConfig.location}
            </p>
            <Link
              href={`mailto:${creatorConfig.email}`}
              className="hover:text-foreground text-muted-foreground text-2xl font-medium underline-offset-4 hover:underline sm:text-2xl"
              target="_blank"
            >
              {creatorConfig.email}
            </Link>
            <Link
              href={`tel:${creatorConfig.telephone.value}`}
              className="hover:text-foreground text-muted-foreground text-lg font-light underline-offset-4 hover:underline"
              target="_blank"
            >
              {creatorConfig.telephone.label}
            </Link>
          </div>
          <ul className="flex gap-4">
            {creatorConfig.socialMediaLinks.map((media, index) => (
              <li key={index}>
                <Link href={media.href} target="_blank">
                  <div className="bg-accent group rounded-full p-4">
                    <Icon
                      name={media.icon}
                      className="text-muted-foreground group-hover:text-foreground size-6"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="container flex justify-between gap-12">
          <Link href="/" className="h-max">
            <Icons.kyax className="h-5" />
          </Link>
          <MainNavItems
            navItems={navItems}
            className="flex flex-wrap justify-end gap-8"
          />
        </div>
        <p className="text-center text-sm uppercase">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved
        </p>
        <ul className="flex">
          {["#ed5b42", "#f4aa85", "#c3dae0", "#414247"].map((color, index) => (
            <li
              key={index}
              className="h-4 flex-1"
              style={{ backgroundColor: color }}
            ></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
