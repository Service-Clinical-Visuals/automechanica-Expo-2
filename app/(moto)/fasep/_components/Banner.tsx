"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Banner = () => {
  return (
    <section
      id="home"
      className="custom-container mx-auto lg:z-10 mt-0 h-screen relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[8%] "
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-12 xl:col-span-6 text-left space-y-4 md:space-y-6 pointer-events-auto">
          {/* Header Title */}
          <h1
            
            className="banner-title leading-tight exo2 font-semibold text-white"
          >
            Passion, Expertise & Innovation Since 1969
          </h1>

          <p
      
            className="oxanium btn-txt leading-relaxed w-full lg:max-w-3xl text-white"
          >
            FASEP is an Italian manufacturer of wheel aligners, wheel balancers, and tire changers, combining innovation, precision, and decades of industry expertise.
          </p>

          <div className="pt-2">
            <Button text="Discover FASEP" href="#about" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Banner;
