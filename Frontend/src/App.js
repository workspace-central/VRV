import * as React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
// import Footer from "./components/Foot";

export default function Layout() {

  return (
    <div className="flex overflow-hidden flex-col bg-stone-950">
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="hero-section">
        <Header />
        <Hero />
        </div>
        
        <div className="AboutUs-section">
        <AboutUs />
        </div>
        <div className="Services-section">
        <Service />
        </div>
        {/* <div className="Footer-section">
        <Footer/>
        </div> */}
      </main>
    </div>
  );
}
