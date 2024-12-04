import React from 'react';
import './Trusted.css';

const Trusted = () => {
  const logos = ['vmart.png', 'ae.png', 'acuity.png', 'k.png', 'lhn.png', 'atkins.png'];

  return (
    <section id='trusted-section' className="trusted-section">
      <div className="header">
        <div className="line-left">
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <h2 className="title">Our Trusted Clients</h2>
        <div className="line-right">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="logos-container">
      <div className="logos-track">
  {logos.concat(logos).map((logo, index) => (
    <div key={index} className="logo-item">
      <img src={`/assets/${logo}`} alt={logo.split('.')[0]} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Trusted;
