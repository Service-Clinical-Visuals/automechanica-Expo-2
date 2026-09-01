"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function WorkshopEfficiency() {
  return (
    <section className="w-full bg-surface-1 py-16 lg:py-24">
      <div className="custom-container text-center">
        <h2
          className="section-heading-lg text-white mb-6"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Engineered For Workshop Efficiency
        </h2>

        <p
          className="section-text-lg text-white max-w-[1272px] xl:max-w-[70%] mx-auto mb-12"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          With extensive experience in automotive equipment, GIULIANO
          INDUSTRIAL S.p.A. develops Wheel Balancers that combine precision
          engineering, innovative technology, and practical workshop
          functionality for reliable professional performance worldwide.
        </p>
      </div>

      {/* Video container with overflow hidden and scaled video */}
      <div className="w-full px-4">
        <div
          className="relative w-full aspect-video xl:max-w-[68%] mx-auto overflow-hidden rounded-[12px] border border-white/20 shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover "
          />
        </div>
      </div>
    </section>
  );
}