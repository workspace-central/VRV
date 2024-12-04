// "use client";

// import { useEffect, useState } from "react";

// import React from "react";

// export default function GlobalPresence() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="bg-black text-white h-screen w-screen overflow-hidden flex flex-col p-4 md:p-8">
//       <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
//           Our Global Presence
//         </h1>

//         <p className="text-sm md:text-base lg:text-lg max-w-2xl mb-4 md:mb-8 text-gray-300">
//           We serve clients worldwide, offering innovative solutions backed by a
//           network of experts and local partners to deliver tailored support for
//           every region.
//         </p>

//         <div className="relative flex-1 w-full">
//           {/* Map Container */}
//           <div className="absolute inset-0">
//             <img
//               src="Map.png"
//               alt="World Map"
//               className="object-contain w-full h-full opacity-55"
//             />
//           </div>

//           {/* Stats Overlays */}
//           {isVisible && (
//             <>
//               {/* Top Right Stat */}
//               <div className="absolute top-0 right-0 max-w-[20vw]">
//                 <div className="flex items-baseline gap-1 mb-1">
                  
//                   <span className="font-mono text-3xl md:text-4xl lg:text-5xl">
//                     12
//                   </span>
//                   <span className="text-xl md:text-2xl lg:text-3xl">+</span>
//                 </div>
//                 <p className="text-xs md:text-sm leading-tight text-white">
//                   Countries across five continents, with a strong Global Reach,
//                   offering tailored cybersecurity solutions to ensure top tier
//                   protection.
//                 </p>
//               </div>

//               {/* Left Side Stat */}
//               <div className="absolute left-0 max-w-[20vw] ml-20">
//                 <div className="pt-0 font-mono text-3xl md:text-4xl lg:text-5xl tracking-wider">
//                   200
//                 </div>
//                 <p className="text-xs md:text-sm leading-tight text-white">
//                   International clients, including{" "}
//                   <span className="italic">Fortune 500</span> companies and{" "}
//                   <span className="italic">government agencies</span>.
//                 </p>
                
//               </div>

//               {/* Bottom Left Stat */}
//               <div className="mt-44 pl-0 bottom-60 left-0 max-w-[20vw] ml-20">
//                 <div className="font-mono text-2xl md:text-3xl lg:text-4xl tracking-wider mb-1">
//                   1,000,000
//                 </div>
//                 <p className="text-xs md:text-sm leading-tight text-white">
//                   Our solution provides real-time threat detection and{" "}
//                   <span className="italic">robust</span> protection for your
//                   devices worldwide, securing{" "}
//                   <span className="italic">endpoints</span> globally over
//                 </p>
                
//               </div>

//               {/* Bottom Center Stat */}
//               <div className="absolute bottom-0 left-2/3 -translate-x-1/2 max-w-[30vw] text-center">
//                 <p className="text-xs md:text-sm mb-1 text-white">
//                   Provides Proactive Monitoring with rate
//                 </p>
//                 <div className="font-mono text-3xl md:text-4xl lg:text-5xl tracking-wider mb-0">
//                   500,000+
//                 </div>
//                 <p className="text-xs md:text-sm leading-tight text-white">
//                   hours of annual threat surveillance, ensuring real-time,
//                   consistent defense against cyber risks for optimal security.
//                 </p>
                
//               </div>

//               {/* Right Side Stat */}
//               <div className="absolute  right-0 max-w-[20vw] text-right">
//                 <p className="text-xs md:text-sm -mb-28 text-white ">
//                   Recognized as a trusted leader in cybersecurity innovation and
//                   excellence, we have a valuation reaching
//                 </p>
//                 <div className="flex items-baseline gap-1 justify-end ">
//                   <span className="text-xl md:text-2xl lg:text-3xl">$</span>
//                   <span className="font-mono text-3xl pt-0 md:text-4xl lg:text-5xl tracking-wider">
//                     400
//                   </span>
//                   <span className="text-lg md:text-xl lg:text-2xl">M</span>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import "./GlobalPresence.css"; // Import the CSS file

const GlobalPresence = () => {
  return (
    <div className="map-container">
      <img
        src="/assets/Map.png"
        alt="World Map"
        className="responsive-map"
      />
    </div>
  );
};

export default GlobalPresence;