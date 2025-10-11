import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import districts from "../data/districts";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const forecastRef = useRef(null);

  const destination = districts
    .flatMap((d) => d.destinations)
    .find((dest) => dest.id === id);

  useEffect(() => {
    if (!destination) return;

    const fetchWeather = async () => {
      try {
        const currentResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${destination.lat}&longitude=${destination.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Kolkata`
        );
        const data = await currentResponse.json();
        if (data.current_weather) {
          setWeather(data.current_weather);

          if (data.daily) {
            const dailyForecast = data.daily.time.map((day, index) => ({
              date: day,
              max: data.daily.temperature_2m_max[index],
              min: data.daily.temperature_2m_min[index],
              code: data.daily.weathercode[index],
            }));
            setForecast(dailyForecast);
          }
        } else {
          setWeather(null);
          setForecast([]);
        }
      } catch (error) {
        console.error("Weather fetch error:", error);
        setWeather(null);
        setForecast([]);
      }
    };

    fetchWeather();
  }, [destination]);

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

  const goToBookingSection = () => {
    navigate("/booking#top-destinations");
  };

  const getWeatherIcon = (code) => {
    const map = {
      0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
      45: "🌫️", 48: "🌫️", 51: "🌦️", 53: "🌦️",
      55: "🌧️", 56: "❄️🌧️", 57: "❄️🌧️",
      61: "🌧️", 63: "🌧️", 65: "🌧️",
      66: "❄️🌧️", 67: "❄️🌧️", 71: "❄️",
      73: "❄️", 75: "❄️", 77: "❄️", 80: "🌦️",
      81: "🌦️", 82: "🌧️", 85: "❄️", 86: "❄️",
      95: "⛈️", 96: "⛈️", 99: "⛈️",
    };
    return map[code] || "🌤️";
  };

  const scrollForecast = (direction) => {
    if (forecastRef.current) {
      const scrollAmount = 120; // Scroll per click
      forecastRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <article className="bg-gradient-to-b from-[#fff8f8] to-[#f6f3f2] min-h-screen py-16 px-6 relative">
      {/* Privacy Policy */}
      <a
        href="/policies"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed -right-10 top-[50%] transform -translate-y-1/2 rotate-[-90deg] bg-[#761421] px-4 py-2 rounded-tl-lg rounded-tr-lg shadow-lg z-50 animate-blink-text"
      >
        Privacy Policy
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918093469315"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      {/* Back Button */}
      <button
        onClick={goToBookingSection}
        className="hidden md:flex fixed top-36 left-6 items-center gap-2 px-5 py-2 bg-[#761421] text-white rounded-full font-medium shadow-md hover:bg-[#5e0f1a] transition z-50"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="max-w-6xl mx-auto mt-16">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#761421] mb-6 tracking-wide">
            {destination.name}
          </h1>
        </header>

        <figure className="mb-10">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </figure>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <section className="lg:col-span-2 text-gray-800 text-lg leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: destination.description }} />
          </section>

          {weather && (
            <aside className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center relative">
              <h3 className="text-xl font-bold text-[#761421] mb-4">Current Weather</h3>
              <p className="text-6xl mb-2">{getWeatherIcon(weather.weathercode)}</p>
              <p className="text-3xl font-semibold text-gray-800">{weather.temperature}°C</p>
              <p className="capitalize text-gray-600 mb-3">Wind: {weather.windspeed} km/h</p>
              <p className="capitalize text-gray-600 mb-3">Wind Direction: {weather.winddirection}°</p>

              {/* 7-Day Forecast */}
              <div className="mt-6 relative">
                <h4 className="font-semibold text-[#761421] mb-3">7-Day Forecast</h4>

                {/* Left Arrow */}
                <button
                  onClick={() => scrollForecast("left")}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Forecast Boxes */}
                <div
                  ref={forecastRef}
                  className="flex gap-2 overflow-x-hidden"
                >
                  {forecast.map((day) => (
                    <div
                      key={day.date}
                      className="flex-none w-20 h-20 bg-gray-50 rounded-md shadow flex flex-col items-center justify-center text-gray-700 text-xs"
                    >
                      <p className="font-medium text-center">
                        {new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}
                      </p>
                      <p className="text-2xl">{getWeatherIcon(day.code)}</p>
                      <p className="text-[10px]">Max: {day.max}°C</p>
                      <p className="text-[10px]">Min: {day.min}°C</p>
                    </div>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => scrollForecast("right")}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </aside>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/destinations")}
            className="px-8 py-3 bg-[#761421] text-white rounded-full font-medium shadow-md hover:bg-[#5e0f1a] transition"
          >
            See More Places
          </button>
        </div>
      </div>

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


