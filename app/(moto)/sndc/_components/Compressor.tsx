"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  "Designed for efficient refrigerant compression ensuring optimal HVAC system performance",
  "Supports consistent cooling performance across diverse automotive & industrial applications",
];

export default function CompressorSystems() {
  return (
    <section className="w-full bg-[#27337F] py-16 lg:py-24">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content */}
        <div
          className="order-1 lg:order-2 h-full flex flex-col justify-center compressor-content"
          data-aos="fade-left"
        >
          <p className="eyebrow-text !text-white mb-4">
            Compressor Systems
          </p>

          <h2 className="section-title !text-white font-semibold mb-6">
            High-Efficiency Compressors for Advanced HVAC Performance
          </h2>

          <p className="section-text !text-white mb-8">
            Our compressors are designed to deliver reliable cooling
            performance and efficient climate control across automotive and
            industrial HVAC systems. Engineered with precision and advanced
            components, they ensure optimal refrigerant circulation, reduced
            energy consumption, and consistent operation under demanding
            conditions.
          </p>

          <ul className="space-y-5 mb-10">
            {features.map((feature, index) => (
              <li
                key={feature}
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
              >
                <ArrowRight className="w-[18px] h-[18px] text-white flex-shrink-0 mt-1" />

                <span className="section-text !text-white">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div data-aos="fade-up" data-aos-delay="350">
            <Button
              text="Explore Compressors"
              variant="outline"
              color="white"
              href="/products/compressors"
            />
          </div>
        </div>

        {/* Video */}
        <div
          className="order-2 lg:order-1 relative w-full aspect-video rounded-[5px] overflow-hidden"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer
            type="360"
            className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}