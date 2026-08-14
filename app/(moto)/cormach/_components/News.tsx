"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const newsItems = [
    {
      title: "New GEO 25: The portable, compact, and fast 3D...",
      desc: "Cormach presents GEO 25, the new portable 3D wheel alignment system designed to increase your workshop space.",
      img: "/moto/cormach/news1.jpg",
    },
    {
      title: "Automechanika Frankfurt: Cormach's international...",
      desc: "A long-standing appointment where innovation, technology and relationships come together on the international automotive stage.",
      img: "/moto/cormach/news2.jpg",
    },
    {
      title: "New F470S: large capacity and heavy-duty",
      desc: "The new F470S combines robust construction, precision and high clamping capacity, ensuring efficient and safe tyre-changing operations.",
      img: "/moto/cormach/news3.jpg",
    },
    {
      title: "New MEC Wheel Balancers",
      desc: "After the successful presentation at the trade fair and the first previews shared with you, we are delighted to officially introduce our...",
      img: "/moto/cormach/news4.jpg",
    },
    {
      title: "New F 535S LEVERLESS",
      desc: "Discover the new LEVERLESS version of our professional tire changer F 535S and F 535S GT: the same robust build, now...",
      img: "/moto/cormach/news5.jpg",
    },
    {
      title: "Autopromotec 2025: the must-attend event for...",
      desc: "From May 21 to 24, 2025, we'll be back at AUTOPROMOTEC, the leading event for the automotive industry! This is a unique opportunity to meet...",
      img: "/moto/cormach/news6.jpg",
    },
  ];

  return (
    <section id="news" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full border-b border-gray-400 pb-6">
          <div className="flex flex-col gap-4 w-full md:max-w-[70%]" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="font-bold">
              Stay Updated With CORMACH Srl
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Stay updated with the latest product launches, industry events, and innovations from CORMACH Srl. Discover advanced wheel service solutions, technology updates, and global exhibitions shaping the future of automotive workshops.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0" data-aos="fade-left">
            <Button text="View All News" href="#news" variant="primary" />
          </div>
        </div>

        {/* Swiper Slider for all views */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: '.news-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full pb-4"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group">

                  {/* Image */}
                  <div className="w-full aspect-[4/3] p-4 overflow-hidden shrink-0 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 relative gap-4">
                    <Typography variant="h4" color="dark" className="font-bold line-clamp-2">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed flex-1 line-clamp-3">
                      {item.desc}
                    </Typography>

                    {/* Read More Link */}
                    <div className="mt-auto pt-2">
                      <a href="#news" className="text-primary font-semibold hover:underline inline-flex items-center gap-1 transition-colors">
                        Read More
                        <span className="text-lg leading-none mt-[-2px]">&raquo;</span>
                      </a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination news-pagination mt-10 min-[2100px]:mt-14 min-[3800px]:mt-20 flex justify-center"></div>
        </div>

      </div>
    </section>
  );
};

export default News;
