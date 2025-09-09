import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Trigger blur effect after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/30 text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Travel2Puri
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">
            About
          </Link>
          <Link
            to="/destinations"
            className="hover:text-yellow-300 transition-colors"
          >
            Destinations
          </Link>
          <Link
            to="/packages"
            className="hover:text-yellow-300 transition-colors"
          >
            Packages
          </Link>
          <Link
            to="/booking"
            className="hover:text-yellow-300 transition-colors"
          >
            Booking
          </Link>
          <Link
            to="/gallery"
            className="hover:text-yellow-300 transition-colors"
          >
            Gallery
          </Link>
          <Link to="/faq" className="hover:text-yellow-300 transition-colors">
            FAQ
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div
          className={`md:hidden px-6 py-4 space-y-4 transition-all duration-300 ${
            isScrolled ? "backdrop-blur-md bg-white/40" : "bg-blue-700"
          }`}
        >
          <Link
            to="/"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/destinations"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Destinations
          </Link>
          <Link
            to="/packages"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Packages
          </Link>
          <Link
            to="/booking"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/gallery"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/faq"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="block hover:text-yellow-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
