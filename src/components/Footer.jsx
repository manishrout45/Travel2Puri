const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3">TravelPuri</h3>
          <p className="text-sm text-blue-100">
            Explore Puri’s divine temples, golden beaches, and cultural heritage
            with unforgettable travel experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-blue-100">
            <li><a href="/about" className="hover:text-yellow-300">About</a></li>
            <li><a href="/destinations" className="hover:text-yellow-300">Destinations</a></li>
            <li><a href="/packages" className="hover:text-yellow-300">Packages</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-blue-100">📍 Puri, Odisha, India</p>
          <p className="text-blue-100">📞 +91 98765 43210</p>
          <p className="text-blue-100">✉️ info@travelpuri.com</p>
        </div>
      </div>

      <div className="bg-blue-700 py-4 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} TravelPuri. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
