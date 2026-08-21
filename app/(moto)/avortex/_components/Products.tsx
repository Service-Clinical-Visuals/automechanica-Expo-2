"use client";

import React, { useState } from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Fait -Tofas");

  const categories = ["Fait -Tofas", "Renault", "Peugoet-Citroen", "Opel-Chevrolet", "View All"];

  const allProducts = [
    // Fiat
    { title: "FIAT 1.3 Multijet (JTD) 16V (Euro 4)", image: "/moto/avortex/p1.png", category: "Fait -Tofas" },
    { title: "FIAT 1.3 Multijet (JTD) 16V (Euro 5)", image: "/moto/avortex/p2.png", category: "Fait -Tofas" },
    { title: "FIAT Doblo 1.9 JTD Dizel", image: "/moto/avortex/p3.png", category: "Fait -Tofas" },
    { title: "FIAT Grande 1.4 16V", image: "/moto/avortex/p4.png", category: "Fait -Tofas" },
    { title: "FIAT Doblo 1.9 Dizel", image: "/moto/avortex/p1.png", category: "Fait -Tofas" },
    { title: "FIAT 1.6 Multijet 16V", image: "/moto/avortex/p2.png", category: "Fait -Tofas" },
    { title: "FIAT Palio 1.200 8V (Yeni Model)", image: "/moto/avortex/p3.png", category: "Fait -Tofas" },
    { title: "FIAT Palio 1.200 8V", image: "/moto/avortex/p4.png", category: "Fait -Tofas" },
    // Renault
    { title: "RENAULT Clio-Megane-Kangoo 1.5 DCI (K9K)", image: "/moto/avortex/p1.png", category: "Renault" },
    { title: "RENAULT Clio-Megane-Kangoo-Scenic - 2003", image: "/moto/avortex/p2.png", category: "Renault" },
    { title: "RENAULT Clio-Megane-Kangoo-Scenic - 2008", image: "/moto/avortex/p3.png", category: "Renault" },
    { title: "RENAULT Fluence-Kangoo-Clio3-Megane3", image: "/moto/avortex/p4.png", category: "Renault" },
    { title: "RENAULT Trafic-Fluence-Megane-Kadjar", image: "/moto/avortex/p1.png", category: "Renault" },
    { title: "RENAULT Megane-Clio-Scenic-Laguna", image: "/moto/avortex/p2.png", category: "Renault" },
    { title: "RENAULT Megane-Clio 1.4-1.6 8V", image: "/moto/avortex/p3.png", category: "Renault" },
    { title: "RENAULT Clio 1.9-1.4 8V Energy (E6J-E7J)", image: "/moto/avortex/p4.png", category: "Renault" },
    // Peugeot / Citroen
    { title: "PEUGEOT - CITROEN 1.3 HDI 16V 75 HP (EURO 4)", image: "/moto/avortex/p1.png", category: "Peugoet-Citroen" },
    { title: "PEUGEOT - CITROEN 1.3 HDI 16V (EURO 5)", image: "/moto/avortex/p2.png", category: "Peugoet-Citroen" },
    { title: "PEUGEOT - CITROEN 1.6 HDI (DV4 D-DV4 TD-8HX-8HZ)", image: "/moto/avortex/p3.png", category: "Peugoet-Citroen" },
    { title: "PEUGEOT - CITROEN 1.6 HDI 90-110 HP (DV6 TCD4)", image: "/moto/avortex/p4.png", category: "Peugoet-Citroen" },
    { title: "PEUGEOT - CITROEN 1.9 DIZEL (DW8)", image: "/moto/avortex/p1.png", category: "Peugoet-Citroen" },
    // Opel / Chevrolet
    { title: "OPEL 1.3 CDTI 16V (EURO 4)", image: "/moto/avortex/p2.png", category: "Opel-Chevrolet" },
    { title: "OPEL 1.3 CDTI 16V (EURO 5)", image: "/moto/avortex/p3.png", category: "Opel-Chevrolet" },
    { title: "OPEL 1.6 Multijet 16V", image: "/moto/avortex/p4.png", category: "Opel-Chevrolet" }
  ];

  const filteredProducts = activeCategory === "View All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="custom-container">

        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4" data-aos="fade-up">
          <h2 className="section-title text-[#000000] exo-2-font font-bold">
            Our Product Range
          </h2>
          <p className="inter-font section-text text-[#111111] lg:max-w-7xl lg:mx-auto leading-relaxed mt-2">
            Avortex offers a comprehensive range of precision-engineered gasket solutions developed for passenger cars, commercial vehicles, compressors, and industrial engines. Manufactured with advanced materials and strict quality control, each product is designed to deliver reliable sealing performance, long service life, and consistent fitment across demanding automotive and industrial applications.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 mb-12 w-full" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-8 py-1.5 border border-[#262261] section-text font-medium transition-colors rounded-[2px] ${activeCategory === cat ? 'bg-[#262261] text-white' : 'bg-white text-[#262261] hover:bg-[#262261] hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="200">
          <style dangerouslySetInnerHTML={{
            __html: `
            .products-swiper {
              padding-bottom: 40px !important;
            }
            .products-swiper .swiper-pagination {
              bottom: 0 !important;
            }
            .products-swiper .swiper-pagination-bullet {
              width: 15px;
              height: 15px;
              background: #D9D9D9;
              opacity: 1;
            }
            .products-swiper .swiper-pagination-bullet-active {
              background: #262261;
            }
          `}} />
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="products-swiper"
            key={activeCategory} // Force re-render of swiper when category changes so pagination resets
          >
            {filteredProducts.map((product, index) => (
              <SwiperSlide key={index} className="h-auto flex pb-4">
                <div className="w-full bg-white border border-[#EAEAEA] border-b-[3px] border-b-[#262261] p-4 lg:p-5 flex flex-col items-center md:items-start justify-between text-center md:text-left transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.currentTarget.src = "/moto/avortex/abt1.png"; }}
                    />
                  </div>
                  <h3 className="card-title1 exo-2-font font-bold text-[#000000] mb-4 text-center md:text-left whitespace-pre-line leading-snug min-h-[56px] w-full">
                    {product.title}
                  </h3>
                  <div className="mt-auto mb-2 w-full flex justify-center md:justify-start">
                    <Button href="#" className="">
                      View Product
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
