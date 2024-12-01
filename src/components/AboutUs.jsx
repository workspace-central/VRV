import React from 'react';
import { aboutUs } from '../constants';

export default function AboutUs() {
  return (
    <section id="About-Us" className="py-10 px-4 md:px-16 ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 max-w-7xl">
        {/* Content Section */}
        <div className="flex-1 md:w-2/3 lg:w-1/2">
          {aboutUs.map((item) => {
            if (item.id === 0) {
              return (
                <div key={item.id} className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h2>
                  {item.text.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-base text-gray-200 leading-relaxed mb-4"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              );
            } else {
              const dynamicTitle = `title${item.id}`;
              const dynamicText = `text${item.id}`;

              return (
                <div key={item.id} className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item[dynamicTitle]}
                  </h3>
                  {item[dynamicText]?.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-base text-gray-200 leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              );
            }
          })}
        </div>
        <div className="flex-1 md:w-1/3 flex justify-center">
          <img
            src="/assets/About.png"
            alt="Decorative Element"
            className="w-full md:w-4/5 lg:w-3/5 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
