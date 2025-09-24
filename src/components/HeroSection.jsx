import React, { useEffect, useRef } from "react";

const images = [
"https://www.incredibleindia.gov.in/en/odisha/puri", // Jagannath Temple & surroundings
  "https://odishatourism.gov.in/content/tourism/en/discover/major-cities/puri.html", // Puri city / temple imagery
  "https://www.ndtv.com/webstories/feature/top-10-places-to-visit-in-puri-35525", // Gallery of top Puri sites
  "https://www.odishavacations.com/places-to-visit-puri.html", // Scenic temple & heritage photos
  "https://www.holidify.com/places/puri/sightseeing-and-things-to-do.html", // Holidify guide to Puri attractions
  "https://www.trawell.in/odisha/puri/places-to-visit-things-to-do" // Trawell.in Puri travel guide
];

const HeroSection = () => {
  const scrollRef = useRef(null);

  // Repeat images for seamless infinite scroll
  const repeatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const imageWidth = 256 + 16; // image width + gap
    const totalWidth = images.length * imageWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      className="relative w-full py-16 px-6 flex flex-col items-center overflow-hidden mt-10"
      style={{ backgroundColor: "#FEF7EE" }}
    >
{/* Background Image with Gradient Overlay */}
<div className="absolute top-0 left-0 w-full h-full">
  <img
    src="/images/HeroImage.jpg"
    alt="Puri Beach"
    className="w-full h-full object-cover"
  />
  {/* Black Transparent Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>




      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 z-10 text-[#1b1713]">
        Make Your <span className="text-[#761421]">Journey</span> <br /> Unforgettable!
      </h1>

      {/* Subheading */}
      <p
        className="text-center text-white max-w-xl mb-6 z-10"
        style={{
          textShadow: "0 2px 8px rgba(0,0,0,0.85)",
        }}
      >
        Get your dream trip planned with expert-guided destinations, booking,
        transport & more — all in one
      </p>

      {/* Button */}
      <button className="bg-[#1b1713] text-white px-6 py-3 rounded-full hover:text-yellow-400 transition z-10">
        <a href='/booking'>Start Planning →</a>
      </button>

      {/* Partners / Logos 
      <div className="flex gap-6 mt-12 opacity-20 z-10">
        <span>Vercel</span>
        <span>Remote</span>
        <span>Ramp</span>
        <span>Runway</span>
      </div> */}

 {/* Infinite Scrolling Images */}
<div className="mt-12 w-full overflow-hidden z-10">
  <div
    ref={scrollRef}
    className="flex gap-4 will-change-transform"
    style={{
      width: `${repeatedImages.length * (240 + 16)}px`, // match fixed width + gap
    }}
  >
    {repeatedImages.map((src, index) => {
      return (
        <div
          key={index}
          className="flex-shrink-0 rounded-xl overflow-hidden h-80 w-60" 
        >
          <img
            src={src}
            alt={`hero ${index}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      );
    })}
  </div>
</div>


      {/* Scroll indicator */}
      <div className="mt-6 text-white text-sm opacity-60 z-10">
        <span>← Continuous scroll →</span>
      </div>

      {/* ✅ Random Multi-Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="
              M0,224 
              C180,200 360,280 540,240 
              C720,200 900,280 1080,240 
              C1260,200 1440,280 1620,240 
              L1620,320 L0,320 Z
            "
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
