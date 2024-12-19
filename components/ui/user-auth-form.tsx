'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { Icon } from '../icon';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function UserAuthForm() {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-3">
        <button
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGithubLoading(true);
            signIn('github');
          }}
        >
          {isGithubLoading ? <Icon.spinner /> : <Icon.github />}
          GitHub
        </button>

        <button
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn('google');
          }}
        >
          {isGoogleLoading ? <Icon.spinner /> : <Icon.google />}
          Google
        </button>
      </div>
    </div>
  );
}
