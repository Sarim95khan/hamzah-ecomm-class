import Image from 'next/image';
import React from 'react';
import Logo from '/public/Logo.webp';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 wrapper flex justify-between items-center bg-white ">
      <Image src={Logo} alt="Logo" />

      {/* Ul */}
      <div className="hidden md:block">
        <ul className="flex justify-between items-center gap-x-4  ">
          <li>
            <Link href={'/products/male'}>Male</Link>
          </li>
          <li>
            <Link href={'/products/female'}>Female</Link>
          </li>
          <li>
            <Link href={'/products/kids'}>Kids</Link>
          </li>
          <li>
            <Link href={'/products/allProducts'}>All Products</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search your item"
          className="border-2 md:w-72 px-2 rounded-lg"
        />
      </div>

      <div className="flex gap-x-4">
        <div className="bg-gray-300 h-8 w-8 rounded-full" />

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
