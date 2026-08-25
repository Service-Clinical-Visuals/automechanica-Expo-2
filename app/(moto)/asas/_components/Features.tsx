"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const features = [
  {
    title: "New Product Development Process",
    text: "ASAS Filter follows a structured development process, from concept creation and feasibility studies to product design, process development, validation, and final production, ensuring optimized and reliable filtration solutions.",
  },
  {
    title: "Advanced Testing & Quality Control",
    text: "Comprehensive laboratory testing and performance evaluations ensure ASAS filters meet industry quality standards while delivering improved efficiency, durability, and reliable performance across automotive applications.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f1f3f5] overflow-x-clip">
      <div className="custom-container">
        {/* Header row: Stacked up to 1025px, side-by-side at 1026px+ */}
        <div className="flex flex-col min-[1026px]:flex-row justify-between items-start min-[1026px]:items-center gap-6 mb-12">
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full max-w-2xl min-[2000px]:max-w-full"
          >
            <h2 className="section-title font-semibold text-heading mb-4">
              Research &amp; Development
            </h2>
            <p className="section-text min-[2000px]:max-w-full text-[#4B5563]">
              Our Research &amp; Development team develops advanced automotive
              filtration solutions, overseeing every stage from concept and
              design to testing and production.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <Button variant="primary" className="flex-shrink-0">
              Know More
            </Button>
          </div>
        </div>

        {/* Two-column grid: 1 column up to 1025px, 2 columns at 1026px+ */}
        <div className="grid min-[1026px]:grid-cols-2 gap-12 items-center">
          {/* Left Side: Video */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
            className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-lg"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover aspect-video"
            />
          </div>

          {/* Right Side: Features Content */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
            className="w-full max-w-none min-[2000px]:max-w-full"
          >
            <p className="section-text mb-8 min-[2000px]:max-w-full text-[#4B5563]">
              By combining engineering expertise, advanced technology, and
              laboratory testing, we develop high-performance filtration
              solutions that meet rigorous quality standards while improving
              efficiency, durability, and reliability across our product
              range.
            </p>
            <h3 className="card-title-sm font-semibold text-[#111827] mb-6">
              Key Features :
            </h3>
            <ul className="flex flex-col gap-8">
              {features.map((f, index) => (
                <li 
                  key={f.title} 
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={400 + index * 150}
                  className="flex gap-4"
                >
                  <span className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="card-title-sm font-semibold text-[#111827] mb-2">
                      {f.title}
                    </h4>
                    <p className="section-text min-[2000px]:max-w-full text-[#4B5563]">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}