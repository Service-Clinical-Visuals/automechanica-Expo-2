"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Quality() {
  const features = [
    {
      title: "Global Production",
      desc: "Strong manufacturing and distribution capabilities serving markets worldwide.",
    },
    {
      title: "Quality & Reliability",
      desc: "Consistent standards across every component.",
    },
    {
      title: "Continuous Innovation",
      desc: "Ongoing R&D and product development for evolving market needs.",
    },
    {
      title: "Rigorous Testing",
      desc: "Comprehensive quality and durability checks at every stage.",
    },
  ];

  return (
    <section
      className="py-16 lg:py-20 relative overflow-hidden text-white"
      style={{ backgroundColor: "#161D58" }}>
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div
            className="flex flex-col gap-6 lg:col-span-6 justify-center"
            data-aos="fade-right">
            <h2 className="section-title montserrat-font font-semibold leading-tight">
              Innovation That Drives Performance
            </h2>

            <p className="inter-font text-white/90 section-text font-regular tracking-normal leading-relaxed">
              Experience the cutting-edge technology and engineering expertise
              behind Teknorot's advanced steering and suspension components.
              Every product is developed using state-of-the-art production
              technologies, including precision machining, automated
              manufacturing systems, and carefully controlled assembly
              processes. From initial design and material selection to final
              production, each stage is optimized to ensure maximum accuracy and
              consistency.
            </p>

            <ul className="space-y-4 my-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center  gap-3">
                  <div className="mt-1">
                    <img
                      src="/moto/teknorot/steering.png"
                      alt="icon"
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                  <p className="flex item-center section-text justify-center inter-font font-regular leading-relaxed text-white/90">
                    <span className="section-text font-bold text-white inter-font">
                      {feature.title}
                    </span>{" "}
                    — {feature.desc}
                  </p>
                </li>
              ))}
            </ul>

            <Button href="#" variant="primary" className="!w-fit px-6 mt-2">
              View Product
            </Button>
          </div>

          {/* Right Video Player */}
          <div
            className="w-full h-full relative overflow-hidden rounded-[5px] lg:col-span-6 flex items-center justify-center p-6"
            data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-2"
              className="w-full aspect-video object-cover rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
