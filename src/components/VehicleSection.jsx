import React from "react";

const vehicles = [
  {
    name: "Hotel Booking",
    description:
      "Book top hotels in Puri, Bhubaneswar, and nearby with great amenities.",
    image:
      "https://i.pinimg.com/1200x/7f/eb/63/7feb63a3026ec37bfc7d1d8ffe3dc873.jpg",
  },
  {
    name: "Marriage Car Rent",
    description:
      "Hire premium decorated cars for weddings, special occasions, and luxury travel needs.",
    image:
      "https://i.pinimg.com/736x/f9/b3/a2/f9b3a2df4a120abec2c7544accc77e77.jpg",
  },
  {
    name: "Tour",
    description:
      "Plan memorable tours and trips with comfortable vehicles, guides, and complete travel assistance.",
    image:
      "https://kashiyatra.in/wp-content/uploads/2023/11/tempo-traveller-on-rent-in-varanasi.jpg",
  },
];

const VehicleSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#761421]">
          Our Services
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
            className="bg-[#1b1713] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">
                {vehicle.name}
              </h3>
              <p className="text-gray-400 flex-grow">{vehicle.description}</p>
              {/* Button always aligned at bottom */}
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition self-start">
                <a href="/booking">Book Now</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleSection;
