"use client";

import React from "react";
import Typography from "./Typography";
import { ShieldCheck, Award, Sparkles, Globe } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professional-grade results",
    desc: "Ewocar products are developed with detailing experts, delivering consistent, high-quality finishes every time.",
  },
  {
    icon: Award,
    title: "Long-Lasting Protection",
    desc: "Advanced ceramic coatings and sealants provide durable defense against UV, dirt, and chemicals.",
  },
  {
    icon: Sparkles,
    title: "Easy, efficient application",
    desc: "User-friendly formulas make application faster, cleaner, and more efficient – whether you’re a pro or enthusiast.",
  },
  {
    icon: Globe,
    title: "Trusted World Wide",
    desc: "Detailers across the globe rely on Ewocar for performance, reliability, and customer satisfaction. Find Ewocar near you",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="w-full py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-12 lg:gap-16">
        {/* Centered Header with SKT xl:max-w-[70%] pattern */}
        <div
          className="flex flex-col items-center text-center gap-4 w-full md:w-[90%] xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-[30px] min-[3800px]:text-5xl font-bold tracking-tight text-[#000000]"
          >
            Why Choose Ewocar?
          </Typography>
          <Typography
            variant="p"
            className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal"
          >
            Discover professional-grade car care products that deliver flawless finishes,
            long-lasting protection, and effortless application for detailing enthusiasts and
            professionals worldwide.
          </Typography>
        </div>

        {/* 2x2 Grid of Feature Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl xl:max-w-[85%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-black rounded-xl p-6 sm:p-8 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Black Circle Icon */}
                <div className="w-14 h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#020202] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white" strokeWidth={1.8} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl min-[3800px]:text-2xl font-bold font-primary text-[#000000] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] min-[3800px]:text-lg text-[#4B5563] font-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
