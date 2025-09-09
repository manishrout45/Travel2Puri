import React, { useEffect, useRef } from "react";

const images = [
  "https://www.orissapost.com/wp-content/uploads/2024/07/Puri-Jagannath-Temple-.jpg",
  "https://www.dhauli.net/images/about-konark.jpg",
  "https://www.citybit.in/wp-content/uploads/2023/11/Mata-Matha-Puri-1-937x1024.jpg",
  "https://www.shutterstock.com/image-photo/puri-india-september-04-2024-600nw-2529540197.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HA92mJeqpEMzDlm0_71eRXorTx-v9Bq4sg&s",
  "https://image.wedmegood.com/resized/720X/uploads/member/25034194/1723547887_Screenshot_2024_08_13_164425.png",
];

const HeroSection = () => {
  const scrollRef = useRef(null);

  // Create multiple copies of images for seamless infinite scroll
  const repeatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const imageWidth = 256 + 16; // width + gap
    const totalWidth = images.length * imageWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one complete set
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
  className="relative w-full py-16 px-6 flex flex-col items-center overflow-hidden"
  style={{ backgroundColor: '#FEF7EE' }}
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover "
  >
    <source src="/videos/puribeach2.mp4" type="video/mp4" />
  </video>
      {/* Badge */}
      <div className="mb-4 flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-md text-sm font-medium z-10">
        <span>⭐</span>
        <span>Explore world</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 z-10">
        Make Your <span className="text-orange-500">Summer Vacation</span> <br /> Unforgettable!
      </h1>

      {/* Subheading */}
     <p
  className="text-center text-white max-w-xl mb-6 z-10"
  style={{
    textShadow: "0 2px 8px rgba(0,0,0,0.85)"
  }}
>
  Get your dream trip planned with expert-guided destinations, booking, transport & more — all in one
</p>



      {/* Button */}
      <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition z-10">
        Start Planning →
      </button>

      {/* Partners / Logos */}
      <div className="flex gap-6 mt-12 opacity-20 z-10">
        <span>Vercel</span>
        <span>Remote</span>
        <span>Ramp</span>
        <span>Runway</span>
      </div>
      {/* Infinite Scrolling Images */}
      <div className="mt-12 w-full overflow-hidden z-10">
        <div 
          ref={scrollRef}
          className="flex gap-4 will-change-transform"
          style={{
            width: `${repeatedImages.length * (256 + 16)}px`
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {repeatedImages.map((src, index) => {
            const originalIndex = index % images.length;
            return (
              <div
                key={`${originalIndex}-${Math.floor(index / images.length)}`}
                className={`flex-shrink-0 rounded-xl overflow-hidden ${
                  originalIndex === 1 || originalIndex === 4 ? "h-80 w-40" : "h-80 w-60"
                }`}
              >
                <img
                  src={src}
                  alt={`hero ${originalIndex}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-6 text-white text-sm opacity-60">
        <span>← Continuous scroll →</span>
      </div>
    </section>
  );
};

export default HeroSection;