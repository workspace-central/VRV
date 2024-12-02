import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Contact from "./components/ContactUs";
import Faq from "./components/FAQ";
import GlobalPresence from "./components/Map.tsx";
//import Global from "./components/Global";
// import Footer from "./components/Foot";
// import Trusted from './components/Trusted';

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
                {/* <div className="Client-section">
                  <Trusted />
                </div> */}

                {/* About Us Section */}
                <div className="AboutUs-section">
                  <AboutUs />
                </div>

                {/* Services Section */}
                <div className="Services-section">
                  <Service />
                </div>

                {/* Footer Section */}
                {/* <div className="Footer-section">
                  <Footer />
                </div> */}

                <div className="global-presence">
                  <GlobalPresence />
                </div>

                <div className="Faq-section">
                  <Faq />
                </div>
              </main>
            }
          />

          {/* Contact Us Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
