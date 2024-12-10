import React, { useEffect } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Foot";

export default function ContactPage() {
  // useEffect(() => {
  //     const button = document.querySelector('.contact-button');
  //     const parentDiv = button.closest('.bg-white'); // Find the parent div with the white background class

  //     if (window.getComputedStyle(parentDiv).backgroundColor === 'rgb(255, 255, 255)') {
  //       button.style.backgroundColor = '#100C08';
  //       button.style.color = '#ffffff';
  //     } else {
  //       button.style.backgroundColor = '#ffffff';
  //       button.style.color = '#100C08';
  //     }
  //   }, []);
  //   useEffect(() => {
  //     const card = document.querySelector('.card');
  //     const parentDiv = card.closest('.bg-white'); // Find the parent div with the white background class

  //     if (parentDiv && window.getComputedStyle(parentDiv).backgroundColor === 'rgb(255, 255, 255)') {
  //       card.style.background = 'rgba(0, 0, 0, 0.8)'; // Darker background
  //       card.style.color = '#ffffff'; // White text
  //     } else {
  //       card.style.background = 'rgba(255, 255, 255, 0.8)'; // Lighter background
  //       card.style.color = '#000000'; // Black text
  //     }
  //   }, []);

  return (
    <div>
      <div className="flex flex-col items-center w-full max-md:max-w-full bg-black pt-8">
        <Navbar />
        <div
          className="MainBanner w-[1280px] h-[397px] pl-6 pr-[846px] py-[124px] rounded border border-[#f4f4f4] flex-col justify-center items-start gap-[11px] inline-flex"
          style={{ backgroundImage: "url('/assets/bg.png')" }}
        >
          <div className="Frame1171275935 self-stretch p-2.5 border border-[#f4f4f4] justify-center items-center gap-2.5 inline-flex">
            <div className="VrvSecurity text-white text-xl font-bold font-['Inter'] leading-snug">
              VRV SECURITY
            </div>
          </div>
          <div className="WeProtectSoYouCanExcel w-[410px] h-[95px] text-white text-4xl font-light font-['Inter'] leading-[50.40px]">
            We protect, so you can excel
          </div>
        </div>


<div className="MainAbout w-[1279px] h-[1041px] relative bg-[#f4f4f4] border-8 border-[#f4f4f4] mt-8">
  <div className="Content left-[21px] top-[156px] absolute justify-start items-center gap-[142px] inline-flex">
    <div className="AbtContent w-[603px] flex-col justify-start items-start gap-10 inline-flex">
      <div className="FoundedIn2020InChennaiTamilNaduVrvSecurityHasRapidlyBecomeAGlobalLeaderInCybersecurityTheCompanyFocusesOnSecuringDigitalEcosystemsAndAddressingModernCyberThreatsWithInnovativeSolutionsEmpoweringOrganizationsToOperateSafelyInADigitalFirstWorld self-stretch text-justify">
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal">Founded in </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">2020</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> in Chennai, Tamil Nadu, VRV Security has rapidly become a global leader in cybersecurity. The company focuses on </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">securing</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> digital ecosystems and </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">addressing</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> modern cyber threats with </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">innovative</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> solutions, </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">empowering</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> organizations to operate </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">safely</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> in a digital-first world.</span>
      </div>
      <div className="SpecializingInAiPoweredAndCloudBasedVulnerabilityAssessmentAndPenetrationTestingVaptVrvSecurityDeliversPreciseAndProactiveCybersecurityServicesByLeveragingAdvancedAiDrivenToolsTheCompanyEnsuresAccurateThreatDetectionAndRobustDefenseStrategiesMakingItAReliablePartnerForBusinessesWorldwide self-stretch text-justify">
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">Specializing</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> in AI-powered and </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">cloud-based</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> Vulnerability Assessment and Penetration Testing </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">(VAPT),</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> VRV Security delivers </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">precise</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> and </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">proactive</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> cybersecurity services. By leveraging advanced AI-driven tools, the company ensures </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">accurate</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> threat detection and </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">robust</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> defense strategies, making it a reliable partner for </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">businesses worldwide.</span>
      </div>
      <div className="TrustedByFortune500CompaniesAndGovernmentOrganizationsVrvSecurityHasBecomeAReliablePartnerForSecuringDigitalEcosystemsTheCompanyServesAWideRangeOfIndustriesIncludingItHealthcareFinanceManufacturingAndCriticalInfrastructureProvidingCustomizedSolutionsToAddressDiverseAndEvolvingSecurityChallenges self-stretch text-justify">
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal">Trusted by </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">Fortune 500 companies</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> and </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">government</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> organizations, VRV Security has become a reliable partner for securing digital ecosystems. The company serves a wide range of industries, including </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">IT, healthcare, finance, manufacturing</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal">, and </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">critical infrastructure,</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> providing </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">customized</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> solutions to address </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">diverse</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> and </span>
        <span className="text-[#100c08] text-base font-bold font-['Inter'] leading-normal">evolving</span>
        <span className="text-[#100c08] text-base font-normal font-['Inter'] leading-normal"> security challenges.</span>
      </div>
    </div>
    <div className="LogoCont w-[417.82px] h-[417.82px] relative">
      <div className="Rectangle16 w-[417.82px] h-[417.82px] left-0 top-0 absolute rounded-[81.93px] border-8 border-[#100c08]" />
      <div className="Objects w-[406px] h-[297.35px] left-[6px] top-[60px] absolute">
      <img 
      src="/assets/wow.png" 
      alt="Logo" 
      className="w-full h-full object-contain"
    />
      </div>
    </div>
  </div>
  <div className="AboutVrvSecurity w-[494px] h-[54px] left-[21px] top-[67px] absolute text-black text-5xl font-bold font-['Inter'] leading-[54.24px]">
    About VRV Security
  </div>
  <div className="KeyInfos w-[1265px] h-[330px] left-[-1px] top-[675px] absolute bg-[#100c08]">
    <div className="KeyInfos w-[420px] h-[166px] px-[51px] pt-[35px] pb-9 left-0 top-0 absolute bg-[#21b9fa] justify-center items-center inline-flex">
      <div className="Info1 w-[313px] h-[100px] relative">
        <div className="InternationalClients w-[370px] left-0 top-[59px] absolute text-center text-[#100c08] text-[32px] font-semibold font-['Inter'] leading-9">
          International Clients
        </div>
        <div className="left-[101px] top-0 absolute text-[#100c08] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">
          200
        </div>
      </div>
    </div>
    <div className="KeyInfos w-[429px] h-[162px] pl-[82px] pr-[83px] py-9 left-[426px] top-[168px] absolute bg-[#21b9fa] justify-center items-center inline-flex">
      <div className="Info1 w-[270px] left-[-50px] h-[100px] relative">
        <div className="CountriesAcross w-[370px] left-0 top-[54px] absolute text-center text-[#100c08] text-[32px] font-semibold font-['Inter'] leading-9">
          Countries across
        </div>
        <div className="w-24 left-[150px] top-0 absolute text-[#100c08] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">
          12
        </div>
      </div>
    </div>
    <div className="KeyInfos w-[408px] h-[166px] px-[122px] pt-9 pb-[37px] left-[857px] top-0 absolute bg-[#21b9fa] justify-center items-center inline-flex">
      <div className="Info1 w-[171px] h-[100px] relative">
        <div className="Continents left-0 top-[57px] absolute text-center text-[#100c08] text-[32px] font-semibold font-['Inter'] leading-9">
          Continents
        </div>
        <div className="left-[69px] top-0 absolute text-[#100c08] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">
          5
        </div>
      </div>
    </div>
    <div className="w-[270px] h-[83px] left-[17px] top-[200px] absolute">
      <div className="00 left-[100px] top-0 absolute">
        <span className="text-[#f4f4f4] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">500,00</span>
        <span className="text-[#f4f4f4] text-5xl font-normal font-['Inter'] leading-[54.24px]">+</span>
      </div>
      <div className="HoursOfThreatMonitoringAnnually w-[370px] left-0 top-[61px] absolute text-center text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
        hours of Threat Monitoring annually
      </div>
    </div>
    <div className="left-[444px] top-[30px] absolute">
      <div className="98 left-[97px] top-0 absolute">
        <span className="text-[#f4f4f4] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">99.98</span>
        <span className="text-[#f4f4f4] text-5xl font-normal font-['Inter'] leading-[54.24px]">%</span>
      </div>
      <div className="UptimeUsingVaptAndIncidentResponseProtocols w-[370px] left-0 top-[61px] absolute text-center text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
        Uptime using VAPT and incident response protocols
      </div>
    </div>
    <div className="w-[415px] h-[108px] left-[878px] top-[201px] absolute">
      <div className="left-[138px] top-0 absolute">
        <span className="text-[#f4f4f4] text-5xl font-normal font-['Digital Numbers'] leading-[54.24px]">75</span>
        <span className="text-[#f4f4f4] text-5xl font-normal font-['Inter'] leading-[54.24px]">%</span>
      </div>
      <div className="ReductionInIncidentDetectionTimeSavingUpto1BillionAnnually w-[370px] left-0 top-[64px] absolute text-center text-[#f4f4f4] text-base font-normal font-['Inter'] leading-snug">
        reduction in Incident Detection time, saving up to 1 Billion annually
      </div>
    </div>
  </div>
  <div className="Line40 w-[329px] h-[0px] left-[423px] top-[676px] absolute origin-top-left rotate-90 border-2 border-[#f4f4f4]"></div>
  <div className="Line42 w-[1280px] h-[0px] left-[1271.55px] top-[841px] absolute origin-top-left rotate-180 border-2 border-[#f4f4f4]"></div>
  <div className="Line41 w-[330px] h-[0px] left-[854px] top-[675px] absolute origin-top-left rotate-90 border-2 border-[#f4f4f4]"></div>
</div>


        <Footer />
      </div>
    </div>
  );
}
