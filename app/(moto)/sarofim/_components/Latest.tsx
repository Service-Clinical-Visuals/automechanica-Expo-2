"use client";

import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import Container from "./Container";

const news = [
  {
    title: "SAROFIM SAE 5W-40 Extreme...",
    date: "18/06/2026",
    img: "/moto/sarofim/latest/1.png",
  },
  {
    title: "SAROFIM Engine Flush – 300ML",
    date: "18/06/2026",
    img: "/moto/sarofim/latest/2.png",
  },
  {
    title: "SAROFIM SAE 10W-40 4L",
    date: "18/06/2026",
    img: "/moto/sarofim/latest/3.png",
  },
  {
    title: "SAROFIM Injector And Nozzle Cleaner",
    date: "18/06/2026",
    img: "/moto/sarofim/latest/4.png",
  },
];

export default function Latest() {
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-20">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Header row */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6"
            data-aos="fade-up"
          >
            <div>
              <h2 className="heading-white">Latest From SAROFIM GmbH</h2>
              <p className="content-white max-w-[900px] mt-3">
                Stay updated with the latest <strong className="font-bold">SAROFIM GmbH</strong>{" "}
                news, product innovations, international activities, trade fairs, and industry
                developments. Discover our latest achievements, new solutions, global
                partnerships, and upcoming events shaping the future of professional tyre
                service.
              </p>
            </div>

            <button className="group flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover whitespace-nowrap shrink-0">
              View All News
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <hr className="border-t border-white/10 mb-10" />

          {/* News grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, i) => (
              <div
                key={item.title}
                className="bg-[#141414] border border-white/10 p-4 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Image */}
                <div className="relative w-full mb-4 overflow-hidden bg-[#1c1c1c]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                  <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </div>

                {/* Content */}
                <h3 className="heading-white text-lg! mb-3">{item.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={15} className="text-white/60" />
                  <span className="content-white text-sm!">{item.date}</span>
                </div>
                <a
                  href="#"
                  className="mt-auto text-primary font-semibold text-sm underline hover:opacity-80 transition-opacity"
                >
                  Read More &gt;&gt;
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
