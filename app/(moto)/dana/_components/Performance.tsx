"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Performance = () => {
  return (
    <section
      id="performance"
      className="w-full py-16 min-[3800px]:py-32 bg-[#171717] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 min-[3800px]:gap-20 items-center">
          {/* Video (Left side, span-8) */}
          <div
            className="lg:col-span-8 w-full aspect-[16/10] sm:aspect-video relative bg-white/5 order-2 lg:order-1"
            data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text Content (Right side, span-4) */}
          <div
            className="lg:col-span-4 flex flex-col gap-6 min-[3800px]:gap-12 order-1 lg:order-2"
            data-aos="fade-left">
            <Typography
              variant="h2"
              color="white"
              className="font-bold leading-tight">
              Engineered for Strength, Tested for Performance
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed ">
              Watch how Spicer U-Joints are manufactured and engineered to
              deliver smooth torque transmission, reduced vibration, and
              dependable durability across demanding driveline applications.
              Every component is designed to meet OE-quality standards for
              consistent performance and long service life.
            </Typography>

            {/* Bordered Features Box */}
            <div className="flex flex-col gap-5 min-[3800px]:gap-10 border border-primary/50 p-6 min-[3800px]:p-12">
              <div className="flex flex-col gap-1 min-[3800px]:gap-2">
                <Typography
                  variant="h4"
                  color="white"
                  className="font-bold text-sm min-[3800px]:text-3xl">
                  High-Strength Construction
                </Typography>
                <Typography
                  variant="p"
                  color="white"
                  className="leading-relaxed  text-sm min-[3800px]:text-2xl">
                  Forged steel components built to withstand high torque and
                  heavy-duty operating conditions.
                </Typography>
              </div>

              <div className="flex flex-col gap-1 min-[3800px]:gap-2">
                <Typography
                  variant="h4"
                  color="white"
                  className="font-bold text-sm min-[3800px]:text-3xl">
                  Precision Bearing Design
                </Typography>
                <Typography
                  variant="p"
                  color="white"
                  className="leading-relaxed  text-sm min-[3800px]:text-2xl">
                  Engineered for smooth articulation, reduced friction, and
                  reliable power transfer.
                </Typography>
              </div>
            </div>

            <div className="mt-2 min-[3800px]:mt-6">
              <Button text="View Product" href="#products" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
