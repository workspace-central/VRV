import React from 'react';
// import backGif from '../assets/back-gif.png'; // Adjust path as needed

const Service = () => {
  return (
    <div className="service-section">
      <div className="service-header">
        <h3>Services We Offer</h3>
        <h1>Certified Excellence</h1>
        
        <div className="service-intro">
          <p>Our cutting-edge cybersecurity solutions leverage AI and cloud technologies, customized to secure today's digital infrastructure effectively.</p>
          <div className="view-services">
            <span>View all services</span>
            <div className="arrow"></div>
          </div>
        </div>
      </div>

      <div className="service-cards">
        <div className="service-card infrastructure">
          <h2>Enterprise Infrastructure VAPT</h2>
          <p>Tailored VAPT solutions for complex enterprise systems combine advanced testing methodologies and automation to uncover vulnerabilities. By simulating real-world attack scenarios, these solutions prevent unauthorized access, protect sensitive data, and ensure compliance with security standards.</p>
        </div>

        <div className="service-card monitoring">
          <h2>24/7 Threat Monitoring & SOC</h2>
          <p>Around-the-clock monitoring ensures real-time visibility into potential threats, enabling swift detection and response. Advanced analytics and incident response strategies mitigate risks, minimizing downtime and impact on operations. This proactive approach safeguards businesses against evolving cyber threats, fostering resilience and trust. Integrated threat intelligence enhances decision-making, enabling preemptive action against sophisticated cyberattacks.</p>
        </div>
      </div>

      <style jsx>{`
        .service-section {
  position: relative;
  width: 1280px;
  height: 1071px;
  margin: 0 auto;
  background: #F5F5F5;
  padding: 48px 16px;
}

.service-header h3 {
  font-family: 'Inter';
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}

.service-header h1 {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 80px;
  line-height: 113%;
  color: #000000;
  max-width: 418px;
  margin-top: 30px;
}

.service-intro {
  position: absolute;
  right: 16px;
  top: 126px;
  max-width: 397px;
}

.view-services {
  margin-top: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.arrow {
  width: 5px;
  height: 8px;
  border: 2px solid #000000;
}

.service-cards {
  display: flex;
  gap: 32px;
  margin-top: 570px;
}

.service-card {
  padding: 40px;
  color: #F5F5F5;
  border-radius: 40px 0;
  background: #000000; /* Black background for all cards */
}

.service-card.infrastructure {
  width: 466px;
}

.service-card.monitoring {
  width: 749px;
  border-radius: 0 40px;
}

.service-card h2 {
  font-family: 'Inter';
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 16px;
}

.service-card p {
  font-size: 16px;
  line-height: 150%;
  text-align: justify;
}

      `}</style>
    </div>
  );
};

export default Service;