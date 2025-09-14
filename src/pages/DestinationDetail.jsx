// src/pages/DestinationDetail.jsx
import { useLocation, useNavigate } from "react-router-dom";

const DestinationDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center py-10">
        <p>No destination selected.</p>
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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Back
      </button>
      <h2 className="text-3xl font-bold text-blue-600 mb-4">{state.name}</h2>
      <img
        src={state.image}
        alt={state.name}
        className="w-full max-w-xl rounded-lg mb-6 shadow-md"
      />
      <p className="text-lg text-gray-700">{state.description}</p>
    </div>
  );
};

export default DestinationDetail;
