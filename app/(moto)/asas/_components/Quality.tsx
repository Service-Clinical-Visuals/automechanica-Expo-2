"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Quality() {
  return (
    <section className="w-full py-16 md:py-24 bg-dark-surface overflow-x-clip">
      <div className="custom-container grid min-[1026px]:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content Block */}
        <div 
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-full max-w-none"
        >
          <h2 className="section-title font-semibold text-white mb-6">
            Product Quality &amp; Performance
          </h2>
          <p className="section-text text-white/90 mb-6">
            Our comprehensive filtration solutions include Oil, Fuel, Air,
            Cabin, Dryer, and Water Filters, engineered with advanced
            filtration technology to deliver superior efficiency, reliable
            performance, extended service life, and enhanced engine
            protection across various automotive applications.
          </p>
          <p className="section-text text-white/90 mb-8">
            Through strict quality control processes, laboratory testing, and
            compliance with international quality standards, our filtration
            systems are developed to ensure optimal oil, fuel, and air flow
            while delivering enhanced engine protection, improved efficiency,
            reduced contamination, and long-lasting reliability throughout
            their service life.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <Button variant="primary">Learn More</Button>
          </div>
        </div>

        {/* Right Side: Video Wrapper */}
        <div 
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
          className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-xl"
        >
          <div className="w-full h-full">
            <DynamicVideoPlayer
              type="short-2"
              className="w-full h-full object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}