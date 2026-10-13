"use client";

import React from "react";
import Button from "./Button";

export default function InnovationAndTradition() {
  const stats = [
    {
      icon: "/moto/gli-therm/abt-i-1.webp",
      value: "2012",
      label: "Year of Establishment",
    },
    {
      icon: "/moto/gli-therm/abt-i-2.webp",
      value: "5770 L",
      label: "coffee consumed annually",
    },
    {
      icon: "/moto/gli-therm/abt-i-3.webp",
      value: "82 580",
      label: "completed deliveries",
    },
    {
      icon: "/moto/gli-therm/abt-i-4.webp",
      value: "112 824 640 L",
      label: "produced liters",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-12 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6" data-aos="fade-right">
            <h4 className="text-[#EE464B] font-extrabold section-text tracking-wide uppercase mb-3 bricolage-font">
              About GLITHERM
            </h4>
            <h2 className="section-title font-bold text-[#111111] leading-tight mb-3 bricolage-font">
              Delivering Chemical Solutions Through <span className="underline decoration-2 underline-offset-4">Q</span>uality
            </h2>
            <p className="section-text text-[#404040] leading-relaxed mb-6 font-regular font-inter">
              GLITHERM provides specialized chemical products and services designed to meet the evolving needs of industrial, automotive, and heating applications. With a focus on product quality, technical knowledge, and customer satisfaction, the company delivers dependable solutions that support efficient system performance and long-term reliability.
            </p>

            {/* Stats 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 sm:p-5 rounded-[10px] border border-gray-300 bg-white min-h-[90px] transition-all duration-300 hover:bg-[#EE464B] hover:border-[#EE464B] hover:shadow-md cursor-pointer"
                >
                  <div className="w-11 h-11 shrink-0 rounded-full border border-transparent bg-[#EE464B]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:border-white">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-5 h-5 object-contain opacity-80 transition-all duration-300 [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(2405%)_hue-rotate(338deg)_brightness(98%)_contrast(92%)] group-hover:[filter:brightness(0)_invert(1)]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[#111111] group-hover:text-white card-title leading-tight bricolage-font transition-colors duration-300">
                      {stat.value}
                    </h4>
                    <p className="text-[#555555] group-hover:text-white section-text font-medium font-inter mt-0.5 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button
                href="#products"
                variant="outline"
                className="!w-auto rounded-[8px]"
              >
                Explore Mesh Technology
              </Button>
            </div>
          </div>

          {/* Right Column: Facility Image */}
          <div
            className="lg:col-span-6 h-full flex items-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="rounded-[10px] overflow-hidden w-full f-full shadow-sm">
              <img
                src="/moto/gli-therm/about.webp"
                alt="GLITHERM Facility"
                className="w-auto h-auto object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
