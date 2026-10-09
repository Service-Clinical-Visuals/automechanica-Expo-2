import React from "react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PrecisionFluid() {
  return (
    <section className="w-full bg-white relative">
      {/* Top half red background */}
      <div className="absolute top-0 left-0 w-full h-[55%] md:h-[60%] lg:h-[50%] bg-[#EB434B] z-0" />

      <Container className="relative z-10 py-16 md:py-20 lg:py-24">
        <div className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

            {/* Left Column: Video */}
            <div className="col-span-1 w-full h-full lg:col-span-6 flex items-center justify-center relative">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right Column: Content */}
            <div className="col-span-1 lg:col-span-6 flex flex-col">

              {/* Top part (Red Background area) */}
              <div className="bg-[#EB434B] p-10 md:p-14 lg:p-16 flex flex-col justify-center min-h-[250px]">
                <h4 className="text-white font-bold text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-3 bricolage-font">
                  Precision Brake Fluid
                </h4>
                <h2 className="text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold text-white leading-tight bricolage-font">
                  Engineered Hydraulic Braking Performance for Demanding Conditions and Temperatures
                </h2>
              </div>

              {/* Bottom part (White Background area) */}
              <div className="bg-white p-10 md:p-14 lg:p-16 flex flex-col justify-center min-h-[300px]">
                <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-6 w-full lg:w-[85%] inter-font">
                  GLICAR DOT-4 brake fluid delivers dependable performance for hydraulic braking and clutch systems across a wide range of compatible vehicles. Its carefully developed formulation provides a minimum boiling point of 230°C, supports reliable operation in cold conditions, and helps protect system components against corrosion and foam formation. Ready to use without dilution, it meets recognized industry standards for dependable everyday performance.
                </p>
                <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-10 w-full lg:w-[85%] inter-font">
                  GLITHERM DOT 4 brake fluid provides reliable braking and corrosion protection for compatible vehicles and hydraulic clutch systems.
                </p>

                <div className="mt-auto">
                  <button className="border border-[#EB434B] text-[#EB434B] rounded-[10px] px-8 py-3.5 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-semibold hover:bg-[#EB434B] hover:text-white transition-colors inter-font">
                    Explore Product Specifications
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
