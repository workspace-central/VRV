import React from 'react';
import './navbar.css';

export default function Card() {
  return (
    <div>
    <div className="card">
      
      <div className="card-body">
      <div className="logo-container">
          <div className="logo"></div>
        </div>
        
        <div className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
        </div>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
    </div>
  );
}