"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Precision = () => {
  return (
    <section id="precision" className="w-full py-16 min-[3800px]:py-32 bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row gap-10 min-[3800px]:gap-16 items-center">

        {/* Video / Image container */}
        {/* Mobile: Order 2, Desktop: Order 1 (Left side) */}
        <div className="order-2 xl:order-1 w-full xl:w-1/2 aspect-video relative bg-white/5" data-aos="fade-right">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        {/* Mobile: Order 1, Desktop: Order 2 (Right side) */}
        <div className="order-1 xl:order-2 w-full xl:w-1/2 flex flex-col gap-6 min-[3800px]:gap-12" data-aos="fade-left">

          <Typography variant="h2" color="white" className="font-bold leading-tight mb-2 min-[3800px]:mb-4">
            Precision Engineered for Every Rotation
          </Typography>

          <div className="flex flex-col gap-4 min-[3800px]:gap-8">
            <Typography variant="p" color="white" className="leading-relaxed ">
              Designed to original equipment standards, Spicer U-Joints deliver exceptional strength, smooth torque transfer, and reliable durability for demanding driveline applications across passenger, commercial, and industrial vehicles.
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed ">
              Every component is manufactured with high-quality materials and precision tolerances to ensure consistent performance and extended service life.
            </Typography>
          </div>

          <ul className="flex flex-col gap-5 min-[3800px]:gap-8 mt-2 min-[3800px]:mt-6">
            <li className="flex items-start gap-4">
              <img src="/moto/dana/Vector.png" alt="bullet" className="w-6 h-6 min-[3800px]:w-11 min-[3800px]:h-12 shrink-0 mt-1" />
              <Typography variant="p" color="white" className="leading-relaxed  text-sm min-[3800px]:text-2xl">
                OE-quality design for precise fit and performance, ensuring seamless compatibility with factory driveline specifications and consistent operation across a wide range of vehicle platforms.
              </Typography>
            </li>
            <li className="flex items-start gap-4">
              <img src="/moto/dana/Vector.png" alt="bullet" className="w-6 h-6 min-[3800px]:w-11 min-[3800px]:h-12 shrink-0 mt-1" />
              <Typography variant="p" color="white" className="leading-relaxed  text-sm min-[3800px]:text-2xl">
                High-strength materials for improved durability under load, engineered to withstand high torque demands, heavy-duty use, and challenging driving environments without premature wear.
              </Typography>
            </li>
            <li className="flex items-start gap-4">
              <img src="/moto/dana/Vector.png" alt="bullet" className="w-6 h-6 min-[3800px]:w-11 min-[3800px]:h-12 shrink-0 mt-1" />
              <Typography variant="p" color="white" className="leading-relaxed  text-sm min-[3800px]:text-2xl">
                Smooth torque transfer for reduced vibration and noise, helping maintain driveline balance, improve ride comfort, and protect surrounding components from stress-related damage.
              </Typography>
            </li>
          </ul>

          <div className="mt-4 min-[3800px]:mt-8" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Product" href="#explore" className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] px-8 py-3 min-[3800px]:px-14 min-[3800px]:py-6 text-sm min-[3800px]:text-2xl font-semibold" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Precision;
