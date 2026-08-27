"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const features = [
  "High-Precision Measurement – Accurate balancing results for improved wheel stability and driving comfort.",
  "Fast Balancing Cycles – Efficient operation helps reduce service time and increase workshop productivity.",
  "User-Friendly Operation – Intuitive controls make daily balancing procedures simple and efficient.",
];

export default function WheelBalancing() {
  return (
    <section className="w-full bg-surface-1 py-16 lg:py-24">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-[minmax(0,1249px)_minmax(320px,1fr)] min-[1920px]:grid-cols-[minmax(0,1500px)_minmax(320px,1fr)] min-[2560px]:grid-cols-[minmax(0,1900px)_minmax(320px,1fr)] min-[3840px]:grid-cols-[minmax(0,2500px)_minmax(320px,1fr)] gap-10 lg:gap-16 min-[1920px]:gap-12 min-[2560px]:gap-14 min-[3840px]:gap-16 items-start lg:items-center">

        {/* Video */}
        <div
          className="group relative w-full aspect-video max-w-[1249px] min-[1920px]:max-w-[1500px] min-[2560px]:max-w-[1900px] min-[3840px]:max-w-[2500px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.24)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover "
          />

          <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
        </div>

        {/* Content */}
        <div className="w-full min-w-0">

          <h2
            className="section-heading text-white mb-6"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            Wheel Balancing
          </h2>

          <div
            className="w-full border-t border-soft mb-6"
            data-aos="fade-in"
            data-aos-duration="700"
            data-aos-delay="100"
          />

          <p
            className="section-text-lg text-white mb-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            GIULIANO INDUSTRIAL S.p.A. develops advanced Wheel Balancers
            combining precision technology, durable construction, and
            efficient operation for modern automotive workshops.
          </p>

          <ul className="space-y-6 mb-6">

            {features.map((feature, index) => {
              const [title, description] = feature.split(" – ");

              return (
                <li
                  key={feature}
                  className="group flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay={250 + index * 120}
                >

                  <span className="relative flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <Check
                      className="w-4 h-4 text-[#2A2A2A] transition-colors duration-300 group-hover:text-black"
                      strokeWidth={3}
                    />
                  </span>

                  <span className="section-text-lg text-white min-w-0 transition-opacity duration-300 group-hover:opacity-90">
                    <span className="font-semibold">{title}</span>
                    {" – "}
                    {description}
                  </span>

                </li>
              );
            })}

          </ul>

          <div
            className="w-full border-t border-soft mb-6"
            data-aos="fade-in"
            data-aos-duration="700"
            data-aos-delay="550"
          />

          <p
            className="section-text-lg text-white mb-8"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            GIULIANO INDUSTRIAL S.p.A. Wheel Balancers ensure accurate
            balancing, reduced vibrations, and efficient performance.
          </p>

          <div
            className="pr-2 transition-transform duration-300 hover:-translate-y-1"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <Button
              text="Explore Wheel Balancers"

            />
          </div>

        </div>
      </div>
    </section>
  );
}