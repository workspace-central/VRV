import React from 'react';
import './Trusted.css';


const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-header">
        <div className="line-left">
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        
        <h2>Our Trusted Clients</h2>
        
        <div className="line-right">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="slider">
        <div className="slider-track">
          {/* First set of logos */}
          <div className="frame">
          <img src='/assets/vmart.png' alt="VMart" className="client-logo vmart" />
            <div className="group-logo"></div>
            <img src='/assets/ae.png' alt="AE" className="client-logo ae" />
            <img src='/assets/acuity.png' alt="Acuity" className="client-logo acuity" />
            <img src='/assets/k.png' alt="Acuity" className="client-logo acuity" />
            <img src='/assets/lhn.png' alt="LHN" className="client-logo lhn" />
            <img src='/assets/atkins.png' alt="Atkins" className="client-logo atkins" />
            
          </div>
          
          {/* Duplicate set for infinite scroll */}
          <div className="frame">
          <img src='/assets/vmart.png' alt="VMart" className="client-logo vmart" />
            <div className="group-logo"></div>
            <img src='/assets/ae.png' alt="AE" className="client-logo ae" />
            <img src='/assets/acuity.png' alt="Acuity" className="client-logo acuity" />
            <img src='/assets/k.png' alt="Acuity" className="client-logo acuity" />
            <img src='/assets/lhn.png' alt="LHN" className="client-logo lhn" />
            <img src='/assets/atkins.png' alt="Atkins" className="client-logo atkins" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;