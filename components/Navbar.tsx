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
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-8">
            <h1>BlueSource</h1>
            <div className="flex space-x-8">
              {navlink.map((link) => (
                <div
                  className="flex items-center justify-between"
                  key={link.name}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>

          <button>Donate Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
