import Image from "next/image";
import Link from "next/link";
import DonateButton from "./DonateButton";

const DonationBanner = () => {
  return (
    <section className="max-w-[900px] mx-auto px-4 py-8">
      <div className="flex flex-col-reverse sm:flex-row rounded-[20px] overflow-hidden">
        <div className="bg-[#5aaa3a] flex flex-col justify-center items-center sm:items-start gap-4 p-8 sm:w-1/2 text-center sm:text-left">
          <h2 className="text-white text-2xl font-bold leading-snug">
            Everyone Deserves Clean Water, <br />
            Be the Reason a Village Has Clean Water Today
          </h2>
          <p className="text-white/90 text-sm leading-7">
            Your Contribution Can bring change. Your support builds water
            facilities, empowers communities and gives children a healthy
            future.
          </p>
          <DonateButton className="bg-white px-4 py-2 rounded-full" />
        </div>

        <div className="relative sm:w-1/2 h-64 sm:h-auto">
          <Image
            src="/images/charity3.avif"
            alt="Child washing hands with clean water"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default DonationBanner;
