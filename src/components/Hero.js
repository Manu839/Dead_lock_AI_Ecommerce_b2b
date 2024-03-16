import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">

        <div className="flex pl-36 flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
          </div>
          <h1 className="uppercase hover:scale-110 duration-500 text-gray-800 text-center text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4 ">Fresh Fashion Finds<br />
            <span className=""><span className="text-gray-400">ne</span>w collection</span></h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;