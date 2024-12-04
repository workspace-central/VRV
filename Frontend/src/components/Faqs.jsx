"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

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
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 bg-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute w-[754px] h-[754px] left-[calc(50%-754px/2+595px)] top-[calc(50%-754px/2)] bg-cover bg-no-repeat opacity-25 z-0" 
     style={{ backgroundImage: "url(bg-circle.jpeg)" }}>
</div>

      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#000000"
            d="M42.7,-62.9C50.9,-53.7,50.1,-35.6,53.1,-19.9C56.1,-4.2,62.9,9.2,62.3,23.3C61.7,37.4,53.6,52.3,41.3,61.9C28.9,71.5,12.3,76,-4.4,81.6C-21.1,87.2,-37.9,93.9,-51.5,88.7C-65,83.5,-75.3,66.4,-79.4,49.1C-83.5,31.8,-81.4,14.2,-76.9,-1.3C-72.4,-16.8,-65.5,-30.2,-55.3,-39.8C-45.1,-49.4,-31.6,-55.2,-18.1,-60.1C-4.6,-65,8.9,-69,22.9,-67.7C36.8,-66.4,51.2,-59.8,42.7,-62.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="flex-1 z-10">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Our FAQ section provides clear answers to common questions, helping
          you find solutions quickly and efficiently. Get the support you need,
          backed by expert insights and regional expertise.
        </p>

        <div className="space-y-4 w-5/5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border overflow-hidden transition-all duration-200 ${
                openIndex === index ? "bg-black text-white" : "bg-white"
              }`}
              style={{
                borderTopRightRadius: "0",
                borderBottomLeftRadius: "0",
                borderTopLeftRadius: "2rem",
                borderBottomRightRadius: "2rem",
              }}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-200 ${
                  openIndex === index
                    ? "pb-6 max-h-40"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-[400px] z-10 m-28">
        <div
          className="bg-black text-white p-16 relative h-96 "
          style={{
            borderTopRightRadius: "0",
            borderBottomLeftRadius: "0",
            borderTopLeftRadius: "3rem",
            borderBottomRightRadius: "3rem",
          }}
        >
          <div className="absolute top-6 right-6">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Do you have more questions?
          </h2>
          <p className="text-gray-300 mb-6">
            Our team is here to help. Reach out for quick answers and
            personalized support!
          </p>
          <button
  className="w-full bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
  onClick={() => window.location.href = "mailto:support@vrvsecurity.in"}
>
  Shoot a direct email
</button>

        </div>
      </div>
    </div>
  );
}

