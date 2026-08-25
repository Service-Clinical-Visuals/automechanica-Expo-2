"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full aspect-video min-h-[600px] overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pl-10 pb-20 md:pb-25 lg:pb-30">
        <div className="text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-semibold text-white leading-tight mb-8 montserrat-font">
            Precision Steering. Reliable Suspension.<br /> Built for Every Journey.
          </h1>
          <Button href="#" variant="primary">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
