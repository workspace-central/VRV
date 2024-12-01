import React from 'react';
import './Clients.css'; 

const clients = [
  {
    id: 1,
    name: 'Acuity Insurance',
    location: 'US',
    service: 'Compliance audits and Endpoint security',
    description: 'VRV Security\'s compliance audits and endpoint security tools are robust and easy to integrate across teams. Their proactive updates and excellent support simplify cybersecurity and compliance management.',
    rating: 5,
    image: 'Frontend/src/components/acuity-Insurance-logo.png', 
  },
  {
    id: 2,
    name: 'V Mart',
    location: 'UK',
    service: 'Penetration Testing',
    description: 'VRV Security\'s solutions are not only robust but also easy to implement across our global teams. Their customer service and proactive updates make cybersecurity manageable and worry-free.',
    rating: 5,
    image: 'Frontend/src/components/v-mart-logo.png',
  },
  {
    id: 3,
    name: 'CNA Financial',
    location: 'US',
    service: 'Compliance audits',
    description: 'CNA Financial\'s compliance audit solutions are robust and easy to implement, ensuring seamless integration across teams. Their proactive updates and dedicated support make managing compliance straightforward and efficient.',
    rating: 5,
    image: 'Frontend/src/components/cna-financial-logo.png',
  },
  {
    id: 4,
    name: 'Atkins Ptd',
    location: 'UK',
    service: 'Penetration Testing',
    description: 'VRV Security has redefined our approach to penetration testing. Their team\'s responsiveness and expertise give us confidence in identifying and addressing vulnerabilities. We couldn\'t ask for a better partner in fortifying our digital defenses.',
    rating: 5,
    image: 'Frontend/src/components/atkins-logo.png',
  },
  {
    id: 5,
    name: 'Sage Group plc',
    location: 'UK',
    service: 'Cloud Security',
    description: 'VRV Security has revolutionized our approach to cloud security. Their responsive and knowledgeable team ensures we feel protected at every step. We couldn\'t ask for a better partner in safeguarding our cloud-based assets.',
    rating: 5,
    image: 'Frontend/src/components/sage-logo.png', 
  },
  {
    id: 6,
    name: 'Just Dial',
    location: 'IND',
    service: 'Penetration Testing',
    description: 'VRV Security has transformed our approach to DDoS protection and threat intelligence. Their highly responsive and knowledgeable team ensures we stay ahead of potential threats at every step. We couldn\'t ask for a better partner in safeguarding our digital infrastructure.',
    rating: 5,
    image: 'Frontend/src/components/just-dial-logo.png',
  },
];

export default function Clients() {
  return (
    <section id="Clients" className="clients-section">
      <div className="clients-content">
        <h2 className="clients-title">Our Clients</h2>
        <p className="clients-description">
          We have had the privilege of working with leading companies worldwide, providing cutting-edge cybersecurity solutions that ensure robust protection.
        </p>

        <div className="clients-list">
          {clients.map(client => (
            <div key={client.id} className="client-card">
              <div className="client-header">
                <img 
                  src={client.image} 
                  alt={`${client.name} logo`} 
                  className="client-logo"
                />
                <h3>{client.name}, {client.location}</h3>
              </div>
              <div className="rating">
                {"★".repeat(client.rating)} {/* Render the star rating */}
              </div>
              <h4>Service: {client.service}</h4>
              <p>{client.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="decorative-elements">
        <div className="decorative-image">
          <img src='/assets/Clients.png' alt="Decorative Element" />
        </div>
      </div>









    </section>
  );
}
