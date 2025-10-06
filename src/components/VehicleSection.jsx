import React from "react";


const vehicles = [
  {
    name: "Hotel Booking",
    description:
      "Book top hotels in Puri, Bhubaneswar, and nearby with great amenities.",
    image:
      "https://i.pinimg.com/1200x/7f/eb/63/7feb63a3026ec37bfc7d1d8ffe3dc873.jpg",
    link: "/hotelbooking", // ✅ unique link
  },
  {
    name: "Marriage Car Rent",
    description:
      "Hire premium decorated cars for weddings, special occasions, and luxury travel needs.",
    image:
      "https://i.pinimg.com/736x/f9/b3/a2/f9b3a2df4a120abec2c7544accc77e77.jpg",
    link: "/marriagecarrent", // ✅ unique link
  },
  {
    name: "Tour",
    description:
      "Vehicles for All Your Travel Needs – Bus, Car, Bike, Scooty, Traveller, Rally & Family Trips.",
    image:
      "https://kashiyatra.in/wp-content/uploads/2023/11/tempo-traveller-on-rent-in-varanasi.jpg",
    link: "/tourservice", // ✅ unique link
  },
];

const VehicleSection = () => {
  return (
    <section className="w-full bg-[#F3E6E6] py-12">
  <div className="max-w-7xl mx-auto px-4">
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
            {/* Button with unique link opens in new tab */}
            <a
              href={vehicle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition self-start"
            >
              More Details
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default VehicleSection;
