import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/views/Hero';
import Promotions from '@/components/views/Promotions';
import Products from '@/components/views/Products';

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Products />
    </main>
  );
}
