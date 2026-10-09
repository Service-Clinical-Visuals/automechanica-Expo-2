import React from "react";
import Container from "./Container";

export default function Solutions() {
  const cards = [
    {
      id: "01",
      title: "Industrial Chemistry",
      description: "Concentrates and antifreeze fluids, as well as other products for heating, solar, cooling, HVAC systems, heat pumps, and more.",
      image: "/moto/gli-therm/our-service1.webp",
      bgColor: "bg-[#276FBA]", // Blue
    },
    {
      id: "02",
      title: "Automotive Chemistry",
      description: "Products designed for passenger cars and trucks to keep them in excellent condition.",
      image: "/moto/gli-therm/our-service2.webp",
      bgColor: "bg-[#E68822]", // Orange
    },
    {
      id: "03",
      title: "Chemical Raw Materials",
      description: "A wide range of diverse chemical raw materials for various applications and industries.",
      image: "/moto/gli-therm/our-service3.webp",
      bgColor: "bg-[#09A588]", // Teal
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h4 className="text-[#F14646] font-bold text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-3 bricolage-font">
            Our Services
          </h4>
          <h2 className="text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold text-[#111111] leading-tight mb-6 bricolage-font">
            Complete Chemical Solutions & Expert Support
          </h2>
          <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed w-full lg:w-[85%] mx-auto mb-16 inter-font">
            From product development and laboratory testing to system filling and fluid diagnostics, GLITHERM delivers specialized services tailored to industrial and automotive requirements. Our expertise, quality-focused approach, and customer-oriented support help businesses maintain operational efficiency, product reliability, and long-term performance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className={`${card.bgColor} rounded-xl overflow-hidden flex flex-col w-full lg:w-1/3 shadow-md text-left transition-transform hover:-translate-y-2 duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Section */}
                <div className="w-full h-[220px] p-4 pb-0">
                  <div className="w-full h-full rounded-t-lg overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 text-white flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-5 bricolage-font">
                    <span className="text-2xl font-bold">{card.id}</span>
                    <div className="h-[1px] bg-white/40 flex-grow max-w-[80px]"></div>
                  </div>
                  
                  <h3 className="text-[24px] 2xl:text-[32px] min-[2000px]:text-[40px] font-bold mb-4 bricolage-font">{card.title}</h3>
                  <p className="text-white/90 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-8 flex-grow inter-font">
                    {card.description}
                  </p>
                  
                  <button className="border border-white/60 text-white rounded-[10px] px-8 py-3.5 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-semibold hover:bg-white hover:text-black transition-colors self-start w-auto inter-font">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
      </Container>
    </section>
  );
}
