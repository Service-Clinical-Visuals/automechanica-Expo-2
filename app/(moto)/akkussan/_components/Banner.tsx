"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-10 h-screen lg:h-screen relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[8%]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#111111]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover "
        />
        
      </div>

      <div className="custom-container px-4 lg:px-10 relative z-20 flex flex-col items-start w-full gap-6">
        <h1 
          className="text-white font-bold banner-title exo2 leading-tight tracking-wide max-w-3xl"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          Reliable Power Transmission.<br />
          Smooth Driveline Performance.
        </h1>
        
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <Button href="#products">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
