import React from "react";
import "./Footer.css";
import { navigation } from "../constants";
import { footer } from "../constants";
import { useState,useEffect } from "react";
const Footer = () => {
  const [activeNav, setActiveNav] = useState("#home");
  useEffect(() => {
    const handleHashChange = () => {
      setActiveNav(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="content">
          <div className="logo-container">
            <div className="logo">
            </div>
          </div>
          <div className="nav">
            {navigation.map((navItem) => (
              <a
                key={navItem.id}
                href={navItem.url}
                className={`nav1 ${
                  activeNav === navItem.url ? "active" : ""
                }`}
              >
                {navItem.title}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/company/vrv-security" className="linkedin-icon"></a>
          </div>
        </div>

        {/* Credits Section */}
        <div className="credits">
          <div className="divider"></div>
          <div className="credits-row">
            <span className="copyright">
              {footer[5].text}
            </span>
            <div className="footer-links">
              <a href="#" className="footer-link">
                {footer[6].text}
              </a>
              <a href="#" className="footer-link">
                {footer[7].text}
              </a>
              <a href="#" className="footer-link">
              {footer[8].text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;