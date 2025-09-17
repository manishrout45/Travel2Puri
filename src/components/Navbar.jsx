import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Booking", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "nav-water-blur text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide">
          Travel2Puri
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 transition-colors hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none z-50"
        >
          {open ? (
            <X
              size={28}
              className={`${isScrolled ? "text-black" : "text-white"}`} // ✅ visible always
            />
          ) : (
            <Menu
              size={28}
              className={`${isScrolled ? "text-black" : "text-white"}`} // ✅ visible always
            />
          )}
        </button>
      </div>

      {/* Mobile Menu - Slide from Right */}
     <div
  className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-500 ease-in-out md:hidden 
    nav-water-blur bg-white/30 backdrop-blur-lg ${
      open ? "translate-x-0" : "translate-x-full"
    }`}
>

        <div className="px-6 py-6 space-y-6 mt-6"> {/* ✅ menu pushed down */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block relative pb-1 transition-colors hover:text-yellow-300 ${
                  isActive ? "text-yellow-300 font-semibold" : ""
                }`
              }
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-300 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
