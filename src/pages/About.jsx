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
        className="relative text-center  overflow-hidden min-h-[70vh] flex items-center justify-center"
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

     <section className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#761421]">
  <div className="max-w-6xl mx-auto">
    <p className="text-white text-base sm:text-lg leading-relaxed text-center">
      Puri, nestled on the eastern coast of Odisha, is one of India’s most cherished spiritual and cultural destinations. Famous as the sacred home of Lord Jagannath and part of the revered Char Dham pilgrimage, Puri attracts millions of devotees and travelers every year. With <span className="font-semibold">Trip2Puri</span>, your journey becomes as memorable as the destination itself. Whether you’re planning a family trip, a group pilgrimage, or a weekend getaway, we provide comfortable cars, spacious travellers, and luxury buses to suit every need. Beyond its divine charm, Puri also offers golden beaches, UNESCO heritage monuments, vibrant traditions, and the scenic Chilika Lake. With our reliable booking services, you can explore this unique blend of spirituality, culture, and natural beauty with ease, comfort, and safety.
    </p>
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
