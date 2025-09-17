import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Gallery = () => {
  const images = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jagannath_Temple_Puri.jpg",
      alt: "Jagannath Temple",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Puri_Beach_Odisha.jpg",
      alt: "Puri Beach",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Konark_Sun_Temple%2C_Odisha.jpg",
      alt: "Konark Sun Temple",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Chilika_Lake.jpg",
      alt: "Chilika Lake",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Raghurajpur_pattachitra.jpg",
      alt: "Raghurajpur Village Art",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Sand_art_international_festival_Puri.jpg",
      alt: "Sand Art Festival, Puri",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Golden_Beach_Puri.jpg",
      alt: "Golden Beach, Puri",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Puri_Street_Food_Chaat.jpg",
      alt: "Local Street Food",
    },
  ];

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
          Gallery
        </h1>
      </section>

      {/* ✅ Gallery Section */}
      <motion.section
        className="max-w-7xl mx-auto py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-14" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Travel Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the vibrant culture, heritage, and natural beauty of Puri
            through our gallery.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
              custom={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Gallery;
