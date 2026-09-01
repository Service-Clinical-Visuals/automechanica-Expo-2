"use client";

import React from "react";
import Button from "./Button";

export default function HumanResources() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
        
            
            
            {/* Main Image */}
            <div className="order-2 xl:order-1 relative z-10 w-full h-full  overflow-hidden">
              <img
                src="/moto/eren/human.png"
                alt="Human Resources"
                className="w-full h-full object-contain"
              />
            </div>
            

          {/* Right Column: Text Content */}
          <div className="order-1 xl:order-2 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
             <h2 className="section-title barlowCondensed font-bold text-[#000000]">
                Human Resources Policy
              </h2>
              <div className="w-12 h-[3px] bg-[var(--color-primary)] flex-shrink-0 mt-2"></div>
            </div>

            <p className="section-text inter leading-relaxed text-[#111111] mb-6">
              Eren Brake has 270 specialized employees. Depending on the minimization of staff circulation, 10% of the staff has been working for the company since it has been established.
            </p>

            <p className="section-text inter leading-relaxed text-[#111111] mb-6">
              That is why all department managers and executives are fully specialized in their own field. Creative projects and techniques of the marketing department harmonize with the experienced sales team in order to concentrate on total customer satisfaction. Minimized reaction speed towards customer demands, maximizes customer satisfaction.
            </p>
            
            <p className="section-text inter leading-relaxed text-[#111111] mb-10">
              The organic structure formed by the sales team and regional dealers takes sales efficiency and reliability to the most possible peak.
            </p>

            <div className="self-start">
              <Button text="Get In Touch" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
