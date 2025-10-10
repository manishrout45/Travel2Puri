import React from "react";
import { FaHotel, FaWifi, FaCar, FaConciergeBell, FaPhoneAlt } from "react-icons/fa";

const hotels = [
  {
    name: "The Grand Puri",
    location: "Puri Beach Road",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jagannath Palace",
    location: "Bhubaneswar City Center",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Seaside Resort",
    location: "Chilika Lake View",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
  },
];

const HotelBooking = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ✅ Hero Section (without search bar) */}
      <section className="relative bg-gradient-to-r from-[#761421] to-[#a83246] text-white py-20 px-6 text-center overflow-hidden mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find & Book Luxury Hotels in Minutes
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Best deals on top-rated hotels in Puri, Bhubaneswar & nearby.
          </p>
        </div>
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

      {/* ✅ Featured Hotels */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Hotels
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{hotel.name}</h3>
                <p className="text-gray-500">{hotel.location}</p>
                {/* Price hidden - show "Call for Price" instead */}
                <p className="text-[#008a17] font-semibold mt-2">
                  Get Better Deal with Us
                </p>
                    <button
                    onClick={() => window.location.href = "tel:+918093469315"} // replace with your number
                    className="mt-4 w-full bg-[#761421] text-white py-2 rounded-lg hover:bg-[#5a0f19] transition flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt className="text-white" />
                    Call Us
                  </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaHotel className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Top Hotels</h3>
              <p className="text-gray-500 text-sm mt-2">
                Verified premium hotels with top-class service.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaWifi className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Free WiFi</h3>
              <p className="text-gray-500 text-sm mt-2">
                Stay connected with high-speed internet.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaCar className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Easy Transport</h3>
              <p className="text-gray-500 text-sm mt-2">
                Hassle-free cab & travel services.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaConciergeBell className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-gray-500 text-sm mt-2">
                Our team is available anytime to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="bg-[#761421] text-white text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Book Your Stay?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Call us today for exclusive hotel deals & bookings.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Call to Book
        </button>
      </section>
    </div>
  );
};

export default HotelBooking;
