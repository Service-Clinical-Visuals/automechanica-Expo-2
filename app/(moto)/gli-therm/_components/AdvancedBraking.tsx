import React from "react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AdvancedBraking() {
  return (
    <section className="py-16 md:py-24 bg-[#FCF8F8] relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at -10% 50%, #F14646 0%, transparent 50%), radial-gradient(circle at 110% 50%, #F14646 0%, transparent 50%)' }}></div>
      <Container className="relative z-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="col-span-1 lg:col-span-5" data-aos="fade-right">
              <h4 className="text-[#F14646] font-bold text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-3 bricolage-font">
                Advanced Braking Solutions
              </h4>
              <h2 className="text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold text-[#111111] leading-tight mb-6 bricolage-font">
                Consistent Braking, Component Protection & Thermal Stability
              </h2>
              <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-6 w-full lg:w-[85%] inter-font">
                GLICAR DOT-4 is formulated to support dependable braking and clutch operation across diverse driving conditions. Made using primary raw materials and advanced additives, it combines a high boiling point with low-temperature fluidity and effective corrosion protection. Its ready-to-use formulation requires no dilution, making it a practical solution for vehicles and equipment that specify DOT-4 brake fluid.
              </p>
              <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-8 w-full lg:w-[85%] inter-font">
                GLITHERM DOT 4 brake fluid offers a minimum dry boiling point of 230°C and reliable fluidity down to -40°C, meeting PN-C-40005, FMVSS 116, ISO 4925, and SAE J1704 requirements.
              </p>

              <button className="border border-[#F14646] text-[#F14646] bg-white rounded-[10px] px-8 py-3.5 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-semibold hover:bg-[#F14646] hover:text-white transition-colors inter-font">
                View Technical Details
              </button>
            </div>

            {/* Right Video */}
            <div className="col-span-1 lg:col-span-7" data-aos="fade-left" data-aos-delay="100">
              <div className="w-full aspect-[16/9] bg-gray-200/60 rounded-sm flex items-center justify-center relative overflow-hidden shadow-xl border border-gray-300">
                <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
