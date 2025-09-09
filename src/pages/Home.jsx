import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

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
      className="relative max-w-7xl mx-auto py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h3 className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-md">
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
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-80 blur-3xl pointer-events-none transition-all duration-500 z-0" />

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
                <h4 className="text-2xl font-extrabold text-blue-700 mb-3 tracking-tight">{vehicle.title}</h4>
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

      {/* Popular Destinations */}
      <motion.section
  className="bg-gray-100 py-20 px-6 z-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div className="max-w-7xl mx-auto text-center mb-14" variants={fadeUp}>
    <h3 className="text-4xl font-bold text-blue-600 mb-4">Popular Destinations</h3>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
      Explore our top-rated travel destinations loved by thousands of travelers.
    </p>
  </motion.div>

  <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
    {[
      { title: "Bali, Indonesia", desc: "Experience the tropical beaches, culture, and luxury resorts." },
      { title: "Paris, France", desc: "The city of love with iconic landmarks and rich history." },
      { title: "Maldives", desc: "Crystal-clear waters and exotic island escapes." },
    ].map((place) => (
      <motion.div
        key={place.title}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        variants={fadeUp}
      >
        <h4 className="text-xl font-semibold text-blue-500 mb-2">{place.title}</h4>
        <p className="text-gray-600">{place.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>




      {/* Achievements */}
      <motion.section className="max-w-7xl mx-auto py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="text-center mb-14" variants={fadeUp}>
          <h3 className="text-4xl font-bold text-blue-600 mb-4">Our Achievements</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Milestones that reflect our passion for creating amazing travel experiences.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          {[
            { number: "25K+", label: "Happy Travelers" },
            { number: "100+", label: "Destinations Covered" },
            { number: "500+", label: "Tours Completed" },
          ].map((item, i) => (
            <motion.div key={item.number} className="text-center" custom={i} variants={fadeUp}>
              <h4 className="text-5xl font-bold text-blue-500 mb-2">{item.number}</h4>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section className="bg-gray-100 py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="max-w-7xl mx-auto text-center mb-14" variants={fadeUp}>
          <h3 className="text-4xl font-bold text-blue-600 mb-4">Traveler Reviews</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our happy clients who explored the world with us.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
          {[
            {
              quote: "The Maldives trip was a dream come true! Everything was perfectly organized.",
              name: "— Sarah L.",
            },
            {
              quote: "I loved exploring Bali with their amazing local guides. Highly recommended!",
              name: "— Mark R.",
            },
          ].map((testimony, i) => (
            <motion.div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition" custom={i} variants={fadeUp}>
              <p className="text-gray-700 italic mb-4">"{testimony.quote}"</p>
              <h4 className="font-semibold text-blue-500">{testimony.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Home;
