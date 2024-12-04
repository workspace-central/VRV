"use client";

import { useEffect, useState } from "react";
import React from "react";

export default function GlobalPresence() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="GlobalPresence w-[1280px] h-[1049px] relative bg-[#100c08]">
      <div className="OurGlobalPresence left-[16px] top-[49px] absolute text-[#f4f4f4] text-5xl font-bold font-['Inter'] leading-[54.24px]">
        Our Global Presence
      </div>
      
      <div className="WeServeClientsWorldwideOfferingInnovativeSolutionsBackedByANetworkOfExpertsAndLocalPartnersToDeliverTailoredSupportForEveryRegion w-[649px] left-[23px] top-[128px] absolute text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
        We serve clients worldwide, offering innovative solutions backed by a network of experts and local partners to deliver tailored support for every region.
      </div>

      <div className="Map w-[620px] h-[497.77px] left-[330px] top-[307px] absolute">
        <img src="Map.png" alt="World Map" className="w-full h-full opacity-55" />
      </div>

      {isVisible && (
        <>

          <div className="Group1 w-[257px] h-[119px] left-[34px] top-[321px] absolute">
            <div className="left-0 top-0 absolute text-[#f4f4f4] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">200</div>
            <div className="InternationalClientsIncludingFortune500CompaniesAndGovernmentAgencies w-[250px] left-[7px] top-[62px] absolute text-justify">
              <span className="text-[#f4f4f4] text-sm font-normal font-['Inter'] leading-[18.60px]">International clients, including </span>
              <span className="text-[#f4f4f4] text-sm font-normal font-['Lucida Handwriting'] leading-[18.60px]">Fortune 500</span>
              <span className="text-[#f4f4f4] text-sm font-normal font-['Inter'] leading-[18.60px]"> companies and </span>
              <span className="text-[#f4f4f4] text-sm font-normal font-['Lucida Handwriting'] leading-[18.60px]">government agencies.</span>
            </div>
          </div>

          <div className="w-[297px] h-[61px] left-[35px] top-[720px] absolute text-[#f4f4f4] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">
            1,000,000
          </div>

          <div className="w-[255px] h-[104.12px] left-[41px] top-[789.94px] absolute text-justify">
            <span className="text-[#f4f4f4] text-sm font-medium font-['Inter'] leading-tight">Our solution provides real-time threat detection and </span>
            <span className="text-[#f4f4f4] text-sm font-normal font-['Lucida Handwriting'] leading-tight">robust</span>
            <span className="text-[#f4f4f4] text-sm font-medium font-['Inter'] leading-tight"> protection for your devices worldwide, securing </span>
            <span className="text-[#f4f4f4] text-sm font-normal font-['Lucida Handwriting'] leading-tight">endpoints</span>
            <span className="text-[#f4f4f4] text-sm font-medium font-['Inter'] leading-tight"> globally over</span>
          </div>

          <div className="IntClients w-[301px] h-[150px] left-[896px] top-[128px] absolute">
            <div className="left-[px] top-[3px] absolute">
              <span className="text-[#f4f4f4] text-5xl font-normal font-bold shadow-lg leading-[54.24px] ">12</span>
              <span className="text-[#f4f4f4] text-5xl font-normal font-['Inter'] leading-[54.24px]">+</span>
            </div>
            <div className="w-[310px] left-[5px] top-[62px] absolute text-justify text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
              Countries across five continents, with a strong Global Reach, offering tailored cybersecurity solutions to ensure top tier protection for businesses worldwide.
            </div>
          </div>

          <div className="Validation w-[319px] h-32 left-[935px] top-[586px] absolute">
            <div className="w-[319px] h-14 left-0 top-0 absolute text-justify">
              <span className="text-[#f4f4f4] text-base font-medium font-['Inter'] leading-snug">
                Recognized as a trusted leader in cybersecurity innovation and excellence, we have a valuation reaching
              </span>
            </div>
            <div className="left-[27px] top-[69px] absolute text-[#f4f4f4] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">400</div>
            <div className="left-0 top-[74px] absolute text-[#f4f4f4] text-5xl font-normal font-['Poppins'] leading-[54.24px]">$ </div>
            <div className="Million left-[115px] top-[95px] absolute text-[#f4f4f4] text-base font-normal font-['Inter'] leading-[18.08px]">Million</div>
          </div>

          <div className="PMonitoring w-[434px] h-[163px] left-[423px] top-[845px] absolute">
            <div className="w-[405.43px] left-[12.24px] top-[-0px] absolute text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
              Provides Proactive Monitoring with rate 
            </div>
            <div className="w-[421.76px] left-[12.24px] top-[97px] absolute text-justify text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
              hours of annual threat surveillance, ensuring real-time, consistent defense against cyber risks for optimal security.
            </div>
            <div className="w-[363.25px] left-2.5 top-[26px] absolute">
              <span className="text-[#f4f4f4] text-5xl font-normal font-['Digital Numbers'] leading-[67.20px]">500,000</span>
              <span className="text-[#f4f4f4] text-5xl font-normal font-['Inter'] leading-[67.20px]">+</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// import "./globalpresence.css"; // Import the CSS file

// const GlobalPresence = () => {
//   return (
//     <div className="map-container">
//       <img
//         src="/assets/Map.png"
//         alt="World Map"
//         className="responsive-map"
//       />
//     </div>
//   );
// };

// export default GlobalPresence;