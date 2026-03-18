import About from "@/components/About";
import DonationBanner from "@/components/DonationBanner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ourwork from "@/components/Our-work";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Ourwork />
      <Testimonials />
      <DonationBanner />
      <Footer />
    </>
  );
}
