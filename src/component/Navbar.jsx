import React, { useState } from "react";
import Logo from "../assets/react.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { title: "Home", source: "/home" },
    { title: "About", source: "/about" },
    { title: "Contact", source: "/contact" },
    {
      title: "Services",
      source: "/services",
      sublinks: [
        { title: "Web Development", source: "/services#web" },
        { title: "App Development", source: "/services#app" },
      ],
    },
  ];

  const handleNavToggle = () => {
    setShowNav(!showNav);
    if (!showNav) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="box-border flex justify-between items-center px-12 py-4 border-gray-300">
        <div className="hover:animate-spin">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <Link
                to={link.source}
                className="hover:text-blue-500 hover:border px-7 py-3 rounded-lg transition duration-700 animate-tileOpen"
              >
                {link.title}
              </Link>
              {link.sublinks && (
                <div className="absolute hidden group-hover:block bg-gray-700 rounded-md mt-2 space-y-2 z-10 animate-tileOpen">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sublink.source}
                      className="block px-6 py-2 text-white hover:bg-gray-600 transition duration-300 animate-tileOpen"
                      style={{ animationDelay: `${subIndex * 0.1}s` }}
                    >
                      {sublink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={handleNavToggle}
            aria-expanded={showNav}
            aria-label="Toggle navigation menu"
          >
            <span className="text-3xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`${
          showNav ? "block" : "hidden"
        } bg-gradient-to-t from-violet-800 to-fuchsia-700 md:hidden py-2 px-4 transition-all duration-300 ease-in-out`}
      >
        {navLinks.map((link, index) => (
          <div key={index}>
            <Link
              to={link.source}
              className="block hover:text-blue-500 hover:border px-7 py-2 rounded-lg transition duration-600 text-center"
              onClick={() => toggleDropdown(index)}
            >
              {link.title}
            </Link>
            {link.sublinks && openDropdown === index && (
              <div className="flex flex-col space-y-2 mt-2">
                {link.sublinks.map((sublink, subIndex) => (
                  <Link
                    key={subIndex}
                    to={sublink.source}
                    className="block px-6 py-2 text-white hover:bg-gray-600 transition duration-700 animate-tileOpen"
                    style={{ animationDelay: `${subIndex * 0.1}s` }}
                  >
                    {sublink.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
