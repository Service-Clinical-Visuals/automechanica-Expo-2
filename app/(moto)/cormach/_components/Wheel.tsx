"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const Wheel = () => {
  const bulletPoints = [
    {
      title: "High-Precision Balancing",
      desc: "Advanced measuring technology ensures accurate balancing results, reducing vibration and improving driving stability."
    },
    {
      title: "Fast Measurement Cycle",
      desc: "Optimized balancing algorithms deliver quick and precise results, increasing workshop productivity."
    },
    {
      title: "Heavy-Duty Construction",
      desc: "Built with premium materials to withstand continuous professional workshop use."
    }
  ];

  return (
    <section
      id="wheel-balancer"
      className="w-full py-16 md:py-24 text-white relative bg-primary overflow-hidden"
    >
      {/* Background Slanting Lines Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#E2001A_10px,#e6abb2ff_20px)]"></div>

      <div className="custom-container relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-10 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">

        {/* Header Group for Mobile/Tablet */}
        <div className="flex flex-col gap-4 xl:hidden order-1" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold">
            Wheel Balancer
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed ">
            CORMACH Srl manufactures advanced Wheel Balancers designed for precise balancing, improved vehicle stability, and reliable performance. Built with advanced technology and quality standards, they deliver fast, accurate balancing for modern automotive workshops.
          </Typography>
        </div>

        {/* Left Side: Video Placeholder */}
        {/* Mobile: Order 2, Desktop: Order 1 (Col 1-7) */}
        <div className="w-full xl:col-span-9 order-2 xl:order-1 relative shadow-2xl rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-video" data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text Content */}
        {/* Mobile: Order 3, Desktop: Order 2 (Col 8-12) */}
        <div className="flex flex-col gap-6 min-[2100px]:gap-10 min-[3800px]:gap-14 xl:col-span-3 order-3 xl:order-2" data-aos="fade-left" data-aos-delay="200">

          {/* Header Group (Desktop Only) */}
          <div className="hidden xl:flex flex-col gap-4 border-b border-white/40 pb-6">
            <Typography variant="h2" color="white" className="font-bold">
              Wheel Balancer
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed ">
              CORMACH Srl manufactures advanced Wheel Balancers designed for precise balancing, improved vehicle stability, and reliable performance. Built with advanced technology and quality standards, they deliver fast, accurate balancing for modern automotive workshops.
            </Typography>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-5 min-[2100px]:gap-8 min-[3800px]:gap-12 xl:pt-0 pt-4">
            {bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 min-[2100px]:w-8 min-[2100px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-white shrink-0 mt-1" strokeWidth={2} />
                <Typography variant="p" color="white" className="leading-relaxed">
                  <strong>{point.title} </strong>{point.desc}
                </Typography>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col gap-6">
            <Typography variant="p" color="white" className="leading-relaxed ">
              CORMACH Srl wheel balancers deliver precise balancing, reliable performance, and improved workshop efficiency.
            </Typography>
            <div className="w-full flex justify-start">
              <Button text="View Specification" href="#specs" variant="secondary" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Wheel;
