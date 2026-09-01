"use client";

import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Experience() {
  return (
    <section className="relative w-full py-12 md:py-16 xl:py-20 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-60">
        <img
          src="/moto/ytt/bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 custom-container">
        
        {/* Mobile & Tablet Header (Visible up to 1050px) */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex [@media(min-width:1051px)]:hidden flex-col items-center text-center gap-3 mb-6"
        >
          <span className="eyebrow font-bold text-[#DA0812]">
            The YTT Story
          </span>
          <h2 className="section-title font-bold text-[#202020] leading-tight">
            Control Arms That Redefine Strength And Driving Stability
          </h2>
        </div>

        <div className="flex flex-col [@media(min-width:1051px)]:flex-row [@media(min-width:1051px)]:items-center gap-8 xl:gap-10">
          
          {/* Video Section */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="relative w-full [@media(min-width:1051px)]:flex-1 aspect-video rounded-[5px] overflow-hidden bg-[#f5f5f5]"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Side Content Container */}
          <div className="w-full [@media(min-width:1051px)]:flex-1 flex flex-col items-center text-center [@media(min-width:1051px)]:items-start [@media(min-width:1051px)]:text-left justify-center gap-6">
            
            {/* Desktop Header (Visible above 1050px) */}
            <div 
              data-aos="fade-left"
              data-aos-duration="700"
              className="hidden [@media(min-width:1051px)]:flex flex-col gap-3"
            >
              <span className="eyebrow font-bold text-[#DA0812]">
                The YTT Story
              </span>
              <h2 className="section-title font-bold text-[#202020] leading-tight [@media(min-width:1250px)_and_(max-width:1450px)]:text-[26px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[34px]">
                Control Arms That Redefine Strength And Driving Stability
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5">
              <p 
                data-aos="fade-left"
                data-aos-delay="200"
                className="section-text font-normal text-[#404040] [@media(min-width:1250px)_and_(max-width:1450px)]:text-[14px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[22px]"
              >
                Engineered to deliver exceptional suspension performance,
                our control arms combine high-strength metal construction
                with premium rubber-to-metal technology for superior
                durability and precise wheel control.
              </p>
              <p 
                data-aos="fade-left"
                data-aos-delay="300"
                className="section-text font-normal text-[#404040] [@media(min-width:1250px)_and_(max-width:1450px)]:text-[14px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[22px]"
              >
                Designed to withstand demanding road conditions, they help
                maintain accurate suspension geometry, improve steering
                response, reduce vibration, and enhance overall driving
                comfort.
              </p>
              <p 
                data-aos="fade-left"
                data-aos-delay="400"
                className="section-text font-normal text-[#404040] [@media(min-width:1250px)_and_(max-width:1450px)]:text-[14px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[22px]"
              >
                Manufactured with advanced production techniques and
                rigorous quality standards, every control arm provides
                dependable performance for a wide range of passenger
                vehicles and light commercial applications.
              </p>
            </div>

            {/* Button */}
            <div 
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex justify-center [@media(min-width:1051px)]:justify-start w-full"
            >
              <Button variant="primary">Choose Your Fit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}