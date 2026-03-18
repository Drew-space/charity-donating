import { PlayIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Ourwork = () => {
  return (
    <section className="mt-20 mx-auto container item">
      <div className="">
        <button className="">Our Moments</button>
        <h1 className="my-6">
          See the change
          <br /> in Action
        </h1>
        <p>
          warch how access to clean waters is transforming daily lives in
          villages
          <br /> across the region. Real stories, real impact
        </p>
      </div>
      <div className="mt-10 relative">
        <div
          className="h-[530px] bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{
            backgroundImage: "url('/images/charity4.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/10 rounded-2xl" />

        <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 text-white border border-white p-4 rounded-full z-10" />
      </div>
    </section>
  );
};

export default Ourwork;
