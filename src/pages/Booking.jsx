import { motion } from "framer-motion";
import { useState } from "react";
import TopDestinations from "../components/TopDestinations";

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
    alert("Booking submitted successfully!");
    console.log(formData);
  };

  return (
    <>
     <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/booking/booking.jpg')", // change with your image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Booking
        </h1>
      </section>
      {/* How to Book Section */}
      <section className="bg-[#761421] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
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

            {/* Car Image */}
            <div className="mt-10">
              <img
                src="src/assets/images/luxuryCar.png"
                alt="Luxury Car"
                className="w-full max-w-lg"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-[#f8f7d1] p-6 rounded-md">
              <span className="block text-gray-400 text-lg font-bold">01</span>
              <h3 className="text-xl font-semibold mt-2 text-black">Choose Your Car</h3>
              <p className="text-gray-400 mt-3 text-sm">
                Browse our curated selection of luxury & exotic cars and pick
                your perfect match.
              </p>
              <button className="text-yellow-400 mt-4 text-sm font-semibold hover:underline">
                View Car
              </button>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f8f7d1] p-6 rounded-md">
              <span className="block text-gray-400 text-lg font-bold">02</span>
              <h3 className="text-xl font-semibold mt-2 text-black">
                Select Dates & Location
              </h3>
              <p className="text-gray-400 mt-3 text-sm">
                Enter your rental dates and choose pick-up or delivery options
                that suit you best.
              </p>
              <button className="text-yellow-400 mt-4 text-sm font-semibold hover:underline">
                Book Car
              </button>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f8f7d1] p-6 rounded-md">
              <span className="block text-gray-400 text-lg font-bold">03</span>
              <h3 className="text-xl font-semibold mt-2 text-black">
                Confirm & Pay Securely
              </h3>
              <p className="text-gray-400 mt-3 text-sm">
                Review your booking details, complete secure payment, and get
                instant confirmation.
              </p>
              <button className="text-yellow-400 mt-4 text-sm font-semibold hover:underline">
                Confirm Now
              </button>
            </div>

            {/* Step 4 */}
            <div className="bg-[#f8f7d1] p-6 rounded-md">
              <span className="block text-gray-400 text-lg font-bold">04</span>
              <h3 className="text-xl font-semibold mt-2 text-black">Enjoy the Drive</h3>
              <p className="text-gray-400 mt-3 text-sm">
                Pick up your car (or have it delivered) and experience the
                thrill of luxury driving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TopDestinations />

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
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
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
              <label className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
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
            <label className="block text-gray-700 font-medium mb-2">
              Select Package
            </label>
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
              <option value="Odisha Heritage Explorer">
                Odisha Heritage Explorer
              </option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Travel Date
              </label>
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
              <label className="block text-gray-700 font-medium mb-2">
                Number of Guests
              </label>
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
