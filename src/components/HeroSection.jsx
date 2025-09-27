import React, { useEffect, useRef } from "react";

const images = [
  "https://media.istockphoto.com/id/451584323/photo/india-orissa.jpg?s=612x612&w=0&k=20&c=FS_Pwi1My7nJ0EYAQrs9aAJiTqq268JuiH2K6BAl5I0=", // Jagannath Temple
  "https://media.licdn.com/dms/image/v2/D5622AQGct4QU2qb2Xw/feedshare-shrink_800/feedshare-shrink_800/0/1714900426828?e=2147483647&v=beta&t=bRKxnr5_xUU-Xl7LJ49oV7FkBbKa5LKMA_gqHNdrlig", // Konark Sun Temple
  "https://images.pexels.com/photos/29547310/pexels-photo-29547310/free-photo-of-serene-beach-view-at-puri-odisha.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Puri Beach
  "https://media.istockphoto.com/id/1128484968/photo/beautiful-sunrise-at-chilika-lake-india.jpg?b=1&s=612x612&w=0&k=20&c=8lVzCn-TarjYZ1ibGwQIE4uzRqsKBz1_wAJc_L_Vunk=", // Chilika Lake
  "https://upload.wikimedia.org/wikipedia/commons/c/c6/Narendra_Tank%2C_Puri%2C_Odisha.JPG", // Narendra Tank
  "https://thumbs.dreamstime.com/b/stone-guardian-lion-ancient-gundicha-temple-puri-40163897.jpg" // Gundicha Temple
];

const HeroSection = () => {
  const scrollRef = useRef(null);

  // Repeat images for seamless infinite scroll
  const repeatedImages = [...images, ...images, ...images];
  const placeNames = [
    "Jagannath Temple",
    "Konark Sun Temple",
    "Puri Beach",
    "Chilika Lake",
    "Narendra Tank",
    "Gundicha Temple"
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const imageWidth = 240 + 16; // image width + gap
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
      className="relative w-full py-16 px-6 flex flex-col items-center overflow-hidden mt-16"
      style={{ backgroundColor: "#FEF7EE" }}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
  src="/videos/puribeach2.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
></video>

        
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 z-10 text-[#ffffff]" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.45)" }}>
        Make Your <span className="text-[#761421] text-4xl md:text-5xl font-bold ">Journey</span> <br /> Unforgettable!
      </h1>

      {/* Subheading */}
      <p
        className="text-center text-black max-w-xl mb-6 z-10"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
      >
        Get your dream trip planned with expert-guided destinations, booking,
        transport & more — all in one
      </p>

      {/* Button */}
      <button className="bg-[#761421] text-white px-6 py-3 rounded-full hover:bg-[#761421] hover:text-yellow-400 transition z-10">
        <a href='/booking'>Start Planning →</a>
      </button>

      {/* Infinite Scrolling Images */}
      <div className="mt-12 w-full overflow-hidden z-10">
        <div
          ref={scrollRef}
          className="flex gap-4 will-change-transform"
          style={{ width: `${repeatedImages.length * (240 + 16)}px` }}
        >
          {repeatedImages.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 rounded-xl overflow-hidden h-80 w-60"
            >
              {/* Image */}
              <img
                src={src}
                alt={`hero ${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Black Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Place Name */}
              <div className="absolute bottom-2 left-3 text-white font-semibold text-lg drop-shadow">
                {placeNames[index % placeNames.length]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-6 text-white text-sm opacity-60 z-10">
        <span>← Look for your next Destination →</span>
      </div>

      {/* Multi-Wave Shape at Bottom */}
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
