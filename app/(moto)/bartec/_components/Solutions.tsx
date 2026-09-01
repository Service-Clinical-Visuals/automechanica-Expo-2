"use client";

import { useState, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const categories = [
  {
    key: "sensors",
    label: "TPMS Sensors",
    items: [
      { image: "/moto/bartec/solutions/sensors/1.png", name: "Rite-Sensor® 315/433MHz Programmable TPMS Sensor w/two Valve Stems" },
      { image: "/moto/bartec/solutions/sensors/2.png", name: "Rite-Sensor Blue® with Silver Stem RS-3000" },
      { image: "/moto/bartec/solutions/sensors/3.png", name: "Rite-Sensor Blue® with Black Stem RS-3000B" },
      { image: "/moto/bartec/solutions/sensors/4.png", name: "Rite-Sensor Blue® with Graphite Stem RS-3000G" },
      { image: "/moto/bartec/solutions/sensors/5.png", name: "Rite-Sensor® 315/433MHz Programmable TPMS Sensor with Rubber Valve Stems 10 Pack" },
      { image: "/moto/bartec/solutions/sensors/6.png", name: "Rite-Sensor® 315/433MHz Programmable TPMS Sensor w/two Valve Stems 10 Pack" },
    ],
  },
  {
    key: "servicekit",
    label: "TPMS Service Kits",
    items: [
      { image: "/moto/bartec/solutions/servicekit/1.png", name: "Box of 15, TPMS Service Kit - Cadillac, Chevy, Chrysler, Nissan B-8010" },
      { image: "/moto/bartec/solutions/servicekit/2.png", name: "Box of 15, TPMS Service Kit - Buick, Cadillac, Chevy, GMC, Saab B-8020" },
      { image: "/moto/bartec/solutions/servicekit/3.png", name: "Box of 15, TPMS Service Kit - Ford, Lincoln, Mercury B-8040" },
      { image: "/moto/bartec/solutions/servicekit/4.png", name: "Box of 15, TPMS Service Kit - Buick, Chevy, Chrysler, Dodge B-8080" },
      { image: "/moto/bartec/solutions/servicekit/5.png", name: "Box of 10, TPMS Service Kit - Acura/Honda w/TRW Long Valve B-9040" },
      { image: "/moto/bartec/solutions/servicekit/6.png", name: "Box of 10, TPMS Service Kit - Replacement valve stem for Conti TG1B B-9010" },
    ],
  },
  {
    key: "tools",
    label: "TPMS Tools",
    items: [
      { image: "/moto/bartec/solutions/tools/1.png", name: "Tread Rite - Tread Depth Tool BSTTDR100" },
    ],
  },
];

const tabs = [...categories.map(({ key, label }) => ({ key, label })), { key: "all", label: "View All" }];

const SLIDES_PER_VIEW_XL = 4;

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("sensors");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const activeItems = useMemo(() => {
    if (activeTab === "all") return categories.flatMap((c) => c.items);
    return categories.find((c) => c.key === activeTab)?.items ?? [];
  }, [activeTab]);

  const totalPages = Math.max(1, Math.ceil(activeItems.length / SLIDES_PER_VIEW_XL));
  const canLoop = activeItems.length > SLIDES_PER_VIEW_XL;

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    setActiveIndex(0);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-white" id="products">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-[75%] mx-auto mb-10" data-aos="fade-up">
          <p className="text-primary font-bold mb-2">Smart TPMS Essentials</p>
          <h2 className="heading mb-4">Complete TPMS Solutions for Every Service Requirement</h2>
          <p className="content">
            Explore our comprehensive range of TPMS products, including service kits,
            programmable sensors, replacement valves, diagnostic tools, and essential
            accessories&mdash;all engineered for reliable performance, precise fitment, and
            professional tire service.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" data-aos="fade-up">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleTabClick(tab.key)}
                className={`font-bold text-sm px-5 py-2.5 rounded-md border transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-[#D9D9D9] text-[#555555] hover:border-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Carousel */}
        <div className="relative group mb-8" data-aos="fade-up">
          {/* Prev Arrow */}
          <button
            type="button"
            aria-label="Previous products"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex xl:hidden absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary items-center justify-center text-primary bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowLeft size={20} strokeWidth={2} />
          </button>

          <Swiper
            key={activeTab}
            modules={[Navigation]}
            spaceBetween={60}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1280: { slidesPerView: SLIDES_PER_VIEW_XL },
            }}
            loop={canLoop}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-2"
          >
            {activeItems.map((item) => (
              <SwiperSlide key={item.image} className="h-auto">
                <div className="h-full bg-white border border-[#EAEAEA] rounded-lg overflow-hidden flex flex-col">
                  <div className="bg-[#F5F5F5] aspect-square flex items-center justify-center p-8">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-[#1A1A1A] mb-5">{item.name}</h3>
                    <Button
                      text="View Product"
                      href="#"
                      variant="outline"
                      className="mt-auto w-full px-6 py-2.5 text-[15px] font-bold rounded-md"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Arrow */}
          <button
            type="button"
            aria-label="Next products"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex xl:hidden absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary items-center justify-center text-primary bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowRight size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="hidden xl:flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to page ${index + 1}`}
                onClick={() => swiperRef.current?.slideToLoop(index * SLIDES_PER_VIEW_XL)}
                className={`rounded-full transition-all ${
                  Math.floor(activeIndex / SLIDES_PER_VIEW_XL) === index
                    ? "w-2.5 h-2.5 bg-primary"
                    : "w-2 h-2 bg-[#D9D9D9] hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
