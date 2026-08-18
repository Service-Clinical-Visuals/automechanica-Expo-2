"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Product360() {
  return (
    <section className="w-full bg-surface-1 py-16 lg:py-24">
      <div className="custom-container">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div
            className="max-w-[1187px]"
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
            className="flex-shrink-0 pr-4 lg:pr-8"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Button
                text="View 360° Experience"
                href="/products/wheel-balancers/360"
              />
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

        {/* Video with overlay label */}
        <div
          className="group relative w-full aspect-[1394/689.87] max-w-[1394px] min-[1920px]:max-w-[1700px] min-[2560px]:max-w-[2100px] min-[3840px]:max-w-[2800px] mx-auto overflow-hidden transition-all duration-700 ease-out hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
        </div>
      </div>
    </section>
  );
}