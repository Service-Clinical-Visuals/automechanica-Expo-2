"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Settings, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "High-Efficiency Air Compression",
    desc: "Delivers optimized airflow for improved engine performance.",
  },
  {
    title: "Enhanced Power & Torque",
    desc: "Supports better combustion and responsive acceleration.",
  },
  {
    title: "Durable Construction",
    desc: "Engineered to withstand high temperatures and operating pressures.",
  },
  {
    title: "Reliable Performance",
    desc: "Provides consistent boost delivery for demanding applications.",
  },
];

export default function Deg360() {
  return (
    <section className="relative w-full lg:w-[95%] mx-auto bg-[#0B0E17] rounded-[20px] lg:rounded-[30px] py-16 lg:py-20 px-4 lg:px-0">
      <div className="custom-container">
        {/* Header Section */}
        <div
          className="flex flex-col items-center text-center mb-12"
          data-aos="fade-up">
          <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
            <div className="w-8 h-[2px] bg-[#E02027]"></div>
            <span>Our Product Experience</span>
          </div>
          <h2 className="text-white font-semibold mb-6 text-3xl lg:text-4xl">
            GT Turbo – Turbocharger
          </h2>
          <p className="text-white font-regular leading-[1.8] max-w-[900px] text-sm lg:text-[15px] opacity-90">
            GT Turbo's Turbocharger is engineered to improve engine performance
            by delivering compressed air to the combustion chamber. Designed for
            efficient airflow and responsive boost, it helps optimize power
            output, acceleration, and overall engine efficiency across demanding
            driving conditions.
          </p>
        </div>

        {/* Overlapping Card */}
        <div
          className="relative z-10 -mb-24 lg:-mb-32 flex flex-col lg:flex-row lg:items-center"
          data-aos="fade-up"
          data-aos-delay="100">
          {/* Video Player Side */}
          <div className="w-full lg:w-7/12 relative rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-2xl lg:h-[500px] xl:h-[600px]">
            <div className="aspect-video">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover object-fill "
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-6/12 bg-white shadow-2xl rounded-[20px] lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-[24px] lg:rounded-br-[100px] flex flex-col p-6 lg:p-8 xl:p-10 mt-4 lg:mt-0">
            <p className="text-[#484848] font-regular leading-[1.6] mb-5 text-xs lg:text-sm">
              Built with precision-engineered components, GT Turbo turbochargers
              are designed for reliable operation under high temperatures and
              pressures. The robust construction supports consistent
              performance, improved combustion, and dependable operation for
              automotive and commercial vehicle applications.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Settings
                    className="text-[#E02027] shrink-0 mt-0.5"
                    size={16}
                    strokeWidth={2}
                  />
                  <div>
                    <p className="text-[#484848] font-regular leading-[1.4] text-xs lg:text-sm">
                      <span className="text-[#000000] font-semibold">
                        {feat.title}
                      </span>{" "}
                      – {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button className="flex items-center gap-3 bg-[#0B0E17] text-white font-regular pl-5 pr-1.5 py-1.5 rounded-full hover:bg-[#131A2B] transition-colors group w-fit text-xs lg:text-sm">
                Know About Us
                <div className="bg-[#E02027] text-white rounded-full p-1.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to handle the negative margin below the section */}
      <div className="h-24 lg:h-32 bg-transparent"></div>
    </section>
  );
}
