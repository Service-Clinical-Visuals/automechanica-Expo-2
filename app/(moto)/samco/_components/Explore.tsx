"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const OFFERINGS = [
  "Strict quality control at every stage of production to meet standards and customer expectations",
  "Suitable for passenger vehicles, commercial fleets, & heavy-duty industrial applications worldwide",
  "Focus on innovation and continuous improvement to support modern automotive technologies",
  "Engineered using high-grade materials and advanced processes to ensure durability and reliability",
  "Engineered with high-grade materials and advanced processes to ensure durability and reliability",
];

function ArrowBulletIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mt-1 -rotate-45 group-hover/list:translate-x-0.5 group-hover/list:-translate-y-0.5 transition-transform duration-300"
    >
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="#BA0C2F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Explore() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-light overflow-hidden" id="offerings">
      <div className="custom-container">
        {/* 1 col stacked up to 1025px, 2 cols at 1026px+ */}
        <div className="grid grid-cols-1 min-[1026px]:grid-cols-2 gap-10 min-[1026px]:gap-16 items-center">
          
          {/* Video Container */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full aspect-video rounded-xs overflow-hidden bg-gray-200 order-2 min-[1026px]:order-1 shadow-lg border border-gray-100"
          >
            <div className="w-full h-full">
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Copy Column */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
            className="order-1 min-[1026px]:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 bg-primary flex-shrink-0" />
              <span className="section-label">Offerings</span>
            </div>

            <h2 className="section-title font-medium text-dark capitalize mb-6">
              Complete Automotive Component Solutions
            </h2>

            <p className="section-text mb-6">
              We offer a comprehensive portfolio of high-quality automotive
              components, including advanced filtration systems, air
              suspension solutions, and engine parts. Designed for both
              on-road and off-road applications, our products are developed
              to meet the demands of modern vehicles and industrial use.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {OFFERINGS.map((offering, index) => (
                <li 
                  key={`${offering}-${index}`} 
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={250 + index * 80}
                  className="group/list flex items-start gap-3"
                >
                  <ArrowBulletIcon />
                  <span className="list-text text-muted">{offering}</span>
                </li>
              ))}
            </ul>

            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="650"
            >
              <Button variant="outline-primary">Explore Products</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}