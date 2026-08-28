"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Experience() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f3f4f6] overflow-x-clip">
      <div className="custom-container flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 
          data-aos="fade-up"
          data-aos-duration="800"
          className="section-title font-semibold text-heading mb-4"
        >
          Discover Filtration from Every Angle
        </h2>
        
        {/* Paragraph: 70% width starting from xl screen breakpoint */}
        <p 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
          className="section-text max-w-3xl xl:max-w-[70%] mb-10 text-gray-600"
        >
          Explore ASAS Filter&apos;s products through an interactive 360°
          experience. Engineered with advanced filtration technology, our
          filters deliver reliable performance, enhanced engine protection,
          and long-lasting durability.
        </p>

        {/* Video Wrapper */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="300"
          className="w-full max-w-[1100px] aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-xl"
        >
          <DynamicVideoPlayer
            type="360"
            className="w-full h-full object-cover aspect-video"
          />
        </div>

      </div>
    </section>
  );
}