import { allPosts } from '@/.contentlayer/generated';
import { buttonVariants } from '@/components/ui/button';
import Mdx from '@/components/ui/mdx-component';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getPostGromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParamas === slug);
  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostGromSlug(slug);
  if (!post) {
    notFound();
  }
  return (
    <article className="container mx-auto lg:max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && (
          <time>Published on {format(post.date, 'yyyy/MM/dd')}</time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={768}
          height={405}
          className="my-8 border rounded-md bg-muted"
        />
      )}
      <Mdx code={post.body.code}/>
      <hr className='mt-12'/>
      <div className='py-6 text-center lg:py-10'>
        <Link href={"/blog"} className={cn(buttonVariants({ variant: "secondary"}))}>
        すべて見る</Link>
      </div>
    </article>
  );
}
