import React from "react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#0A0D36] flex flex-col justify-end overflow-hidden pb-20 md:pb-32 lg:pb-30">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10 w-full">
        <div className="max-w-[600px]">
          <h1
            className="text-white text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold leading-[1.1] mb-8 bricolage-font"
            data-aos="fade-up"
          >
            Advanced Solutions for Reliable Performance
          </h1>

          <button
            className="border border-white text-white rounded-[10px] px-9 py-3.5 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-semibold hover:bg-white hover:text-[#0A0D36] transition-colors inter-font"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore Our Products
          </button>
        </div>
      </Container>
    </section>
  );
}
