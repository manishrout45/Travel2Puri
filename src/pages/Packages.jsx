import React from "react";
import { motion } from "framer-motion";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

// ✅ Correct data (renamed to destinations)
const destinations = [
  {
    name: "Jagannath Temple",
    desc: "One of the Char Dham pilgrimage sites, dedicated to Lord Jagannath and famous for the Rath Yatra.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jagannath_Temple_Puri.jpg",
  },
  {
    name: "Puri Beach",
    desc: "Golden sands and spiritual vibes, perfect for sunrise views, beach walks, and seaside relaxation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Puri_Beach_Odisha.jpg",
  },
  {
    name: "Konark Sun Temple",
    desc: "A UNESCO World Heritage site, known for its magnificent stone chariot and intricate carvings.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Konark_Sun_Temple%2C_Odisha.jpg",
  },
  {
    name: "Chilika Lake",
    desc: "Asia’s largest brackish water lagoon, famous for birdwatching, dolphins, and scenic boat rides.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Chilika_Lake.jpg",
  },
  {
    name: "Raghurajpur Heritage Village",
    desc: "A crafts village renowned for Pattachitra paintings, palm leaf engravings, and cultural performances.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Raghurajpur_pattachitra.jpg",
  },
];

function Packages() {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/4/4e/Puri_Beach_Odisha.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Packages
        </h1>
      </section>
      {/* Privacy Policy Button */}
      <a
        href="/policies"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed -right-10 top-[50%] transform -translate-y-1/2 rotate-[-90deg] bg-[#761421] px-4 py-2 rounded-tl-lg rounded-tr-lg shadow-lg z-50 animate-blink-text"
      >
        Privacy Policy
      </a>
      {/* ✅ Packages Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Top Destinations in Puri
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the spiritual, cultural, and natural beauty of Puri, Odisha.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place, i) => (
            <motion.div
              key={place.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              custom={i}
              variants={fadeUp}
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-600">{place.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default Packages;
