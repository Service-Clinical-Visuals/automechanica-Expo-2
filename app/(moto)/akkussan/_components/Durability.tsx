"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Durability = () => {
  return (
    <section id="durability" className="w-full py-16 md:py-24 bg-[var(--foreground)] text-white">
      <div className="custom-container px-4 xl:px-10 flex flex-col items-center">
        
        {/* Header Text */}
        <div className="w-full max-w-4xl text-center flex flex-col gap-4 mb-12" data-aos="fade-up" data-aos-duration="1000">
           <h2 className="font-bold exo2 section-title text-white">
            Designed for Durability and Control
          </h2>
           <p className="inter section-text leading-relaxed text-white">
            The Flex Disc helps manage the forces generated within the drivetrain, reducing vibration and sudden torque impacts while supporting consistent power transmission. Designed for automotive applications, it combines flexibility and durability to deliver dependable performance.
          </p>
        </div>

        {/* Video Section */}
        <div 
          className="w-full max-w-7xl aspect-video relative rounded-xs overflow-hidden  flex items-center justify-center shadow-2xl"
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="200"
        >
          <DynamicVideoPlayer 
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
         
        </div>

      </div>
    </section>
  );
};

export default Durability;
