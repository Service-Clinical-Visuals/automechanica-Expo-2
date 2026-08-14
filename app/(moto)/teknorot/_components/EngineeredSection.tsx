"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#161D58" }}>
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Video Player */}
          <div className="w-full h-full relative overflow-hidden rounded-[5px] lg:col-span-6 flex items-center justify-center p-6" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="w-full h-full aspect-video object-cover rounded-[5px]" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:col-span-6 text-white" data-aos="fade-left">
            <h2 className="section-title montserrat-font font-semibold mb-6">
              Engineered to Move. Built to Perform.
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              <p className="inter-font text-white/90 font-regular section-text leading-relaxed">
                Take a closer look at Teknorot's advanced manufacturing capabilities and the expertise behind every component. From precision forging, casting, machining, and robotic production to rigorous quality inspection and final assembly, every stage is carefully controlled to deliver consistent performance and reliability.
              </p>
              <p className="inter-font text-white/90 font-regular section-text leading-relaxed">
                Our modern production facilities combine advanced technology with skilled engineering expertise, enabling us to manufacture steering and suspension components to demanding international standards. Through continuous innovation, comprehensive testing, and strict quality control, Teknorot transforms precision engineering into dependable solutions trusted across the global automotive aftermarket.
              </p>
              <p className="inter-font text-white/90 font-regular section-text leading-relaxed">
                With continuous investment in technology, research, and process improvement, Teknorot constantly strengthens its manufacturing capabilities and responds to the evolving needs of the automotive industry. This commitment to precision and innovation enables us to deliver reliable products trusted by customers across more than 90 countries.
              </p>
            </div>

            <Button href="#" variant="primary" className="w-fit">
              View Product
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
