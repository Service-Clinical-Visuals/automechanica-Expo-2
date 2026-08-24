"use client";

import Link from "next/link";
import Container from "./Container";

const newsImages = [
  { src: "/moto/yenmak/news/1.png", alt: "Yenmak at Automechanika Shanghai" },
  { src: "/moto/yenmak/news/2.png", alt: "Yenmak at Turkish Automotive AAPEX" },
  { src: "/moto/yenmak/news/3.png", alt: "Yenmak at Automechanika Dubai" },
];

export default function News() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white" id="news">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="heading mb-3">Latest News &amp; Updates</h2>
          <span className="block w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="content max-w-3xl mx-auto">
            Stay up to date with Yenmak&apos;s latest developments, company milestones, product
            launches, industry events, and innovations in engine component manufacturing.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4" data-aos="fade-up">
          {newsImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end" data-aos="fade-up">
          <Link href="#" className="text-primary font-medium text-sm hover:underline">
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
}
