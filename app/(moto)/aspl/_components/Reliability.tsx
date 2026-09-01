"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const features = [
  {
    title: "Quality Focus",
    description: "Built with carefully selected components for dependable performance.",
  },
  {
    title: "Durable Construction",
    description: "Designed to withstand demanding automotive operating conditions.",
  },
  {
    title: "Precision Engineering",
    description: "Manufactured for accurate fit, reliable operation, and consistent results.",
  },
];

const Reliability = () => {
  return (
    <section id="reliability" className="w-full bg-white py-12 md:py-20 xl:py-24">
      <div className="custom-container px-4 sm:px-6 xl:px-0">
        
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left: Video Player */}
          <div 
            className="order-2 xl:order-1 xl:col-span-7 w-full aspect-video relative rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center "
            data-aos="fade-right" data-aos-duration="1000"
          >
            {/* Using DynamicVideoPlayer as a placeholder for the video clip */}
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          
          </div>

          {/* Right: Content */}
          <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col space-y-6" data-aos="fade-left" data-aos-duration="1000">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-primary transform rotate-45"></div>
              <span className="text-primary font-semibold tracking-wide language-links">
                RELIABILITY IN EVERY COMPONENT
              </span>
            </div>

            {/* Title */}
            <h2 className="text-black font-semibold tracking-wide section-title">
              Built to Perform in Demanding Conditions
            </h2>

            {/* Description Paragraph */}
             <p className="section-text text-[#484848] leading-relaxed">
              With a focus on quality, durability, and precision, AS-PL solutions are built to withstand the demands of modern automotive applications. Explore every detail through the 360° experience and discover components engineered for consistent performance and long-term reliability.
            </p>

            {/* Features Box */}
            <div className="bg-[#212733] rounded-2xl p-8 md:p-10 flex flex-col gap-6 mt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-6 h-6 shrink-0 mt-1">
                    <img src="/moto/aspl/wheel.png" alt="Wheel icon" className="w-full h-full object-contain " />
                  </div>
                  {/* Text */}
                   <p className="section-text text-[#ffffff] leading-relaxed">
                    <span className="font-bold">{feature.title}</span> – {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Reliability;
