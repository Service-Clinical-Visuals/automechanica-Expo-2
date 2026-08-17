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
  }
];

export default function Deg360() {
  return (
    <section className="relative w-full lg:w-[95%] mx-auto bg-[#0B0E17] rounded-[20px] lg:rounded-[30px] py-16 lg:py-20 px-4 lg:px-0">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4 text-sm lg:text-base">
            <div className="w-8 h-[2px] bg-[#E02027]"></div>
            <span>Our Product Experience</span>
          </div>
          <h2 className="text-white font-semibold mb-6 text-3xl lg:text-4xl">
            GT Turbo – Turbocharger
          </h2>
          <p className="text-white font-regular leading-[1.8] max-w-[900px] text-sm lg:text-[15px] opacity-90">
            GT Turbo's Turbocharger is engineered to improve engine performance by delivering compressed air to the combustion chamber. Designed for efficient airflow and responsive boost, it helps optimize power output, acceleration, and overall engine efficiency across demanding driving conditions.
          </p>
        </div>

        {/* Overlapping Card */}
        <div className="bg-white rounded-[20px] lg:rounded-[30px] relative z-10 -mb-24 lg:-mb-32 shadow-2xl flex flex-col lg:flex-row overflow-hidden" data-aos="fade-up" data-aos-delay="100">

          {/* Video Player Side */}
          <div className="w-full lg:w-1/2 bg-[#f0f0f0] relative min-h-[300px] lg:min-h-full flex items-center justify-center border-r border-gray-100">
            {/* Checkerboard pattern for placeholder if no video */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <span className="font-semibold text-xl text-black">360 Deg Video</span>
            </div>
            <div className="relative z-20 w-full h-full">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-12 xl:p-14">
            <p className="text-[#484848] font-regular leading-[1.8] mb-8 text-sm lg:text-[15px]">
              Built with precision-engineered components, GT Turbo turbochargers are designed for reliable operation under high temperatures and pressures. The robust construction supports consistent performance, improved combustion, and dependable operation for automotive and commercial vehicle applications.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Settings className="text-[#E02027] shrink-0 mt-0.5" size={20} strokeWidth={2} />
                  <div>
                    <p className="text-[#484848] font-regular leading-[1.6] text-sm lg:text-[15px]">
                      <span className="text-[#000000] font-semibold">{feat.title}</span> – {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button className="flex items-center gap-4 bg-[#0B0E17] text-white font-regular pl-6 pr-2 py-2 rounded-full hover:bg-[#131A2B] transition-colors group w-fit text-sm lg:text-[15px]">
                Know About Us
                <div className="bg-[#E02027] text-white rounded-full p-2 group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
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
