import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Contact from "./components/ContactUs";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Trusted from './components/Trusted';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Router>
        {/* Header is now outside the Routes component, ensuring it's always at the top */}
        <Header />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <main className="flex flex-col items-center w-full max-md:max-w-full flex-grow">
                <div className="hero-section">
                  <Hero />
                </div>

                {/* About Us Section */}
                <div className="AboutUs-section">
                  <AboutUs />
                </div>

                {/* Services Section */}
                <div className="Services-section">
                  <Service />
                </div>

                {/* Clients Section */}
                <div className="Clients-section">
                  <Clients />
                </div>
              </main>
            }
          />
          

          {/* Contact Us Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Section */}
        <Footer />
      </Router>
    </div>
  );
}
