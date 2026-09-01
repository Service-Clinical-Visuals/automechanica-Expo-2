import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { Zap, Flame, Wrench } from "lucide-react";

export default function Precision() {
  const features = [
    { icon: <img src="/moto/ukde-muhendislik/i1.png" alt="i1" className="w-9 h-9 mb-4"/>, label: "Reliable Ignition" },
    { icon:<img src="/moto/ukde-muhendislik/i2.png" alt="i1" className="w-9 h-9 mb-4"/>, label: "Efficient Combustion" },
    { icon: <img src="/moto/ukde-muhendislik/i3.png" alt="i1" className="w-9 h-9 mb-4"/>, label: "Robust Construction" }
  ];

  return (
    <section className="py-24 bg-[#141416]" id="precision">
      <div className="custom-container px-6 xl:px-12">
        <div className="flex flex-col xl:grid xl:grid-cols-12  items-center gap-8 xl:gap-10">
          
          {/* Left Content */}
          <div className="w-full xl:col-span-6  space-y-10">
            <div className="space-y-4">
              <h2 className="exo2 section-title font-bold text-white mb-6">
                Precision That Drives Performance
              </h2>
              <div className="max-w-3xl">
              <p className="inter section-text text-white leading-relaxed ">
                Every SVAC spark plug is produced with a focus on quality, durability, and ignition performance.
                Advanced production technologies and continuous quality control help ensure consistent product
                performance and dependable service life.
              </p>
              </div>
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className="bg-white border-2 border-[#ea2227] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_rgba(234,34,39,0.15)] transition-transform hover:-translate-y-1"
                >
                  {feature.icon}
                  <h3 className="exo2 font-semibold text-[#000000] card-title1">
                    {feature.label}
                  </h3>
                </div>
              ))}
            </div>

            <div>
              <Button>
                View Product
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div className="w-full xl:col-span-6  aspect-video  relative rounded-lg overflow-hidden flex items-center justify-center mt-8 xl:mt-0">
             <DynamicVideoPlayer type="short-1" />
             {/* Fallback/Overlay text for the "Video Clip 01" placeholder look */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
                <span className="exo2 font-bold text-white/50 text-2xl tracking-wide bg-black/40 px-6 py-2 rounded-lg backdrop-blur-sm hidden">Video Clip 01</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
