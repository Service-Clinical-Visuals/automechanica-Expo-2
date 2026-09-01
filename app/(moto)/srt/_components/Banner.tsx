"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const Banner = () => {
  return (
   
        <section className="w-full pt-[90px] md:pt-[100px] xl:pt-[110px] ">
      <div className="custom-container">
       
        {/* Banner Container */}
        <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-[12px] xl:rounded-[24px] flex flex-col justify-end pb-12 md:pb-20 xl:pb-24 px-6 md:px-12 xl:px-20" data-aos="zoom-in" data-aos-delay="100">
          
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full z-0">
             <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
            
          </div>
          
          {/* Content */}
          <div className="relative z-20 w-full">
            <div className="grid grid-cols-1 gap-6 items-center">
                 <div className="space-y-4 md:space-y-6 max-w-2xl">
                   <h1 className="banner-title exo2 font-semibold text-white">
                     SRT Gear Industry
                   </h1>

                  <p className="oxanium section-text leading-relaxed text-gray-200">
                    SRT Gear Industry, pioneering precision engineering and top-quality products for 36 years, delivers excellence globally.
                  </p>

                  <div>
                     <Button 
                       text="Discover SRT Gear Industry" 
                       className="mt-4 md:mt-6"
                     />
                   </div>
                </div>
            </div>     
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Banner;
