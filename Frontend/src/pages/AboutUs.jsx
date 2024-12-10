import React, { useEffect } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Foot";
import "./AboutUs.css";

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

<div>
<div className="flex flex-col items-center w-full max-md:max-w-full bg-black pt-8">
<div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src=""
              alt="Core Values Illustration"
              className="object-contain grow w-full aspect-[1.24] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow justify-center px-11 pt-10 pb-16 w-full border-sky-400 border-solid bg-stone-950 border-[5px] text-neutral-100 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af9b0e755d8831439f0c5b25541efe3514faba7d38f0273811e2a7862165f777?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
                  alt="Core Values Icon"
                  className="object-contain w-20 aspect-square"
                />
                <h2 className="mt-6 text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
                  Our Core Values
                </h2>
                <div className="mt-6 text-base leading-8 text-justify max-md:max-w-full">
                  <ul>
                    <li>
                      <span className="font-bold">Adaptability:</span> Embracing
                      innovation to stay ahead of evolving cybersecurity challenges.
                    </li>
                    <li>
                      <span className="font-bold">Proactiveness: </span>
                      Anticipating and addressing threats before they impact our
                      clients.
                    </li>
                    <li>
                      <span className="font-bold">Reliability:</span> Ensuring the
                      security and continuity of operations for all stakeholders.
                    </li>
                    <li>
                      <span className="font-bold">Integrity:</span> Protecting
                      digital assets with the highest ethical standards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow justify-center px-11 py-28 w-full border-sky-400 border-solid bg-stone-950 border-[5px] text-neutral-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-col rotate-[3.141592653589793rad] max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/197bdc93fb3cb7de81db7d1404a3ec5986d5745f8648f39f016657bc3ee76eb3?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
                  alt="Vision Icon"
                  className="object-contain w-20 aspect-square"
                />
                <h2 className="mt-6 text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
                  Our Vision
                </h2>
                <div className="mt-6 text-base leading-8 text-justify max-md:max-w-full">
                  To be the global leader in cybersecurity, setting new benchmarks
                  with adaptive and proactive solutions that empower organizations
                  to thrive in a secure digital world.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src=""
              alt="Vision Illustration"
              className="object-contain grow w-full aspect-[1.24] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src=""
              alt="Mission Illustration"
              className="object-contain grow w-full aspect-[1.24] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow justify-center px-11 py-28 w-full border-sky-400 border-solid bg-stone-950 border-[5px] text-neutral-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb81d31dcc408e78e0ff1c4fdc86a35afc6c3a9fdd59989e0e936d0a45fa7701?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
                  alt="Mission Icon"
                  className="object-contain w-20 aspect-square"
                />
                <h2 className="mt-6 text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
                  Our Mission
                </h2>
                <div className="mt-6 text-base leading-8 text-justify max-md:max-w-full">
                  Our mission is to redefine cybersecurity by providing adaptive
                  and proactive solutions that safeguard digital assets, ensure
                  operational continuity, and mitigate emerging threats
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</div>


