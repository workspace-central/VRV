import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const goToContactPage = () => {
    navigate("/contact"); // Replace "/contact" with your desired route
  };

  return (
    <div>
      {/* Navbar */}
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="logo-container">
            <div className="logo"></div>
          </div>

          <div className="nav-links">
            <a href="#home" className="nav-link active">
              Home
            </a>
            <a href="#about-us" className="nav-link">
              About Us
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#testimonials" className="nav-link">
              Clients
            </a>
          </div>

          {/* "Contact Us" button */}
          <button
            className="contact-button desktop-only"
            onClick={goToContactPage}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="logo"></div> {/* Sidebar logo */}
        <span className="close-button" onClick={toggleSidebar}>
          &times;
        </span>
        <a href="#home" className="nav-link active">
          Home
        </a>
        <a href="#about-us" className="nav-link">
          About Us
        </a>
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#testimonials" className="nav-link">
          Clients
        </a>
        <button className="contact-button mobile-only">Contact Us</button>
      </div>
    </div>
  );
}
