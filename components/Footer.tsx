import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3d2b0e] text-white px-8 py-14 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[#7ac142] text-2xl font-bold">HopeAlive</h2>
          <p className="text-white/80 text-sm leading-7">
            Bring Clean Water to community in Need. It is our joy to see smiles
            on people&#39;s face. Support us today.
          </p>
          <Link
            href="/donate"
            className="bg-white text-[#3d2b0e] font-bold text-sm px-6 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors"
          >
            Donate Now
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base">Contact us</h3>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <Phone size={16} className="text-white shrink-0" />
            <span>+234-8062-35647</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <Mail size={16} className="text-white shrink-0" />
            <span>info@hopealive.ngo</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-white/80">
            <MapPin size={16} className="text-white shrink-0 mt-1" />
            <span>
              Level 13 333-339 Geogre st,
              <br />
              Sydney New Zoco
              <br />
              Australia
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base">Quick Links</h3>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {["About", "Our work", "Our impact"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base">Social Media</h3>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {[
              { name: "Instagram", href: "https://instagram.com" },
              { name: "LinkedIn", href: "https://linkedin.com" },
              { name: "(X) Twitter", href: "https://twitter.com" },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                {social.name}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
