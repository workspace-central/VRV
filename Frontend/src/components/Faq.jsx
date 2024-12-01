import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState(0);

  const faqItems = [
    {
      question: "What security measures do you implement?",
      answer: "We employ state-of-the-art encryption, regular security audits, and multi-factor authentication to ensure your data remains protected at all times."
    },
    {
      question: "How do you handle data privacy?",
      answer: "Your privacy is our priority. We follow strict GDPR compliance and industry best practices."
    },
    {
      question: "What support options are available?",
      answer: "24/7 technical support through multiple channels including phone, email, and live chat."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, we provide tailored solutions to meet your specific security needs."
    }
  ];

  return (
    <section className="faq-section">
      <h1 className="title">Frequently Asked Questions</h1>
      <p className="description">
        Our FAQ section provides clear answers to common questions, helping you find solutions quickly and efficiently. 
        Get the support you need, backed by expert insights and regional expertise.
      </p>

      {faqItems.map((item, index) => (
        <div 
          key={index} 
          className={`accordion-item ${expandedItem === index ? 'expanded' : ''}`} 
          onClick={() => setExpandedItem(expandedItem === index ? null : index)}
        >
          <div className={`question ${expandedItem === index ? 'expanded' : ''}`}>
            {item.question}
            <div className={`expand-arrow ${expandedItem === index ? 'expanded' : ''}`}></div>
          </div>
          {expandedItem === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}

      <div className="customer-service-frame">
        <img 
          src='/assets/ae' 
          alt="Customer Service"
        />
        <h3>Need Additional Help?</h3>
        <p>Contact our support team for personalized assistance</p>
        <button className="email-button">Shoot a direct email</button>
      </div>

      <div className="decorative-line"></div>
      <div className="decorative-line-rotate"></div>
      <div className="decorative-line-rotate-3"></div>
      <div className="decorative-line-left"></div>
      <div className="decorative-line-rotate-left"></div>
      <div className="decorative-line-rotate-top"></div>
    </section>
  );
};

export default FAQ;
