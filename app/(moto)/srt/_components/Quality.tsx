"use client";

import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

export default function Quality() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#656973]">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-5xl">
            <h2 className="section-title exo2 font-semibold text-[#ffffff] mb-10 md:mb-6">
              Quality <span className="relative inline-block">Without<span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--color-primary)]"></span></span> Compromise
            </h2>
        <p className="section-text oxanium text-[#ffffff] text-left  leading-relaxed ">
              SRT Gear Industry fulfills the requirements of ISO 9001 quality management system in production and quality control stages. We constantly work to produce only the best with qualified engineer staff in a modern quality control laboratory.
            </p>
          </div>
          <div className="flex-shrink-0 md:pt-4">
            <Button text="Discover SRT" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-10 md:my-14"></div>

        {/* Bottom Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left: Image */}
          <div className="w-full xl:col-span-8 relative ">
            <img 
              src="/moto/srt/quality.png" 
              alt="Quality Control" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Text and List */}
          <div className="xl:col-span-4 space-y-6">
            <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
              SRT adopts quality control procedures as the only indispensable principle in all parts of the organization, especially in production. All of our staff, especially the quality control team, carries out quality control processes and SRT works as an important part of our understanding of quality.
            </p>
            <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
              SRT Gear Industry follows rigorous quality management practices throughout production, ensuring reliable, durable, and high-performance automotive components that consistently meet demanding industry standards worldwide, while maintaining precision, safety, and customer satisfaction.
            </p>

            {/* List shown on right for 2xl screens only */}
            <ul className="hidden 2xl:block space-y-6 mt-8">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img src="/moto/srt/chk.png" alt="check" className="w-8 h-8 mt-1" />
                </div>
                <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
                  <span className="font-semibold text-white">ISO 9001 Quality Standards</span> – Maintaining structured quality management across production and control processes.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img src="/moto/srt/chk.png" alt="check" className="w-8 h-8 mt-1" />
                </div>
                <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
                  <span className="font-semibold text-white">Continuous Improvement</span> – Regular evaluation and process enhancement help maintain consistent product quality.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img src="/moto/srt/chk.png" alt="check" className="w-8 h-8 mt-1" />
                </div>
                <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
                  <span className="font-semibold text-white">Customer-Focused Reliability</span> – Every component is developed to meet demanding performance and customer expectations.
                </p>
              </li>
            </ul>

            <div className="pt-4 hidden 2xl:block">
              <Button text="Discover SRT" />
            </div>
          </div>
        </div>

        {/* List shown below grid for mobile, lg, and xl screens */}
        <div className="2xl:hidden mt-8 xl:mt-12">
          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/moto/srt/chk.png" alt="check" className="w-8 h-8 mt-1" />
              </div>
              <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
                <span className="font-semibold text-white">ISO 9001 Quality Standards</span> – Maintaining structured quality management across production and control processes.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/moto/srt/chk.png" alt="check" className="w-8 h-8 mt-1" />
              </div>
              <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
                <span className="font-semibold text-white">Continuous Improvement</span> – Regular evaluation and process enhancement help maintain consistent product quality.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/moto/srt/chk.png" alt="check" className="w-8 h-8 mt-1" />
              </div>
              <p className="section-text oxanium text-[#ffffff] text-left leading-relaxed">
                <span className="font-semibold text-white">Customer-Focused Reliability</span> – Every component is developed to meet demanding performance and customer expectations.
              </p>
            </li>
          </ul>
          <div className="pt-8 text-center lg:text-left">
            <Button text="Discover SRT" />
          </div>
        </div>

      </div>
    </section>
  );
}
