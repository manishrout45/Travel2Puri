import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const faqs = [
  {
    question: "What is the best time to visit Puri?",
    answer:
      "The best time to visit Puri is from October to March when the weather is pleasant. The famous Rath Yatra takes place in June/July.",
  },
  {
    question: "Is there any dress code for visiting Jagannath Temple?",
    answer:
      "Yes, visitors are expected to wear traditional attire. Western outfits like shorts and sleeveless tops are not allowed inside the temple.",
  },
  {
    question: "Can foreigners enter Jagannath Temple?",
    answer:
      "No, non-Hindus and foreigners are not allowed inside the Jagannath Temple premises. However, they can view the temple from outside or from the Raghunandan Library rooftop.",
  },
  {
    question: "How can I reach Puri?",
    answer:
      "Puri is well connected by road and rail. The nearest airport is in Bhubaneswar (60 km away). Regular taxis, buses, and trains are available.",
  },
  {
    question: "What are the must-try foods in Puri?",
    answer:
      "The famous Mahaprasad at Jagannath Temple, Chhena Poda, Puri Street Chaat, and seafood dishes are a must-try.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
            {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-center bg-cover flex items-center justify-center mt-20"
        style={{ backgroundImage: "url('/images/FAQ/FAQ.jpg')" }} // replace with your image path
      >
        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          Frequently Asked Questions
        </h1> */}
      </section>
      {/* Privacy Policy Button */}
      <a
        href="/policies"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed -right-10 top-[50%] transform -translate-y-1/2 rotate-[-90deg] bg-[#761421] px-4 py-2 rounded-tl-lg rounded-tr-lg shadow-lg z-50 animate-blink-text"
      >
        Privacy Policy
      </a>

      {/* ✅ FAQ Section */}
      <motion.section
        className="max-w-4xl mx-auto py-10 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-10" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#761421] mb-4">
            Got Questions? We’ve Got Answers
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common queries about traveling to Puri, Odisha.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-[#F3E6E6] transition"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default FAQ;
