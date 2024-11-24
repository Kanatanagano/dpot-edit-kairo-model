import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export const fontoNotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'ブログ投稿ができる',
  keywords: ['ブログ', '投稿', '記事'],
  authors: [{ name: 'kanata' }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://example.com/ogp.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          'bg-background antialiased min-h-screen',
          fontoNotoSansJP.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
