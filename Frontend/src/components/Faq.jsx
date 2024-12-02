"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";
import "./Faq.css";


const faqs = [
  {
    question: "How does VRV Security protect against emerging cyber threats?",
    answer:
      "VRV Security stays ahead of emerging threats with advanced threat intelligence, machine learning, and real-time monitoring. Our experts continually update systems with the latest threat data, providing proactive defenses and tailored strategies to keep your business secure.",
  },
  {
    question:
      "What makes VRV Security different from other cybersecurity providers?",
    answer:
      "Our unique combination of advanced AI-driven solutions, 24/7 expert monitoring, and customized security frameworks sets us apart. We provide comprehensive protection while ensuring seamless integration with your existing systems.",
  },
  {
    question: "How can I assess the cybersecurity risks for my business?",
    answer:
      "We offer comprehensive risk assessment services that evaluate your current security posture, identify potential vulnerabilities, and provide actionable recommendations for strengthening your defenses.",
  },
  {
    question:
      "How does VRV Security ensure secure remote access for our teams?",
    answer:
      "We implement multi-factor authentication, encrypted connections, and continuous monitoring to ensure secure remote access. Our solutions adapt to your team's needs while maintaining the highest security standards.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-container">
      {/* Background image */}
      <div className="background-circle top-right" />
      <div className="background-circle bottom-left" />

      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-description">
          Our FAQ section provides clear answers to common questions, helping
          you find solutions quickly and efficiently. Get the support you need,
          backed by expert insights and regional expertise.
        </p>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="faq-question"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`faq-icon ${openIndex === index ? "rotated" : ""}`}
                />
              </button>
              <div
                className={`faq-answer ${
                  openIndex === index ? "expanded" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-contact">
        <div className="contact-box">
          <div className="contact-dot" />
          <h2 className="contact-title">Do you have more questions?</h2>
          <p className="contact-description">
            Our team is here to help. Reach out for quick answers and
            personalized support!
          </p>
          <button className="contact-button">Shoot a direct email</button>
        </div>
      </div>
    </div>
  );
}
