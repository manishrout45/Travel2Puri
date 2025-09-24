import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import OdishaMap from "../components/Odishamap";
import Testimonial from "../components/Testimonial";
import VehicleSection from "../components/VehicleSection";

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


// Home Page Component
const Home = () => {
  return (
    <>
      <HeroSection />
      <VehicleSection />

      <OdishaMap />




      {/* Achievements */}
      <section className="bg-white text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left: Car Image */}
        <div className="flex justify-center ">
          <img
            src="/images/serviceCar.png"
            alt="Car Top View"
            className="w-64 sm:w-72 md:w-80 lg:w-[420px]"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <p className="text-black uppercase tracking-wide text-sm mb-3">
              About Trip To Puri
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 text-[#761421]">
              At Trip2Puri, we combine a modern fleet with customer-first service
              to redefine car rental.
            </h2>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-[#761421] font-medium px-6 py-3 rounded-full transition">
              <a href='/about'>More About Us →</a>
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Customers */}
            <div className="bg-[#761421] p-6 rounded-lg flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-[#1a1a1a]"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-[#1a1a1a]"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/55.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-[#1a1a1a]"
                  />
                </div>
                <p className="text-yellow-500 font-semibold text-lg">
                  10,000+
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                Delivering reliable rentals trusted by travelers worldwide.
              </p>
            </div>

            {/* Card 2: Feature */}
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="data:image/jpeg;base64,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"
                alt="Car Interior"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#761421] bg-opacity-40 flex items-end p-6">
                <p className="text-white font-semibold text-lg">
                  Drive in Comfort, <br /> Arrive in Style
                </p>
              </div>
              {/* Floating Button */}
              <button className="absolute top-4 right-4 bg-yellow-500 text-black p-3 rounded-full shadow-md hover:bg-yellow-600 transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Testimonial />


      <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-300 rounded-lg px-6 py-12 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          
          {/* Left: Car Image */}
          <div className="flex justify-center">
            <img
              src="/images/black-isolated-car.png"
              alt="Car"
              className="w-72 sm:w-80 md:w-[420px] lg:w-[480px] object-contain"
            />
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left">
            <p className="text-yellow-500 uppercase tracking-wide text-sm mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#761421] mb-4 leading-snug">
              Find the Perfect <br /> Car for Your Trip
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us your travel dates, and we’ll confirm <br className="hidden sm:block" /> 
              availability right away.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-[#761421] font-medium px-6 py-3 rounded-full transition">
              <a href='/booking'>Ask Availability</a>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
