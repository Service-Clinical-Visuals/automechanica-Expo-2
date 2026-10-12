"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ShoppingCart, Star } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

interface ProductItem {
  id: number;
  image: string;
  title: string;
  capacity: string;
  rating: number;
  reviews: number;
  desc: string;
  price: string;
  netPrice: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    image: "/moto/nanoclean/pl1.webp",
    title: "NANOCLEAN® AIR Pro Trigger...",
    capacity: "500ml",
    rating: 4,
    reviews: 142,
    desc: "A ready-to-use professional HVAC and AC cleaner with a refreshing citrus fragrance for effective cleaning and lasting freshness.",
    price: "€11.50 / 49.00 PLN",
    netPrice: "€9.35 / 39.84 PLN net",
  },
  {
    id: 2,
    image: "/moto/nanoclean/pl2.webp",
    title: "NANOCLEAN® AC8 Home Mattress...",
    capacity: "500ml",
    rating: 4,
    reviews: 142,
    desc: "A powerful cleaning and sanitizing solution for fabrics, upholstery, and mattresses that helps eliminate dust mites and maintain freshness.",
    price: "€11.50 / 49.00 PLN",
    netPrice: "€9.35 / 39.84 PLN net",
  },
  {
    id: 3,
    image: "/moto/nanoclean/pl3.webp",
    title: "C40 Interior Fresh Cleaner...",
    capacity: "500ml",
    rating: 4,
    reviews: 142,
    desc: "A powerful cleaner for car cockpits and interior plastics, delivering deep cleaning with a long-lasting anti-static finish.",
    price: "€11.50 / 49.00 PLN",
    netPrice: "€9.35 / 39.84 PLN net",
  },
  {
    id: 4,
    image: "/moto/nanoclean/pl4.webp",
    title: "NANOCLEAN® Air Multi-Cleaner...",
    capacity: "1000ml",
    rating: 5,
    reviews: 98,
    desc: "High-performance air-conditioning decontamination solution engineered for heavy-duty commercial HVAC installations.",
    price: "€18.50 / 79.00 PLN",
    netPrice: "€15.04 / 64.22 PLN net",
  },
  {
    id: 5,
    image: "/moto/nanoclean/pl5.webp",
    title: "NANOCLEAN® Degreaser Pro...",
    capacity: "750ml",
    rating: 5,
    reviews: 116,
    desc: "Fast-acting industrial degreaser formulated to remove stubborn oils, residues, and grime while protecting sensitive surfaces.",
    price: "€14.20 / 61.00 PLN",
    netPrice: "€11.54 / 49.59 PLN net",
  },
  {
    id: 6,
    image: "/moto/nanoclean/pl6.webp",
    title: "NANOCLEAN® AC Workshop Set...",
    capacity: "5L Kit",
    rating: 5,
    reviews: 84,
    desc: "Complete professional workshop set with precision dosage system for automotive service centers and technicians.",
    price: "€65.00 / 278.00 PLN",
    netPrice: "€52.84 / 226.01 PLN net",
  },
];

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div
          className="flex flex-col min-[1031px]:flex-row min-[1031px]:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[1.125rem] md:text-[1.25rem] text-[var(--color-primary)] underline underline-offset-8 decoration-2 font-[var(--font-primary)]">
              Our Product Lineup
            </span>
            <Typography
              variant="h2"
              color="dark"
              className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#202020]"
            >
              NANOCLEAN® Bestsellers
            </Typography>
          </div>

          <div className="w-full min-[1031px]:max-w-[50%] xl:max-w-[70%]">
            <Typography
              variant="p"
              color="muted"
              className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[#404040] min-[1031px]:text-right w-full xl:max-w-[70%] min-[1031px]:ml-auto"
            >
              Our trusted products deliver effective cleaning and reliable
              disinfection for professional applications. Proven in real-world
              environments and trusted by thousands of technicians, our
              solutions ensure quality, consistent performance, and dependable
              hygiene every day.
            </Typography>
          </div>
        </div>

        {/* Products Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".bestsellers-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 12 },
              1031: { slidesPerView: 3, spaceBetween: 12 },
            }}
            className="bestsellers-swiper w-full pb-4"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex py-2 px-1.5">
                <div className="w-full h-full bg-white border border-[#71717A] rounded-[20px] p-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col flex-1">
                    <div className="w-full aspect-[476/320] rounded-[20px] border border-[rgba(42,42,42,0.3)] bg-white mb-4 flex items-center justify-center p-4 overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-3 text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] text-[#404040]">
                      <div className="flex items-center gap-1.5 min-[3800px]:gap-3">
                        <div className="flex items-center gap-0.5 sm:gap-1 min-[1536px]:gap-1 min-[1920px]:gap-1.5 min-[2500px]:gap-2 min-[3800px]:gap-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 min-[1031px]:w-4.5 min-[1031px]:h-4.5 xl:w-5 xl:h-5 min-[1536px]:w-6 min-[1536px]:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 ${
                                i < item.rating
                                  ? "text-[#F2AE00] fill-[#F2AE00]"
                                  : "text-[#F2AE00]"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[13px] min-[2500px]:text-[18px] min-[3800px]:text-[24px] text-[#404040]">
                          ( {item.reviews} Reviews )
                        </span>
                      </div>

                      <span className="text-[13px] min-[2500px]:text-[18px] min-[3800px]:text-[24px] font-medium text-[#404040]">
                        Capacity: {item.capacity}
                      </span>
                    </div>

                    <Typography
                      variant="h3"
                      color="dark"
                      className="font-semibold text-[18px] sm:text-[20px] min-[2500px]:text-[26px] min-[3800px]:text-[34px] text-[#202020] mb-2 leading-snug line-clamp-1"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="p"
                      color="muted"
                      className="leading-[1.5] text-[#404040] mb-4 line-clamp-3"
                    >
                      {item.desc}
                    </Typography>
                  </div>

                  <div className="mt-auto">
                    <div className="border-t border-dashed border-[#E5E5E5] my-4 min-[3800px]:my-8" />

                    <div className="flex items-center justify-between mb-4 min-[3800px]:mb-8">
                      <div className="flex flex-col">
                        <span className="text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] font-semibold text-[var(--color-primary)] font-[var(--font-primary)]">
                          {item.price}
                        </span>
                        <span className="text-[13px] min-[2500px]:text-[18px] min-[3800px]:text-[24px] text-[#404040]">
                          {item.netPrice}
                        </span>
                      </div>

                      <button
                        type="button"
                        aria-label="Add to cart"
                        className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] min-[1536px]:w-[50px] min-[1536px]:h-[50px] min-[1920px]:w-[60px] min-[1920px]:h-[60px] min-[2500px]:w-[80px] min-[2500px]:h-[80px] min-[3800px]:w-[110px] min-[3800px]:h-[110px] rounded-[10px] min-[1920px]:rounded-[14px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[24px] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors flex items-center justify-center text-white shadow-sm shrink-0"
                      >
                        <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 min-[1536px]:w-6 min-[1536px]:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-white" strokeWidth={2.5} />
                      </button>
                    </div>

                    <Button
                      text="Buy Now"
                      href="#buy"
                      variant="outline-blue"
                      className="w-full !rounded-[8px] !py-2.5 text-center justify-center"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Pagination */}
          <div className="bestsellers-pagination custom-swiper-pagination flex justify-center mt-6" />
        </div>
      </div>
    </section>
  );
}
