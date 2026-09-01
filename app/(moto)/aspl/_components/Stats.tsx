"use client";

import React from "react";
import Typography from "./Typography";

const statsData = [
  {
    value: "500+",
    label: "qualified employees in 4 countries",
  },
  {
    value: "1300+",
    label: "Authorized distributors in over 100 countries",
  },
  {
    value: "33,000",
    label: "products corresponding to 1,200,000 reference numbers",
  },
  {
    value: `"AS"`,
    label: "own product brand",
  },
  {
    value: "30000 m2",
    label: "total Warehouse space",
  },
  {
    value: "100%",
    label: "tested products",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="w-full bg-[#212733] py-16 md:py-24">
      <div className="custom-container px-4 sm:px-6 xl:px-0">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 bg-primary transform rotate-45"></div>
             <span className="text-primary font-semibold tracking-wide language-links">
              AS-PL in numbers
            </span>
          </div>
          <h2 className="text-white font-semibold tracking-wide section-title">
            Key facts and figures
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-lg"
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay={index * 100}
            >
              <span className="text-primary font-semibold number-title mb-2">
                {stat.value}
              </span>
              <p className="section-text text-[#484848] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
