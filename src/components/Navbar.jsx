import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Booking", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        open
          ? "bg-white text-[#000000] shadow-md"
          : isScrolled
          ? "bg-white text-[#000000] shadow-md"
          : "bg-white text-[#000000]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center ">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-2"
          onClick={scrollToTop}
        >
          <img
            src="/images/logo01.png"
            alt="Travel2Puri Logo"
            className="h-16 w-auto"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={scrollToTop} // ✅ scroll to top on click
              className={({ isActive }) =>
                `relative pb-1 transition-colors hover:text-[#761421] ${
                  isActive ? "text-[#761421] font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#761421] rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setOpen(!open);
            scrollToTop(); // ✅ scroll to top when menu opens
          }}
          className="md:hidden focus:outline-none z-50 drop-shadow-lg"
        >
          {open ? (
            <X
              size={28}
              className={`${
                isScrolled ? "text-[#000000]" : "text-black"
              } drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}
            />
          ) : (
            <Menu
              size={28}
              className={`${
                isScrolled ? "text-[#000000]" : "text-black"
              } drop-shadow-md`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-500 ease-in-out md:hidden bg-white ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-6 mt-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => {
                setOpen(false);
                scrollToTop(); // ✅ scroll to top on mobile link click
              }}
              className={({ isActive }) =>
                `block relative pb-1 transition-colors hover:text-[#761421] ${
                  isActive ? "text-[#761421] font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#761421] rounded-full"></span>
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
