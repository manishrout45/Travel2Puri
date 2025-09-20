import { motion } from "framer-motion";
import { FaCar, FaMoneyBillWave, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Testimonial from "../components/Testimonial";

// ✅ Animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// ✅ Service Item
const ServiceItem = ({ icon, title }) => (
  <div>
    <div className="flex items-center justify-center gap-3">
      <span className="text-3xl">{icon}</span>
      <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
    </div>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do diam eiusmod.
    </p>
  </div>
);

// ✅ Feature Item
const Feature = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-yellow-500 text-black p-4 rounded-md">{icon}</div>
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
        className="relative text-center mb-16 overflow-hidden min-h-[70vh] flex items-center justify-center"
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
          <h2 className="text-4xl font-bold text-yellow-400 my-6">About Us</h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            Puri, located on the eastern coast of Odisha, is one of India’s most
            cherished spiritual and cultural destinations. Known as the home of
            Lord Jagannath, Puri is part of the sacred Char Dham pilgrimage.
            Beyond its religious significance, the city offers golden beaches,
            vibrant local traditions, UNESCO heritage monuments, and the
            breathtaking Chilika Lake. It is a unique blend of spirituality,
            culture, and natural beauty, making it a must-visit for travelers
            worldwide.
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-#1b1713">
              Services
            </h2>
            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              diam eiusmod tempor magna aliqua sed ut enim ad minim veniam,
              quis nostrud.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start md:items-center">
            {/* Left Services */}
            <div className="flex flex-col gap-10 text-center order-2 md:order-1">
              <ServiceItem icon="🎁" title="Gift Transport" />
              <ServiceItem icon="✈️" title="Airport Transfer" />
              <ServiceItem icon="💼" title="Luxury Transport" />
            </div>

            {/* Car Image */}
            <div className="flex justify-center order-1 md:order-2">
              <img
                src="src/assets/images/serviceCar.png"
                alt="Car Top View"
                className="w-48 sm:w-64 md:w-72 lg:w-96"
              />
            </div>

            {/* Right Services */}
            <div className="flex flex-col gap-10 text-center order-3">
              <ServiceItem icon="💍" title="Wedding Trip" />
              <ServiceItem icon="🧑‍✈️" title="Driver" />
              <ServiceItem icon="🎂" title="Birthday Gifts" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Rent with Us Section */}
      <section className="bg-[#1b1713] text-white py-16 px-6 mb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <p className="text-yellow-500 uppercase font-semibold tracking-widest">
              Choose Comfort, Choose GetnGo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Why Rent with GetnGo?
            </h2>
            <p className="text-gray-400 mt-6 max-w-md mx-auto lg:mx-0">
              We combine service, reliability, and value to make your trip worry-free.
            </p>

            {/* Car Image */}
            <div className="mt-10">
              <img
                src="src/assets/images/luxuryCar.png"
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

      {/* ✅ Testimonials */}
      <Testimonial />
    </motion.section>
  );
};

export default About;
