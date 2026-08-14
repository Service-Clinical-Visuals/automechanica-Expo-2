"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  { title: "Precision Engineering", desc: "Explore the machine's robust construction and key components." },
  { title: "Advanced Measurement", desc: "Discover the systems designed for accurate wheel data and balancing." },
  { title: "Intuitive Controls", desc: "Get a closer look at the operator interface and digital display." },
  { title: "Ergonomic Design", desc: "See how every element is designed for efficient workshop operation." },
  { title: "Wheel Compatibility", desc: "Explore the setup and mounting area designed for professional wheel balancing." }
];

const Deg360 = () => {
  return (
    <section
      id="explore"
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-[#1D1D1D] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 lg:gap-12 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">

        {/* Video - Mobile Order 1, Desktop Left */}
        <div className="order-1 xl:col-start-1 xl:col-span-7 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden rounded-xl min-[2100px]:rounded-2xl min-[3800px]:rounded-3xl shadow-xl border border-gray-800 bg-white">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Wrapper - Mobile Order 2, Desktop Right */}
        <div className="order-2 contents xl:flex xl:flex-col xl:col-start-8 xl:col-span-5 xl:row-start-1 xl:gap-6 min-[2100px]:xl:gap-10 min-[3800px]:xl:gap-14">
          {/* Heading */}
          <div className="flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-bold leading-snug text-white">
              Explore Every Angle of CEMB Precision
            </Typography>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full" data-aos="fade-left">
            <Typography variant="p" color="white" className="leading-relaxed text-gray-300 opacity-90 text-sm lg:text-base min-[2100px]:text-lg min-[3800px]:text-2xl text-justify xl:text-left">
              Discover the CEMB wheel balancer from every perspective through an interactive 360° product experience. Examine its precision-engineered components, ergonomic controls, wheel mounting system and integrated technologies designed for accurate, efficient and reliable balancing.
            </Typography>

            {/* Features Box */}
            <div className="bg-white rounded-xl min-[2100px]:rounded-2xl p-6 min-[2100px]:p-8 min-[3800px]:p-12 flex flex-col gap-5 min-[3800px]:gap-8 shadow-lg">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 min-[3800px]:gap-6">
                  <div className="mt-1 shrink-0">
                    <img src="/moto/cemb/vector.png" alt="bullet" className="w-6 h-6 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 object-contain" />
                  </div>
                  <Typography variant="p" color="dark" className="leading-snug text-sm min-[2100px]:text-base min-[3800px]:text-xl">
                    <strong>{feature.title}</strong> — {feature.desc}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10 flex justify-start" data-aos="fade-up" data-aos-delay="100">
              <Button text="View Product" href="#explore" showIcon={false} variant="primary" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
