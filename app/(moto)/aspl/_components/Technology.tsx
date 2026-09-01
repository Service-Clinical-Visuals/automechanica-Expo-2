"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Link from "next/link";
import Button from "./Button";

const Technology = () => {
  return (
    <section id="technology" className="w-full bg-white py-12 md:py-20 xl:py-24">
      <div className="custom-container px-4 sm:px-6 xl:px-0">
        
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Left: Content */}
          <div className=" xl:col-span-4 flex flex-col space-y-6 " data-aos="fade-right" data-aos-duration="1000">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-primary transform rotate-45"></div>
              <span className="text-primary font-semibold tracking-wide language-links">
                ADVANCED AUTOMOTIVE TECHNOLOGY
              </span>
            </div>

            {/* Title */}
             <h2 className="text-black font-semibold tracking-wide section-title">
              Engineered for Efficient Vehicle Performance
            </h2>

            {/* Description Paragraphs */}
           <p className="section-text text-[#484848] leading-relaxed">
              AS-PL components are developed to deliver dependable performance across essential vehicle systems. From precise ignition and emissions control to reliable starting and power generation, each component is designed to support smooth and efficient vehicle operation.
            </p>

           <p className="section-text text-[#484848] leading-relaxed">
              With a focus on quality, durability, and precision, AS-PL solutions are built to withstand the demands of modern automotive applications. Explore every detail through the 360° experience and discover components engineered for consistent performance and long-term reliability.
            </p>

            {/* Button */}
            <div className="pt-2">
              <Button text="Explore Our Product" href="#products" variant="primary" showIcon={true} />
            </div>

          </div>

          {/* Right: Video Player */}
          <div 
            className="xl:col-span-8 w-full aspect-video relative rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm order-1 xl:order-2"
            data-aos="fade-left" data-aos-duration="1000"
          >
            {/* Using DynamicVideoPlayer as a placeholder for the video clip */}
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
           
          </div>

        </div>

      </div>
    </section>
  );
};

export default Technology;
