import React from 'react';
import './AboutUs.css';
// import aboutImage from './././../../public/assets/About.png';

export default function AboutUs() {
  return (
    <section id = "about-us" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We are dedicated to securing the digital world with innovative cybersecurity solutions, 
          powered by AI and cloud technologies. Our customized approach ensures robust protection 
          for modern digital infrastructures.
        </p>

        <div className="content">
          <div className="content-item">
            <h3>Extensive Global Presence</h3>
            <p>Operating across multiple continents to meet diverse client needs.</p>
          </div>

          <div className="content-item">
            <h3>Focused on Protection</h3>
            <p>Committed to safeguarding businesses with reliable, scalable, and efficient solutions.</p>
          </div>

          <div className="content-item">
            <h3>Experienced Team</h3>
            <p>Skilled professionals dedicated to maintaining high standards in digital security.</p>
          </div>

          <div className="content-item">
            <h3>Innovative Technology</h3>
            <p>We leverage AI and cloud technologies to combat modern cyber threats.</p>
          </div>

          <div className="content-item">
            <h3>Global Leader in Cybersecurity</h3>
            <p>VRV Security delivers advanced, AI-driven cybersecurity solutions worldwide.</p>
          </div>
        </div>
      </div>

      <div className="decorative-elements">
        <div className="decorative-image">
          <img src='/assets/About.png' alt="Decorative Element" />
        </div>
      </div>
    </section>
  );
}
