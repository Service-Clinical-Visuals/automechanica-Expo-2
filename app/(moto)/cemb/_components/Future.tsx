"use client";

import React from "react";
import Typography from "./Typography";

const Future = () => {
  const cards = [
    {
      title: "Energy that comes from water and the sun",
      desc: "Hydroelectric and solar power fuel most of our factories, reducing fossil fuel use and emissions while generating nearly three times more clean energy than we consume.",
      img: "/moto/cemb/engineer1.png",
    },
    {
      title: "Sustainable and circular production",
      desc: "We use 98% recycled and certified materials, reducing virgin raw material consumption and supporting a circular production process where waste becomes a resource.",
      img: "/moto/cemb/engineer2.png",
    },
    {
      title: "Efficiency, precision, savings",
      desc: "Energy-efficient technologies help reduce CEMB's environmental impact, avoiding 4,566 tons of CO₂ emissions over the past three years.",
      img: "/moto/cemb/engineer3.png",
    }
  ];

  return (
    <section id="sustainability" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-center items-center w-full max-w-[95%] xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Engineering a More Sustainable Future
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base min-[2100px]:text-lg min-[3800px]:text-2xl mt-2">
            Discover how CEMB combines advanced manufacturing with responsible energy use, resource efficiency and continuous improvement.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16 mt-4">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-[60px] min-[3800px]:rounded-br-[100px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/10] overflow-hidden shrink-0">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col p-6 min-[2100px]:p-8 min-[3800px]:p-12 gap-3 flex-1 bg-white">
                <Typography variant="h4" color="dark" className="font-bold">
                  {card.title}
                </Typography>
                
                <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-sm min-[2100px]:text-base min-[3800px]:text-xl mt-1">
                  {card.desc}
                </Typography>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Future;
