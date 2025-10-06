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
      src: "https://t4.ftcdn.net/jpg/01/95/77/37/360_F_195773705_i0ScHi0KBMC7NactfvSkHK9FMME4FgVn.jpg",
      alt: "Jagannath Temple",
    },
    {
      src: "https://media.gettyimages.com/id/668246628/photo/decorated-dromedary-used-to-carry-tourists-on-the-beach.jpg?s=612x612&w=0&k=20&c=PPSEN1XEkgCpl4YWfEFuqhJSdt-GGdMF7l4aTk_vDGk=",
      alt: "Puri Beach",
    },
    {
      src: "https://w0.peakpx.com/wallpaper/501/251/HD-wallpaper-the-sun-temple-konark-orissa-india-architecture-surya-sun-ancient-hinduism-lord-india-sun-god-skies-temple.jpg",
      alt: "Konark Sun Temple",
    },
    {
      src: "https://media.istockphoto.com/id/1218923068/photo/chilika-lake-one-of-the-most-favourite-tourist-spot-of-india.jpg?s=612x612&w=0&k=20&c=6NuHOLts_i-V_ihN1FaXvBzTTdLOKMbYg1oHO-Dueg8=",
      alt: "Chilika Lake",
    },
    {
      src: "https://lakshmisharath.com/wp-content/uploads/2017/05/raghurajpur-patachitra-pg-1024x678.jpg",
      alt: "Raghurajpur Village Art",
    },
    {
      src: "https://d3pc1xvrcw35tl.cloudfront.net/images/1200x900/sudarsan-pattnaik-sandart-jagannath-rath-yatra6_201907262621.jpg",
      alt: "Sand Art Festival, Puri",
    },
    {
      src: "https://media.istockphoto.com/id/1169379804/photo/dynamic-golden-sea-beach-at-puri-odisha-india.jpg?s=612x612&w=0&k=20&c=AflqOTLsGueNKkDLHmdFr7NhpTrfVnboEwG-30r4gFs=",
      alt: "Golden Beach, Puri",
    },
    {
      src: "https://i.pinimg.com/736x/e2/a1/55/e2a15589349583a23161a89a2b689f08.jpg",
      alt: "Food",
    },
  ];

  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center mt-20"
        style={{
          backgroundImage:
            "url('/images/gallery/gallery.jpg')",
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
          <h2 className="text-4xl font-bold text-[#761421] mb-4">
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
