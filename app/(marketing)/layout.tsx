import { buttonVariants } from '@/components/ui/button';
import SiteFooter from '@/components/ui/footer';
import MainNav from '@/components/ui/main-nav';
import { marketingConfig } from '@/config/marketing';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background z-40 w-full">
        <div className="mx-auto max-w-screen-xl flex h-20 items-center justify-between py-6 px-4">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href={'/login'}
              className={cn(
                buttonVariants({ variant: 'blue', size: 'sm' }),
                'px-4'
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
