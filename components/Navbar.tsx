import React from "react";

const Navbar = () => {
  const navlink = [
    { name: "About", href: "#" },
    { name: "Our work", href: "#" },
    { name: "Our impact", href: "#" },
  ];

  return (
    <nav className=" border-b">
      <div className="mx-auto container py-4">
        <div className="flex items-center justify-between px-5">
          <div className="flex items-center justify-between gap-8">
            <h1 className="text-2xl  text-[#5aaa3a] tracking-tighter md:text-2xl">
              HopeAlive
            </h1>
            <div className=" space-x-8  hidden md:flex">
              {navlink.map((link) => (
                <div
                  className="flex  items-center justify-between"
                  key={link.name}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>

          <button className="bg-[#5aaa3a] text-white px-2 py-2 rounded-md">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
