"use client";

import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 xl:py-20 2xl:py-[100px] bg-white overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 2xl:gap-[36px] items-center justify-between">

          {/* Header Block (Displays FIRST on mobile/tablet, CENTERED) */}
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="flex flex-col items-center text-center w-full xl:hidden"
          >
            <span className="font-bold text-xs sm:text-sm text-accent tracking-wide mb-3 sm:mb-[15px]">
              About Pek Teknik Makina
            </span>

            <h2 className="section-title font-bold leading-snug sm:leading-tight text-[#202020]">
              Integrated Engineering Solutions Under One Group
            </h2>
          </div>

          {/* Facility Image Container with AOS & Hover Effects (CENTERED on mobile/tablet) */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="group relative w-full xl:w-1/2 aspect-[4/3] min-h-[300px] sm:min-h-[400px] xl:min-h-[480px] 2xl:min-h-[594px] rounded-[10px] overflow-hidden shadow-md flex-shrink-0 mx-auto"
          >
            <img
              src="/moto/pek/about.png"
              alt="PEK Technic Facility"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Text Content Block (Displays THIRD on mobile/tablet, LEFT-aligned paragraphs) */}
          <div className="flex flex-col items-start text-left w-full xl:w-1/2 max-w-none">

            {/* Header Block (Displays ONLY on desktop, LEFT-aligned) */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
              className="hidden xl:flex flex-col"
            >
              <span className="font-bold text-xs sm:text-sm text-accent tracking-wide mb-3 sm:mb-[15px]">
                About Pek Teknik Makina
              </span>

              <h2 className="section-title font-bold leading-snug sm:leading-tight text-[#202020] mb-5 sm:mb-[30px]">
                Integrated Engineering Solutions Under One Group
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
              className="section-text font-normal leading-relaxed text-[#404040] mb-4 sm:mb-[25px]"
            >
              PEK TECHNIC Group is a diversified engineering and manufacturing organization comprising specialized companies across automotive and industrial sectors. Each company brings unique expertise, enabling us to deliver integrated, reliable, and high-quality solutions through a unified organization.
            </p>

            {/* Paragraph 2 */}
            <p
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
              className="section-text font-normal leading-relaxed text-[#404040] mb-4 sm:mb-[25px]"
            >
              Our capabilities span aluminum casting, precision machining, pipe forming, and automotive component manufacturing, supported by advanced technology, skilled professionals, and a commitment to continuous improvement. Every stage of our production process is driven by precision, efficiency, and strict quality standards to ensure products that meet global industry requirements.
            </p>

            {/* Paragraph 3 */}
            <p
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="500"
              className="section-text font-normal leading-relaxed text-[#404040] mb-6 sm:mb-[30px]"
            >
              From concept and engineering to manufacturing and final delivery, we are dedicated to producing durable, high-performance solutions while building long-term partnerships founded on trust, innovation, and excellence.
            </p>

            {/* Button Container */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              className="pt-2"
            >
              <Button href="#capabilities" variant="outline-red">
                View Our Capabilities
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}