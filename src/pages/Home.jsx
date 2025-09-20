import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import OdishaMap from "../components/Odishamap";
import Testimonial from "../components/Testimonial";

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Vehicle data
const vehicles = [
  {
    title: "Car",
    desc: "Perfect for small family trips, business travels, or quick getaways with comfort and style.",
    img: "https://images.pexels.com/photos/29057945/pexels-photo-29057945.jpeg?cs=srgb&dl=pexels-shantumsingh-29057945.jpg&fm=jpg",
  },
  {
    title: "Bus",
    desc: "Ideal for group tours, school trips, rallies, and large gatherings with spacious seating.",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/8/DW/IP/PH/3525736/7c48a1b8-27cf-489d-b0e6-1fb9c672c1ef.jpg",
  },
  {
    title: "Traveller",
    desc: "A great choice for weddings, pilgrimages, and medium-sized group tours with extra comfort.",
    img: "https://kashiyatra.in/wp-content/uploads/2023/11/tempo-traveller-on-rent-in-varanasi.jpg",
  },
];

// Our Vehicles Component
const OurVehicles = () => {
  return (
    <motion.section
      className="relative max-w-7xl mx-auto py-24 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h3 className="text-5xl font-extrabold text-[#1b1713] mb-6 drop-shadow-md">
          Our Vehicles for Every Occasion
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg ">
          From weddings to tours, rallies to family getaways — choose your ride and travel in comfort & style.
        </p>
      </motion.div>

      {/* Vehicle Cards */}
      <div className="grid gap-12 md:grid-cols-3">
        {vehicles.map((vehicle, i) => (
          <motion.div
            key={vehicle.title}
            custom={i}
            variants={fadeUp}
            className="relative group rounded-3xl overflow-visible transform-gpu transition-transform duration-500 bg-white/80 shadow-lg hover:scale-105"
          >
            {/* Colored Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-50 blur-3xl pointer-events-none transition-all duration-500 z-0" />

            {/* Inner Content */}
            <div className="relative z-10 overflow-hidden rounded-3xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={vehicle.img}
                  alt={vehicle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
              </div>

              <div className="relative bg-white/90 backdrop-blur-xl px-6 py-8 text-center">
                <h4 className="text-2xl font-extrabold text-[#1b1713] mb-3 tracking-tight">{vehicle.title}</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">{vehicle.desc}</p>

                <button className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>

            {/* Border Highlight */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300 z-20 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Home Page Component
const Home = () => {
  return (
    <>
      <HeroSection />
      <OurVehicles />

      <OdishaMap />




      {/* Achievements */}
      <section className="bg-gray-200 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left: Car Image */}
        <div className="flex justify-center ">
          <img
            src="src/assets/images/black-isolated-car.png"
            alt="Car Top View"
            className="w-64 sm:w-72 md:w-80 lg:w-[420px]"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <p className="text-yellow-500 uppercase tracking-wide text-sm mb-3">
              About Trip To Puri
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 text-[#1b1713]">
              At GetnGo, we combine a modern fleet with customer-first service
              to redefine car rental.
            </h2>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-full transition">
              More About Us →
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Customers */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col justify-between">
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
                src="https://images.unsplash.com/photo-1517940310602-285c4c0fad25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Car Interior"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1b1713] bg-opacity-40 flex items-end p-6">
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
              src="src/assets/images/serviceCar.png"
              alt="Car"
              className="w-72 sm:w-80 md:w-[420px] lg:w-[480px] object-contain"
            />
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left">
            <p className="text-yellow-500 uppercase tracking-wide text-sm mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-snug">
              Find the Perfect <br /> Car for Your Trip
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us your travel dates, and we’ll confirm <br className="hidden sm:block" /> 
              availability right away.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-full transition">
              Ask Availability
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
