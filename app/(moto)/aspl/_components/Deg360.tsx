"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Link from "next/link";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="solutions" className="w-full bg-white py-12 md:py-20 xl:py-24">
      <div className="custom-container px-4 sm:px-6 xl:px-0 flex flex-col gap-8 lg:gap-10">
        
        {/* Top Part: Video and Text */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Left: 360 Video Player */}
          <div 
            className="order-2 xl:order-1 xl:col-span-7 w-full aspect-video relative rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-100 "
            data-aos="fade-right" data-aos-duration="1000"
          >
            {/* The checkerboard is usually just a placeholder, but we use the actual player here. */}
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          
          </div>

          {/* Right: Content */}
          <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col gap-8 xl:gap-10" data-aos="fade-left" data-aos-duration="1000">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-primary transform rotate-45"></div>
              <span className="text-primary font-semibold tracking-wide language-links">
                ROTATING PARTS. POWERING PERFORMANCE.
              </span>
            </div>

            {/* Title */}
            <h2 className="text-black font-semibold tracking-wide section-title">
              Explore AS-PL's Complete Rotating & Engine Management Solutions
            </h2>

            {/* Description Paragraphs */}
            <p className="section-text text-[#484848] leading-relaxed">
              Experience AS-PL's precision-engineered range of Ignition Coils, NOx Sensors, Starters, and Alternators through an immersive 360° product experience. Designed to support reliable starting, efficient engine operation, accurate emissions monitoring, and consistent electrical performance, these components combine advanced technology with robust construction to meet the demands of modern automotive applications.
            </p>

            <p className="section-text text-[#484848] leading-relaxed">
              AS-PL delivers reliable automotive solutions across Ignition Coils, NOx Sensors, Starters, and Alternators, combining precision engineering, durable construction, and dependable performance for modern vehicles.
            </p>

            {/* Button */}
            <div className="pt-2">
              <Button text="Explore Our Solutions" href="#solutions" variant="primary" showIcon={true} />
            </div>

          </div>
        </div>

        {/* Bottom Part: Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
          
          {/* Card 1 */}
          
          <div className="bg-white border border-gray-200/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <span className="text-primary font-semibold card-title mb-4">Precision Engineering</span>
            <p className="section-text text-[#484848] leading-relaxed">
              Designed for accurate fit, smooth operation, and consistent performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <span className="text-primary font-semibold card-title mb-4">Reliable Electrical Performance</span>
            <p className="section-text text-[#484848] leading-relaxed">
              Supports dependable starting, charging, ignition, and power delivery.
            </p>
          </div>

          {/* Card 3 */}
           <div className="bg-white border border-gray-200/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <span className="text-primary font-semibold card-title mb-4">Built for Modern Vehicles</span>
            <p className="section-text text-[#484848] leading-relaxed">
              Engineered to meet the demanding requirements of today's automotive systems.
            </p>
          </div>

          {/* Card 4 */}
           <div className="bg-white border border-gray-200/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <span className="text-primary font-semibold card-title mb-4">Durability You Can Trust</span>
           <p className="section-text text-[#484848] leading-relaxed">
              Robust components designed for long-lasting performance in demanding conditions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Deg360;
