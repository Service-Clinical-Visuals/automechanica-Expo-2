import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function News() {
  const newsData = [
    {
      id: 1,
      image: "/moto/depa/n1.png",
      date: "19 Jun 2026",
      title: "Autodistribution Rembaud Trade Fair",
      desc: "Depa is here! This is a great opportunity for our company to showcase our product range and discuss the challenges and unique aspects of the renovation industry! Thank you to our partner for their trust!",
    },
    {
      id: 2,
      image: "/moto/depa/n2.png",
      date: "24 May 2025",
      title: "AGRA Open Days",
      desc: "We are pleased to join AGRA Open Days, connecting with automotive aftermarket professionals to showcase our remanufactured parts and promote sustainable, responsible vehicle repair.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="news">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-6xl mx-auto mb-16 space-y-4">
          <h2 className="section-title oswald font-semibold text-[#272727]">
            Latest News & Updates
          </h2>
          <p className="rubik section-text text-[#4b5563] leading-relaxed max-w-6xl mx-auto">
            Stay up to date with the latest news, developments, and updates from DEPA. Discover our newest products, remanufacturing innovations, industry activities, and company milestones as we continue to deliver reliable and sustainable automotive solutions.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 lg:gap-10 items-center justify-center">
          {newsData.map((news) => (
            <div 
              key={news.id}
              className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-auto sm:w-[45%] xl:w-[40%] shrink-0">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-center">
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar className="w-[18px] h-[18px]" strokeWidth={2} />
                  <span className="rubik section-text font-normal text-[#4b5563]">{news.date}</span>
                </div>
                
                <h3 className="oswald font-semibold card-title text-[#272727] mb-4 leading-snug">
                  {news.title}
                </h3>
                
                <p className="rubik text-[#4b5563] section-text mb-8">
                  {news.desc}
                </p>
                
                <div className="flex justify-end">
                  <button className="rubik font-semibold text-[#be1622] hover:text-red-800 transition-colors section-text underline underline-offset-2 decoration-2 decoration-[#be1622]/50 hover:decoration-[#be1622]">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
