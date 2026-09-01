"use client";

import { ArrowRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const features = [
  "Thousands of engineered components covering today's most demanding vehicle applications.",
  "Complete vehicle system solutions from suspension to engine cooling technologies.",
];

export default function Destination() {
  return (
    <section className="relative w-full py-12 md:py-16 xl:py-20 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-50">
        <img
          src="/moto/ytt/bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 custom-container">
        {/* Mobile & Tablet Header (Visible up to 1050px) */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex [@media(min-width:1051px)]:hidden flex-col items-center text-center gap-3 mb-6"
        >
          <span className="eyebrow font-bold text-[#DA0812]">
            The Automotive Spectrum
          </span>
          <h2 className="section-title font-bold text-[#202020] leading-tight">
            One Destination For Every Critical Vehicle Component
          </h2>
        </div>

        <div className="flex flex-col [@media(min-width:1051px)]:flex-row [@media(min-width:1051px)]:items-center gap-8 xl:gap-10">
          {/* Video with Slide In */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="relative w-full [@media(min-width:1051px)]:flex-1 aspect-video rounded-[5px] overflow-hidden bg-[#f5f5f5]"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full [@media(min-width:1051px)]:flex-1 flex flex-col items-center text-center [@media(min-width:1051px)]:items-start [@media(min-width:1051px)]:text-left justify-center gap-6">
            {/* Desktop Header (Visible above 1050px) */}
            <div 
              data-aos="fade-left"
              data-aos-duration="700"
              className="hidden [@media(min-width:1051px)]:flex flex-col gap-3"
            >
              <span className="eyebrow font-bold text-[#DA0812]">
                The Automotive Spectrum
              </span>
              <h2 className="section-title font-bold text-[#202020] leading-tight [@media(min-width:1250px)_and_(max-width:1450px)]:text-[26px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[34px]">
                One Destination For Every Critical Vehicle Component
              </h2>
            </div>

            <p 
              data-aos="fade-left"
              data-aos-delay="200"
              className="section-text font-normal text-[#404040] [@media(min-width:1250px)_and_(max-width:1450px)]:text-[14px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[22px]"
            >
              Built to support every stage of vehicle performance, our
              extensive product portfolio combines innovative design,
              precision manufacturing, and dependable quality across
              multiple automotive systems. From suspension and steering
              components to cooling, air management, rubber-to-metal
              technologies, and fluid transfer solutions, every part is
              developed to deliver exceptional fit, durability, and
              long-term reliability. With thousands of references
              continuously expanding, we help aftermarket professionals
              source smarter, install faster, and drive with confidence.
            </p>

            <div className="flex flex-col gap-4 text-left w-full">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  data-aos="fade-left"
                  data-aos-delay={300 + index * 100}
                  className="flex items-start justify-center [@media(min-width:1051px)]:justify-start gap-3"
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    color="#E30613"
                    className="flex-shrink-0 mt-1"
                  />
                  <p className="section-text font-normal text-[#404040] [@media(min-width:1250px)_and_(max-width:1450px)]:text-[14px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[22px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="500" 
              className="flex justify-center [@media(min-width:1051px)]:justify-start w-full"
            >
              <Button variant="primary">Explore Every Component</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}