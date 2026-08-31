"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Product360() {
  return (
    <section className="w-full bg-surface-1 py-16 lg:py-24">
      {/* Header text and button use the custom-container */}
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div
            className="xl:max-w-[70%]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h2 className="section-heading text-white mb-6">
              360° Wheel Balancer Experience
            </h2>

            <p className="section-text text-white">
              Discover the engineering and design of GIULIANO INDUSTRIAL
              S.p.A. Wheel Balancers through an immersive 360° product
              experience. Explore the machine from every angle and discover
              its precision components, control interface, balancing
              system, and robust construction.
            </p>
          </div>

          <div
            className="flex-shrink-0 pr-7"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Button text="View 360° Experience" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full border-t border-soft mb-10"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-delay="150"
        />
      </div>

      {/* Video container */}
      <div className="w-full px-4">
        <div
          className="relative w-full aspect-video xl:max-w-[68%] mx-auto overflow-hidden rounded-[12px]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
          />
        </div>
      </div>
    </section>
  );
}