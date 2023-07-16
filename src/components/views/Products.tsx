import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section id="Products" className="h-screen wrapper">
      <div className="text-center">
        <h2 className="uppercase text-sm text-blue-800 tracking-[3px] font-bold">
          products
        </h2>
        <h3 className="text-4xl font-bold tracking-[2px]">
          Check what we have
        </h3>
      </div>

      <div className="mt-4">
        <ProductCard />
      </div>
    </section>
  );
};

export default Products;
