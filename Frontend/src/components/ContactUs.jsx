import React, { useState } from "react";
import "./ContactUs.css";
import Navbar from "./Header";
// Country list with country codes
const countries = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Singapore", code: "+65" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  // Add more countries here
];
const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    country: "",
    countryCode: "",
    phone: "",
    services: [],
    message: "",
    consent: false,
  });

  const handleCheckboxChange = (service) => {
    setFormData((prevState) => {
      const services = [...prevState.services];
      if (services.includes(service)) {
        return {
          ...prevState,
          services: services.filter((s) => s !== service),
        };
      } else {
        services.push(service);
        return { ...prevState, services };
      }
    });
  };
  const handleCountryChange = (e) => {
    const selectedCountry = countries.find((c) => c.name === e.target.value);
    setFormData({
      ...formData,
      country: selectedCountry.name,
      countryCode: selectedCountry.code,
    });
  };

  return (
    <div>
      <Navbar />
      <section className="contact-us">
        <div className="help-section">
          <h1>We're Here to Help</h1>
          <p className="help-description">
            We're here for you! Whether you're a loyal VRV Security fan or a
            first-time visitor, we're ready to help. Reach out for support,
            inquiries, or expert advice, and let's ensure your cybersecurity
            journey is secure and hassle-free.
          </p>
          <div className="support-section-box">
          <div className="cybersecurity-section">
            <img src="/assets/6.png" alt="Decorative Element" className="small-img"/>
            <h2>Operation-Centric Cybersecurity</h2>
            <p>
            At VRV Security, we embed advanced security measures directly into your critical workflows, ensuring seamless protection against evolving threats. Our operation-focused approach safeguards data, systems, and processes while maintaining business continuity. With real-time threat detection and tailored solutions, we align security with your operations to empower your success in a digital-first world.
            </p>
            <div className="support-section">
            </div>
          </div>
        </div>
        </div>

        <form className="contact-form">
          <input type="email" placeholder="Business Email *" required />
          <div className="name-group">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>
          <div className="company-group">
            <input type="text" placeholder="Company Name *" required />
            <input type="text" placeholder="Job Title *" required />
          </div>
          <select
            onChange={handleCountryChange}
            value={formData.country}
            required
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>

          <div className="phone-group">
            <select
              value={formData.countryCode}
              onChange={(e) =>
                setFormData({ ...formData, countryCode: e.target.value })
              }
              required
            >
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
            <input type="tel" placeholder="Contact Number *" required />
          </div>
          <h4>What service are you about to avail?</h4>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckboxChange(
                    "Vulnerability Assessment & Penetration Testing"
                  )
                }
              />
              Vulnerability Assessment & Penetration Testing
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckboxChange("Incident Response & Forensics")
                }
              />
              Incident Response & Forensics
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("IoT and SCADA Security")}
              />
              IoT and SCADA Security
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckboxChange("Cloud Security Solutions")
                }
              />
              Cloud Security Solutions
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckboxChange("Threat Intelligence and Monitoring")
                }
              />
              Threat Intelligence and Monitoring
            </label>
          </div>
          <textarea placeholder="Message" rows="4"></textarea>
          <label className="consent-label">
            <input type="checkbox" required />I consent to receive promotional
            communications in digital forms.
          </label>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
