import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const navigateToSection = (hash) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Ensure the home page is loaded before scrolling
  };
  return (
    <footer className="foot w-[1300px] h-[374px] relative">
      <div className="footer w-[1280px] h-[364px] px-16 py-20 left-[10px] top-[10px] absolute bg-[#f4f4f4] flex flex-col justify-start items-center gap-20">
        {/* Navigation Links */}
        <div className="self-stretch justify-start items-center gap-8 flex">
          <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-6"></div>
          <nav className="justify-center items-center gap-8 flex">
            <a href="#home" onClick={() => navigateToSection("#home")} className="text-[#100c08] text-base font-semibold font-['Roboto'] leading-normal">
              Home
            </a>
            <a href="#About-Us" onClick={() => navigateToSection("#About-Us")} className="text-[#100c08] text-base font-semibold font-['Roboto'] leading-normal">
              About Us
            </a>
            <a href="#services" onClick={() => navigate("/services")} className="text-[#100c08] text-base font-semibold font-['Roboto'] leading-normal">
              Services
            </a>
            <a href="#trusted-section" onClick={() => navigateToSection("#trusted-section")} className="text-[#100c08] text-base font-semibold font-['Roboto'] leading-normal">
              Clients
            </a>
          </nav>
          <div className="linkedin grow shrink basis-0 h-6 justify-end items-center gap-3 flex">
            <a
              href="https://www.linkedin.com/company/vrv-security/"
              className="w-6 h-6 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/assets/linkedin.png')" }}
            ></a>
          </div>
        </div>
        {/* Divider and Footer Links */}
        <div className="self-stretch h-[54px] flex flex-col justify-start items-center gap-8">
          <div className="STMLlines self-stretch h-px bg-[#100c08]"></div>
          <div className="justify-start items-start gap-6 flex">
            <span className="span text-[#100c08] text-sm font-normal font-['Roboto'] leading-[21px]">
              © 2024 VRV Security - All rights reserved.
            </span>
            <div className="flex gap-6">
              <a href="#privacy-policy" className="text-[#100c08] text-sm font-normal font-['Roboto'] underline leading-[21px]">
                Privacy Policy
              </a>
              <a href="#terms-of-service" className="text-[#100c08] text-sm font-normal font-['Roboto'] underline leading-[21px]">
                Terms of Service
              </a>
              <a href="#cookies-settings" className="text-[#100c08] text-sm font-normal font-['Roboto'] underline leading-[21px]">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Logo and Branding */}
      <div className="w-10 h-[49.71px] left-[68px] top-[76px] absolute">
        <div className="w-[60.79px] h-[45.97px] left-[-3.21px] top-0 absolute">
        <img
    src="favicon.ico" // Replace with your image path
    alt="Logo"
    className="w-[60.79px] h-[45.97px] absolute left-[-5.21px] top-0 object-contain"
  />
        </div>
      </div>
      <div className="vrv left-[64px] top-[130px] absolute text-center text-[#100c08] text-[10px] font-bold font-['Playfair Display'] leading-[12.93px]">
        VRV<br />SECURITY
      </div>
    </footer>
  );
};

export default Footer;
