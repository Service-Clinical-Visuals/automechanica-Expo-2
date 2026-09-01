"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover aspect-video"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 px-0 lg:pl-10 pb-20 lg:pb-40">
        <div className="w-full text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-semibold text-white !leading-[1.60] mb-[clamp(20px,3vw,20px)] poppins-font">
            Precision Camshaft Driving<br />Engine Performance to Next Level
          </h1>
          <Button href="#" variant="outline" className="!text-white !border-white !bg-transparent hover:!bg-white hover:!text-black transition-colors rounded-[8px]">
            Discover the Power Inside
          </Button>
        </div>
      </div>
    </section>
  );
}
