"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 min-[2100px]:py-28 min-[3800px]:py-40 relative overflow-hidden bg-[#161616] text-white">
      <div className="custom-container relative z-10 flex flex-col items-center text-center">

        {/* Top Header */}
        <h2 className="section-title montserrat-font font-bold mb-4" data-aos="fade-up">
          Innovation That Moves the Industry Forward
        </h2>

        <p className="inter-font text-white font-regular section-text leading-relaxed max-w-[70%] mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
          See how BendPak combines decades of experience with modern engineering and innovative manufacturing to create professional automotive equipment. From product development to global operations, every step is focused on delivering dependable solutions that help workshops work safer, faster, and more efficiently.
        </p>

        {/* Video Player */}
        <div className="w-full h-full xl:max-w-[80%] 2xl:max-w-[80%] aspect-video rounded-[5px] flex items-center justify-center mb-10 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
        </div>

        {/* Bottom Text & Button */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full xl:max-w-[80%] 2xl:max-w-[80%] mx-auto gap-6 text-left" data-aos="fade-up" data-aos-delay="300">
          <p className="inter-font text-white font-regular section-text leading-relaxed md:max-w-[75%]">
            BendPak's commitment to innovation extends beyond individual products, with a continuous focus on improving manufacturing processes, developing smarter technologies, and responding to the evolving needs of automotive professionals.
          </p>
          <Button href="#" variant="primary" className="!w-fit !px-8 !py-2.5 !rounded-[2px] inter-font flex-shrink-0">
            View Product
          </Button>
        </div>

      </div>
    </section>
  );
}
