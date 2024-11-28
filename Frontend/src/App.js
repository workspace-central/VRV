import * as React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Layout() {
  const testimonials = [
    {
      author: "James Li",
      role: "Chief ISO, Financial Services Company",
      content:
        "VRV Security's solutions are not only robust but also easy to implement across our global teams. Their customer service and proactive updates make cybersecurity manageable and worry-free.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0d217dbe4cffb9d62b9ca35c113d35770d4c2b539506de760e444c25c101ca02?placeholderIfAbsent=true&apiKey=babe1e364d7c491d9ab530c1da4ff133",
    },
    {
      author: "Sarah Thompson",
      role: "IT Director, Global Manufacturing Firm",
      content:
        "VRV Security has transformed our approach to cybersecurity. Their team is incredibly responsive and knowledgeable, making us feel secure at every step. We couldn't ask for a better partner in safeguarding our digital assets.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86a87d1a248c260f11a1e260398aefef1443349bd0b6bdc65c823f27470c43c6?placeholderIfAbsent=true&apiKey=babe1e364d7c491d9ab530c1da4ff133",
    },
    {
      author: "David Kim",
      role: "Head of Security, Healthcare Organization",
      content:
        "Since partnering with VRV Security, we've seen a dramatic improvement in our threat detection and response times. Their tailored solutions truly address our unique needs, giving us confidence that our systems are secure.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1dcafef8994a42c16abfc74b63e03e9a9f355ab9e8077051c3785927e2f14d3?placeholderIfAbsent=true&apiKey=babe1e364d7c491d9ab530c1da4ff133",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-stone-950">
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="hero-section">
        <Header />
        <Hero />
        </div>
      </main>
    </div>
  );
}
