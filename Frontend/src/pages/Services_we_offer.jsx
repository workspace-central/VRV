import React from 'react';
import Footer from '../components/Foot';

const services = [
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description: "Focused on enterprise, cloud, and industrial control systems, VRV Security uses proprietary AI tools to enhance cybersecurity. With an 85% improvement in vulnerability detection rates, our solutions help businesses preempt threats and protect critical systems, fostering innovation and operational resilience.",
  },
  {
    title: "Incident Response & Forensics",
    description: "Delivered 80% faster recovery times for ransomware attacks compared to industry standards, VRV Security empowers organizations to protect critical operations. Our advanced recovery protocols powered by AI-driven insights to ensure rapid containment and allowing businesses to maintain continuity even in the face of sophisticated cyber threats.",
  },
  {
    title: "IoT and SCADA Security",
    description: "Secured 2,000+ industrial IoT devices across global manufacturing clients, VRV Security ensures robust protection for critical operations. Leveraging AI-driven security frameworks, we safeguard interconnected systems from vulnerabilities, enabling manufacturing businesses to operate seamlessly and securely in the age of Industry 4.0.",
  },
  {
    title: "Cloud Security Solutions",
    description: "Enhanced data protection for 50% of our clients, reducing breaches by 95%, VRV Security delivers unparalleled security measures. Through advanced encryption, real-time monitoring, and AI-powered threat mitigation, we ensure our clients' sensitive information remains secure, enabling them to focus on growth without compromising on safety.",
  },
  {
    title: "Threat Intelligence and Monitoring",
    description: "Providing real-time threat intelligence updates to 100% of our clients, VRV Security ensures actionable insights for 75% of identified threats. Our advanced AI-driven threat analysis enables organizations to respond proactively, reducing risk. This empowers clients to stay ahead of evolving cyber threats with timely and precise countermeasures.",
  },
];

export default function Services_we_offer() {
  return (
  <div>
    <section className="text-white min-h-screen py-16 px-4 border-[120px] border-white"
  style={{
    background: `url('/assets/smoky.gif') no-repeat center center`,
    backgroundSize: 'cover',
  }}
>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-medium text-center mb-4 tracking-wide">SERVICES WE OFFER</h1>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          We provide comprehensive cybersecurity solutions tailored to protect your business from 
          emerging threats and ensure operational continuity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white text-black p-8 rounded-lg relative overflow-hidden ${
                index === services.length - 1 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
              }`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#21B9FA]"></div>
              <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href="#" className="text-[#21B9FA] font-medium hover:underline">Find out more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

