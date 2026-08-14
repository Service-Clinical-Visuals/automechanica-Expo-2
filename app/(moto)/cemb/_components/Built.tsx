"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Settings, Globe, Lightbulb } from "lucide-react";

const Built = () => {
  const cards = [
    {
      title: "Precision Engineering",
      desc: "Every component is engineered for high performance and precision.",
      icon: <Settings className="w-6 h-6 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-primary shrink-0" />
    },
    {
      title: "Global Reliability",
      desc: "CEMB solutions are trusted by professionals across international markets.",
      icon: <Globe className="w-6 h-6 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-primary shrink-0" />
    },
    {
      title: "Continuous Innovation",
      desc: "Continuously innovating to improve balancing performance and efficiency.",
      icon: <Lightbulb className="w-6 h-6 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-primary shrink-0" />
    }
  ];

  return (
    <section
      id="built-precision"
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 lg:gap-12 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">

        {/* Content Wrapper - Mobile Order 1, Desktop Left */}
        <div className="order-1 xl:col-start-1 xl:col-span-5 xl:row-start-1 flex flex-col gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16" data-aos="fade-right">

          {/* Text Section */}
          <div className="flex flex-col gap-4 min-[3800px]:gap-8 w-full">
            <Typography variant="h2" color="white" className="font-bold leading-snug text-white">
              Built for Precision. Designed for Performance.
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  mt-2 text-justify xl:text-left">
              Take a closer look at how CEMB combines advanced engineering, precision manufacturing and rigorous testing to create high-performance wheel balancing solutions. From component production to final quality checks, every stage is designed to deliver reliable and consistent performance.
            </Typography>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-[2100px]:gap-6 min-[3800px]:gap-10 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4 bg-white rounded-xl min-[3800px]:rounded-2xl p-4 lg:p-6 min-[3800px]:p-10 border-2 border-primary shadow-lg"
              >
                <div className="flex items-center gap-2 min-[3800px]:gap-4 justify-center w-full">
                  {card.icon}
                  <Typography variant="h4" color="dark" className="font-bold text-sm lg:text-sm min-[2100px]:text-base min-[3800px]:text-xl leading-tight">
                    {card.title}
                  </Typography>
                </div>
                <Typography variant="p" color="muted" className="text-xs lg:text-sm min-[2100px]:text-base min-[3800px]:text-lg mt-2 px-1">
                  {card.desc}
                </Typography>
              </div>
            ))}
          </div>

          <div className="pt-2 min-[2100px]:pt-4 min-[3800px]:pt-8 flex justify-start">
            <Button text="View Product" href="#built-precision" showIcon={false} variant="primary" />
          </div>

        </div>

        {/* Video - Mobile Order 2, Desktop Right */}
        <div className="order-2 xl:col-start-6 xl:col-span-7 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-left">
          <div className="w-full aspect-video relative overflow-hidden ">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Built;
