// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#262628] text-gray-300 overflow-hidden">
      {/* faint steering wheel watermark on the far left */}
<div
  aria-hidden
  className="pointer-events-none absolute -left-36 top-1/2 -translate-y-1/2 opacity-6 hidden lg:block"
  style={{ width: 520, height: 520 }}
>
  {/* lightweight SVG steering-wheel-like circle */}
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stopColor="#111" />
        <stop offset="1" stopColor="#222" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="44" fill="none" stroke="url(#g)" strokeWidth="6" />
    <path d="M50 20 L50 45" stroke="url(#g)" strokeWidth="5" strokeLinecap="round" />
    <path d="M50 55 L50 80" stroke="url(#g)" strokeWidth="5" strokeLinecap="round" />
    <path
      d="M25 50 A25 25 0 0 0 75 50"
      fill="none"
      stroke="url(#g)"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top row: left info + right CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Logo + contact (occupies ~4 columns on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between min-h-[220px]">
            {/* logo near top */}
            <div className="mt-2 lg:mt-0 flex items-center gap-3">
              <span className="inline-flex items-center justify-center bg-yellow-500 text-black rounded-full w-9 h-9 text-sm font-bold">
                🚗
              </span>
              <h3 className="text-white text-lg font-semibold">GetnGo</h3>
            </div>

            {/* contact block anchored toward bottom-left of this column */}
            <div className="mt-6 lg:mt-0">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Call Us
                </p>
                <p className="text-white font-semibold text-lg mt-2">+62 123 456 7890</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Mail Us
                </p>
                <p className="text-white font-semibold text-lg mt-2">support@getngo.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT: big heading + CTA (occupies ~8 columns on lg) */}
          <div className="lg:col-span-8">
            <div className="flex flex-col items-start ">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-right lg:text-right">
                Ready to Hit the Road?
              </h2>

              {/* place button so it visually sits left of the center-right area (same as screenshot) */}
              <div className="w-full lg:w-auto mt-4">
                <div className="flex">
                  <div className="lg:ml-auto"> 
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-yellow-400 transition">
                      Book Your Car Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* divider under CTA (starts around same left-edge of CTA and spans right area) */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* bottom links: inside the right column area we show 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company */}
              <div className="text-left md:text-left">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">About Us</a></li>
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">Pricing Plans</a></li>
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">Testimonials</a></li>
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">Careers</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-left md:text-left">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">Booking</a></li>
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">Drivers</a></li>
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">Support</a></li>
                  <li><a className="text-gray-300 hover:text-yellow-500" href="#">Blog & News</a></li>
                </ul>
              </div>

              {/* Contact Us (icons) */}
              <div className="text-left md:text-left">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                  Contact Us
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                      <FaInstagram size={14} />
                    </span>
                    <span>Instagram</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                      <FaFacebookF size={12} />
                    </span>
                    <span>Facebook</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                      <FaTiktok size={14} />
                    </span>
                    <span>Tiktok</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 cursor-pointer">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800">
                      <FaYoutube size={14} />
                    </span>
                    <span>Youtube</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* end bottom links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
