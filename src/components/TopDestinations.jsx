import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    name: "El Nido",
    description: "Beach paradise",
    price: "₱4,999",
    rating: "4.8 (2k)",
    region: "Palawan, Region",
    image: "/images/el-nido.jpg",
  },
  {
    name: "Baguio City",
    description: "Mount Getaway",
    price: "₱3,200",
    rating: "4.6 (950)",
    region: "Benguet, Region",
    image: "/images/baguio.jpg",
  },
  {
    name: "Siargao",
    description: "Surf & Chill",
    price: "₱5,500",
    rating: "4.9 (2k)",
    region: "Surigao del Norte, Region",
    image: "/images/siargao.jpg",
  },
  {
    name: "Vigan",
    description: "Heritage City",
    price: "₱2,250",
    rating: "4.7 (780)",
    region: "Ilocos Sur, Region",
    image: "/images/vigan.jpg",
  },
  {
    name: "Cebu City",
    description: "Queen City of the South",
    price: "₱3,800",
    rating: "4.8 (1.5k)",
    region: "Cebu, Region",
    image: "/images/cebu.jpg",
  },
  {
    name: "Boracay",
    description: "White Sand Paradise",
    price: "₱6,000",
    rating: "4.9 (3k)",
    region: "Aklan, Region",
    image: "/images/boracay.jpg",
  },
  {
    name: "Bohol",
    description: "Chocolate Hills",
    price: "₱4,200",
    rating: "4.7 (1.2k)",
    region: "Bohol, Region",
    image: "/images/bohol.jpg",
  },
  {
    name: "Davao City",
    description: "Durian Capital",
    price: "₱3,500",
    rating: "4.6 (1.1k)",
    region: "Davao del Sur, Region",
    image: "/images/davao.jpg",
  },
];

const TopDestinations = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Handle responsiveness
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setIndex((prev) =>
      Math.min(prev + 1, destinations.length - cardsPerView)
    );
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Top Destinations
        </h2>
        <p className="text-gray-600 mt-2 md:mt-0 max-w-xl text-sm md:text-base">
          From island escapes to cool mountain towns, discover where your next
          journey will take you.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-4"
            style={{
              transform: `translateX(-${(index * 100) / cardsPerView}%)`,
            }}
          >
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-36 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-white text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                    {dest.price}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm md:text-base font-semibold">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-gray-500">{dest.description}</p>
                  <div className="flex justify-between items-center mt-2 text-xs">
                    <span className="text-yellow-500">⭐ {dest.rating}</span>
                    <span className="text-gray-400">{dest.region}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={index >= destinations.length - cardsPerView}
            className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
