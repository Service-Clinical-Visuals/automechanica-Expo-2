"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="360-view"
      className="w-full py-16 md:py-24 text-white relative bg-primary overflow-hidden"
    >
      {/* Background Slanting Lines Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(-45deg,transparent,transparent_9px,#E2001A_10px,#e6abb2ff_20px)]"></div>

      <div className="custom-container relative z-10 flex flex-col gap-10">

        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full border-b border-white/40 pb-6">
          <div className="flex flex-col gap-4 w-full md:max-w-[70%]" data-aos="fade-right">
            <Typography variant="h2" color="white" className="font-bold">
              Interactive 360° Product View
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed ">
              Experience the precision engineering of CORMACH Srl Wheel Balancers through our 360° interactive product view. Rotate the machine to examine its design, control panel, balancing components, and build quality from every angle, showcasing the reliability and innovation trusted by professional automotive workshops.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0" data-aos="fade-left">
            <Button text="Explore in 360°" href="#explore" variant="secondary" />
          </div>
        </div>

        {/* Video Placeholder Area */}
        <div className="w-full h-full mx-auto xl:max-w-[70%] aspect-video relative shadow-2xl rounded-2xl overflow-hidden  " data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
