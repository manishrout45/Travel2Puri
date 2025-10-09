import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import districts from "../data/districts";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = districts
    .flatMap((d) => d.destinations)
    .find((dest) => dest.id === id);

  if (!destination) {
    return (
      <div className="text-center py-20 bg-gray-50 min-h-screen">
        <p className="text-lg text-red-600 font-semibold">No destination found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Function to navigate to booking page section
  const goToBookingSection = () => {
    navigate("/booking#top-destinations"); // Change to correct section ID
  };

  return (
    <article className="bg-gradient-to-b from-[#fff8f8] to-[#f6f3f2] min-h-screen py-16 px-6 relative">
      {/* ===== Fixed Back Button for Desktop/Tablet ===== */}
      <button
        onClick={goToBookingSection}
        className="hidden md:flex fixed top-36 left-6 items-center gap-2 px-5 py-2 bg-[#761421] text-white rounded-full font-medium shadow-md hover:bg-[#5e0f1a] transition z-50"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="max-w-4xl mx-auto mt-16">
        {/* ===== Heading ===== */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#761421] mb-6 tracking-wide">
            {destination.name}
          </h1>
        </header>

        {/* ===== Image ===== */}
        <figure className="mb-10">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </figure>

        {/* ===== Description ===== */}
        <section className="text-gray-800 text-lg leading-relaxed mb-12">
          <div dangerouslySetInnerHTML={{ __html: destination.description }} />
        </section>

        {/* ===== See More Places Button ===== */}
        <div className="text-center mb-24">
          <button
            onClick={() => navigate("/destinations")}
            className="px-8 py-3 bg-[#761421] text-white rounded-full font-medium shadow-md hover:bg-[#5e0f1a] transition"
          >
            See More Places
          </button>
        </div>
      </div>

      {/* ===== Floating Back Button for Mobile ===== */}
      <button
        onClick={goToBookingSection}
        className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#761421] text-white rounded-full shadow-xl hover:bg-[#5e0f1a] transition flex items-center justify-center z-50"
      >
        <ArrowLeft size={20} />
      </button>
    </article>
  );
};

export default DestinationDetail;
