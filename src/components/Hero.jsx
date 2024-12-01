import * as React from "react";
import "./hero.css";
import { hero } from "../constants";
export default function Hero() {
  return (
    <section className="hero-section" role="banner">
      <h1 className="hero-title">
        <span className="font-bold">{hero[0].text}</span>
        {" "} <span className="italic">{hero[1].text}</span>
        {" "} <span className="font-bold">{hero[2].text}</span>
      </h1>
      <p className="hero-description"> {hero[3].text} </p>
      <div className="hero-buttons">
        <button className="hero-button">{hero[4].text}</button>
        <button className="hero-button">{hero[5].text}</button>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06ecc16b05a178e03cc45a40c499fba3d225569fad51f73aab95a388b65a0658?placeholderIfAbsent=true&apiKey=babe1e364d7c491d9ab530c1da4ff133" alt="" className="object-contain z-10 self-center mt-6 max-w-full aspect-[0.87] w-[103px]" />
      <div className="mouse-icon">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div> <div className="scroll-down">{hero[6].text}
        </div>
      </div>
    </section>);
}
