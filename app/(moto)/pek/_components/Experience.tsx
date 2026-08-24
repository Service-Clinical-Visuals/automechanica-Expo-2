"use client";

import React from "react";
import { Target, ShieldCheck, RefreshCw, Settings } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Experience() {
  const features = [
    {
      title: "Precise Tension Control",
      description: "Maintains accurate belt and chain tension for perfect synchronization.",
      icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 3k:w-14 3k:h-14 text-white transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "Advanced Technology",
      description: "Utilizes mechanical and hydraulic systems for reliable performance.",
      icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 3k:w-14 3k:h-14 text-white transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "Adaptive Performance",
      description: "Automatically adjusts to changing operating conditions.",
      icon: <RefreshCw className="w-8 h-8 sm:w-10 sm:h-10 3k:w-14 3k:h-14 text-white transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "Reduces Timing Failure",
      description: "Consistent performance minimizes wear and the risk of timing issues.",
      icon: <Settings className="w-8 h-8 sm:w-10 sm:h-10 3k:w-14 3k:h-14 text-white transition-transform duration-300 group-hover:scale-110" />,
    },
  ];

  return (
    <section className="relative w-full bg-[#1F3158] py-16 sm:py-20 xl:py-[100px] overflow-hidden">
      {/* Outer wrapper utilizing global custom-container */}
      <div className="custom-container px-4 sm:px-6 md:px-8 flex flex-col items-center">
        
        {/* Section Tag */}
        <span 
          data-aos="fade-down"
          data-aos-duration="600"
          className="font-space-grotesk font-bold text-xs sm:text-sm leading-[18px] text-white uppercase tracking-wider mb-3 sm:mb-[15px] text-center"
        >
          Timing Control Components
        </span>

        {/* Section Heading */}
        <h2 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="section-title font-space-grotesk font-bold text-white text-center mb-5 sm:mb-[30px] max-w-[797px] 3k:max-w-[1100px]"
        >
          Precision Timing Tensioners for Optimal Engine Synchronization
        </h2>

        {/* Section Subtext */}
        <p 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="section-text font-space-grotesk text-white text-center mb-10 xl:mb-[60px] max-w-[1344px] 3k:max-w-[1600px] leading-relaxed opacity-90"
        >
          Our timing tensioners are engineered to maintain accurate belt and chain tension, ensuring precise synchronization between engine components. Designed with advanced mechanical and hydraulic technologies, they automatically adjust to changing operating conditions, delivering consistent performance and reducing the risk of timing failure.
        </p>

        {/* 360 Video Container */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="300"
          className="relative w-full max-w-[930px] 3k:max-w-[1200px] aspect-video rounded-[5px] overflow-hidden shadow-2xl mb-12 sm:mb-16 xl:mb-[100px] bg-black"
        >
          <DynamicVideoPlayer
            type="360"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4 Feature Pillars with Responsive Grid Layout & Staggered Animations */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 md:gap-y-10 xl:gap-y-0 relative">
          {features.map((feature, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={100 * (index + 1)}
              className={`group flex flex-col items-center text-center px-4 sm:px-6 relative transition-transform duration-300 hover:-translate-y-1 ${
                index === 0
                  ? ""
                  : index === 1
                  ? "border-t md:border-t-0 md:border-l border-white/40 pt-8 md:pt-0"
                  : index === 2
                  ? "border-t md:border-t-0 md:border-l xl:border-l border-white/40 pt-8 md:pt-0"
                  : "border-t md:border-t-0 md:border-l xl:border-l border-white/40 pt-8 md:pt-0"
              }`}
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-[20px] flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="card-text font-space-grotesk font-bold text-white mb-2 sm:mb-[20px] transition-colors duration-300 group-hover:text-red-400">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="section-text font-space-grotesk text-white max-w-[378px] opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}