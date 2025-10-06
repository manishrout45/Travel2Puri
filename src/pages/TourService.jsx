import React from "react";

const TourService = () => {
  const offers = [
    {
      city: "Hong Kong, Hong Kong",
      price: "$557",
      img: "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    },
    {
      city: "Tokyo, Japan",
      price: "$436",
      img: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    },
    {
      city: "Bangkok, Thailand",
      price: "$612",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
      city: "Seoul, South Korea",
      price: "$505",
      img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
    },
  ];

  const categories = [
    { name: "Beach", price: "from $459", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "City", price: "from $312", img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade" },
    { name: "Health", price: "from $602", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773" },
    { name: "Ski", price: "from $536", img: "https://images.unsplash.com/photo-1508264165352-258a6c69bcca" },
    { name: "Tour", price: "from $435", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "Adventure", price: "from $673", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  ];

  const destinations = [
    { name: "Hong Kong", price: "from $557", img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad" },
    { name: "Bangkok", price: "from $453", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9" },
    { name: "Singapore", price: "from $715", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "United Arab Emirates", price: "from $623", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
    { name: "London", price: "from $802", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
    { name: "Paris", price: "from $693", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  ];

  const blogs = [
    {
      title: "Beautiful Beaches in Thailand to Spark Your Wanderlust",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "14 Absolutely magnificent waterfalls to see around the world",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "10 Best Honeymoon Destinations for Every Type of Couple",
      img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    },
    {
      title: "Bengaluru Travel Guide: Exploring India’s Silicon Valley",
      img: "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
        <section
        className="relative w-full h-[60vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://apps.odishatourism.gov.in/Application/uploadDocuments/TravelTrailDoc/Banner20190717_172344.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Tour
        </h1>
      </section>
      {/* Special Offers */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Special Offers</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            View All
          </a>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
            >
              <img
                src={offer.img}
                alt={offer.city}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{offer.city}</h3>
                <p className="text-gray-600 text-xs mt-1">{offer.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative h-28 rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-sm">
                <p className="font-semibold">{cat.name}</p>
                <span className="text-xs">{cat.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Popular destinations</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow hover:shadow-lg"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
                <h3 className="font-semibold">{dest.name}</h3>
                <span className="text-sm">{dest.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Blog</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="relative h-56 rounded-xl overflow-hidden group shadow hover:shadow-lg"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-sm font-semibold">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourService;
