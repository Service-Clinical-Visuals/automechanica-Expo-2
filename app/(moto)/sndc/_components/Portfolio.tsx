"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ThermalSystemsPortfolio() {
  return (
    <section className="w-full bg-[rgba(243,243,243,0.5)] py-16 lg:py-24">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content */}
        <div
          className="h-full flex flex-col justify-center"
          data-aos="fade-right"
        >
          <p className="eyebrow-text mb-4">
            Thermal Systems Portfolio
          </p>

          <h2 className="section-title font-semibold mb-6">
            Complete HVAC Components for Modern Vehicle Comfort
          </h2>

          <p className="section-text mb-4">
            We provide a comprehensive range of HVAC components designed to
            ensure efficient climate control, air distribution, and thermal
            performance in vehicles. From compressors and condensers to
            evaporators, heater cores, and ventilation systems, our solutions
            are engineered to deliver consistent comfort and system
            reliability across various operating conditions.
          </p>

          <p className="section-text mb-8">
            Built with advanced materials and precision manufacturing, our
            products support both OEM and aftermarket requirements, ensuring
            durability, efficiency, and optimal performance for passenger
            and commercial vehicles.
          </p>

          <div data-aos="fade-up" data-aos-delay="150">
            <Button
              text="Browse Products"
              variant="outline"
              color="primary"
              href="/products"
            />
          </div>
        </div>

        {/* Video */}
        <div
          className="relative w-full aspect-video rounded-[5px] overflow-hidden"
          data-aos="fade-left"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}