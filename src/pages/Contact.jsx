import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Have questions or want to plan your next trip? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Reach out to us for any travel inquiries, booking support, or
              special requests.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Address:</strong> Puri, Odisha, India
              </li>
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Email:</strong> info@puri-travels.com
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Find Us Here
          </h3>
          <div className="w-full h-64 bg-gray-300 rounded-2xl flex items-center justify-center text-gray-600">
            Google Map Embed Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
