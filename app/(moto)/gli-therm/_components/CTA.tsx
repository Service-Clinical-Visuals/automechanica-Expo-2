import React from "react";
import Container from "./Container";

export default function CTA() {
  return (
    <section className="py-20 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(92.02deg, #FF696E 0%, #EE464B 100%)' }}>
      {/* Background texture or subtle gradient */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwaDh2OEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCA0aDhNNCBwdjgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')]"></div>

      <Container className="relative z-10">
        <div className="text-center max-w-[85%] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold text-white leading-tight mb-6 bricolage-font" data-aos="fade-up">
            Let's Connect and Build Lasting Partnerships
          </h2>
          <p className="text-white/90 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-10 w-full lg:w-[85%] mx-auto inter-font" data-aos="fade-up" data-aos-delay="100">
            Have questions about our products or services? Our team is ready to help you find the right chemical solutions for your business. Get in touch with GLITHERM for expert guidance, product information, and tailored support.
          </p>

          <button
            className="border border-white/60 text-white rounded-[10px] px-9 py-3.5 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-semibold hover:bg-white hover:text-[#DD3C41] transition-colors inter-font"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore Product Specifications
          </button>
        </div>
      </Container>
    </section>
  );
}
