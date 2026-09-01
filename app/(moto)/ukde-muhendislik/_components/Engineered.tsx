import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { Settings } from "lucide-react";

export default function Engineered() {
  const features = [
    { title: "Reliable Ignition", desc: "Consistent starting and ignition performance." },
    { title: "Efficient Combustion", desc: "Supports optimal fuel combustion and engine efficiency." },
    { title: "High Durability", desc: "Built to withstand demanding engine conditions." },
    { title: "Stable Performance", desc: "Delivers dependable performance over time." }
  ];

  return (
    <section className="py-24 bg-[#18181b]" id="engineered">
      <div className="custom-container px-6 xl:px-12">
        <div className="flex flex-col xl:grid xl:grid-cols-12  items-center gap-8 xl:gap-10">
          
          {/* Left Video */}
          <div className="w-full order-2 xl:order-1 xl:col-span-6  aspect-video  relative rounded-lg overflow-hidden flex items-center justify-center">
             <DynamicVideoPlayer type="360" />
            
          </div>

          {/* Right Content */}
          <div className="w-full order-1 xl:order-2 xl:col-span-6  space-y-6 mt-8 xl:mt-0">
             <h2 className="exo2 section-title font-bold text-white mb-6">
              Engineered for Reliable Ignition
            </h2>
            
            <p className="inter section-text text-white space-y-6  leading-relaxed">
              SVAC spark plugs are designed to provide dependable ignition, efficient combustion, and consistent engine performance. Manufactured with carefully selected materials and controlled production processes, they deliver reliable operation across a wide range of automotive applications.
            </p>

            <div className="border border-white rounded-xl p-6 xl:p-8 space-y-4 bg-white/[0.02]">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                 <img className="w-5 h-5 mt-1.5" src="/moto/ukde-muhendislik/stting.png" alt="setting" />
                  <p className="inter section-text leading-relaxed text-white">
                    <strong className="text-white font-semibold">{feature.title}</strong> — {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button>
                View Product
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
