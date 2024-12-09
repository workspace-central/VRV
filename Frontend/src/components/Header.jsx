import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigateToSection = (hash) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Ensure the home page is loaded before scrolling
  };

  return (
    <div className="header-container">
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Main Card */}
      <div className="card">
        <div className="card-body">
          <div className="logo-container">
            <div className="logo"></div>
          </div>

          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link
              className="nav-link"
              onClick={() => navigateToSection("#About-Us")}
            >
              About Us
            </Link>
            <button
              className="nav-link"
              onClick={() => navigate("/services")}
            >
              Services
            </button>
            <Link
              className="nav-link"
              onClick={() => navigateToSection("#trusted-section")}
            >
              Clients
            </Link>
          </div>
        </div>
      </div>

      {/* "Contact Us" Button for Desktop */}
      <button
        className="contact-button desktop-only"
        onClick={() => navigate("/contact")}
      >
        Contact Us
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="logo"></div>
        <span className="close-button" onClick={toggleSidebar}>
          &times;
        </span>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <span
          className="nav-link"
          onClick={() => navigateToSection("#about-us")}
        >
          About Us
        </span>
        <span
          className="nav-link"
          onClick={() => navigate("/services")}
        >
          Services
        </span>
        <span
          className="nav-link"
          onClick={() => navigateToSection("#testimonials")}
        >
          Clients
        </span>
        <button
          className="contact-button mobile-only"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}