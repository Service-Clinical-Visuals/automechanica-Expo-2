"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#171717]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full relative overflow-hidden rounded-[5px] lg:col-span-7 flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="w-full h-full aspect-video object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-5 text-white" data-aos="fade-left">
            <h2 className="section-title montserrat-font font-bold mb-6">
              Engineered to Perform. Built to Last.
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              <p className="inter-font text-white/90 font-regular section-text leading-relaxed">
                Experience BendPak equipment in action and see how thoughtful engineering, advanced technology, and durable construction come together to deliver reliable performance in demanding automotive service environments. From efficient operation to precision-focused design, every detail is built to help professionals work smarter, faster, and with greater confidence.
              </p>
              <p className="inter-font text-white/90 font-regular section-text leading-relaxed">
                From everyday workshop applications to demanding professional service environments, BendPak equipment is designed to deliver consistent results and dependable operation. The combination of user-focused design, robust components, and innovative features helps technicians streamline their workflow, reduce service time, and maintain high standards of quality and safety throughout every job.
              </p>
            </div>

            <Button href="#" variant="primary" className="!w-fit !px-6 !py-2.5 !rounded-[2px] inter-font">
              View Product
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
