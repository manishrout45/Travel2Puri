import React from "react";

const vehicles = [
  {
    name: "Cars",
    description: "Comfortable cars available for marriages, tours, and local travel.",
    image: "https://images.pexels.com/photos/29057945/pexels-photo-29057945.jpeg?cs=srgb&dl=pexels-shantumsingh-29057945.jpg&fm=jpg", // replace with your image path
  },
  {
    name: "Buses",
    description: "Spacious buses perfect for group tours, rallies, and large events.",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/8/DW/IP/PH/3525736/7c48a1b8-27cf-489d-b0e6-1fb9c672c1ef.jpg",
  },
  {
    name: "Travellers",
    description: "Luxury travellers for family picnics, outstation trips, and group travel.",
    image: "https://kashiyatra.in/wp-content/uploads/2023/11/tempo-traveller-on-rent-in-varanasi.jpg",
  },
];

const VehicleSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#761421]">
          Our Vehicles for Rent
        </h2>
        <p className="text-gray-800 mt-2 max-w-2xl mx-auto">
          We provide vehicles for marriages, picnics, tours, travel, rallies, and more.
        </p>
      </div>

      {/* Vehicle Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="bg-[#1b1713] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {vehicle.name}
              </h3>
              <p className="text-gray-400">{vehicle.description}</p>
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleSection;
