// import React from "react";
// import { Separator } from "./ui/separator";

// const About = () => {
//   const numbers = [
//     { number: "67", text: "Villages impact" },
//     { number: "34,000+", text: "Lifes improved" },
//     { number: "90%", text: "Clean water access ratio" },
//     { number: "120+", text: "Volunteers" },
//     { number: "24", text: "New Boreholes'" },
//   ];

//   return (
//     <section className="mx-auto container">
//       <div className="flex justify-between mt-7">
//         <div className="flex flex-col items-start">
//           <button className="">Our impact</button>
//           <h1>We are Making a Difference</h1>
//         </div>

//         <div className="  pt-16">
//           <p className="">
//             With your support, we&lsquo;re chamging lives by bringing safe,
//             <br />
//             clean water to communities that needs it. Here is our journey
//             <br /> so farand our impact due to your support Donate Now
//           </p>
//           <button className="">Donate Now</button>
//         </div>
//       </div>

//       <div className="flex justify-center items-end mt-16">
//         {numbers.map((item, index) => (
//           <React.Fragment key={index}>
//             <div className="pr-10 text-center flex flex-col items-start">
//               <p className="text-2xl font-bold">{item.number}</p>
//               <p className="text-sm text-gray-500">{item.text}</p>
//             </div>

//             {index !== numbers.length - 1 && (
//               <Separator orientation="vertical" className="mx-6 h-14" />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { Separator } from "./ui/separator";

const About = () => {
  const numbers = [
    { number: "67", text: "Villages impact" },
    { number: "34,000+", text: "Lives improved" },
    { number: "90%", text: "Clean water access ratio" },
    { number: "120+", text: "Volunteers" },
    { number: "24", text: "New Boreholes" },
  ];

  return (
    <section className="mx-auto container px-4 mt-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <button className="text-sm font-semibold text-blue-600">
            Our Impact
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
            We are Making a Difference
          </h1>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm sm:text-base text-gray-600 max-w-md">
            With your support, we’re changing lives by bringing safe, clean
            water to communities that need it. Here is our journey so far and
            the impact made possible by your support.
          </p>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Donate Now
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-0">
        {numbers.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-center flex flex-col items-center md:items-start px-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                {item.number}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {item.text}
              </p>
            </div>

            {/* Show separator only on medium and larger screens */}
            {index !== numbers.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden md:block mx-6 h-14"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default About;
