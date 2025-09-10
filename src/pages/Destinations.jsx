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
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* About Section */}
<motion.div
  className="relative text-center mb-16  overflow-hidden"
  variants={fadeUp}
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shri_Jagannatha_Temple.jpg"
      alt="Puri Beach"
      className="w-full h-full object-cover"
    />
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>

  {/* Text Content */}
  <div className="relative z-10 p-8">
    <h2 className="text-4xl font-bold text-blue-400 my-12">About Us</h2>
    <p className="text-gray-100 max-w-3xl mx-auto text-lg leading-relaxed">
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


      {/* Service Section */}
      <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Services
          </h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            diam eiusmod tempor magna aliqua sed ut enim ad minim veniam,
            quis nostrud.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Services */}
          <div className="flex flex-col gap-12 text-center  order-2 lg:order-1">
            <div>
              <div className="flex items-center justify-center  gap-3">
                <span className="text-3xl">🎁</span>
                <h3 className="font-semibold text-lg">Gift Transport</h3>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do diam eiusmod tempor magna aliqua sed ut enim ad minim
                veniam, quis nostrud.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center  gap-3">
                <span className="text-3xl">✈️</span>
                <h3 className="font-semibold text-lg">Airport Transfer</h3>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do diam eiusmod tempor magna aliqua sed ut enim ad minim
                veniam, quis nostrud.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center  gap-3">
                <span className="text-3xl">💼</span>
                <h3 className="font-semibold text-lg">Luxury Transport</h3>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do diam eiusmod tempor magna aliqua sed ut enim ad minim
                veniam, quis nostrud.
              </p>
            </div>
          </div>

          {/* Car Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src="src/assets/images/serviceCar.png"
              alt="Car Top View"
              className="w-64 md:w-80 lg:w-96"
            />
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-12 text-center  order-3">
            <div>
              <div className="flex items-center justify-center  gap-3">
                <span className="text-3xl">💍</span>
                <h3 className="font-semibold text-lg">Wedding Trip</h3>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do diam eiusmod tempor magna aliqua sed ut enim ad minim
                veniam, quis nostrud.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center  gap-3">
                <span className="text-3xl">🧑‍✈️</span>
                <h3 className="font-semibold text-lg">Driver</h3>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do diam eiusmod tempor magna aliqua sed ut enim ad minim
                veniam, quis nostrud.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center  gap-3">
                <span className="text-3xl">🎂</span>
                <h3 className="font-semibold text-lg">Birthday Gifts</h3>
              </div>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do diam eiusmod tempor magna aliqua sed ut enim ad minim
                veniam, quis nostrud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


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
