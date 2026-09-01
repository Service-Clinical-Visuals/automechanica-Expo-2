"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 bg-[#000000]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover aspect-video opacity-80"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pl-10 pb-20 lg:pb-40">
        <div className="w-full text-left flex flex-col items-start" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-bold text-white leading-[1.2] mb-[clamp(20px,3vw,80px)] exo-2-font text-5xl lg:text-7xl">
            Powerful Lifting. Professional<br />Performance.
          </h1>
          <Button href="#" className="">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
