"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "./Container";

// Each milestone alternates which side of the timeline its image/text sits on:
// "top"    -> image + text above the line, year below
// "bottom" -> year above the line, image + text below
const milestones = [
  {
    year: "1965",
    position: "top",
    text: "The adventure began with the purchase of a shop in the Old Industrial Zone.",
    image: "/moto/yenmak/history/1.png",
  },
  {
    year: "1976",
    position: "bottom",
    text: "Our Factory construction has started in Konya 1st organized Industrail zone",
    image: "/moto/yenmak/history/2.png",
  },
  {
    year: "1979",
    position: "top",
    text: "Engine cylinder liner manufacturing facility established.",
    image: "/moto/yenmak/history/3.png",
  },
  {
    year: "1982",
    position: "bottom",
    text: "A metallurgical quality control laboratory has been established.",
    image: "/moto/yenmak/history/4.png",
  },
  {
    year: "1984",
    position: "top",
    text: "Our Products have become preffered in Global markets.",
    image: "/moto/yenmak/history/5.png",
  },
  {
    year: "1995",
    position: "bottom",
    text: "Piston & Piston Pin factory started operations.",
    image: "/moto/yenmak/history/6.png",
  },
  {
    year: "1996",
    position: "top",
    text: "An air-cooled jacket manufacturing facility has been established.",
    image: "/moto/yenmak/history/7.png",
  },
  {
    year: "1997",
    position: "bottom",
    text: "Piston rings, valves, and gaskets have also started to be offered to the market.",
    image: "/moto/yenmak/history/8.png",
  },
  {
    year: "1998",
    position: "top",
    text: "The domestic and international trade office has moved to Istanbul, the center of trade.",
    image: "/moto/yenmak/history/9.png",
  },
  {
    year: "2000",
    position: "bottom",
    text: "We established ourself in the engine bearing spare parts sector.",
    image: "/moto/yenmak/history/10.png",
  },
  {
    year: "2002",
    position: "top",
    text: "We have reached a point where we export to 36 countries.",
    image: "/moto/yenmak/history/11.png",
  },
  {
    year: "2008",
    position: "bottom",
    text: "Our headquarters and logistics/shipping center have commenced operations at our new location.",
    image: "/moto/yenmak/history/12.png",
  },
  {
    year: "2009",
    position: "top",
    text: "The international ISO/TS 16949 certificate has been obtained.",
    image: "/moto/yenmak/history/13.png",
  },
  {
    year: "Today",
    position: "bottom",
    text: "The number of countries to which we export has increased to 73.",
    image: "/moto/yenmak/history/14.png",
  },
];

export default function History() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="history">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-[80%] mx-auto mb-4" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-3">From Yesterday to Today</h2>
          <span className="block w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="content">
            From a small workshop established in 1965 to a global manufacturer of engine
            components, Yenmak has continuously evolved through innovation, advanced
            manufacturing, and a strong commitment to quality. Today, its products reach markets
            across five continents, reflecting decades of engineering experience and growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12" data-aos="fade-up">
          {/* Continuous horizontal line, aligned with the dots */}
          <div className="absolute left-0 right-0 top-[300px] my-5 h-[3px] bg-[#D9D9D9]" />

          {/* Nav arrows */}
          <button
            type="button"
            aria-label="Previous milestones"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute -left-4 top-[300px] -translate-y-1/2 -translate-x-full z-10 w-10 h-10 rounded-full border border-primary items-center justify-center text-primary bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowLeft size={20} strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next milestones"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute -right-4 top-[300px] -translate-y-1/2 translate-x-full z-10 w-10 h-10 rounded-full border border-primary items-center justify-center text-primary bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowRight size={20} strokeWidth={2} />
          </button>

          <Swiper
            spaceBetween={8}
            slidesPerView="auto"
            grabCursor
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="overflow-visible!"
          >
            {milestones.map((item) => (
              <SwiperSlide key={item.year + item.text} className="w-45!">
                <div className="flex flex-col items-center px-2 py-5 pb-20">
                  {/* Upper zone: image+text for "top" items, year for "bottom" items */}
                  <div className="h-[300px] flex flex-col items-center justify-end pb-4">
                    {item.position === "top" ? (
                      <div className="flex flex-col items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.text}
                          className="min-w-[148px] h-auto object-contain"
                        />
                        <p className="text-xs text-center text-[#1A1A1A] max-w-40 leading-snug">
                          {item.text}
                        </p>
                      </div>
                    ) : (
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                    )}
                  </div>

                  {/* Dot on the line */}
                  <span className="w-3 h-3 rounded-full -mt-1.5 bg-primary shrink-0 relative z-10" />

                  {/* Lower zone: year for "top" items, image+text for "bottom" items */}
                  <div className="h-45 flex flex-col items-center justify-start pt-4">
                    {item.position === "top" ? (
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <p className="text-xs text-center text-[#1A1A1A] max-w-40 leading-snug">
                          {item.text}
                        </p>
                        <img
                          src={item.image}
                          alt={item.text}
                          className="min-w-[148px] h-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
