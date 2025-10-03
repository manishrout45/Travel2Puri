import React from "react";

const Tour = () => {
  return (
    <div className="bg-gray-50">
      {/* SECTION 1 - Puri */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
              Puri Tour
            </span>
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
              Bhubaneswar Tour
            </span>
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
              Chilika Tour
            </span>
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
              Puri Side Scene
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-3">Puri</h2>
          <h3 className="text-2xl font-medium mb-2">
            Where Spirituality Meets the Sea
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Embark on a memorable journey to Puri, one of the most sacred and
            scenic destinations in Odisha. Known for its vibrant culture, ancient
            temples, golden beaches, and divine atmosphere, Puri offers the
            perfect mix of spirituality, heritage, and leisure. Whether you're a
            pilgrim, a history enthusiast, or a nature lover — Puri has something
            special for everyone.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            A perfect blend of spirituality, culture, and coastal beauty
          </p>
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
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
            alt="Main"
            className="col-span-2 rounded-lg object-cover h-64 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80"
            alt=""
            className="rounded-lg object-cover h-32 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80"
            alt=""
            className="rounded-lg object-cover h-32 w-full"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t my-10"></div>

      {/* SECTION 2 - Temps forts */}
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
        <div
          className="flex gap-6 overflow-x-auto pb-4"
          id="scrollContainer"
        >
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
