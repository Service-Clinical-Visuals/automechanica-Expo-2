"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "./Container";

const products = [
  { image: "/moto/rased/innovation/1.png", code: "08770" },
  { image: "/moto/rased/innovation/2.png", code: "00260" },
  { image: "/moto/rased/innovation/3.png", code: "09740" },
  { image: "/moto/rased/innovation/4.png", code: "16786" },
];

const SLIDES_PER_VIEW_XL = 4;

export default function Innovation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const totalPages = Math.max(1, Math.ceil(products.length / SLIDES_PER_VIEW_XL));
  const canLoop = products.length > SLIDES_PER_VIEW_XL;

  return (
    <section className="relative w-full py-16 md:py-24 bg-white" id="innovation">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-[80%] mx-auto mb-14" data-aos="fade-up">
          <p className="text-primary font-bold mb-2">Latest Innovation</p>
          <h2 className="heading mb-4">
            Newly Engineered Components Expanding Our Product Portfolio
          </h2>
          <p className="content">
            Stay ahead with the latest additions to our growing range of diesel fuel injection
            components. Developed using advanced Italian engineering and precision manufacturing,
            our newly introduced products are designed to meet evolving industry demands, deliver
            superior reliability, and ensure seamless compatibility across modern diesel engine
            systems.
          </p>
        </div>

        {/* Product Slider */}
        <div className="relative group" data-aos="fade-up">
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
            modules={[Navigation]}
            spaceBetween={24}
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
            {products.map((product) => (
              <SwiperSlide key={product.code} className="h-auto">
                <div className="group/card relative h-full bg-white border border-[#EAEAEA] rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={`SPACO Diesel component ${product.code}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-[#F7DAD0] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 mix-blend-multiply pointer-events-none" />
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
          <div className="hidden xl:flex items-center justify-center gap-2 mt-6">
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
