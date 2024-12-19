import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function IndexPages() {
  return (
    <>
      <section className="space-y-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Caliculator
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このページはPost
            Caliculatorの概要とサイトを構成した技術スタックが書かれています。
          </p>
          <div className="space-x-4">
            <Link
              href={'/login'}
              className={cn(buttonVariants({ size: 'lg', variant:"blue" }))}
            >
              始める
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: 'lg' }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container mx-auto py-8 md:py-12 lg:py-24  bg-sky-50 space-y-6"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            Post Caliculatorの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            電気回路のモデル設計と計算、ドキュメント管理の手助けしてくれます
          </p>
        </div>
        <div className="mx-auto text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post
            Caliculatorは投稿すると自分の作った回路図を保存し回路計算を行うことができるアプリケーションです。
            <br />
            またshadcnによるMarkdown形式でドキュメントも書くことができます。
          </p>
        </div>
      </section>
    </>
  );
}
