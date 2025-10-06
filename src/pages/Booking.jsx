import { motion } from "framer-motion";
import { useState } from "react";
import TopDestinations from "../components/TopDestinations";
import VehicleSection from "../components/VehicleSection";
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

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/booking/booking.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Booking
        </h1>
      </section>

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
      <VehicleSection />

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
      src="/images/black-isolated-car.png"
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
