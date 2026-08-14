"use client";

import React from "react";
import Typography from "./Typography";
import { Globe, Headset, FileText, Clock } from "lucide-react";

const AfterSales = () => {
  const features = [
    {
      title: "Multi Brand Diagnostics",
      desc: "Support available across 85+ countries.",
      icon: (
        <div className="w-16 h-16 min-[2100px]:w-20 min-[2100px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full border border-primary flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-10 h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 text-primary">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path d="M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )
    },
    {
      title: "Expert Support",
      desc: "Qualified technical assistance whenever you need it.",
      icon: (
        <div className="w-16 h-16 min-[2100px]:w-20 min-[2100px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full border border-primary flex items-center justify-center shrink-0">
          <Headset className="w-10 h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 text-primary" strokeWidth={2} />
        </div>
      )
    },
    {
      title: "Product Knowledge",
      desc: "Guidance, information and training for optimal performance.",
      icon: (
        <div className="w-16 h-16 min-[2100px]:w-20 min-[2100px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full border border-primary flex items-center justify-center shrink-0">
          <FileText className="w-10 h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 text-primary" strokeWidth={2} />
        </div>
      )
    },
    {
      title: "Rapid Response",
      desc: "Fast solutions to minimize downtime.",
      icon: (
        <div className="w-16 h-16 min-[2100px]:w-20 min-[2100px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full border border-primary flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-10 h-10 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 text-primary">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <polyline points="12 6 12 12 16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="after-sales" className="w-full pt-16 pb-16 md:pb-24 xl:pb-32 min-[2100px]:pt-24 min-[2100px]:pb-48 min-[3800px]:pt-32 min-[3800px]:pb-64 bg-white overflow-visible">
      <div className="flex flex-col gap-8 md:gap-10 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center w-full">

        {/* Header Section */}
        <div className="custom-container flex flex-col gap-4 min-[3800px]:gap-8 text-center items-center w-full max-w-[95%] xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            After sales
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base min-[2100px]:text-lg min-[3800px]:text-2xl mt-2">
            CEMB provides its customers with qualified and timely customer service, supported by an active network in more than 85 countries around the world. Our points of contact are available to provide technical support, information and intervention on CEMB products and solutions, guaranteeing competence and rapid response.
          </Typography>
        </div>

        {/* Image and Overlapping Box */}
        <div className="relative w-full mt-4 min-[3800px]:mt-8 flex flex-col md:block">
          <div className="w-full h-[250px] sm:h-[400px] lg:h-[500px] min-[2100px]:h-[700px] min-[3800px]:h-[1000px]">
            <img src="/moto/cemb/bg.png" alt="Diagnostics Screen" className="w-full h-full object-cover" />
          </div>

          <div className="w-full relative md:absolute md:bottom-0 md:left-0 md:translate-y-1/2 px-4 lg:px-8 -mt-16 sm:-mt-24 md:mt-0 z-10">
            <div className="custom-container mx-auto">
              <div
                className="bg-white border border-primary rounded-xl min-[3800px]:rounded-3xl shadow-xl flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 py-6 min-[3800px]:py-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-4 p-4 lg:px-6 min-[3800px]:px-10 min-[3800px]:gap-6 ${
                      index === 1 ? 'border-t border-primary md:border-t-0 md:border-l xl:border-l' :
                      index === 2 ? 'border-t border-primary md:border-t xl:border-t-0 xl:border-l' :
                      index === 3 ? 'border-t border-primary md:border-l md:border-t xl:border-t-0 xl:border-l' : ''
                    }`}
                  >
                    {feature.icon}
                    <div className="flex flex-col gap-1 min-[3800px]:gap-3">
                      <Typography variant="h4" color="dark" className="font-bold text-sm lg:text-sm min-[2100px]:text-base min-[3800px]:text-xl leading-tight">
                        {feature.title}
                      </Typography>
                      <Typography variant="p" color="muted" className="leading-snug text-xs lg:text-sm min-[2100px]:text-sm min-[3800px]:text-lg">
                        {feature.desc}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AfterSales;
