// src/pages/Policies.jsx
import React from "react";

const Policies = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Terms & Conditions & Privacy Policy
        </h1>

        {/* Terms & Conditions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-yellow-500 pb-2 mb-6">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Booking & Payments</h3>
              <p>
                All bookings must be made through our official website. Payments must
                be completed before confirmation. We reserve the right to cancel
                unconfirmed bookings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Cancellations</h3>
              <p>
                Cancellations made 24 hours prior to travel will receive a full
                refund. Late cancellations or no-shows will not be eligible for a
                refund.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Liability</h3>
              <p>
                Trip2Puri is not responsible for any loss, injury, or damage to
                personal belongings during travel. Customers are advised to ensure
                their safety and belongings at all times.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Changes to Terms</h3>
              <p>
                We reserve the right to update or change these terms at any time.
                Updates will be posted on this page and take effect immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section>
          <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-yellow-500 pb-2 mb-6">
            Privacy Policy
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Information We Collect</h3>
              <p>
                We collect personal information such as name, email, phone number, and
                payment details when you book with us. We may also collect browsing
                information to improve your experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. How We Use Information</h3>
              <p>
                Information is used to confirm bookings, process payments, send
                updates, and improve our services. We do not sell or share your
                information with third parties without consent.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Data Protection</h3>
              <p>
                We use secure systems to protect your data. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Cookies</h3>
              <p>
                We use cookies to improve user experience and website functionality.
                You can disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Changes to Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Please check this
                page regularly for updates.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <p className="mt-12 text-gray-600 text-sm text-center">
          For any questions, please contact us at{" "}
          <span className="font-semibold">support@trip2puri.com</span>
        </p>
      </div>
    </div>
  );
};

export default Policies;
