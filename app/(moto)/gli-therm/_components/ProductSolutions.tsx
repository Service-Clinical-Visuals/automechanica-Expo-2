"use client";

import React from "react";
import Button from "./Button";

export default function ProductSolutions() {
  const services = [
    {
      icon: "/moto/gli-therm/service-i-1.webp",
      text: "Delivery to any location in Poland and worldwide.",
    },
    {
      icon: "/moto/gli-therm/service-i-2.webp",
      text: "System filling service.",
    },
    {
      icon: "/moto/gli-therm/service-i-3.webp",
      text: "Advice in selecting the right product.",
    },
    {
      icon: "/moto/gli-therm/service-i-4.webp",
      text: "Creating private label brands.",
    },
    {
      icon: "/moto/gli-therm/service-i-5.webp",
      text: "Laboratory services and fluid diagnostics.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20 text-center">
        {/* Eyebrow */}
        <h4
          className="text-[#EE464B] font-extrabold section-text tracking-wide uppercase mb-3 bricolage-font"
          data-aos="fade-up"
        >
          Our Services
        </h4>

        {/* Headline */}
        <h2
          className="section-title font-bold text-[#111111] leading-tight mb-4 bricolage-font"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your Success, Our Priority
        </h2>

        {/* Description */}
        <p
          className="section-text text-[#404040] leading-relaxed mb-12 font-inter max-w-[85%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At GLITHERM, we believe our clients are more than customers — they are our valued partners. Their success drives our commitment to delivering high-quality products, reliable service, and effective chemical solutions tailored to their specific needs. We focus on building long-term relationships through consistent quality, technical expertise, and responsive customer support. By understanding the unique challenges of each client, we strive to provide practical, dependable solutions that enhance operational efficiency, support business growth, and create lasting value for our partners across industries.
        </p>

        {/* Cards Grid: 3 on top, 2 centered below */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mb-12">
          {/* Top Row: 3 items */}
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-gray-300 rounded-[10px] p-6 sm:p-8 flex flex-col items-center justify-center min-h-[180px] bg-white transition-all duration-300 hover:border-[#EE464B] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-black flex items-center justify-center mb-5 transition-colors duration-300 group-hover:border-[#EE464B]">
                <img
                  src={service.icon}
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain opacity-80 [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(2405%)_hue-rotate(338deg)_brightness(98%)_contrast(92%)]"
                />
              </div>
              <p className="text-[#202020] font-medium section-text leading-snug font-inter transition-colors duration-300 group-hover:text-[#EE464B]">
                {service.text}
              </p>
            </div>
          ))}

          {/* Bottom Row: 2 items */}
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index + 3}
              className="group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-gray-300 rounded-[10px] p-6 sm:p-8 flex flex-col items-center justify-center min-h-[180px] bg-white transition-all duration-300 hover:border-[#EE464B] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={(index + 3) * 100}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-black flex items-center justify-center mb-5 transition-colors duration-300 group-hover:border-[#EE464B]">
                <img
                  src={service.icon}
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain opacity-80 [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(2405%)_hue-rotate(338deg)_brightness(98%)_contrast(92%)]"
                />
              </div>
              <p className="text-[#202020] font-medium section-text leading-snug font-inter transition-colors duration-300 group-hover:text-[#EE464B]">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up">
          <Button
            href="#contact"
            variant="outline"
            className="!w-auto rounded-[8px]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
