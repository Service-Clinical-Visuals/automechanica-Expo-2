import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Quality() {
  return (
    <section className="py-24 bg-white" id="quality">
      <div className="custom-container px-6 xl:px-12 text-center">
       <h2 className="exo2 section-title font-bold text-black mb-6">
          Quality Built Into Every Spark
        </h2>
        <p className="inter section-text text-black max-w-7xl mx-auto mb-16 leading-relaxed">
          SVAC maintains strict quality controls throughout its production processes to ensure reliable, consistent, and durable automotive products. From material selection to final inspection, every stage is carefully monitored to meet demanding industry and OE requirements.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10">
          
          {/* Card 1 */}
          <div className="group relative rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] cursor-pointer">
            <img 
              src="/moto/avortex/b1.png" 
              alt="SVAC Glow Plugs" 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#000000]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 xl:p-10 text-left">
               <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="exo2 card-title font-semibold text-white mb-2">Spark plug</h3>
                  <span className="inter text-white text-[15px] inline-flex items-center gap-1">
                     <span className="underline underline-offset-4 decoration-white/70">View</span>
                     <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </span>
               </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] cursor-pointer">
            <img 
              src="/moto/avortex/b2.png" 
              alt="SVAC Brake Hose" 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#000000]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 xl:p-10 text-left">
               <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="exo2 card-title font-semibold text-white mb-2">Brake Hose</h3>
                  <span className="inter text-white text-[15px] inline-flex items-center gap-1">
                     <span className="underline underline-offset-4 decoration-white/70">View</span>
                     <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
