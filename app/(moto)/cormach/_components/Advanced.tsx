"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Advanced = () => {
  return (
    <section
      id="advanced"
      className="w-full py-16 md:py-24 text-dark relative bg-secondary overflow-hidden"
    >
      {/* Background Slanting Lines Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#dbcbcbff_10px,#a28080ff_20px)]"></div>

      <div className="custom-container relative z-10 flex flex-col gap-10">

        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full border-b border-gray-300 pb-6">
          <div className="flex flex-col gap-4 w-full md:max-w-[70%]" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="font-bold">
              Advanced Balancing Technology
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              At CORMACH Srl, every Wheel Balancer is engineered for modern automotive workshops, combining precision sensors, intelligent balancing technology, and durable construction to deliver accurate results, faster service, and reliable long-term performance.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0" data-aos="fade-left">
            <Button text="View Product Details" href="#products" variant="primary" />
          </div>
        </div>

        {/* Video Placeholder Area */}
        <div className="w-full mx-auto xl:max-w-[75%] relative shadow-xl rounded-2xl overflow-hidden aspect-video" data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Advanced;
