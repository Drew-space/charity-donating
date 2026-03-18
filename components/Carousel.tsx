"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const testimonials = [
  {
    name: "Amina Salami",
    role: "Village Leader",
    rating: 5,
    image: "/images/charity1.avif",
    text: `Before HopeAlive, getting clean water was a daily struggle. Now our village has safe water, children go to school on time, and I even started a small farm. This has truly changed our lives.`,
  },
  {
    name: "Abdullahi Ayodele Sulaimon",
    role: "Village Farmer",
    rating: 5,
    image: "/images/charity5.avif",
    text: `Clean water from HopeAlive has made life easier and healthier. My farm thrives, and my family's health has improved greatly. This support has lifted a big burden from us.`,
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="max-w-[900px] mx-auto px-10 py-8">
      <Carousel>
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col sm:flex-row bg-[#f5f9eb] rounded-[20px] p-5 gap-5">
                {/* Image */}
                <div className="relative w-full sm:w-[280px] h-64 sm:h-auto flex-shrink-0 rounded-[16px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center gap-2 text-sm py-2">
                  <h2 className="text-[#202a10] text-lg font-bold">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">{item.role}</p>
                  <div>{"⭐".repeat(item.rating)}</div>
                  <p className="text-[#333] leading-7">{item.text}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
};

export default TestimonialsCarousel;
