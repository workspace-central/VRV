import * as React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section id = "home" className="hero-section" role="banner">
      <h1 className="hero-title">
        <span className="font-bold">Powering Your</span>{" "}
        <span className="italic">Growth</span>{" "}
        <span className="font-bold">with Unbreakable Security</span>
      </h1>
      <p className="hero-description">
        Protect your business with AI-driven cybersecurity, ensuring global
        protection against evolving threats.
      </p>
      <div className="hero-buttons">
        <button className="hero-button">Book a Demo</button>
        <button className="hero-button">Get Expert Advice</button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06ecc16b05a178e03cc45a40c499fba3d225569fad51f73aab95a388b65a0658?placeholderIfAbsent=true&apiKey=babe1e364d7c491d9ab530c1da4ff133"
        alt=""
        className="object-contain z-10 self-center mt-6 max-w-full aspect-[0.87] w-[103px]"
      />

      {/* Mouse Icon with Scroll Down Text */}
      <div className="mouse-icon">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
        <div className="scroll-down">Scroll Down</div>
      </div>
    </section>
  );
}
