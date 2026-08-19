import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Product360() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moto/depa/bg.png')" }}
    >
      
      
      <div className="custom-container relative z-10 px-6 lg:px-12 xl:px-16 text-center">
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
           <h2 className="section-title oswald font-semibold text-[#ffffff]">
            360° Product Experience
          </h2>
          <p className="rubik section-text text-white leading-relaxed">
            Explore DEPA products through an interactive 360° experience, offering a closer look at the precision engineering, advanced design, innovative technology, and exceptional quality behind our ride control solutions.
          </p>
        </div>

     
          <div className="max-w-7xl mx-auto relative w-full aspect-video bg-white rounded-4xl overflow-hidden flex items-center justify-center">
            {/* The actual 360 player */}
            <div className="absolute inset-0 z-0 bg-white">
               <DynamicVideoPlayer type="360" />
            </div>
            
           
          </div>
        </div>
    </section>
  );
}
