"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const FEATURES = [
  "Advanced filtration that effectively removes dust, pollen, and harmful airborne particles",
  "High-quality filter media engineered for consistent and dependable performance",
  "Designed for diverse vehicle applications and performance needs",
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

export default function Experience() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-dark" id="cabin-filters">
      <div className="custom-container">
        {/* 1 col up to 1025px, 2 cols at 1026px+ */}
        <div className="grid grid-cols-1 min-[1026px]:grid-cols-2 gap-10 min-[1026px]:gap-16 items-center">
          
          {/* Copy */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 bg-primary flex-shrink-0" />
              <span className="section-label">Product</span>
            </div>

            <h2 className="section-title font-medium text-white capitalize mb-6">
              High-Efficiency Cabin Filters
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <p className="section-text !text-white">
                Our cabin filters are designed to deliver clean, fresh air
                inside the vehicle by effectively removing dust, pollen, and
                harmful airborne particles. Built with advanced filter media
                and strict quality control, they ensure reliable
                performance, improved air quality, and enhanced driving
                comfort.
              </p>
              <p className="section-text !text-white">
                Developed for a wide range of passenger and commercial
                vehicles, our filters maintain consistent airflow while
                protecting occupants from pollutants and allergens.
              </p>
            </div>

            <ul className="flex flex-col gap-4 mb-8">
              {FEATURES.map((feature, index) => (
                <li 
                  key={feature}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={200 + index * 100}
                  className="group/list flex items-start gap-3"
                >
                  <ArrowBulletIcon />
                  <span className="list-text text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <Button variant="outline-white">Explore Cabin Filter</Button>
            </div>
          </div>

          {/* 360 Video Container */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="w-full aspect-video rounded-xs overflow-hidden bg-gray-900 shadow-2xl border border-white/10"
          >
            <div className="w-full h-full">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}