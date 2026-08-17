"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
export default function Banner() {
  return (
    <section className="relative w-full h-full pt-[70px] md:pt-[80px] bg-white" data-aos="fade-up">
      <div className="w-full lg:w-[95%] mx-auto h-[100vh] md:h-[100vh] min-[3800px]:h-[100vh] relative lg:mt-8">
        <div className="relative overflow-hidden w-full h-full lg:rounded-[10px]" data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Text Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16 lg:pb-50">
            <div className="text-left pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-white font-semibold leading-[1.1]">
                More Power. Engineered <br /> For Your Engine
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
