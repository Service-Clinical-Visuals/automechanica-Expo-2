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
          className="section-text-lg text-white max-w-[1272px] mx-auto mb-12"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          With extensive experience in automotive equipment, GIULIANO
          INDUSTRIAL S.p.A. develops Wheel Balancers that combine precision
          engineering, innovative technology, and practical workshop
          functionality for reliable professional performance worldwide.
        </p>

        <div
          className="group relative w-full aspect-[1394/704] max-w-[1394px] min-[1920px]:max-w-[1700px] min-[2560px]:max-w-[2100px] min-[3840px]:max-w-[2800px] mx-auto overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
        </div>
      </div>
    </section>
  );
}