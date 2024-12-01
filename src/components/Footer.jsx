import React from "react";
import "./Footer.css";
import { footer } from "../constants";
import linkedinIcon from "../assets/linkedin.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Main Content */}
        <div className="content">
          {/* Logo Section */}
          <div className="logo-container">
            <div className="logo">
            </div>
            <div className="logo-text">{footer[0].text}</div>
          </div>

          {/* Navigation Links */}
          <nav className="nav-links">
            <a href="#" className="nav-link">
              {footer[1].text}
            </a>
            <a href="#" className="nav-link">
              {footer[2].text}
            </a>
            <a href="#" className="nav-link">
              {footer[3].text}
            </a>
            <a href="#" className="nav-link">
              {footer[4].text}
            </a>
          </nav>

          {/* Social Links */}
          <div className="social-links">
          <a href="#" className="linkedin-icon">
          <img src={linkedinIcon} alt="LinkedIn" /></a>
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
