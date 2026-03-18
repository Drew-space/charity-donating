// import { PlayIcon } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// const Ourwork = () => {
//   return (
//     <section className="mt-20 mx-auto container item">
//       <div className="">
//         <button className="">Our Moments</button>
//         <h1 className="my-6">
//           See the change
//           <br /> in Action
//         </h1>
//         <p>
//           warch how access to clean waters is transforming daily lives in
//           villages
//           <br /> across the region. Real stories, real impact
//         </p>
//       </div>
//       <div className="mt-10 relative">
//         <div
//           className="h-[530px] bg-cover bg-center bg-no-repeat rounded-2xl"
//           style={{
//             backgroundImage: "url('/images/charity4.webp')",
//           }}
//         />

//         <div className="absolute inset-0 bg-black/10 rounded-2xl" />

//         <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 text-white border border-white p-4 rounded-full z-10" />
//       </div>
//     </section>
//   );
// };

// export default Ourwork;

import { PlayIcon } from "lucide-react";
import React from "react";

const Ourwork = () => {
  return (
    <section className="mt-20 mx-auto container px-4">
      {/* Text Section */}
      <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
        <button className="text-sm font-semibold text-blue-600">
          Our Moments
        </button>

        <h1
          className="my-4 font-bold leading-tight
          text-2xl sm:text-3xl md:text-4xl"
        >
          See the change
          <br /> in Action
        </h1>

        <p className="text-sm sm:text-base text-gray-600">
          Watch how access to clean water is transforming daily lives in
          villages across the region. Real stories, real impact.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 relative">
        <div
          className="h-[300px] sm:h-[400px] md:h-[530px] bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{
            backgroundImage: "url('/images/charity4.webp')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl" />

        {/* Play Icon */}
        <PlayIcon
          className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
          text-white border border-white 
          p-3 sm:p-4 rounded-full z-10 
          cursor-pointer hover:scale-110 transition"
        />
      </div>
    </section>
  );
};

export default Ourwork;
