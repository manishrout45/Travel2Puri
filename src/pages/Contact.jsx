import React from "react";

const Contact = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/contact/contact.jpg')", // change with your image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Contact
        </h1>
      </section>

      {/* ✅ Contact Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b1713] mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Have questions or want to plan your next trip? We’d love to hear from you.
            </p>
          </div>

          {/* Contact Info + Form */}
          <section className="bg-white text-black py-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div>
                <p className="text-yellow-500 uppercase text-sm mb-3">Clients Say</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  Drive Your Dream, <br /> We’ll Handle the Details
                </h2>
                <p className="text-gray-400 mb-8">
                  Have questions or need a custom plan? Our team is here to guide you
                  through every step—whether it’s a quick getaway, a luxury event, or
                  a long-term elite arrangement.
                </p>

                {/* Support Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-yellow-500 text-black p-3 rounded-lg">📞</span>
                    <div>
                      <p className="text-gray-400 text-sm">Emergency Support Line</p>
                      <p className="font-bold text-lg">+1-234-567-890</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="bg-yellow-500 text-black p-3 rounded-lg">✉️</span>
                    <div>
                      <p className="text-gray-400 text-sm">General Inquiries</p>
                      <p className="font-bold text-lg">support@getngo.com</p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Chat with our support team in real-time, Monday to Saturday (8 AM – 8 PM).
                  </p>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-[#1b1713] p-8 rounded-lg">
                <form className="space-y-6">
                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm text-yellow-500">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-yellow-500">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@companyname.com"
                        className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                      />
                    </div>
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm text-yellow-500">Phone</label>
                      <input
                        type="text"
                        placeholder="e.g. +62 123 456"
                        className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-yellow-500">Location</label>
                      <input
                        type="text"
                        placeholder="e.g. Bandar Lampung"
                        className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 text-sm text-yellow-500">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Write your message or Questions here"
                      className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                    ></textarea>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-yellow-500 bg-gray-800 border-gray-600 focus:ring-yellow-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-400">
                      I have read and accepted terms and privacy
                    </label>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md transition"
                  >
                    Discover Now
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Map Section */}
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
        </div>
      </div>
    </>
  );
};

export default Contact;
