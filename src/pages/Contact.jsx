import React from "react";

const Contact = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center mt-20"
        style={{
          backgroundImage: "url('/images/contact/contact.jpg')", // replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Contact
        </h1>
      </section>

      {/* 📜 Privacy Policy Button */}
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

      {/* ✅ Contact Section */}
      <section className="bg-[#F3E6E6] text-black py-20 w-screen">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <p className="text-yellow-500 uppercase text-sm mb-3">Clients Say</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Explore Puri with Comfort, <br /> We’ll Take Care of Your Journey
            </h2>
            <p className="text-gray-600 mb-8">
              At <span className="font-semibold text-[#761421]">TripToPuri</span>, we
              offer the best <span className="font-medium">tour packages</span> and
              reliable <span className="font-medium">car & vehicle rental</span>{" "}
              services to make your travel hassle-free. Whether it’s a family vacation,
              group pilgrimage, or a weekend getaway, we ensure every trip is safe,
              comfortable, and memorable.
            </p>

            {/* Support Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-yellow-500 text-black p-3 rounded-lg">📞</span>
                <div>
                  <p className="text-gray-500 text-sm">Emergency Support Line</p>
                  <p className="font-bold text-lg">+91 809 346 9315</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-yellow-500 text-black p-3 rounded-lg">✉️</span>
                <div>
                  <p className="text-gray-500 text-sm">General Inquiries</p>
                  <p className="font-bold text-lg">dibyapaikray@gmail.com</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm">
                Chat with our support team in real-time, Monday to Saturday (8 AM – 8 PM).
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#761421] outline-none py-2 text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#761421] outline-none py-2 text-gray-800 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#761421] outline-none py-2 text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#761421] outline-none py-2 text-gray-800 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message or questions here"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-[#761421] outline-none py-2 text-gray-800 placeholder-gray-500"
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-[#761421] border-gray-400 focus:ring-[#761421]"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I have read and accepted terms and privacy
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-[#761421] hover:bg-[#5a0f19] text-white font-medium px-6 py-3 rounded-md transition"
              >
                Discover Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Find Us Here
        </h3>
        <div style={{ width: "100%", height: "450px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.530161959194!2d85.8310591752866!3d19.81390998153417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c62f3d1f2e63%3A0xe91c7a9bfe0a98f3!2sJagannath%20Temple%2C%20Puri%2C%20Odisha%20752101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Puri City Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
