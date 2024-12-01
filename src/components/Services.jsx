import React from "react";
import "./Services.css"; // Import the external CSS file
import { services } from "../constants";
const Service = () => {
  return (
    <section id="services" className="service-section">
      <div className="service-header">
        <h3>{services[0].title}</h3>
        <h1>{services[1].title}</h1>

        <div className="service-intro">
          <p>
            {services[0].text}
          </p>
          <div className="view-services">
            <span>View all services</span>
            <div className="arrow"></div>
          </div>
        </div>
      </div>

      <div className="service-cards">
        {/* First Row of Cards */}
        <div className="service-row">
          <div className="service-card cloud-security">
            <h2>{services[3].title}</h2>
            <p>
             {services[3].text}
            </p>
          </div>
          <div className="service-card compliance">
            <h2>{services[4].title}</h2>
            <p>
              {services[4].text}
            </p>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="service-row">
          <div className="service-card infrastructure">
            <h2>{services[5].title}</h2>
            <p>
             {services[5].text}
            </p>
          </div>

          <div className="service-card monitoring">
            <h2>{services[6].title}</h2>
            <p>
              {services[6].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
