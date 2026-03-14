import React from "react";
import { Separator } from "./ui/separator";

const About = () => {
  const numbers = [
    { number: "67", text: "Villages impact" },
    { number: "34,000+", text: "Lifes improved" },
    { number: "90%", text: "Clean water access ratio" },
    { number: "120+", text: "Volunteers" },
    { number: "24", text: "New Boreholes'" },
  ];

  return (
    <section className="mx-auto container">
      <div className="flex justify-between mt-7">
        <div className="flex flex-col items-start">
          <button className="">Our impact</button>
          <h1>We are Making a Difference</h1>
        </div>

        <div className="  pt-16">
          <p className="">
            With your support, we&lsquo;re chamging lives by bringing safe,
            <br />
            clean water to communities that needs it. Here is our journey
            <br /> so farand our impact due to your support Donate Now
          </p>
          <button className="">Donate Now</button>
        </div>
      </div>
      {/* numbers */}
      {/* <div className="flex space-x-2 mt-14 bg-blue-500 ">
        {numbers.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className=" border-r  flex flex-col items-start pr-8">
              <span className="text-2xl font-bold">{item.number}</span>

              <span className="text-sm text-gray-500">{item.text}</span>
            </div>
          </div>
        ))}

        
      </div> */}

      <div className="flex justify-center items-end mt-16">
        {numbers.map((item, index) => (
          <React.Fragment key={index}>
            <div className="pr-10 text-center flex flex-col items-start">
              <p className="text-2xl font-bold">{item.number}</p>
              <p className="text-sm text-gray-500">{item.text}</p>
            </div>

            {index !== numbers.length - 1 && (
              <Separator orientation="vertical" className="mx-6 h-14" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default About;
