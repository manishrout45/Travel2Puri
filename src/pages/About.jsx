import { motion } from "framer-motion";
import { FaCar, FaMoneyBillWave, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";


// ✅ Animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


// ✅ Feature Item
const Feature = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-[#761421] text-white p-4 rounded-md">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* About Section */}
      <motion.div
        className="relative text-center  overflow-hidden min-h-[70vh] flex items-center justify-center mt-16"
        variants={fadeUp}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shri_Jagannatha_Temple.jpg"
            alt="Jagannath Temple"
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 p-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white my-6">About Us</h2>
  
        </div>
      </motion.div>

      {/* Privacy Policy Button */}
      <a
        href="/policies"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed -right-10 top-[50%] transform -translate-y-1/2 rotate-[-90deg] bg-[#761421] px-4 py-2 rounded-tl-lg rounded-tr-lg shadow-lg z-50 animate-blink-text"
      >
        Privacy Policy
      </a>

     <section className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#761421]">
  <div className="max-w-6xl mx-auto">
    <p className="text-white text-base sm:text-lg leading-relaxed text-center">
      Welcome to Trip-To Puri, your trusted travel partner for exploring the beauty, culture, and spirituality of Puri and Odisha.
Founded by Dibyadarshan Paikray, we make travel simple, safe, and memorable. We provide all types of vehicles—cars, buses, travellers, bikes, and scooties—along with hotel bookings to ensure a comfortable and hassle-free stay.
From temple tours and beach visits to family vacations and wedding transportation, we cover major destinations like Puri, Bhubaneswar, Konark, and Chilika.
With Trip-To Puri, your comfort, safety, and unforgettable memories are our top priority.

    </p>
  </div>
</section>

      {/* ================= About Owner Section ================= */}
<section className="w-full bg-white py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      
      {/* Owner Image */}
      <div className="flex-shrink-0 relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0">
        <img
          src="https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png" // Replace with your owner's image
          alt="Owner"
          className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-[#761421]"
        />
        {/* Optional decorative overlay */}
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full mix-blend-multiply"></div>
      </div>

      {/* Owner Info */}
      <div className="text-center lg:text-left max-w-xl">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#761421] mb-4">
          Meet Our Founder
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          <span className="font-semibold">Mr. XYZ</span> founded Trip2Puri with a vision to make spiritual and cultural journeys seamless, safe, and comfortable. With years of experience in the travel and hospitality industry, he ensures every traveler experiences Puri in the most memorable way. His passion for excellence, attention to detail, and personal touch have earned the trust of thousands of happy customers.
        </p>
        <p className="mt-4 text-gray-600 italic text-sm sm:text-base">
          “Your journey is our priority, and every ride is a story we cherish together.”
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center lg:justify-start gap-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#761421] transition text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#761421] transition text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#761421] transition text-xl">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#761421] transition text-xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Why Rent with Us Section */}
      <section className="bg-[#F3E6E6] text-[#761421] pt-10 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <p className="text-black uppercase font-semibold tracking-widest">
              Choose Comfort, Choose Trip2Puri
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Why Rent with Trip2Puri?
            </h2>
            <p className="text-gray-400 mt-6 max-w-md mx-auto lg:mx-0">
              We combine service, reliability, and value to make your trip worry-free.
            </p>

            {/* Car Image */}
            <div className="mt-0">
              <img
                src="/images/black-isolated-car.png"
                alt="Luxury Car"
                className="w-full max-w-lg mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <Feature
              icon={<FaCar size={28} />}
              title="Wide Selection of Cars"
              text="Economy, SUV, luxury, and more."
            />
            <Feature
              icon={<FaMoneyBillWave size={28} />}
              title="Transparent Pricing"
              text="No hidden fees, just fair rates."
            />
            <Feature
              icon={<FaCalendarAlt size={28} />}
              title="Flexible Booking Plans"
              text="Daily, weekly, or monthly rentals."
            />
            <Feature
              icon={<FaUsers size={28} />}
              title="Trusted by Thousands"
              text="High ratings from happy customers."
            />
          </div>
        </div>
      </section>
      
    </motion.section>
  );
};

export default About;
