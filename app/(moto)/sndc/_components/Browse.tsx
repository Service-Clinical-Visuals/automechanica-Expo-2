"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  "Wide range of HVAC components supporting heating, cooling, and ventilation systems",
  "Engineered with precision for durability across demanding automotive environments globally",
  "Suitable for passenger vehicles, commercial vehicles, and specialized industrial applications",
];

export default function ClimateControlComponents() {
  return (
    <section className="w-full bg-[rgba(243,243,243,0.5)] py-16 lg:py-24">
      <div
        className="custom-container text-center mb-16 lg:mb-20"
        data-aos="fade-up"
      >
        <p className="eyebrow-text mb-4">
          Thermal Systems Portfolio
        </p>

        <h2 className="section-title font-semibold mb-10">
          Comprehensive Climate Control Components for Modern Vehicles
        </h2>
      </div>

      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Video */}
        <div
          className="relative w-full aspect-video rounded-[5px] overflow-hidden"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div
          className="h-full flex flex-col justify-center climate-content"
          data-aos="fade-left"
        >
          <p className="section-text mb-4">
            We deliver an extensive range of HVAC components designed to
            regulate temperature, airflow, and air quality across automotive
            and industrial environments. Our solutions are engineered to
            support efficient heating, cooling, ventilation, and filtration,
            ensuring optimal comfort and system performance in all operating
            conditions.
          </p>

          <p className="section-text mb-8">
            With advanced design capabilities and rigorous testing
            processes, our components provide reliable operation,
            durability, and seamless integration for a wide variety of
            vehicle platforms and specialized applications.
          </p>

          <ul className="space-y-5 mb-10">
            {features.map((feature, index) => (
              <li
                key={feature}
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
              >
                <ArrowRight className="w-[18px] h-[18px] text-[#27337F] flex-shrink-0 mt-1" />

                <span className="section-text">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div data-aos="fade-up" data-aos-delay="450">
            <Button
              text="Browse Products"
              variant="outline"
              color="primary"
              href="/products"
            />
          </div>
        </div>
      </div>
    </section>
  );
}