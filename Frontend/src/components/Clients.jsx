import React from 'react';
import starIcon from './star.png'; // Importing the CSS for styling

const clients = [
  {
    id: 1,
    name: 'Acuity Insurance',
    location: 'US',
    service: 'Compliance audits and Endpoint security',
    description: 'VRV Security\'s compliance audits and endpoint security tools are robust and easy to integrate across teams. Their proactive updates and excellent support simplify cybersecurity and compliance management.',
    rating: 5,
    image: '/assets/ac.png', // Correct path to your image
  },
  {
    id: 2,
    name: 'V Mart',
    location: 'UK',
    service: 'Penetration Testing',
    description: 'VRV Security\'s solutions are not only robust but also easy to implement across our global teams. Their customer service and proactive updates make cybersecurity manageable and worry-free.',
    rating: 5,
    image: '/assets/v.png', // Correct path to your image
  },
  {
    id: 3,
    name: 'CNA Financial',
    location: 'US',
    service: 'Compliance audits',
    description: 'VRV Security\'s compliance audit solutions are robust and easy to implement, ensuring seamless integration across teams. Their proactive updates and dedicated support make managing compliance straightforward and efficient.',
    rating: 5,
    image: '/assets/cna.png', // Correct path to your image
  },
  {
    id: 4,
    name: 'Atkins Ptd',
    location: 'UK',
    service: 'Penetration Testing',
    description: 'VRV Security has redefined our approach to penetration testing. Their team\'s responsiveness and expertise give us confidence in identifying and addressing vulnerabilities. We couldn\'t ask for a better partner in fortifying our digital defenses.',
    rating: 5,
    image: '/assets/atkins.png', // Correct path to your image
  },
  {
    id: 5,
    name: 'Sage Group plc',
    location: 'UK',
    service: 'Cloud Security',
    description: 'VRV Security has revolutionized our approach to cloud security. Their responsive and knowledgeable team ensures we feel protected at every step. We couldn\'t ask for a better partner in safeguarding our cloud-based assets.',
    rating: 5,
    image: '/assets/sage.png', // Correct path to your image
  },
  {
    id: 6,
    name: 'Just Dial',
    location: 'IND',
    service: 'Penetration Testing',
    description: 'VRV Security has transformed our approach to DDoS protection and threat intelligence. Their highly responsive and knowledgeable team ensures we stay ahead of potential threats at every step. We couldn\'t ask for a better partner in safeguarding our digital infrastructure.',
    rating: 5,
    image: '/assets/j.png', // Correct path to your image
  },
];

export default function Clients() {
  const renderStars = () => (
    <div className="h-[18.50px] justify-start items-start gap-[6.53px] inline-flex">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="w-[19.59px] h-[18.50px] justify-center items-center flex">
          <div className="w-[19.59px] h-[18.50px] justify-center items-center inline-flex">
            <img className="w-[19.59px] h-[18.50px]" src={starIcon} alt="star" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-[1280px] h-[1127px] relative">
      {/* Header Section */}
      <div className="left-[16px] top-[40px] absolute text-[#f4f4f4] text-5xl font-semibold font-['Inter'] leading-[57.60px]">
        Hear From Our Satisfied Clients
      </div>
      <div className="w-[736px] left-[16px] top-[122px] absolute text-justify text-[#f4f4f4] text-base font-normal font-['Inter'] leading-normal">
        Our "Hear From Our Satisfied Clients" section showcases real experiences and testimonials, highlighting the value we bring to our clients. Discover how our expertise and commitment have made a difference across regions.
      </div>

      {/* Decorative Lines */}
      <div className="w-[1270.02px] h-[1039.18px] left-[3px] top-[25.94px] absolute">
        <div className="w-[110px] h-[0px] left-[1234px] top-[0.06px] absolute origin-top-left rotate-90 border-4 border-neutral-100/60"></div>
        <div className="w-[110px] h-[0px] left-[40.02px] top-[1039.12px] absolute origin-top-left -rotate-90 border-4 border-neutral-100/60"></div>
        <div className="w-[349.12px] h-[0px] left-[1269.58px] top-[349.12px] absolute origin-top-left -rotate-90 border-4 border-neutral-100/60"></div>
        <div className="w-[349.12px] h-[0px] left-[6.44px] top-[690.06px] absolute origin-top-left rotate-90 border-4 border-neutral-100/60"></div>
        <div className="w-[341.04px] h-[0px] left-[936.90px] top-[1.00px] absolute border-4 border-neutral-100/60"></div>
        <div className="w-[341.04px] h-[0px] left-[340.04px] top-[1040.58px] absolute origin-top-left rotate-180 border-4 border-neutral-100/60"></div>
      </div>

      {/* Testimonial Cards */}
      {clients.map((client, index) => {
        const positions = [
          { left: '142px', top: '216px' },
          { left: '683px', top: '216px' },
          { left: '142px', top: '494px' },
          { left: '683px', top: '494px' },
          { left: '142px', top: '772px' },
          { left: '683px', top: '772px' },
        ];

        return (
          <div key={client.id} className="w-[456px] h-[253px] absolute" style={positions[index]}>
            <div className="w-[456px] h-[270px] absolute bg-[#4c4c4c]/10 rounded-[15px] border-2 border-white backdrop-blur-[35px]" />
            
            {/* Rating Stars */}
            <div className="left-[23px] top-[24px] absolute">
              {renderStars()}
            </div>

            {/* Client Info */}
            <div className="left-[23px] top-[60px] absolute justify-start items-center gap-2 inline-flex">
              <img 
                className="w-[71.11px] h-10 rounded-[63px]" 
                src={client.image} 
                alt={client.name} 
              />
              <div className="py-[3px] flex flex-col">
                <span className="text-[#f4f4f4] text-base font-bold font-['Inter'] leading-relaxed">
                  {client.name}, {client.location}
                </span>
                <span className="text-[#f4f4f4] text-xs font-medium font-['Inter'] leading-tight">
                  Service provided - {client.service}
                </span>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="w-[408px] left-[23px] top-[122px] absolute text-justify text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
              {client.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}
