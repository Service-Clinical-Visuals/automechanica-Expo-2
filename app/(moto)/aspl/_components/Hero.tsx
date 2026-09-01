"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-40 mt-0 h-screen relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[8%] xl:pb-[6%] "
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover z-0"
          type="banner"
        />
  
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6 xl:px-0">
        <div
          className="xl:max-w-[50%] max-w-full text-left space-y-6 md:space-y-8"
        >
          {/* Header Title */}
          <h1
            // variant="h1"
            // color="white"
            className="banner-title text-white leading-tight font-semibold"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
          >
            WE POWER THE WORLD<br />WITH QUALITY!
          </h1>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Button 
              text="Explore Products" 
              variant="outline-white" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
