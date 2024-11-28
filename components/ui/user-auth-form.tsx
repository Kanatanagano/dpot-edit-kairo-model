import { cn } from '@/lib/utils';
import { Input } from './input';
import { Label } from './label';
import { buttonVariants } from './button';

export default function UserAuthForm() {
  return (
    <div>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>メールでログイン</button>
        </div>
      </form>
    </div>
  );
}
