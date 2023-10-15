import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { baseConfig } from "@/config/base";

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader navItems={baseConfig.mainNavItems} />
      <main className="flex-1 mb-32 mt-16">{children}</main>
      <SiteFooter navItems={baseConfig.mainNavItems} />
    </div>
  );
}
