"use client";

import React from "react";
import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const WheelBalancerFeature = () => {
  return (
    <section 
      id="wheel-balancer-feature" 
      className="w-full py-16 md:py-24 text-white relative"
      style={{ backgroundColor: "#8e9192" }}
    >
      <div className="custom-container px-4 lg:px-10">
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-10 items-center w-full">
          
          {/* Left Side: Video */}
          <div className="order-2 xl:order-1 xl:col-span-9 w-full  shrink-0">
            <div className="w-full   aspect-video relative  shadow-2xl overflow-hidden">
              <DynamicVideoPlayer
              type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 xl:order-2 xl:col-span-3 w-full  flex flex-col justify-center">
                      <h2  className="font-semibold text-[#ffffff] exo2 section-title mb-4">

              Wheel Balancer
            </h2>
             <hr className="border-t border-white mb-8" />
            
                    <p className="text-[#ffffff] oxanium section-text mb-4">

              FASEP manufactures advanced Wheel Balancers designed to deliver exceptional balancing accuracy, smooth operation, and reliable performance for modern automotive workshops.
            </p>

            <hr className="border-t border-white/20 mb-6" />

            <ul className="flex flex-col gap-5 mb-6">
              <li className="flex items-start gap-4">
                <div className="relative w-5 h-5 shrink-0 mt-1">
                  <img src="/moto/fasep/chk.png" alt="Check"  className="object-contain" />
                </div>
                        <p className="text-[#ffffff] oxanium section-text">


                  <strong className="font-bold">High-Precision Balancing</strong> &ndash; Delivers accurate measurements for smooth and stable wheel performance.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="relative w-5 h-5 shrink-0 mt-1">
                  <img src="/moto/fasep/chk.png" alt="Check"  className="object-contain" />
                </div>
                      <p className="text-[#ffffff] oxanium section-text">


                  <strong className="font-bold">Wide Wheel Compatibility</strong> &ndash; Suitable for a broad range of passenger and commercial vehicle applications.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="relative w-5 h-5 shrink-0 mt-1">
                  <img src="/moto/fasep/chk.png" alt="Check"  className="object-contain" />
                </div>
                      <p className="text-[#ffffff] oxanium section-text">


                  <strong className="font-bold">Durable Construction</strong> &ndash; Quality components built for reliable use.
                </p>
              </li>
            </ul>

            <hr className="border-t border-white mb-8" />

            <Typography variant="p" color="white" className="leading-relaxed opacity-90 text-sm md:text-base mb-8">
              FASEP wheel balancers combine precision engineering and advanced technology to reduce vibrations, improve tire performance, and ensure efficient service.
            </Typography>

            <div>
              <Button text="View Specifications" href="#specifications" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WheelBalancerFeature;
