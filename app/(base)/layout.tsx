import { baseConfig } from "@/config/base";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader navItems={baseConfig.mainNavItems} />
      <main className="mb-32 mt-16 flex-1">{children}</main>
      <SiteFooter navItems={baseConfig.mainNavItems} />
    </div>
  );
}
