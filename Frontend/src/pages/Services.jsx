import React, { useEffect } from "react";
import Navbar from "../components/Header";
import Footer from '../components/Foot';

export default function FindService() {
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
  useEffect(() => {
    const button = document.querySelector('.contact-button');
    const parentDiv = button.closest('.bg-white'); // Find the parent div with the white background class
    const button2 = document.querySelector('.foot');

    if (window.getComputedStyle(parentDiv).backgroundColor === 'rgb(255, 255, 255)') {
      button.style.backgroundColor = '#100C08';
      button.style.color = '#ffffff';
    } else {
      button.style.backgroundColor = '#ffffff';
      button.style.color = '#100C08';
    }

    if (window.getComputedStyle(parentDiv).backgroundColor === 'rgb(255, 255, 255)') {
      button2.style.backgroundColor = '#100C08';
      button2.style.color = '#ffffff';
    } else {
      button2.style.backgroundColor = '#ffffff';
      button2.style.color = '#100C08';
    }
    
  }, []);
  useEffect(() => {
    const card = document.querySelector('.card');
    const parentDiv = card.closest('.bg-white'); // Find the parent div with the white background class
    const card2 = document.querySelector('.footer');
    const footerLinks = document.querySelectorAll('a, .span, .vrv');
    const linkedinIcon = document.querySelector('.linkedin a'); // Select the LinkedIn icon
    const stmlLine = document.querySelector('.STMLlines');

    // Check if the parent div's background color is white
    const isWhiteBackground = parentDiv && window.getComputedStyle(parentDiv).backgroundColor === 'rgb(255, 255, 255)';
  
    if (isWhiteBackground) {
      footerLinks.forEach(link => {
        link.style.color = '#ffffff'; // Update text color to white
      });
      linkedinIcon.style.backgroundImage = "url('/assets/linkedin2.png')"; // Change LinkedIn image to white version
      if (stmlLine) {
        stmlLine.style.backgroundColor = '#ffffff'; // Change line color to white
      }
    } else {
      footerLinks.forEach(link => {
        link.style.color = '#000000'; // Update text color to black
      });
      linkedinIcon.style.backgroundImage = "url('/assets/linkedin2.png')"; // Change LinkedIn image to black version
      if (stmlLine) {
        stmlLine.style.backgroundColor = '#000000'; // Change line color to black
      }
    }
  
    // Change background and text color for card and footer
    if (isWhiteBackground) {
      card.style.background = 'rgba(0, 0, 0, 0.8)'; // Darker background
      card.style.color = '#ffffff'; // White text
      card2.style.background = 'rgba(0, 0, 0, 0.8)'; // Darker background
      card2.style.color = '#ffffff'; // White text
    } else {
      card.style.background = 'rgba(255, 255, 255, 0.8)'; // Lighter background
      card.style.color = '#000000'; // Black text
      card2.style.background = 'rgba(255, 255, 255, 0.8)'; // Lighter background
      card2.style.color = '#000000'; // Black text
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center w-full max-md:max-w-full bg-white pt-8">
        <Navbar />
        <div className="SHeroSection w-[1238px] h-[552px] relative left-[60px] mt-8">
          <div className="ServiceImages w-[556.12px] h-[497px] left-[661px] top-[19px] absolute">
          <img
              className="Subtract w-[205.08px] h-[223.73px] left-[250.49px] top-[172.66px] absolute rounded-sm"
              src="/assets/3.png"
              alt="image1"
            />
            <div className="Circle1 w-[30.24px] h-[54.24px] left-[230px] top-7 absolute">
              <div className="Ellipse255 w-[54.24px] h-[54.24px] left-0 top-0 absolute bg-[#100c08] rounded-full" />
              <div className="Ellipse261 w-[27px] h-[27px] left-[14px] top-[14px] absolute bg-[#f4f4f4] rounded-full" />
              <div className="Ellipse262 w-[37px] h-[37px] left-[9px] top-[9px] absolute rounded-full border border-[#f4f4f4]" />
              <div className="Ellipse264 w-[45px] h-[45px] left-[5px] top-[5px] absolute rounded-full border border-[#f4f4f4]" />
            </div>
            <div className="Circle2 w-[77.12px] h-[77.12px] left-[400px] top-[370px] absolute">
              <div className="Ellipse255 w-[77.12px] h-[77.12px] left-0 top-0 absolute bg-[#100c08] rounded-full" />
              <div className="Ellipse261 w-[38.39px] h-[38.39px] left-[19.91px] top-[19.91px] absolute bg-[#f4f4f4] rounded-full" />
              <div className="Ellipse262 w-[52.61px] h-[52.61px] left-[12.80px] top-[12.80px] absolute rounded-full border border-[#f4f4f4]" />
              <div className="Ellipse264 w-16 h-16 left-[7.11px] top-[7.11px] absolute rounded-full border border-[#f4f4f4]" />
            </div>
            <img
              className="Subtract w-[272.03px] h-[178.81px] left-[20.12px] top-[260.19px] absolute rounded-[5.08px]"
              src="/assets/2.png"
              alt="image2"
            />
          </div>
          <div className="ServiceContent h-[377px] left-0 top-[102px] absolute flex-col justify-end items-start gap-10 inline-flex">
            <div className="Frame1171275930 h-[270px] flex-col justify-start items-start gap-8 inline-flex">
              <div className="FindTheServiceForYou self-stretch text-[#100c08] text-5xl font-bold font-['Inter'] leading-[54.24px]">
                Find the service for you
              </div>
              <div className="Frame1171275929 self-stretch h-[184px] flex-col justify-start items-end gap-4 flex">
                <div className="WhetherYouReStartingUpOrInTheFortuneGlobal500TapIntoOurBroadRangeOfServicesAndSolutionsToHelpYourBusinessThriveVrvSecurityMakingAnImpactThatMatters self-stretch">
                  <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal">
                    Whether you're starting up or in the Fortune Global 500, tap
                    into our broad
                    <br />
                    range of services and solutions to help your business
                    thrive.
                  </span>
                  <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">
                    VRV Security
                    <br />
                    making an impact that matters.
                  </span>
                </div>
                <div className="WithOurExpertiseInAiDrivenCybersecurityWeEnableOrganizationsToStayAheadOfEvolvingThreatsFromProtectingSensitiveDataToEnsuringComplianceAndOperationalResilienceOurSolutionsAreTailoredToMeetDiverseIndustryNeeds self-stretch">
                  <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal">
                    With our expertise in AI-driven cybersecurity, we enable
                    organizations to <br /> stay ahead of
                  </span>
                  <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">
                    evolving threats.
                  </span>
                  <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal">
                    From protecting sensitive data to ensuring <br />{" "}
                    compliance and operational resilience, our solutions are
                    tailored to meet <br />
                  </span>
                  <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">
                    diverse industry needs.
                  </span>
                </div>
              </div>
            </div>
            <div className="HoverButton w-[201px] h-[67px] p-2.5 rounded border border-[#100c08] justify-center items-center gap-2.5 inline-flex">
              <button className="Submit text-[#100c08] text-base font-normal font-['Inter'] leading-snug">
                KNOW MORE !
              </button>
            </div>
          </div>
          <div className="ImageBink w-[205.08px] h-[223.73px] left-[738px] top-[82px] absolute flex-col justify-center items-center inline-flex">
          <img
              className="w-[205.08px] h-[224.73px] rounded-[9.32px]"
              src="/assets/1.png"
              alt="image3"
            />
          </div>
        </div>


        <section className="SERVICESWEOFFER text-white  w-[1280px] h-[1200px] relative bg-black/75 py-16 px-4 border-white"
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

    <div className=" w-[1280px] h-[558px] relative bg-white mt-10 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-0 lg:py-0 gap-8 lg:gap-0">
            {/* Left content */}
            <div className="w-full lg:w-1/2 space-y-6">
            <div className="BusinessFeelingInsecure left-[8px] top-[59px] absolute text-[#100c08] text-5xl font-bold font-['Inter'] leading-[67.20px]">
    Business feeling insecure?
  </div>
  <div className="WeVeGotYouCoveredWithTailoredCybersecuritySolutionsToProtectAndStrengthenYourOperations w-[644px] left-[8px] top-[130px] absolute text-black text-base font-normal font-['Inter'] leading-snug">
    We’ve got you covered with tailored cybersecurity solutions to protect and strengthen your operations.
  </div>
  
              <button className="ButtonIcon w-[404px] h-[67px] p-2.5 left-[18px] top-[210px] absolute inline-flex items-center justify-center px-24 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                Request a Demo
                <img src="/assets/Vector.png" className="pl-2" />
              </button>
            </div>
            
            {/* Right image */}
            <div className="w-full lg:w-1/2">
              <div className="Photo w-[628px] h-[557px] left-[652px] top-[1px] absolute rounded-tr-[130px] rounded-bl-[130px] justify-center items-center inline-flex">
                <img
                  src="/assets/Photo.png" // Path to your image
                  alt="Person with a turquoise coffee cup"
                  className="object-cover w-full h-full rounded-lg" // Ensure the image covers the space properly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
        <Footer />
      </div>
    </div>
  );
}