"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        
        {/* Section Title with Lines */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-10">
          <div className="w-12 md:w-16 h-[3px] bg-[var(--color-primary)]"></div>
          <h2 className="section-title barlowCondensed font-bold text-[#000000]">About Us</h2>
          <div className="w-12 md:w-16 h-[3px] bg-[var(--color-primary)]"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Text & Cards */}
          <div className="flex flex-col">
            <p className="section-text inter leading-relaxed text-[#111111] mb-6">
              Eren Balata founded in 1990 in Kemalpaşa county has been demonstrating a continuous improvement by building its own technology on friction materials from day one and moved to its brand new production facility in 2006.
            </p>
            <p className="section-text inter leading-relaxed text-[#111111] mb-10">
              Friction materials are produced with the contribution of expert staff and unique technology in the facility of Eren Balata, which was established on an area of 20.000 square meters, 10.000 square meters of which is indoor space.
            </p>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              
              {/* Vision Card */}
              <div className="border border-[var(--color-primary)] p-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <img src="/moto/eren/vision.png" alt="Vision" className="w-7 h-auto brightness-0 invert" />
                  </div>
                  <h3 className="section-subtitle font-semibold text-[#000000]">Vision</h3>
                </div>
                <p className="section-text inter font-normal text-[#111111] leading-relaxed">
                  Provide creative responses to changes and maintain team awareness adopting continuous improvement and innovation as a principle in order to progress further.
                </p>
              </div>

              {/* Mission Card */}
              <div className="border border-[var(--color-primary)] p-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <img src="/moto/eren/mission.png" alt="Mission" className="w-7 h-auto brightness-0 invert" />
                  </div>
                  <h3 className="section-subtitle font-semibold text-[#000000]">Mission</h3>
                </div>
                <p className="section-text inter font-normal text-[#111111] leading-relaxed">
                  Be aware of the importance attached to the products like ours in human life; Make no concessions on product quality and company's quality policy; Respond our customers demands on time.
                </p>
              </div>

            </div>

            {/* Learn More Button */}
            <div className="self-start">
              <Button text="Learn More" className="!px-10" />
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full">
           
            
            <div className="relative z-10 w-full overflow-hidden ">
              <img
                src="/moto/eren/abt.png"
                alt="Eren Balata Facility"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
