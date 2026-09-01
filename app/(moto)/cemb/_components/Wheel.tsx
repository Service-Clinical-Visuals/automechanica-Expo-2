"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Wheel = () => {
  const features = [
    "Designed to make wheel balancing faster, easier and more accurate for professional workshops.",
    "Advanced measurement systems help capture wheel dimensions and balancing data with minimal manual input.",
    "The balancing process is streamlined to reduce setup time and simplify everyday operation."
  ];

  return (
    <section
      id="wheel-balancing"
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-[#222222] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">

        {/* Video - Mobile Order 1, Desktop Left */}
        <div className="order-1 xl:col-start-1 xl:col-span-8 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden rounded-xl min-[2100px]:rounded-2xl min-[3800px]:rounded-3xl shadow-xl ">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Wrapper - Mobile Order 2, Desktop Right */}
        <div className="order-2 contents xl:flex xl:flex-col xl:col-start-9 xl:col-span-4 xl:row-start-1 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">

          {/* Heading */}
          <div className="flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-bold leading-snug text-white">
              Wheel Balancing in Action
            </Typography>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-8 min-[2100px]:gap-10 min-[3800px]:gap-14 w-full" data-aos="fade-left">
            <Typography variant="p" color="white" className="leading-relaxed   text-justify xl:text-left">
              CEMB wheel balancers combine advanced measurement technology with intuitive operation to deliver precise and repeatable results. Every stage of the balancing process is engineered for accuracy, efficiency and ease of use, helping professional workshops achieve reliable results with less effort.
            </Typography>

            {/* Features List */}
            <div className="flex flex-col gap-5 min-[3800px]:gap-8 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 min-[3800px]:gap-6">
                  <div className="mt-1 shrink-0">
                    <img src="/moto/cemb/vector2.png" alt="bullet" className="w-6 h-6 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8 object-contain" />
                  </div>
                  <Typography variant="p" color="white" className="leading-snug ">
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="pt-2 min-[2100px]:pt-4 min-[3800px]:pt-6 flex justify-start" data-aos="fade-up" data-aos-delay="100">
              <Button text="View Product" href="#wheel-balancing" showIcon={false} variant="primary" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Wheel;
