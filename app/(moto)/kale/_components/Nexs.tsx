"use client";

import { Calendar } from "lucide-react";
import Container from "./Container";

const news = [
  {
    date: "FEB 25, 2026",
    title: "Supporting Education for a Sustainable Future Project",
    desc: "Efficiency means using space, equipment, and resources effectively to improve productivity.",
    image: "/moto/kale/news/1.png",
  },
  {
    date: "MAR 16, 2023",
    title: 'OSD received the "Supply Industry Achievement Award".',
    desc: 'KALE Oto Radiator won the "Supplier Industry Achievement Award" in 2022 for excellence and reliability.',
    image: "/moto/kale/news/2.png",
  },
  {
    date: "DEC 31, 2022",
    title: "Kale Auto Radiator wins Silver Medal for the second time!",
    desc: "Committed to sustainability today for a greener, better world tomorrow.",
    image: "/moto/kale/news/3.png",
  },
];

export default function Nexs() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="news">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-4">Latest News &amp; Updates</h2>
          <p className="content">
            Stay up to date with KALE&apos;s latest developments, innovations, achievements, and
            updates from across our automotive thermal management operations.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {news.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border border-[#EAEAEA] rounded-lg overflow-hidden h-full"
            >
              <div className="w-full aspect-16/10 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-5 flex flex-col">
                <div className="flex items-center gap-2 text-[#6B7280] text-sm mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="content font-bold! text-[#1A1A1A]! mb-3">{item.title}</h3>
                <p className="content text-sm! mb-6 flex-1">{item.desc}</p>
                <a
                  href="#"
                  className="self-end content text-primary! font-bold text-sm underline hover:opacity-80"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
