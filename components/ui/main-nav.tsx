'use client';

import { Navitem } from '@/types';
import Link from 'next/link';
import MobileNav from './mobile-nav';
import { useState } from 'react';

interface MainNavProps {
  items: Navitem[];
  children?: React.ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href={'/'} className="hidden items-center space-x-2 md:flex">
        <span className="font-bold hidden sm:inline-block">
          Post Caliculator
        </span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
}
