import { motion } from "framer-motion";
import { useState } from "react";

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
    <motion.section
      className="max-w-3xl mx-auto py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="text-center mb-10" variants={fadeUp}>
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Book Your Trip</h2>
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
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
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
  );
};

export default Booking;
