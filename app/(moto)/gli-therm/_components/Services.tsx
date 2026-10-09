import React from "react";
import Container from "./Container";

export default function Services() {
  const services = [
    {
      icon: "/moto/gli-therm/service-i-1.webp",
      text: "Delivery to any location in Poland and worldwide.",
    },
    {
      icon: "/moto/gli-therm/service-i-2.webp",
      text: "System filling service.",
    },
    {
      icon: "/moto/gli-therm/service-i-3.webp",
      text: "Advice in selecting the right product.",
    },
    {
      icon: "/moto/gli-therm/service-i-4.webp",
      text: "Creating private label brands.",
    },
    {
      icon: "/moto/gli-therm/service-i-5.webp",
      text: "Laboratory services and fluid diagnostics.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center w-full mx-auto">
          <h4 className="text-[#F14646] font-bold text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-3 bricolage-font">
            Our Services
          </h4>
          <h2 className="text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold text-[#111111] leading-tight mb-6 bricolage-font">
            Your Success, Our Priority
          </h2>
          <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-12 inter-font w-full lg:w-[85%] mx-auto">
            At GLITHERM, we believe our clients are more than customers — they are our valued partners. Their success drives our commitment to delivering high-quality products, reliable service, and effective chemical solutions tailored to their specific needs. We focus on building long-term relationships through consistent quality, technical expertise, and responsive customer support. By understanding the unique challenges of each client, we strive to provide practical, dependable solutions that enhance operational efficiency, support business growth, and create lasting value for our partners across industries.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {/* Top Row: 3 items */}
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] border border-gray-300 rounded-[10px] p-8 flex flex-col items-center justify-center min-h-[180px] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F14646] hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-[80px] h-[80px] rounded-full border border-black flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-[#F14646]">
                  <img src={service.icon} alt="" className="w-10 h-10 object-contain opacity-80 [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(2405%)_hue-rotate(338deg)_brightness(98%)_contrast(92%)]" />
                </div>
                <p className="text-[#333333] font-semibold text-[24px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-snug inter-font transition-colors duration-300 group-hover:text-[#F14646]">
                  {service.text}
                </p>
              </div>
            ))}

            {/* Bottom Row: 2 items */}
            {services.slice(3, 5).map((service, index) => (
              <div
                key={index + 3}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] border border-gray-300 rounded-[10px] p-8 flex flex-col items-center justify-center min-h-[180px] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F14646] hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={(index + 3) * 100}
              >
                <div className="w-[80px] h-[80px] rounded-full border border-black flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-[#F14646]">
                  <img src={service.icon} alt="" className="w-10 h-10 object-contain opacity-80 [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(2405%)_hue-rotate(338deg)_brightness(98%)_contrast(92%)]" />
                </div>
                <p className="text-[#333333] font-medium text-[24px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-snug inter-font transition-colors duration-300 group-hover:text-[#F14646]">
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          <button className="border border-[#F14646] text-[#F14646] rounded-[10px] px-9 py-3.5 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-semibold hover:bg-[#F14646] hover:text-white transition-colors inter-font" data-aos="fade-up">
            Contact Us
          </button>
        </div>
      </Container>
    </section>
  );
}
