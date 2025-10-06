// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#1b1713] text-gray-300 overflow-hidden">
  {/* 🔹 Decorative background image */}
  <img
    src="/images/chakra.png" // replace with your decorative image
    alt="Footer Decoration"
    className="absolute -top-10 -left-20 w-160 opacity-10 pointer-events-none select-none"
  />

  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
    {/* Top row */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-center lg:text-left">
      {/* LEFT: Logo + contact */}
      <div className="lg:col-span-4 flex flex-col justify-between min-h-[220px]">
        <div className="mt-2 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-start gap-3">
          <span className="inline-flex items-center justify-center bg-yellow-500 text-black rounded-full w-20 h-20 text-sm font-bold overflow-hidden">
            <img
              src="/images/TripToPuriLogo.png"
              alt="Trip2Puri Logo"
              className="w-20 h-20 object-contain"
            />
          </span>
        </div>

        <div className="mt-6 lg:mt-0 z-10">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Call Us
            </p>
            <p className="text-white font-semibold text-lg mt-2">
              +91 809 346 9315
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Mail Us
            </p>
            <p className="text-white font-semibold text-lg mt-2">
              dibyapaikray@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: heading + CTA + links */}
      <div className="lg:col-span-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Ready to Hit the Road?
            </h2>
            <div className="w-full lg:w-auto mt-4 flex justify-center lg:justify-start">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-yellow-400 transition">
                <a href="/booking">Book Your Car Now</a>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Menu */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Menu
              </h4>
              <ul className="space-y-3">
                <li><a className="text-gray-300 hover:text-yellow-500" href="/about">About Us</a></li>
                <li><a className="text-gray-300 hover:text-yellow-500" href="/booking">Booking</a></li>
                <li><a className="text-gray-300 hover:text-yellow-500" href="/gallery">Gallery</a></li>
                <li><a className="text-gray-300 hover:text-yellow-500" href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a className="text-gray-300 hover:text-yellow-500" href="/faq">FAQ</a></li>
                <li><a className="text-gray-300 hover:text-yellow-500" href="#">Careers</a></li>
                <li><a className="text-gray-300 hover:text-yellow-500" href="/policies">T&C</a></li>
                <li><a className="text-gray-300 hover:text-yellow-500" href="/policies">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                    <FaInstagram size={14} />
                  </span>
                  <span>Instagram</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                    <FaFacebookF size={12} />
                  </span>
                  <span>Facebook</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                    <FaTiktok size={14} />
                  </span>
                  <span>Tiktok</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                    <FaYoutube size={14} />
                  </span>
                  <span>Youtube</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Copyright */}
        <div className="border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row items-center gap-2 mt-8">
          <p>© {new Date().getFullYear()} TripToPuri. All Rights Reserved.</p>
          <span className="hidden md:inline">|</span>
          <p>Developed by <span className="text-yellow-500">YourName</span></p>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
