import { motion } from "framer-motion";
import { FaCar, FaMoneyBillWave, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const testimonials = [
  {
    text: "GetnGo made my road trip super easy and affordable. Highly recommended!",
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

const About = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }}>
      
      {/* About Section */}
      <motion.div
        className="relative text-center mb-16 overflow-hidden min-h-[70vh] flex items-center justify-center"
        variants={fadeUp}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shri_Jagannatha_Temple.jpg"
            alt="Jagannath Temple"
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 p-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-400 my-6">About Us</h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            Puri, located on the eastern coast of Odisha, is one of India’s most
            cherished spiritual and cultural destinations. Known as the home of
            Lord Jagannath, Puri is part of the sacred Char Dham pilgrimage.
            Beyond its religious significance, the city offers golden beaches,
            vibrant local traditions, UNESCO heritage monuments, and the
            breathtaking Chilika Lake. It is a unique blend of spirituality,
            culture, and natural beauty, making it a must-visit for travelers
            worldwide.
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Services
            </h2>
            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              diam eiusmod tempor magna aliqua sed ut enim ad minim veniam,
              quis nostrud.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start md:items-center">
            {/* Left Services */}
            <div className="flex flex-col gap-10 text-center order-2 md:order-1">
              <ServiceItem icon="🎁" title="Gift Transport" />
              <ServiceItem icon="✈️" title="Airport Transfer" />
              <ServiceItem icon="💼" title="Luxury Transport" />
            </div>

            {/* Car Image */}
            <div className="flex justify-center order-1 md:order-2">
              <img
                src="src/assets/images/serviceCar.png"
                alt="Car Top View"
                className="w-48 sm:w-64 md:w-72 lg:w-96"
              />
            </div>

            {/* Right Services */}
            <div className="flex flex-col gap-10 text-center order-3">
              <ServiceItem icon="💍" title="Wedding Trip" />
              <ServiceItem icon="🧑‍✈️" title="Driver" />
              <ServiceItem icon="🎂" title="Birthday Gifts" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Rent with Us Section */}
      <section className="bg-black text-white py-16 px-6 mb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <p className="text-yellow-500 uppercase font-semibold tracking-widest">
              Choose Comfort, Choose GetnGo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Why Rent with GetnGo?
            </h2>
            <p className="text-gray-400 mt-6 max-w-md mx-auto lg:mx-0">
              We combine service, reliability, and value to make your trip worry-free.
            </p>

            {/* Car Image */}
            <div className="mt-10">
              <img
                src="src/assets/images/luxuryCar.png"
                alt="Luxury Car"
                className="w-full max-w-lg mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <Feature
              icon={<FaCar size={28} />}
              title="Wide Selection of Cars"
              text="Economy, SUV, luxury, and more."
            />
            <Feature
              icon={<FaMoneyBillWave size={28} />}
              title="Transparent Pricing"
              text="No hidden fees, just fair rates."
            />
            <Feature
              icon={<FaCalendarAlt size={28} />}
              title="Flexible Booking Plans"
              text="Daily, weekly, or monthly rentals."
            />
            <Feature
              icon={<FaUsers size={28} />}
              title="Trusted by Thousands"
              text="High ratings from happy customers."
            />
          </div>
        </div>
      </section>

      {/* ✅ Testimonial Section */}
      <TestimonialSection />
    </motion.section>
  );
};

// 🔹 Service Item
const ServiceItem = ({ icon, title }) => (
  <div>
    <div className="flex items-center justify-center gap-3">
      <span className="text-3xl">{icon}</span>
      <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
    </div>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do diam eiusmod.
    </p>
  </div>
);

// 🔹 Feature Item
const Feature = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-yellow-500 text-black p-4 rounded-md">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  </div>
);

// ✅ Replace your TestimonialSection with this (drop-in)
const TestimonialSection = () => {
  const viewportRef = useRef(null); // visible area
  const trackRef = useRef(null); // the moving flex track
  const timerRef = useRef(null);
  const skipRef = useRef(false); // used to skip transition when snapping
  const itemWidthRef = useRef(0);

  const [visibleCount, setVisibleCount] = useState(1);
  const [index, setIndex] = useState(0);

  const n = testimonials.length;
  const extended = [...testimonials, ...testimonials]; // duplicate for seamless loop

  // responsive visible count
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  // setup sizes (item width & track width) — called on mount and resize
  const updateSizes = () => {
    const v = getVisibleCount();
    setVisibleCount(v);

    if (!viewportRef.current || !trackRef.current) return;

    // compute gap between items (Tailwind gap-x becomes CSS gap)
    const trackStyle = window.getComputedStyle(trackRef.current);
    const gapPx = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;

    const vw = viewportRef.current.offsetWidth;
    // width for each card such that visibleCount cards + gaps exactly fill viewport
    const itemWidth = (vw - gapPx * (v - 1)) / v;
    const itemOuter = itemWidth + gapPx;

    itemWidthRef.current = itemOuter; // step amount (card width + gap)

    // set each child's width in px
    Array.from(trackRef.current.children).forEach((child) => {
      child.style.width = `${itemWidth}px`;
    });

    // set track total width (include gap between items)
    const trackWidth = itemOuter * extended.length - gapPx; // subtract final gap
    trackRef.current.style.width = `${trackWidth}px`;

    // reposition to current index (no animation during resize)
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(-${index * itemOuter}px)`;
    // force reflow then re-enable CSS transition
    // eslint-disable-next-line no-unused-expressions
    trackRef.current.offsetHeight;
    trackRef.current.style.transition = "";
  };

  // on mount + resize
  useEffect(() => {
    updateSizes();
    const onResize = () => updateSizes();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // transition handler: if we've slid into the duplicated half, snap back seamlessly
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = () => {
      // when index reaches original length (we are at start of second copy)
      if (index >= n) {
        // set skip flag so next setIndex doesn't animate
        skipRef.current = true;
        // snap index back to equivalent position in the first copy
        setIndex((prev) => prev - n);
      }
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [index, n]);

  // whenever index or visibleCount changes, move the track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // ensure sizes exist (in case first render)
    if (!itemWidthRef.current) {
      updateSizes();
    }

    const step = itemWidthRef.current || 0;

    if (skipRef.current) {
      // snap without animation
      track.style.transition = "none";
      track.style.transform = `translateX(-${index * step}px)`;

      // force reflow and re-enable transition for subsequent moves
      // eslint-disable-next-line no-unused-expressions
      track.offsetHeight;
      setTimeout(() => {
        track.style.transition = "transform 0.65s ease";
        skipRef.current = false;
      }, 20);
    } else {
      // normal animated movement
      track.style.transition = "transform 0.65s ease";
      track.style.transform = `translateX(-${index * step}px)`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, visibleCount]);

  // autoplay: increment index => slides one-by-one
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000); // change speed here
    return () => clearInterval(timerRef.current);
  }, []);

  // pause on hover
  const handleMouseEnter = () => clearInterval(timerRef.current);
  const handleMouseLeave = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((prev) => prev + 1), 3000);
  };

  return (
    <section
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
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
          Here’s what people love about renting with GetnGo.
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
                className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center flex-shrink-0"
                /* width is set dynamically in updateSizes() */
              >
                <span className="text-yellow-500 text-5xl mb-4">“</span>
                <p className="text-lg italic">{t.text}</p>
                <div className="flex flex-col items-center mt-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-yellow-500 object-cover"
                  />
                  <h3 className="mt-3 font-semibold">{t.name}</h3>
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

export default About;
