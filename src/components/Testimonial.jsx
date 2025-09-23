// src/components/Testimonial.jsx
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Trip2Puri made my road trip super easy and affordable. Highly recommended!",
    name: "Rahul Verma",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Best car rental service I’ve used in years. Smooth booking process!",
    name: "Priya Sharma",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "Amazing service, great cars, and very professional staff.",
    name: "Arjun Mehta",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    text: "I had a wonderful experience renting with GetnGo. Smooth ride!",
    name: "Sneha Kapoor",
    role: "Doctor",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Testimonial = () => {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const skipRef = useRef(false);
  const itemWidthRef = useRef(0);

  const [visibleCount, setVisibleCount] = useState(1);
  const [index, setIndex] = useState(0);

  const n = testimonials.length;
  const extended = [...testimonials, ...testimonials];

  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const updateSizes = () => {
    const v = getVisibleCount();
    setVisibleCount(v);

    if (!viewportRef.current || !trackRef.current) return;

    const trackStyle = window.getComputedStyle(trackRef.current);
    const gapPx = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;

    const vw = viewportRef.current.offsetWidth;
    const itemWidth = (vw - gapPx * (v - 1)) / v;
    const itemOuter = itemWidth + gapPx;

    itemWidthRef.current = itemOuter;

    Array.from(trackRef.current.children).forEach((child) => {
      child.style.width = `${itemWidth}px`;
    });

    const trackWidth = itemOuter * extended.length - gapPx;
    trackRef.current.style.width = `${trackWidth}px`;

    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(-${index * itemOuter}px)`;
    trackRef.current.offsetHeight;
    trackRef.current.style.transition = "";
  };

  useEffect(() => {
    updateSizes();
    const onResize = () => updateSizes();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = () => {
      if (index >= n) {
        skipRef.current = true;
        setIndex((prev) => prev - n);
      }
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [index, n]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (!itemWidthRef.current) {
      updateSizes();
    }

    const step = itemWidthRef.current || 0;

    if (skipRef.current) {
      track.style.transition = "none";
      track.style.transform = `translateX(-${index * step}px)`;
      track.offsetHeight;
      setTimeout(() => {
        track.style.transition = "transform 0.65s ease";
        skipRef.current = false;
      }, 20);
    } else {
      track.style.transition = "transform 0.65s ease";
      track.style.transform = `translateX(-${index * step}px)`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, visibleCount]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(timerRef.current);
  const handleMouseLeave = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((prev) => prev + 1), 3000);
  };

  return (
    <section
      className="relative bg-[#761421] text-white py-20 px-6 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/29/06/18/auto-1868726_1280.jpg"
          alt="Car Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <p className="uppercase text-yellow-500 font-semibold tracking-widest">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Trusted by Thousands of Drivers
        </h2>
        <p className="text-gray-400 mt-4">
          Here’s what people love about renting with Trip2Puri.
        </p>

        {/* VIEWPORT */}
        <div ref={viewportRef} className="mt-12 overflow-hidden">
          {/* TRACK */}
          <div
            ref={trackRef}
            className="flex gap-8"
            style={{
              transform: `translateX(-${index * (itemWidthRef.current || 0)}px)`,
            }}
          >
            {extended.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#f8f7d1] rounded-lg p-6 flex flex-col items-center text-center flex-shrink-0"
              >
                <span className="text-yellow-500 text-5xl mb-4">“</span>
                <p className="text-lg italic text-black">{t.text}</p>
                <div className="flex flex-col items-center mt-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-yellow-500 object-cover"
                  />
                  <h3 className="mt-3 font-semibold text-black">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
