"use client";

import { Calendar } from "lucide-react";
import Container from "./Container";

const news = [
  {
    date: "03–05 June 2025",
    title: "Meha Automotive at Automechanika Birmingham 2025",
    desc: "Meha Automotive showcased its latest product group at Automechanika Birmingham 2025, welcoming customers and business partners at Hall 20, Stand H40 at NEC Birmingham.",
    image: "/moto/meha/news1.png",
  },
  {
    date: "02–04 November 2021",
    title: "Meha Automotive at AAPEX 2021",
    desc: "Meha Automotive attended AAPEX 2021 in Las Vegas, connecting with industry partners and presenting its latest automotive aftermarket solutions.",
    image: "/moto/meha/news2.png",
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
            Stay updated with the latest Meha Automotive news, product updates, achievements, and
            industry developments as we continue to grow globally.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up">
          {news.map((item) => (
            <div
              key={item.title}
              className="flex flex-col sm:flex-row border border-[#EAEAEA] rounded-lg overflow-hidden"
            >
              <div className="w-full sm:w-2/5 shrink-0 aspect-square sm:aspect-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-semibold! subheading mb-3">{item.title}</h3>
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
