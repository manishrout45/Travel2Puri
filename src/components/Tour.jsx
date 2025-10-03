import React, { useState } from "react";

const Tour = () => {
  const [activeTour, setActiveTour] = useState("puri");

  const tourData = {
    puri: {
      title: "Puri",
      subtitle: "Where Spirituality Meets the Sea",
      desc1:
        "Embark on a memorable journey to Puri, one of the most sacred and scenic destinations in Odisha. Known for its vibrant culture, ancient temples, golden beaches, and divine atmosphere, Puri offers the perfect mix of spirituality, heritage, and leisure.",
      desc2:
        "Whether you're a pilgrim, a history enthusiast, or a nature lover — Puri has something special for everyone.",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
      ],
    },
    bhubaneswar: {
      title: "Bhubaneswar",
      subtitle: "The Temple City of India",
      desc1:
        "Bhubaneswar, the capital of Odisha, is home to magnificent temples such as Lingaraj, Mukteswar, and Rajarani Temple. The city beautifully blends ancient heritage with modernity.",
      desc2:
        "Known as the ‘Temple City of India’, Bhubaneswar is a hub for history lovers, spiritual seekers, and urban explorers alike.",
      images: [
        "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1569937301020-5a139f7a7d47?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1617196030309-83bcab9d8f76?auto=format&fit=crop&w=400&q=80",
      ],
    },
    chilika: {
      title: "Chilika",
      subtitle: "Asia’s Largest Brackish Water Lagoon",
      desc1:
        "Chilika Lake is a paradise for bird watchers and nature enthusiasts. Home to migratory birds, dolphins, and breathtaking islands, it offers a surreal experience.",
      desc2:
        "Take a boat ride, witness Irrawaddy dolphins, and explore the tranquil surroundings of this biodiversity hotspot.",
      images: [
        "https://images.unsplash.com/photo-1589307007233-dcccb8ef7d0f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
      ],
    },
    puriSide: {
      title: "Puri Side Scene",
      subtitle: "Beyond the Beaches & Temples",
      desc1:
        "Apart from the Jagannath Temple and Puri Beach, explore hidden gems like Raghurajpur (artist village), Pipili (applique craft), and Chilika’s Satapada.",
      desc2:
        "Experience authentic Odia culture, folk arts, and natural beauty in these nearby attractions.",
      images: [
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=400&q=80",
      ],
    },
  };

  const tour = tourData[activeTour];

  return (
    <div className="bg-gray-50">
      {/* SECTION 1 - Dynamic Tours */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Buttons + Content */}
        <div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setActiveTour("puri")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                activeTour === "puri"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Puri Tour
            </button>
            <button
              onClick={() => setActiveTour("bhubaneswar")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                activeTour === "bhubaneswar"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Bhubaneswar Tour
            </button>
            <button
              onClick={() => setActiveTour("chilika")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                activeTour === "chilika"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Chilika Tour
            </button>
            <button
              onClick={() => setActiveTour("puriSide")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                activeTour === "puriSide"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Puri Side Scene
            </button>
          </div>

          {/* Dynamic Content */}
          <h2 className="text-2xl font-bold mb-3">{tour.title}</h2>
          <h3 className="text-2xl font-medium mb-2">{tour.subtitle}</h3>
          <p className="text-sm leading-relaxed mb-4">{tour.desc1}</p>
          <p className="text-sm leading-relaxed mb-4">{tour.desc2}</p>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition">
              Book Your Trip
            </button>
            <a
              href="#"
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
      <div className="border-t my-10"></div>

      {/* SECTION 2 - Keep your existing "Temps forts" */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Temps forts
            </h2>
            <p className="text-sm text-gray-600 max-w-xl">
              Retrouvez ici les dernières actualités de la Communauté de communes
              et les événements à venir sur l'ensemble du territoire.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
              Tout l'agenda
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
              Toute l'actualité
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {/* Card 1 */}
          <div className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="rounded-t-lg h-40 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">Publié le 13.05</p>
              <h3 className="font-semibold text-sm">
                Lancement du programme "Forêt vivante"
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="rounded-t-lg h-40 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">Publié le 12.05</p>
              <h3 className="font-semibold text-sm">
                29.06 Journée nature & patrimoine
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="rounded-t-lg h-40 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">Publié le 12.05</p>
              <h3 className="font-semibold text-sm">
                Ouverture de France Service
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tour;
