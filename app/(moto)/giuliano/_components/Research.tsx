"use client";

import React from "react";
import Button from "./Button";

export default function ResearchDevelopment() {
  return (
    <section className="w-full bg-[#0D0D0D] py-16 lg:py-24">
      <div className="custom-container">

        {/* ================= MOBILE / TABLET LAYOUT (Visible only upto 1025px width) ================= */}
        <div className="min-[1026px]:hidden flex flex-col">
          {/* 1. Heading first */}
          <h2
            className="section-heading text-white mb-6"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Research &amp; Development
          </h2>

          {/* 2. Left Image second */}
          <div
            className="group relative w-full aspect-[533/828] border border-white/20 overflow-hidden mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/moto/giuliano/r1.png"
              alt="Giuliano Automotive workshop"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
          </div>

          {/* 3. First Paragraph third */}
          <p
            className="section-text text-white mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            As a future-oriented company, Giuliano Automotive has always
            been convinced that continued investment in innovation is
            essential to constant growth. To this end, Giuliano Automotive
            devotes significant resources to research and development,
            seeking to be a leader of R&amp;D in automotive equipment
            technologies, by keeping ahead of market demand, and offering
            tyre professionals unrivaled high performance products and
            cutting-edge solutions.
          </p>

          {/* 4. Two Images fourth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div
              className="group relative w-full aspect-[534/350] border border-white/20 overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src="/moto/giuliano/r2.png"
                alt="Research"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
            </div>

            <div
              className="group relative w-full aspect-[533/350] border border-white/20 overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src="/moto/giuliano/r3.png"
                alt="Development"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
            </div>
          </div>

          {/* 5. Second Paragraph fifth */}
          <p
            className="section-text text-white mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            At Giuliano Automotive, a dedicated team of highly skilled
            professionals and engineers is devoted to develop innovative
            solutions and shape the future of the automotive industry.
            Giuliano has always been attentive to quality control and
            customer&apos;s needs, in order to be able to respond to market
            developments, meet specific customer requirements and anticipate
            market trends, as well as strengthen and consolidate Giuliano
            products image.
          </p>

          {/* 6. Button last */}
          <div
            className="pr-7 transition-transform duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Button text="Explore Innovation" />
          </div>
        </div>


        {/* ================= DESKTOP LAYOUT (Visible only on 1026px and above) ================= */}
        <div className="hidden min-[1026px]:grid grid-cols-[533px_1fr] gap-16 items-center">

          {/* Left Image Column */}
          <div
            className="group relative w-full aspect-[533/828] border border-white/20 overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="/moto/giuliano/r1.png"
              alt="Giuliano Automotive workshop"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
          </div>

          {/* Right Content Column */}
          <div className="flex flex-col">

            <h2
              className="section-heading text-white mb-6"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              Research &amp; Development
            </h2>

            <p
              className="section-text text-white mb-8"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              As a future-oriented company, Giuliano Automotive has always
              been convinced that continued investment in innovation is
              essential to constant growth. To this end, Giuliano Automotive
              devotes significant resources to research and development,
              seeking to be a leader of R&amp;D in automotive equipment
              technologies, by keeping ahead of market demand, and offering
              tyre professionals unrivaled high performance products and
              cutting-edge solutions.
            </p>

            {/* Two Images */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div
                className="group relative w-full aspect-[534/350] border border-white/20 overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250"
              >
                <img
                  src="/moto/giuliano/r2.png"
                  alt="Research"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
              </div>

              <div
                className="group relative w-full aspect-[533/350] border border-white/20 overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img
                  src="/moto/giuliano/r3.png"
                  alt="Development"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
              </div>
            </div>

            <p
              className="section-text text-white mb-8"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              At Giuliano Automotive, a dedicated team of highly skilled
              professionals and engineers is devoted to develop innovative
              solutions and shape the future of the automotive industry.
              Giuliano has always been attentive to quality control and
              customer&apos;s needs, in order to be able to respond to market
              developments, meet specific customer requirements and anticipate
              market trends, as well as strengthen and consolidate Giuliano
              products image.
            </p>

            <div
              className="pr-7 transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="650"
            >
              <Button text="Explore Innovation" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}