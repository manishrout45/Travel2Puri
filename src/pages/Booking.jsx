import { motion } from "framer-motion";
import { useState } from "react";
import TopDestinations from "../components/TopDestinations";

import OdishaMap from "../components/Odishamap";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    date: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (country code included, no "+" or spaces)
    const phoneNumber = "918093469315"; 

    // Format message for WhatsApp
    const message = `*New Booking Request*%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Package: ${formData.package}%0A
Date: ${formData.date}%0A
Guests: ${formData.guests}`;

    // Open WhatsApp with pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  // ✅ Service Item with overlayed text
  const ServiceItem = ({ imgSrc, title, description }) => (
    <div className="relative rounded-xl overflow-hidden group">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-64 sm:h-72 md:h-80 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );

  const services = [
  {
    name: "Hotel Booking",
    description: "Book top hotels in Puri, Bhubaneswar, and nearby with great amenities.",
    image: "https://i.pinimg.com/1200x/7f/eb/63/7feb63a3026ec37bfc7d1d8ffe3dc873.jpg",
    link: "/hotelbooking",
  },
  {
    name: "Marriage Car Rent",
    description: "Hire premium decorated cars for weddings, special occasions, and luxury travel needs.",
    image: "https://i.pinimg.com/1200x/43/be/13/43be13b4bfe8cb6f01e1378a7cfad33b.jpg",
    link: "/marriagecarrent",
  },
  {
    name: "Tour Travel",
    description: "Vehicles for all your travel needs – Bus, Car, Bike, Scooty, Traveller, Rally & Family Trips.",
    image: "https://kashiyatra.in/wp-content/uploads/2023/11/tempo-traveller-on-rent-in-varanasi.jpg",
    link: "/tourservice",
  },
];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center mt-20"
        style={{
          backgroundImage: "url('https://images5.alphacoders.com/111/thumb-1920-1117541.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Booking
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

        {/* 💬 WhatsApp Floating Button */}
<a
  href="https://wa.me/918093469315" // 👉 Replace with your WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-8 h-8"
  />
</a>

      {/* Services Section 
      <section className="bg-[#F3E6E6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#761421]">
              Services
            </h2>
            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              We provide reliable and comfortable vehicle rental services for every occasion.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start md:items-center">
            {/* Left Services 
            <div className="flex flex-col gap-10 text-center order-2 md:order-1">
              <ServiceItem
                imgSrc="https://packagewale.com/wp-content/uploads/2022/11/c26e0515284a987a1dc63d2b59d79be6.png"
                title="Tour Packages"
                description="Comfortable vehicles for city tours, sightseeing, and long holiday packages."
              />
              <ServiceItem
                imgSrc="/images/wedding.png"
                title="Wedding Rentals"
                description="Elegant cars, buses, and travellers for wedding ceremonies and guest transport."
              />
              <ServiceItem
                imgSrc="/images/family.png"
                title="Family Travel"
                description="Spacious and reliable vehicles for family vacations, trips, and outstation travel."
              />
            </div>

            {/* Car Image 
            <div className="flex justify-center order-1 md:order-2">
              <img
                src="/images/serviceCar.png"
                alt="Car Top View"
                className="w-48 sm:w-64 md:w-72 lg:w-96"
              />
            </div>

            {/* Right Services 
            <div className="flex flex-col gap-10 text-center order-3">
              <ServiceItem
                imgSrc="/images/picnic.png"
                title="Picnic Trips"
                description="Book vehicles for day picnics, weekend getaways, and group outings."
              />
              <ServiceItem
                imgSrc="/images/rally.png"
                title="Rally Transport"
                description="Reliable vehicle rentals for rallies, campaigns, and large group gatherings."
              />
              <ServiceItem
                imgSrc="/images/custom.png"
                title="Custom Rentals"
                description="Flexible rental options for events, corporate functions, or any travel need."
              />
            </div>
          </div>
        </div>
      </section> */}



      <OdishaMap />
      
          {/*Service Section */}
          <section className="w-full  py-16 text-center bg-[#F3E6E6]">
            <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
        Our Services
      </h2>
      <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
        We provide vehicles for marriages, picnics, tours, travel, rallies, and more.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with slide-up effect */}
            <div className="absolute inset-0 flex flex-col justify-end">
              {/* Bottom bar always visible */}
              <div className="bg-black/60 text-center py-3">
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
              </div>

              {/* Hidden panel that slides up on hover */}
              <div className="bg-black/70 text-center px-4 py-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gray-200 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>  


      {/* How to Book Section */}
      <section className="bg-[#761421] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
  <p className="text-yellow-400 uppercase font-semibold tracking-widest">
    How to Book
  </p>
  <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
    Book Your Luxury <br /> Ride in Minutes
  </h2>
  <p className="text-gray-400 mt-6 max-w-md">
    Simple, fast, and seamless — from browsing our exotic collection to
    hitting the road with your dream car.
  </p>

  <div className="mt-10 relative">
    {/* 🔹 Decorative Chakra behind car */}
    <img
      src="/images/chakra.png"
      alt="Decorative Chakra"
      className="absolute -top-20 -left-28 w-[560px] opacity-10 pointer-events-none select-none"
    />

    {/* 🔹 Car image (always above) */}
    <img
      src="/images/booking/start Your Journey.png"
      alt="Luxury Car"
      className="w-full max-w-lg relative z-10"
    />
  </div>
</div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Steps */}
            {[
              {
                step: "01",
                title: "Choose Your Car",
                desc: "Browse our curated selection of luxury & exotic cars and pick your perfect match.",
              },
              {
                step: "02",
                title: "Select Dates & Location",
                desc: "Enter your rental dates and choose pick-up or delivery options that suit you best.",
              },
              {
                step: "03",
                title: "Confirm & Pay Securely",
                desc: "Review your booking details, complete secure payment, and get instant confirmation.",
              },
              {
                step: "04",
                title: "Enjoy the Drive",
                desc: "Pick up your car (or have it delivered) and experience the thrill of luxury driving.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#F3E6E6] p-6 rounded-md">
                <span className="block text-[#761421] text-lg font-bold">{item.step}</span>
                <h3 className="text-xl font-semibold mt-2 text-black">{item.title}</h3>
                <p className="text-gray-400 mt-3 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* <TopDestinations />  */}

      {/* Booking Form Section */}
      <motion.section
        className="max-w-3xl mx-auto py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-10" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-[#761421] mb-4">
            Book Your Trip
          </h2>
          <p className="text-gray-600 text-lg">
            Fill in the details below to confirm your booking.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 space-y-6"
          variants={fadeUp}
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Select Package</label>
            <select
              name="package"
              required
              value={formData.package}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">-- Choose a Package --</option>
              <option value="Weekend Puri Getaway">Weekend Puri Getaway</option>
              <option value="Spiritual Puri Tour">Spiritual Puri Tour</option>
              <option value="Odisha Heritage Explorer">Odisha Heritage Explorer</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Travel Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Confirm Booking
          </motion.button>
        </motion.form>
      </motion.section>
    </>
  );
};

export default Booking;
