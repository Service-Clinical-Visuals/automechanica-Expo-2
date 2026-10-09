import React from "react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ReliableBraking() {
  return (
    <section className="py-16 md:py-24 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/moto/gli-therm/brake-fluid-bg.webp')" }}>
      <Container className="relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          <h4 className="text-[#F14646] font-bold text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-3 uppercase tracking-wider bricolage-font">
            GLICAR DOT-4 Brake Fluid
          </h4>
          <h2 className="text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold text-[#111111] leading-tight mb-6 bricolage-font">
            Reliable Braking with Thermal Stability
          </h2>
          <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-12 w-full lg:w-[85%] mx-auto inter-font">
            GLICAR DOT-4 is a brake fluid for hydraulic braking and clutch systems requiring DOT-4 specifications. With a minimum boiling point of 230°C, low-temperature fluidity, and corrosion protection, it ensures reliable braking. Ready to use, it requires no dilution and meets international standards.
          </p>

          <div className="w-full aspect-video rounded-xl max-w-6xl mx-auto flex items-center justify-center relative overflow-hidden shadow-lg" data-aos="fade-up">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
