import React from "react";
import { FaCarSide, FaCrown, FaUserFriends, FaClock } from "react-icons/fa";

const cars = [
  {
    name: "Royal Sedan",
    description: "Luxury sedan decorated with flowers & ribbons, perfect for weddings.",
    image:
      "https://images.unsplash.com/photo-1622462384812-3b5a0ebf4d43?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Classic Vintage",
    description: "Vintage style car with royal decorations for grand weddings.",
    image:
      "https://images.unsplash.com/photo-1605559424843-b2310d1ba82f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Premium SUV",
    description: "Spacious and stylish SUV for family & wedding guests.",
    image:
      "https://images.unsplash.com/photo-1549921296-3a0f6e401f03?auto=format&fit=crop&w=800&q=80",
  },
];

const MarriageCarRent = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-[#761421] to-[#a83246] text-white py-20 px-6 text-center mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Luxury Marriage Car Rentals
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Make your wedding day unforgettable with our premium decorated cars.
          </p>
        </div>
      </section>

      {/* ✅ Car Options */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Choose Your Wedding Ride
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{car.description}</p>
                <p className="text-[#761421] font-semibold mt-2">
                  Call us for pricing
                </p>
                <button className="mt-4 w-full bg-[#761421] text-white py-2 rounded-lg hover:bg-[#5a0f19] transition">
                  Book Now
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
              <FaCrown className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Premium Cars</h3>
              <p className="text-gray-500 text-sm mt-2">
                Luxury sedans, vintage classics & premium SUVs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaUserFriends className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">For All Events</h3>
              <p className="text-gray-500 text-sm mt-2">
                Weddings, receptions & special occasions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaCarSide className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Decorated Rides</h3>
              <p className="text-gray-500 text-sm mt-2">
                Beautifully decorated with flowers & ribbons.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaClock className="text-[#761421] text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">On-Time Service</h3>
              <p className="text-gray-500 text-sm mt-2">
                Reliable cars delivered exactly on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="bg-[#761421] text-white text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Book Your Dream Wedding Car Today!
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Call us now to get the best deals for your special day.
        </p>
        <a
          href="tel:+919876543210"
          className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          📞 Call to Book
        </a>
      </section>
    </div>
  );
};

export default MarriageCarRent;
