import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import HeroImg from '/public/Hero.webp';
import Image from 'next/image';
import Bazaar from '/public/bazaar.webp';
import Bustle from '/public/bustle.webp';
import Versace from '/public/versace.webp';
import Instyle from '/public/instyle.webp';

const Hero = () => {
  const tag = 'Start \n Shopping';
  return (
    <section
      id="Hero"
      className="wrapper flex flex-col md:flex-row mt-12 gap-y-8 gap-x-4"
    >
      <div className="flex-1 ">
        <Badge className="bg-blue-200 text-blue-600 px-4 py-3">Sale 70%</Badge>
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-[2px] lg:text-6xl leading-snug mt-6 ">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black text-white px-6 py-6 gap-x-2 whitespace-pre font-bold mt-4 ring ring-gray-400">
          <ShoppingCart />
          {tag}
        </Button>
        <div className="flex items-center justify-between my-4 flex-wrap gap-4 mt-6">
          <Image src={Bazaar} alt="Bazaar" />
          <Image src={Bustle} alt="Bustle" />
          <Image src={Versace} alt="Versace" />
          <Image src={Instyle} alt="Instyle" />
        </div>
      </div>
      <div className="hidden md:block flex-1 bg-red-200 rounded-full">
        <Image src={HeroImg} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
