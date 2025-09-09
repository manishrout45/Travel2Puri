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
    <motion.section
      className="max-w-4xl mx-auto py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div className="text-center mb-12" variants={fadeUp}>
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
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
              className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-blue-50 transition"
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
  );
};

export default FAQ;