<div className="flex flex-col px-20 pt-20 bg-stone-950 pb-[2613px] max-md:px-5 max-md:pb-24">
  <div className="flex overflow-hidden flex-col px-20 pt-8 pb-16 mt-28 text-base leading-7 text-justify bg-neutral-100 text-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <img
      loading="lazy"
      src=""
      alt="Vinod Kumar, CEO of VRV Security"
      className="object-contain self-center max-w-full aspect-[1.73] w-[698px]"
    />
    <div className="mt-8 max-md:max-w-full">
      Vinod Kumar, the visionary CEO of VRV Security, has been at the forefront of <span className="font-bold text-stone-950">revolutionizing</span> cybersecurity for over <span className="font-bold text-stone-950">two decades</span>. Under his leadership, VRV Security has achieved a remarkable <span className="font-bold text-stone-950">$400M valuation by 2024,</span> with operations expanded to <span className="font-bold text-stone-950">12</span> countries and a client retention rate of <span className="font-bold text-stone-950">95%.</span>
      <br />
      <br />
      Before VRV Security, Vinod held pivotal roles at industry giants like <span className="font-bold text-stone-950">Microsoft and Cisco.</span> As <span className="font-bold text-stone-950">Senior Director </span>of Cybersecurity Strategy at Microsoft, he spearheaded the development of<span className="font-bold text-stone-950"> AI-driven threat intelligence platforms</span> and enhanced the security of <span className="font-bold text-stone-950">Azure services</span>, managing a global team of over <span className="font-bold text-stone-950">200 professionals.</span> At Cisco, he designed cutting-edge security solutions for <span className="font-bold text-stone-950">Fortune 500 clients</span> in the financial and healthcare sectors, laying the foundation for modern network and enterprise <span className="font-bold text-stone-950">security frameworks.</span>
      <br />
      <br />
      A passionate mentor and leader, Vinod has guided diverse global teams and <span className="font-bold text-stone-950">inspired</span> hundreds of professionals in the <span className="font-bold text-stone-950">cybersecurity domain.</span> His <span className="font-bold text-stone-950">expertise</span> and strategic acumen continue to set industry standards, driving <span className="font-bold text-stone-950">innovation</span> and excellence in protecting <span className="font-bold text-stone-950">digital landscapes worldwide.</span>
    </div>
  </div>
  <div className="self-start mt-11 ml-5 text-5xl font-bold leading-none text-center text-white max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
    VRV JOURNEY
  </div>
  <div className="flex flex-wrap gap-5 self-end mt-8 text-2xl font-bold leading-none text-center text-neutral-100">
    <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">2020</div>
    <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">2021</div>
    <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">2022</div>
    <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">2023</div>
    <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">2024</div>
    <div className="overflow-hidden px-6 py-4 border border-solid border-neutral-100 max-md:px-5">2025 - 2030</div>
  </div>
  <div className="self-end mt-12 w-full max-w-[1258px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow justify-center px-10 py-32 w-full border border-sky-400 border-solid max-md:px-5 max-md:py-24 max-md:mt-5 max-md:max-w-full">
          <div className="self-start text-2xl font-bold leading-snug text-neutral-100">Workforce Growth</div>
          <div className="mt-4 text-base leading-6 text-justify text-neutral-100 max-md:max-w-full">
            25 employees (core cybersecurity engineers) form the backbone of our operations, driving innovation and delivering world-class security solutions.
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src=""
          alt="VRV Security workforce visualization"
          className="object-contain grow w-full aspect-[1.64] max-md:mt-5 max-md:max-w-full"
        />
      </div>
    </div>
  </div>
</div>




