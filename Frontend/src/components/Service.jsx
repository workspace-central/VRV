import React from "react";
import "./Service.css"; // Import the external CSS file

const Service = () => {
  return (
    <section id="services" className="service-section">
      <div className="service-header">
        <h3>Services We Offer</h3>
        <h1>Certified Excellence</h1>

        <div className="service-intro">
          <p>
            Our cutting-edge cybersecurity solutions leverage AI and cloud
            technologies, customized to secure today's digital infrastructure
            effectively.
          </p>
          <div className="view-services">
            <span>View all services</span>
            <img 
      src="/assets/arrow.png" 
      alt="Arrow Icon" 
    />
          </div>
        </div>
      </div>

      <div className="service-cards">
        {/* First Row of Cards */}
        <div className="service-row">
          <div className="service-card cloud-security">
            <h2>AI-Powered VAPT</h2>
            <p>
              AI-powered solutions revolutionize threat management by identifying
              vulnerabilities in real time and automating responses. With machine
              learning and predictive analytics, they detect anomalies, prioritize
              risks, and prevent potential exploits. Continuously adapting to
              emerging threats, AI ensures robust and proactive security. This
              fusion of intelligence and automation safeguards systems efficiently.
            </p>
          </div>
          <div className="service-card compliance">
            <h2>Cloud Infrastructure VAPT</h2>
            <p>
              Strengthening cloud security begins with detailed vulnerability
              assessments to identify potential risks and weaknesses. AI-driven
              tools enhance detection, prioritize threats, and automate remediation
              efforts to safeguard cloud environments. Proactive monitoring ensures
              the protection of sensitive data and applications from evolving
              cyberattacks. This comprehensive approach fortifies trust and
              resilience in cloud operations.
            </p>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="service-row">
          <div className="service-card infrastructure">
            <h2>Enterprise Infrastructure VAPT</h2>
            <p>
              Tailored VAPT solutions for complex enterprise systems combine advanced
              testing methodologies and automation to uncover vulnerabilities. By
              simulating real-world attack scenarios, these solutions prevent
              unauthorized access, protect sensitive data, and ensure compliance
              with security standards.
            </p>
          </div>

          <div className="service-card monitoring">
            <h2>24/7 Threat Monitoring & SOC</h2>
            <p>
              Around-the-clock monitoring ensures real-time visibility into potential
              threats, enabling swift detection and response. Advanced analytics and
              incident response strategies mitigate risks, minimizing downtime and
              impact on operations. This proactive approach safeguards businesses
              against evolving cyber threats, fostering resilience and trust.
              Integrated threat intelligence enhances decision-making, enabling
              preemptive action against sophisticated cyberattacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
