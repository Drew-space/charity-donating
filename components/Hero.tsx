// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-[530px]">
//       <Image
//         src="/images/hero.avif"
//         alt="hero image"
//         fill
//         className="object-cover"
//         priority
//       />

//       <div className="absolute inset-0 bg-black/60 z-10" />

//       <div className="absolute inset-0 z-20 flex items-center justify-center">
//         <div className="flex flex-col max-sm:items-center items-start mx-auto container ">
//           <h1 className="text-white text-[64px] leading-snug font-bold ">
//             Clean Water,
//             <br />
//             Brighter Futures
//           </h1>
//           <p className="text-white font-bold">
//             A community-driven to bring clean sustanable water
//             <br /> to 100 villages in Nigeria by {new Date().getFullYear()}
//           </p>
//           <button>Donate now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[530px]">
      <Image
        src="/images/hero.avif"
        alt="hero image"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Heading */}
            <h1
              className="text-white font-bold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Clean Water,
              <br />
              Brighter Futures
            </h1>

            {/* Paragraph */}
            <p
              className="text-white mt-4 font-medium
              text-sm sm:text-base md:text-lg max-w-xl"
            >
              A community-driven effort to bring clean sustainable water to 100
              villages in Nigeria by {new Date().getFullYear()}
            </p>

            {/* Button */}
            <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:bg-gray-200 transition">
              Donate now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
