import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Quality() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moto/depa/bg1.png')" }}
    >

      
      <div className="custom-container relative z-10 px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Video Placeholder */}
          <div className="w-full order-2 xl:order-1">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="absolute inset-0 z-0 ">
                 <DynamicVideoPlayer type="short-2" />
               </div>
               
             
            </div>
          </div>

          {/* Right Text Content */}
          <div className="space-y-8 order-1 xl:order-2">
              <h2 className="section-title oswald font-semibold text-[#ffffff]">
              Quality You Can Trust
            </h2>
            
            <div className="space-y-6">
              <p className="rubik text-white section-text leading-relaxed">
                DEPA is committed to delivering high-quality, reliable, and durable remanufactured automotive parts that meet demanding industry standards. To ensure consistent quality and customer confidence, DEPA is certified to ISO 9001:2015 and IATF 16949, covering its manufacturing and distribution processes. These standards support a controlled and systematic approach to quality across every stage, from receiving and evaluating used components to the final preparation of remanufactured parts for delivery.
              </p>
              
              <p className="rubik text-white  section-text leading-relaxed">
                Every part undergoes a rigorous remanufacturing and quality control process, starting with careful identification, dismantling, cleaning, and inspection. Worn or damaged components are repaired or replaced using controlled processes. Before shipment, each part is thoroughly inspected and tested to ensure reliable performance, durability, and quality comparable to OE standards.
              </p>
            </div>

            <div className="pt-2">
              <Button text="View Our Process" icon={<ArrowRight size={18} />} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
