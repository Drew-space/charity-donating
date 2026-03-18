import TestimonialsCarousel from "./Carousel";

const Testimonials = () => {
  return (
    <div className="mx-auto max-sm:text-sm container mt-6">
      <div className="flex flex-col items-center ">
        <button> Our Testimonials</button>
        <h1 className="font-bold ">Real Voice, Real Impact</h1>{" "}
        <p className="text-center ">
          Hear from people whose lives been change by clean water, all
          <br /> thanks to your support
        </p>
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
