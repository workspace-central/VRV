import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Contact from "./components/ContactUs";
import Client from './components/Clients'; 
import FAQ from "./components/Faq";
import GlobalPresence from "./components/GlobalPresence";
import Footer from "./components/Foot";
import Trusted from './components/Trusted';
import Newsletter from "./components/Newsletter";
import Services from "./pages/Services";

export default function Layout() {
  return (
    <div className="flex overflow-hidden flex-col bg-stone-950">
      <Router>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <main className="flex flex-col items-center w-full max-md:max-w-full">
                <div className="hero-section">
                  <Header />
                  <Hero />
                </div>

                {/* Trusted Section */}
                <div className="Client-section">
                  <Trusted />
                </div>

                {/* About Us Section */}
                <div className="AboutUs-section">
                  <AboutUs />
                </div>

                {/* Services Section */}
                <div className="Services-section">
                  <Service />
                </div>

                <div className="Global-section">
                  <GlobalPresence />
                </div>
                
                <div className="Faq-section">
                  <FAQ />
                </div>

                <div className="Client-section">
                  <Client />
                </div>

                <div className="Newsletter-section">
                  <Newsletter />
                </div>

                {/* Footer Section */}
                <div className="Footer-section">
                  <Footer />
                </div>
              </main>
            }
          />

          {/* Contact Us Route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={
            <Services />
          } />
        </Routes>
      </Router>
    </div>
  );
}
