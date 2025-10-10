// src/pages/Policies.jsx
import React from "react";
import { ShieldCheckIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const Policies = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#761421] via-[#d24053] to-yellow-500 py-20 text-center text-white mt-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Terms & Conditions & Privacy Policy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Transparency & Trust – Know your rights and privacy.
          </p>
        </div>
      </div>
      {/* Privacy Policy Button */}
      <a
        href="/policies"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed -right-10 top-[50%] transform -translate-y-1/2 rotate-[-90deg] bg-[#761421] px-4 py-2 rounded-tl-lg rounded-tr-lg shadow-lg z-50 animate-blink-text"
      >
        Privacy Policy
      </a>
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 pb-20">
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/50">
          {/* Terms & Conditions */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheckIcon className="w-10 h-10 text-[#761421]" />
              <h2 className="text-3xl font-extrabold text-gray-800">
                Terms & Conditions
              </h2>
            </div>

            <div className="grid gap-8 text-gray-700 leading-relaxed">
              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-yellow-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[#761421] mb-2">
                  1. Booking & Payments
                </h3>
                <p>
                  All bookings must be made through our official website. Payments
                  must be completed before confirmation. We reserve the right to
                  cancel unconfirmed bookings.
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-yellow-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[#761421] mb-2">
                  2. Cancellations
                </h3>
                <p>
                  Cancellations made 24 hours prior to travel will receive a full
                  refund. Late cancellations or no-shows will not be eligible for a
                  refund.
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-yellow-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[#761421] mb-2">
                  3. Liability
                </h3>
                <p>
                  Trip2Puri is not responsible for any loss, injury, or damage to
                  personal belongings during travel. Customers are advised to ensure
                  their safety and belongings at all times.
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-yellow-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[#761421] mb-2">
                  4. Changes to Terms
                </h3>
                <p>
                  We reserve the right to update or change these terms at any time.
                  Updates will be posted on this page and take effect immediately.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center my-12">
            <span className="w-24 h-1 bg-gradient-to-r from-[#761421] to-yellow-500 rounded-full"></span>
          </div>

          {/* Privacy Policy */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <DocumentTextIcon className="w-10 h-10 text-yellow-500" />
              <h2 className="text-3xl font-extrabold text-gray-800">
                Privacy Policy
              </h2>
            </div>

            <div className="grid gap-8 text-gray-700 leading-relaxed">
              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                  1. Information We Collect
                </h3>
                <p>
                  We collect personal information such as name, email, phone number,
                  and payment details when you book with us. We may also collect
                  browsing information to improve your experience.
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                  2. How We Use Information
                </h3>
                <p>
                  Information is used to confirm bookings, process payments, send
                  updates, and improve our services. We do not sell or share your
                  information with third parties without consent.
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                  3. Data Protection
                </h3>
                <p>
                  We use secure systems to protect your data. However, no method of
                  transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                  4. Cookies
                </h3>
                <p>
                  We use cookies to improve user experience and website functionality.
                  You can disable cookies through your browser settings.
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                  5. Changes to Privacy Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time. Please check
                  this page regularly for updates.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <div className="mt-16 text-center">
            <p className="text-gray-700 text-sm">
              For any questions, please contact us at{" "}
              <span className="font-semibold text-blue-600">
                support@trip2puri.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
