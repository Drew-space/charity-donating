import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[530px]">
      <Image
        src="/images/hero.avif"
        alt="hero image"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="flex flex-col max-sm:items-center items-start mx-auto container ">
          <h1 className="text-white text-[64px] leading-snug font-bold ">
            Clean Water,
            <br />
            Brighter Futures
          </h1>
          <p className="text-white font-bold">
            A community-driven to bring clean sustanable water
            <br /> to 100 villages in Nigeria by {new Date().getFullYear()}
          </p>
          <button>Donate now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
