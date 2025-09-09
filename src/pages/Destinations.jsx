import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Destinations = () => {
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

  return (
    <motion.section
      className="max-w-7xl mx-auto py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* About Section */}
      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Puri</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Puri, located on the eastern coast of Odisha, is one of India’s most
          cherished spiritual and cultural destinations. Known as the home of
          Lord Jagannath, Puri is part of the sacred Char Dham pilgrimage.
          Beyond its religious significance, the city offers golden beaches,
          vibrant local traditions, UNESCO heritage monuments, and the
          breathtaking Chilika Lake. It is a unique blend of spirituality,
          culture, and natural beauty, making it a must-visit for travelers
          worldwide.
        </p>
      </motion.div>

      {/* Destinations Section */}
      <motion.div className="text-center mb-14" variants={fadeUp}>
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Top Destinations in Puri
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore the spiritual, cultural, and natural beauty of Puri, Odisha.
        </p>
      </motion.div>

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
  );
};

export default Destinations;