<div className="flex overflow-hidden flex-col items-start px-20 py-36 bg-stone-950 max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-5 justify-between max-w-full text-5xl font-bold leading-none text-center text-white w-[1729px] max-md:text-4xl">
        <div className="max-md:text-4xl">VRV JOURNEY</div>
        <div className="max-md:text-4xl">VRV JOURNEY</div>
      </div>
      <div className="flex flex-wrap gap-10 mt-8 w-full text-2xl font-bold leading-none text-center max-w-[2642px] text-neutral-100 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 gap-5">
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2020
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid bg-neutral-100 border-neutral-100 text-stone-950 max-md:px-5">
            2021
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2022
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2023
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2024
          </div>
          <div className="overflow-hidden px-6 py-4 border border-solid border-neutral-100 max-md:px-5">
            2025 - 2030
          </div>
        </div>
        <div className="flex flex-wrap flex-1 gap-5">
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2020
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2021
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid bg-neutral-100 border-neutral-100 text-stone-950 max-md:px-5">
            2022
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2023
          </div>
          <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
            2024
          </div>
          <div className="overflow-hidden px-6 py-4 border border-solid border-neutral-100 max-md:px-5">
            2025 - 2030
          </div>
        </div>
      </div>
      <div className="mt-12 w-full max-w-[2642px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex overflow-hidden flex-col grow justify-center px-10 py-32 w-full border border-sky-400 border-solid max-md:px-5 max-md:py-24 max-md:mt-5 max-md:max-w-full">
                    <div className="self-start text-2xl font-bold leading-snug text-neutral-100">
                      Infrastructure Expansion
                    </div>
                    <div className="mt-4 text-base leading-6 text-justify text-neutral-100 max-md:max-w-full">
                      Opened data centers in Singapore and the UK, enhancing
                      global infrastructure to deliver faster and more reliable
                      cybersecurity solutions.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a97358d5fd71a777bc6357474fe08291483d44550103f8177370d18ac70d634?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
                    className="object-contain grow w-full aspect-[1.64] max-md:mt-5 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex overflow-hidden flex-col grow justify-center px-10 py-32 w-full border border-sky-400 border-solid max-md:px-5 max-md:py-24 max-md:mt-5 max-md:max-w-full">
                    <div className="self-start text-2xl font-bold leading-snug text-neutral-100">
                      Workforce Growth
                    </div>
                    <div className="mt-4 text-base leading-6 text-justify text-neutral-100 max-md:max-w-full">
                      150 employees across technical, sales, and R&D
                      departments, working collaboratively to deliver
                      cutting-edge cybersecurity solutions and exceptional
                      client service.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5c67dedbc33e524fb3048766faf14f2ac7089e87b50fa69760491135a22f98?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
                    className="object-contain grow w-full aspect-[1.64] max-md:mt-5 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 w-full max-w-[2643px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-5xl font-bold leading-none text-center text-white max-md:text-4xl">
                VRV JOURNEY
              </div>
              <div className="flex flex-wrap gap-5 justify-between mt-8 text-2xl font-bold leading-none text-center text-neutral-100">
                <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
                  2020
                </div>
                <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
                  2021
                </div>
                <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
                  2022
                </div>
                <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid bg-neutral-100 border-neutral-100 text-stone-950 max-md:px-5">
                  2023
                </div>
                <div className="overflow-hidden px-16 py-4 whitespace-nowrap border border-solid border-neutral-100 max-md:px-5">
                  2024
                </div>
                <div className="overflow-hidden px-6 py-4 border border-solid border-neutral-100 max-md:px-5">
                  2025 - 2030
                </div>
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col grow justify-center px-10 py-32 w-full border border-sky-400 border-solid max-md:px-5 max-md:py-24 max-md:mt-5 max-md:max-w-full">
                      <div className="self-start text-2xl font-bold leading-snug text-neutral-100">
                        Infrastructure Expansion
                      </div>
                      <div className="mt-4 text-base leading-6 text-justify text-neutral-100 max-md:max-w-full">
                        Established SOC (Security Operations Centers) in the US
                        and Germany, bolstering global infrastructure expansion
                        to enhance real-time threat monitoring and response
                        capabilities.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d7a9f1dc54f24084675d5525746df925a798cb4fb2d4bdab3605ca786fb0beb?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
                      className="object-contain grow w-full aspect-[1.64] max-md:mt-5 max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-end font-bold leading-none text-center">
                <div className="flex flex-col self-stretch">
                  <div className="self-start text-5xl text-white max-md:text-4xl">
                    VRV JOURNEY
                  </div>
                  <div className="flex gap-5 mt-8 text-2xl whitespace-nowrap text-neutral-100">
                    <div className="overflow-hidden px-16 py-4 border border-solid border-neutral-100 max-md:px-5">
                      2020
                    </div>
                    <div className="overflow-hidden px-16 py-4 border border-solid border-neutral-100 max-md:px-5">
                      2021
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden px-16 py-4 mt-20 text-2xl whitespace-nowrap border border-solid border-neutral-100 text-neutral-100 max-md:px-5 max-md:mt-10">
                  2022
                </div>
                <div className="overflow-hidden px-16 py-4 mt-20 text-2xl whitespace-nowrap border border-solid border-neutral-100 text-neutral-100 max-md:px-5 max-md:mt-10">
                  2023
                </div>
                <div className="overflow-hidden px-16 py-4 mt-20 text-2xl whitespace-nowrap border border-solid bg-neutral-100 border-neutral-100 text-stone-950 max-md:px-5 max-md:mt-10">
                  2024
                </div>
                <div className="overflow-hidden px-5 py-4 mt-20 text-2xl border border-solid border-neutral-100 text-neutral-100 max-md:px-5 max-md:mt-10">
                  2025 - 2030
                </div>
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col grow justify-center px-10 py-12 w-full text-2xl font-bold leading-snug border border-sky-400 border-solid text-neutral-100 max-md:px-5 max-md:mt-5 max-md:max-w-full">
                      <div className="self-start">Workforce Growth</div>
                      <div className="mt-4 text-base leading-6 text-justify text-neutral-100 max-md:max-w-full">
                        500 employees globally, with 60% specialized in advanced
                        cybersecurity solutions. Our workforce has grown by 40%
                        in the past two years, reflecting our commitment to
                        innovation and excellence in cybersecurity.
                      </div>
                      <div className="self-start mt-8">
                        Infrastructure Expansion
                      </div>
                      <div className="mt-4 text-base leading-6 text-justify text-neutral-100 max-md:max-w-full">
                        Planning for expansions in Australia and the UAE, with a
                        focus on establishing state-of-the-art infrastructure to
                        support advanced cybersecurity operations and client
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9795215738d54b06af21ec5e6aa1ad38fe2cbe55dca8edf03b72e63b4a5acfa6?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
                      className="object-contain grow w-full aspect-[1.64] max-md:mt-5 max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 items-end self-end mt-32 font-bold leading-none text-center max-md:mt-10">
        <div className="flex flex-col self-stretch">
          <div className="self-start text-5xl text-white max-md:text-4xl">
            VRV JOURNEY
          </div>
          <div className="flex gap-5 mt-8 text-2xl whitespace-nowrap text-neutral-100">
            <div className="overflow-hidden px-16 py-4 border border-solid border-neutral-100 max-md:px-5">
              2020
            </div>
            <div className="overflow-hidden px-16 py-4 border border-solid border-neutral-100 max-md:px-5">
              2021
            </div>
          </div>
        </div>
        <div className="overflow-hidden px-16 py-4 mt-20 text-2xl whitespace-nowrap border border-solid border-neutral-100 text-neutral-100 max-md:px-5 max-md:mt-10">
          2022
        </div>
        <div className="overflow-hidden px-16 py-4 mt-20 text-2xl whitespace-nowrap border border-solid border-neutral-100 text-neutral-100 max-md:px-5 max-md:mt-10">
          2023
        </div>
        <div className="overflow-hidden px-16 py-4 mt-20 text-2xl whitespace-nowrap border border-solid border-neutral-100 text-neutral-100 max-md:px-5 max-md:mt-10">
          2024
        </div>
        <div className="overflow-hidden px-5 py-4 mt-20 text-2xl border border-solid bg-neutral-100 border-neutral-100 text-stone-950 max-md:px-5 max-md:mt-10">
          2025 - 2030
        </div>
      </div>
      <div className="self-end mt-12 max-w-full w-[1258px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow py-14 pr-16 pl-1.5 w-full border border-sky-400 border-solid text-neutral-100 max-md:pr-5 max-md:mt-5 max-md:max-w-full">
              <div className="self-start ml-8 text-2xl font-bold leading-snug max-md:ml-2.5">
                Future Goals
              </div>
              <div className="mt-7 text-base leading-7 max-md:max-w-full">
                Client Base Expansion: Targeting 1,000 clients by 2030.
                <br />
                Revenue Growth: Projecting a CAGR of 30%, with an estimated
                revenue of $1 billion by 2030.
                <br />
                Technology Leadership: Becoming a pioneer in AI-powered
                automated penetration testing, aiming for 40% market share in
                cloud VAPT.
                <br />
                Global Recognition: Attaining ISO 27701 and becoming a preferred
                cybersecurity partner for G7 member states.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed3cfad262a2e8953629b723d2b31b2c777d52992eeabe3699435bc6766e9d6?placeholderIfAbsent=true&apiKey=73970d97fb184e6092b54615a06b5f8b"
              className="object-contain grow w-full aspect-[1.64] max-md:mt-5 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>




        <Footer />
      </div>
    </div>
  );
}
