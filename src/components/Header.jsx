import React, { useState, useEffect } from "react";
import "./Header.css";
import { navigation } from "../constants";

export default function Card() {
  const [activeNav, setActiveNav] = useState("#home");
  useEffect(() => {
    const handleHashChange = () => {
      setActiveNav(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      <div className="card">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="card-body">
          <div className="nav-links">
            {navigation.map((navItem) => (
              <a
                key={navItem.id}
                href={navItem.url}
                className={`nav-link ${
                  activeNav === navItem.url ? "active" : ""
                }`}
              >
                {navItem.title}
              </a>
            ))}
          </div>
          <button className="contact-button">
            Contact Us
          </button>
        </div>
      </div>
      </div>
  );
}