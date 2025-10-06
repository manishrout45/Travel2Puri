import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, MapPin, Phone, Car } from "lucide-react";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ Topbar (Fixed Above Navbar) */}
      <div className="fixed top-0 left-0 w-full bg-[#761421] text-white text-sm py-2 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="flex items-center space-x-2">
      <MapPin size={16} className="text-yellow-400" />
      <span className="text-white">Puri, Odisha, India</span>
    </p>
    <p className="flex items-center space-x-2">
      <Phone size={16} className="text-yellow-400" />
      <a
        href="tel:+919876543210"
        className="text-white hover:text-yellow-300 transition"
      >
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>

      {/* ✅ Navbar (Positioned Below Topbar) */}
      <nav
        className={`fixed top-8 left-0 w-full z-40 transition-all duration-500 ${
          open
            ? "bg-white text-[#000000] shadow-md"
            : isScrolled
            ? "bg-white text-[#000000] shadow-md"
            : "bg-white text-[#000000]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img
              src="/images/TripToPuriLogo.png"
              alt="TripToPuri Logo"
              className="h-16 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={scrollToTop}
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
              scrollToTop();
            }}
            className="md:hidden focus:outline-none z-50 drop-shadow-lg"
          >
            {open ? (
              <X size={28} className="text-black drop-shadow-md" />
            ) : (
              <Menu size={28} className="text-black drop-shadow-md" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-500 ease-in-out md:hidden bg-white ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 py-6 space-y-6 mt-16">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => {
                  setOpen(false);
                  scrollToTop();
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
    </>
  );
};

export default Navbar;
