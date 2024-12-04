import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import Navbar from "./Header";
import Footer from "./Foot"
const countries = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Singapore", code: "+65" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    country: "",
    countryCode: "",
    phone: "",
    services: [],
    message: "",
    consent: false,
  })

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  return (
    <div>
    <div className="flex flex-col items-center w-full max-md:max-w-full pt-8">
      <Navbar />
    <div className="mt-4 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">We're Here to Help</h1>
            <p className="text-gray-300">
              We're here for you! Whether you're a loyal VRV Security fan or a first-time visitor,
              we're ready to help. Reach out for support, inquiries, or expert advice, and let's
              ensure your cybersecurity journey is secure and hassle-free.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
          <img src="/assets/6.png" alt="Decorative Element" className="w-[160px] h-auto"/>
            <h2 className="text-xl font-semibold mb-2">Operation-Centric Cybersecurity</h2>
            <p className="text-gray-300 text-sm">
              At VRV Security, we embed advanced security measures directly into your critical workflows,
              ensuring seamless protection against evolving threats. Our operation-focused approach
              safeguards data, systems, and processes while maintaining business continuity.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
  <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
    <MapPin className="w-5 h-5" />
    Location
  </h3>
  <div className="aspect-[4/3] bg-zinc-800 rounded-lg mb-4">
    <img 
      src="/assets/location.png" 
      alt="Location Image"
      className="w-full h-full object-cover rounded-lg" 
    />
  </div>
  <div className="flex items-center justify-center gap-3">
    <div className="Blink w-[19px] h-[19px] justify-center items-center inline-flex">
      <div className="Ellipse252 w-[19px] h-[19px] bg-[#d9d9d9] rounded-full" />
    </div>
    <button className="w-[239px] h-[60px] bg-white text-black py-2 rounded font-medium">
      GET DIRECTION
    </button>
    <div className="Blink w-[19px] h-[19px] justify-center items-center inline-flex">
      <div className="Ellipse252 w-[19px] h-[19px] bg-[#d9d9d9] rounded-full" />
    </div>
  </div>
</div>

        </div>

        {/* Right Column - Form */}
        <div className="bg-white p-8 rounded-lg">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Business Email *"
              className="w-full p-3 border rounded text-black"
              required
            />
            
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="p-3 border rounded text-black"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="p-3 border rounded text-black"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name *"
                className="p-3 border rounded text-black"
                required
              />
              <input
                type="text"
                placeholder="Job Title *"
                className="p-3 border rounded text-black"
                required
              />
            </div>

            <div className="relative">
              <select className="w-full p-3 border rounded appearance-none text-black pr-10">
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <select className="w-full p-3 border rounded appearance-none text-black pr-10">
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
              <input
                type="tel"
                placeholder="Contact Number *"
                className="p-3 border rounded text-black"
                required
              />
            </div>

            <div className="space-y-2 text-black">
              <h4 className="font-medium">What service are you about to avail?</h4>
              {[
                "Vulnerability Assessment & Penetration Testing",
                "Incident Response & Forensics",
                "IoT and SCADA Security",
                "Cloud Security Solutions",
                "Threat Intelligence and Monitoring",
              ].map((service) => (
                <label key={service} className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    onChange={() => handleCheckboxChange(service)}
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>

            <textarea
              placeholder="Message *"
              rows={4}
              className="w-full p-3 border rounded text-black"
              required
            />

            <label className="flex items-start gap-2 text-black">
              <input type="checkbox" className="mt-1" required />
              <span className="text-sm">
                I consent to receive promotional communications in digital forms such as email and social media
                from VRV Security by checking this box. For more information, please refer to our{' '}
                <a href="#" className="underline">Privacy Notice</a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded font-medium"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
</div>
  )
}