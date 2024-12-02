import React from 'react';
import './AboutUs.css';
import { aboutUs } from '../constants';
// import aboutImage from './././../../public/assets/About.png';

export default function AboutUs() {
  return (
    <section id="About-Us" className="about-section">
  <div className="about-container">
    <div className="about-content">
      {aboutUs.map((item) => {
        if (item.id === 0) {
          return (
            <div key={item.id} className="content-item">
              <h2 className="about-title">{item.title}</h2>
              {item.text.map((text, idx) => (
                <p key={idx} className="about-description">
                  {text}
                </p>
              ))}
            </div>
          );
        } else {
          const dynamicTitle = `title${item.id}`;
          const dynamicText = `text${item.id}`;

          return (
            <div key={item.id} className="content-item">
              <h3>{item[dynamicTitle]}</h3>
              {item[dynamicText]?.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          );
        }
      })}
    </div>
    <div className="decorative-image">
      <img
        src="/assets/About.png"
        alt="Decorative Element"
        className="decorative-image"
      />
    </div>
  </div>
</section>

  );
}
