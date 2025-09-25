import { useParams, useNavigate } from "react-router-dom";
import districts from "../data/districts";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Always fetch from districts.js
  const destination = districts
    .flatMap(d => d.destinations)
    .find(dest => dest.id === id);

  if (!destination) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-red-600">No destination found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Back
      </button>

      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        {destination.name}
      </h2>

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full max-w-xl rounded-lg mb-6 shadow-md"
      />

      <p className="text-lg text-gray-700">{destination.description}</p>
    </div>
  );
};

export default DestinationDetail;
