import React, { useState, useEffect } from "react";
import banner from "../../assets/heroBG.avif";
import { FaSearch } from "react-icons/fa";



const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white transition-all duration-300"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* hero content */}
      <div className="text-center px-2 pt-26 lg:pt-31 space-y-6 lg:w-1/2 mx-auto">
        <h1 className="text-2xl lg:text-4xl font-medium leading-snug lg:leading-tight">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-[13px] font-light md:w-1/2 lg:w-full mx-auto lg:text-xl">
          Turn your room with furniture into a lot more minimalist and modern
          with ease and speed
        </p>

        {/* search field */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2 bg-white/20 rounded-full border border-gray-300 focus:outline-none placeholder:text-white"
          />

          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-orange-300 rounded-full cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* bottom blur overlay */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-white dark:from-black via-transparent to-transparent blur-sm" />
    </section>
  );
};

export default Hero;
