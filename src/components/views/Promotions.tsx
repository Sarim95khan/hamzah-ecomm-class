import Image from 'next/image';
import React from 'react';
import Img1 from '/public/img1.webp';
import Img2 from '/public/img2.webp';
import Img3 from '/public/img3.webp';

const Promotions = () => {
  return (
    <div className="h-screen wrapper">
      <div className="text-center">
        <h2 className="uppercase text-sm text-blue-800 tracking-[3px] font-bold">
          promotions
        </h2>
        <h3 className="text-4xl font-bold tracking-[2px]">
          Our Promotion Events
        </h3>
      </div>
      {/* Grid  */}
      <div className="grid grid-cols-4 gap-x-2 gap-y-2 mt-6">
        {/* First Grid  */}
        <div className="col-span-2 bg-[#D6D6D8]  w-full flex items-center justify-center">
          <div className="flex flex-col justify-center px-6 ">
            <h2 className="uppercase text-3xl font-bold max-w-[12rem]">
              get up to
            </h2>
            <span className="text-3xl font-bold">60%</span>
            <p>For the summer season</p>
          </div>
          <div className="">
            <Image src={Img1} alt="Image 1" />
          </div>
        </div>

        {/* 2nd Grid  */}
        <div className="row-span-2 bg-[#EFE1C7] h-full w-full">
          <div className="pl-4 my-5">
            <h2 className="text-medium">Flex Sweatshirt</h2>
            <p className="text-lg">
              <del>$100</del>
              &nbsp;
              <b>$75</b>
            </p>
          </div>
          <div className="">
            <Image src={Img2} alt="Image 2" />
          </div>
        </div>
        <div className="row-span-2 bg-[#919181] h-full w-full">
          <div className="pl-4 my-5">
            <h2 className="text-medium">Flex Push Button Bomber</h2>
            <p className="text-lg">
              <del>$225</del>
              &nbsp;
              <b>$190</b>
            </p>
          </div>
          <div>
            <Image src={Img3} alt="Image 2" />
          </div>
        </div>
        <div className="col-span-2 bg-[#212121] h-full w-full text-center flex flex-col justify-center items-center ">
          <h3 className="text-3xl font-bold text-white">GET 30% Off</h3>
          <p className="uppercase text-white">use pormo code</p>
          <button className="uppercase text-white tracking-[4px] font-bold bg-[#474747] px-12 py-2 rounded-xl">
            dineweekendsale
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
