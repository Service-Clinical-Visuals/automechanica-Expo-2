"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative z-10">
      <div className="custom-container px-6 md:px-12 xl:px-20 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-10 md:mb-6">
          <h2 className="section-title exo2 font-semibold text-[#2a2a2a] ">
            About SRT
          </h2>
          <div className="h-1 w-full bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </div>

        {/* Top Text */}
        <p className="section-text oxanium text-[#4a4a4a] text-center max-w-7xl leading-relaxed mb-12">
          Founded in 1988 under the leadership of Salih Baltaci, SRT Gear Industry aimed to produce the best gearbox and transmission parts everyday, combined with the best service to its customers. SRT Gear Industry production follows the ISO 9001 quality standards in a state of the art production facilities. SRT Gear Industry focuses on quality, customer satisfaction, and efficient growth across global markets
        </p>

        {/* Main Image */}
        <div className="w-full relative rounded-3xl overflow-hidden  mb-8">
          <img
            src="/moto/srt/abt.png"
            alt="SRT Factory"
            className="w-full h-auto object-cover "
          />
        </div>

        {/* Bottom Text and Button */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="section-text oxanium text-[#4a4a4a] text-left max-w-6xl leading-relaxed ">
            SRT Gear Industry wants to continue with this growth trend, as it has reached an established slope of its installed capacity. Therefore, the next big goal is to find a relevant place among the leading brands in international trade.
          </p>
          <div className="flex-shrink-0">
            <Button text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
}
