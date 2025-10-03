import React, { useState } from "react";

const Tour = () => {
  const tours = {
    puri: {
      title: "Puri Tour",
      subtitle: "Where Spirituality Meets the Sea",
      desc: "Embark on a memorable journey to Puri, one of the most sacred and scenic destinations in Odisha. Known for its vibrant culture, ancient temples, golden beaches, and divine atmosphere.",
      highlight: "A perfect blend of spirituality, culture, and coastal beauty",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
      ],
      places: [
        {
          title: "Jagannath Temple",
          date: "Published on 01.10",
          img: "https://images.unsplash.com/photo-1583778173701-b8e9c235a491?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Golden Beach",
          date: "Published on 02.10",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Konark Sun Temple",
          date: "Published on 03.10",
          img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    bhubaneswar: {
      title: "Bhubaneswar Tour",
      subtitle: "The Temple City of India",
      desc: "Discover Bhubaneswar, the capital of Odisha, renowned for its architectural marvels, temples, and urban charm.",
      highlight: "A vibrant mix of history and modernity",
      images: [
        "https://images.unsplash.com/photo-1596803244280-03e645fa90d8?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=80",
      ],
      places: [
        {
          title: "Lingaraj Temple",
          date: "Published on 05.10",
          img: "https://images.unsplash.com/photo-1622031059999-5eac191f8561?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Nandankanan Zoo",
          date: "Published on 06.10",
          img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Udayagiri & Khandagiri",
          date: "Published on 07.10",
          img: "https://images.unsplash.com/photo-1583778173701-b8e9c235a491?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    chilika: {
      title: "Chilika Tour",
      subtitle: "Asia's Largest Brackish Water Lagoon",
      desc: "Explore the breathtaking beauty of Chilika, famous for birdwatching, dolphins, and serene boat rides.",
      highlight: "A paradise for nature lovers and birdwatchers",
      images: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
      ],
      places: [
        {
          title: "Satapada",
          date: "Published on 08.10",
          img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Kalijai Temple",
          date: "Published on 09.10",
          img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Bird Island",
          date: "Published on 10.10",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    puriSide: {
      title: "Puri Side Scene",
      subtitle: "Hidden Gems Around Puri",
      desc: "Beyond temples and beaches, explore lesser-known yet mesmerizing locations around Puri.",
      highlight: "Unwind in unexplored beauty",
      images: [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
      ],
      places: [
        {
          title: "Raghurajpur Heritage Village",
          date: "Published on 11.10",
          img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Pipili Applique Market",
          date: "Published on 12.10",
          img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Chilika Satapada",
          date: "Published on 13.10",
          img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  };

  const [activeTour, setActiveTour] = useState("puri");
  const tour = tours[activeTour];

  return (
    <div className="bg-gray-50">
      {/* SECTION 1 - TOUR DETAILS */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(tours).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTour(key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  activeTour === key
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {tours[key].title}
              </button>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-3">{tour.title}</h2>
          <h3 className="text-2xl font-medium mb-2">{tour.subtitle}</h3>
          <p className="text-sm leading-relaxed mb-4">{tour.desc}</p>
          <p className="text-sm leading-relaxed mb-4">{tour.highlight}</p>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition">
              Book Your Trip
            </button>
            <a
              href="#section2"
              className="text-blue-600 font-medium hover:underline flex items-center"
            >
              See another location →
            </a>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={tour.images[0]}
            alt="Main"
            className="col-span-2 rounded-lg object-cover h-64 w-full"
          />
          <img
            src={tour.images[1]}
            alt=""
            className="rounded-lg object-cover h-32 w-full"
          />
          <img
            src={tour.images[2]}
            alt=""
            className="rounded-lg object-cover h-32 w-full"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t my-2"></div>

      {/* SECTION 2 - PLACES */}
      <section id="section2" className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {tour.title} Attractions
            </h2>
            <p className="text-sm text-gray-600 max-w-xl">
              Explore the highlights and must-visit places of {tour.title}.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {tour.places.map((place, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
            >
              <img
                src={place.img}
                alt={place.title}
                className="rounded-t-lg h-40 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{place.date}</p>
                <h3 className="font-semibold text-sm">{place.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tour;
