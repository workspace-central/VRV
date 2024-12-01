import React from "react";
import "./Footer.css";
import linkedinLogo from './linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Main Content */}
        <div className="content">
          {/* Logo Section */}
<div className="logo-container">
  <div className="logo"></div> {/* Logo image or icon here */}
  <div className="logo-text">VRV SECURITY</div>
</div>


          {/* Navigation Links */}
          <nav className="nav-links">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
          </nav>

          {/* Social Links */}
          <div className="social-links">
  <a href="https://www.linkedin.com" className="footer-link" target="_blank" rel="noopener noreferrer">
    <img src={linkedinLogo} alt="LinkedIn Logo" style={{ width: '20px', height: '20px' }} />
  </a>
</div>
        </div>

        {/* Credits Section */}
        <div className="credits">
          <div className="divider"></div>
          <div className="credits-row">
            <span className="copyright">
              © 2024 VRV Security. All rights reserved.
            </span>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
              <a href="#" className="footer-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
