import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col justify-center items-center gap-y-4 bg-white ">
            <li>
              <Link href={'/'}>Male</Link>
            </li>
            <li>
              <Link href={'/'}>Female</Link>
            </li>
            <li>
              <Link href={'/'}>Kids</Link>
            </li>
            <li>
              <Link href={'/'}>All Products</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
