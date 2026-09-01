import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Settings, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function PrecisionProcess() {
  return (
    <section className="py-24 bg-[#121420]">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        
        {/* Top Content: Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center mb-16">
          
          {/* Left Text & Cards */}
          <div className="xl:col-span-5 space-y-8">
            <div className="space-y-5">
              <h2 className="section-title oswald font-semibold text-[#ffffff]">
                Precision Remanufacturing, Built to Perform
              </h2>
               <p className="rubik section-text text-white leading-relaxed">
                At DEPA, automotive parts are remanufactured through carefully controlled processes designed to restore performance, reliability, and quality. From detailed inspection and component renewal to precision remanufacturing, rigorous testing, and final quality checks, every part undergoes a thorough process to ensure dependable performance and long-lasting value. By combining technical expertise, advanced processes, and strict quality control, DEPA delivers remanufactured parts that meet the demanding standards of today's automotive aftermarket.
              </p>
            </div>

            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="flex gap-5 items-center bg-white rounded-xl p-5 shadow-sm">
                <div className="shrink-0 flex items-center justify-center">
                  <img src="/moto/depa/setting.png" alt="setting" className="w-12 h-12" />
                </div>
                 <p className="rubik section-text text-[#4b5563] leading-relaxed">
                  Parts are carefully inspected, renewed, and remanufactured using controlled processes and OE-based specifications.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5 items-center bg-white rounded-xl p-5 shadow-sm">
                <div className="shrink-0 flex items-center justify-center">
                  <img src="/moto/depa/tick.png" alt="tick" className="w-12 h-12" />
                </div>
                 <p className="rubik section-text text-[#4b5563] leading-relaxed">
                  Every remanufactured part is rigorously tested to ensure reliable performance and consistent quality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Video Placeholder */}
          <div className="xl:col-span-7 w-full">
            <div className="relative w-full aspect-video  rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
               <div className="absolute inset-0 z-0 ">
                 <DynamicVideoPlayer type="short-1" />
               </div>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-10 opacity-60" />

        {/* Bottom Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
           <p className="rubik section-text text-white leading-relaxed max-w-5xl">
            At DEPA, every remanufactured part reflects our commitment to quality, reliability, and sustainability. Through expert workmanship, advanced remanufacturing processes, and strict quality controls, we restore automotive components to dependable performance. Our focus on precision and consistency ensures lasting value for customers and a more sustainable automotive aftermarket.
          </p>
          <Button text="View Our Process" icon={<ArrowRight size={18} />} className="shrink-0" />
        </div>

      </div>
    </section>
  );
}
