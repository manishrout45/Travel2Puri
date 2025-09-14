import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Pages
import Home from "./pages/Home";
import Destinations from "./pages/Packages";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import DestinationDetail from "./pages/DestinationDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination/:name" element={<DestinationDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
