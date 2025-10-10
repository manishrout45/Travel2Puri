import { Link } from "react-router-dom";
import districts from "../data/districts";

const Districts = () => {
  return (

    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-[#761421] mb-8 text-center">Odisha Districts & Destinations</h1>
      {districts.map((district) => (
        <div key={district.name} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{district.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {district.destinations.map((dest) => (
             <Link to={`/destination/${dest.id}`}
                className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#761421]">{dest.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{dest.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Districts;
