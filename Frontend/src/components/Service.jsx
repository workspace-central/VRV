import React from "react";

const Service = () => {
  return (
    <section id = "services" className="service-section">
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
            <div className="arrow"></div>
          </div>
        </div>
      </div>

      <div className="service-cards">
        {/* First Row of Cards */}
        <div className="service-row">
          <div className="service-card cloud-security">
            <h2>AI-Powered VAPT</h2>
            <p>
              AI-powered solutions revolutionize threat management by
              identifying vulnerabilities in real time and automating responses.
              With machine learning and predictive analytics, they detect
              anomalies, prioritize risks, and prevent potential exploits.
              Continuously adapting to emerging threats, AI ensures robust and
              proactive security. This fusion of intelligence and automation
              safeguards systems efficiently.
            </p>
          </div>
          <div className="service-card compliance">
            <h2>Cloud Infrastructure VAPT</h2>
            <p>
              Strengthening cloud security begins with detailed vulnerability
              assessments to identify potential risks and weaknesses. AI-driven
              tools enhance detection, prioritize threats, and automate
              remediation efforts to safeguard cloud environments. Proactive
              monitoring ensures the protection of sensitive data and
              applications from evolving cyberattacks. This comprehensive
              approach fortifies trust and resilience in cloud operations.
            </p>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="service-row">
          <div className="service-card infrastructure">
            <h2>Enterprise Infrastructure VAPT</h2>
            <p>
              Tailored VAPT solutions for complex enterprise systems combine
              advanced testing methodologies and automation to uncover
              vulnerabilities. By simulating real-world attack scenarios, these
              solutions prevent unauthorized access, protect sensitive data, and
              ensure compliance with security standards.
            </p>
          </div>

          <div className="service-card monitoring">
            <h2>24/7 Threat Monitoring & SOC</h2>
            <p>
              Around-the-clock monitoring ensures real-time visibility into
              potential threats, enabling swift detection and response. Advanced
              analytics and incident response strategies mitigate risks,
              minimizing downtime and impact on operations. This proactive
              approach safeguards businesses against evolving cyber threats,
              fostering resilience and trust. Integrated threat intelligence
              enhances decision-making, enabling preemptive action against
              sophisticated cyberattacks.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-section {
          position: relative;
          width: 1280px;
          height: auto;
          margin: 0 auto;
          background: #f5f5f5;
          padding: 48px 16px;
        }

        .service-header h3 {
          font-family: "Inter";
          font-weight: 700;
          font-size: 20px;
          color: #000000;
        }

        .service-header h1 {
          font-family: "Inter";
          font-weight: 600;
          font-size: 80px;
          line-height: 113%;
          color: #000000;
          max-width: 418px;
          margin-top: 30px; /* Existing margin */
          margin-bottom: 16px; /* Reduced margin below the title */
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
          flex-direction: column;
          gap: 32px;
          margin-top: 40px; /* Reduced margin to close the gap */
        }

        .service-row {
          display: flex;
          gap: 32px;
        }

        .service-card {
          margin-top: 40px;
          padding: 40px;
          color: #f5f5f5;
          border-radius: 40px 0;
          background: #000000; /* Black background for all cards */
          flex: 1;
        }

        .service-card.cloud-security {
          background: #222; /* Optional: Different color for visual distinction */
        }

        .service-card.compliance {
          background: #333; /* Optional: Different color for visual distinction */
        }

        .service-card.infrastructure {
          width: 466px;
        }

        .service-card.monitoring {
          width: 749px;
          border-radius: 0 40px;
        }

        .service-card h2 {
          font-family: "Inter";
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
    </section>
  );
};

export default Service;
