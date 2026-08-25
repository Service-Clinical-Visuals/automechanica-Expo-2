"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

export default function News() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white" id="news">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <p className="text-primary font-bold mb-2">News &amp; Events</p>
          <h2 className="heading mb-4 text-[26px] md:text-[32px]!">
            Insights, Innovations &amp; Company News
          </h2>
          <p className="content">
            Stay informed with the latest developments from R.A.S.E.D. Explore new product
            launches, industry insights, technical innovations, company announcements, and global
            events that reflect our continued commitment to precision engineering and excellence
            in diesel fuel injection technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10" data-aos="fade-up">
          {/* Card 1: Automec Brasil */}
          <article className="bg-white border border-[#EAEAEA] rounded-lg overflow-hidden flex flex-col">
            <img
              src="/moto/rased/news/1.png"
              alt="Automec Brasil exhibition stand"
              className="w-full h-auto object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-primary font-bold">Automec Brasil</h3>
                <span className="text-[#1A1A1A] text-sm font-medium whitespace-nowrap">23-27 April 2019</span>
              </div>
              <p className="content mb-5">
                We are pleased to invite you to visit our stand at the Automec Brasil which hosts
                the world&apos;s leading manufacturers and suppliers in the Automotive field. Our
                stand is SPACO DIESEL C 213
              </p>
              <Link
                href="#"
                className="group mt-auto inline-flex items-center gap-2 w-fit text-primary! font-bold"
              >
                <span>Read More</span>
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>

          {/* Card 2: Automechanika Dubai */}
          <article className="bg-white border border-[#EAEAEA] rounded-lg overflow-hidden flex flex-col order-2 lg:order-1">
            <div className="p-5 flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-primary font-bold">Automechanika Dubai</h3>
                <span className="text-[#1A1A1A] text-sm font-medium whitespace-nowrap">10-12 June 2019</span>
              </div>
              <p className="content mb-5">
                We are pleased to invite you to visit our stand at the Automechanika Dubai which
                hosts the world&apos;s leading manufacturers and suppliers in the Automotive
                field. Our stand is SPACO DIESEL 4-H12
              </p>
              <Link
                href="#"
                className="group mb-5 inline-flex items-center gap-2 w-fit text-primary! font-bold"
              >
                <span>Read More</span>
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <img
              src="/moto/rased/news/2.png"
              alt="Automechanika Dubai exhibition stand"
              className="w-full h-auto object-cover mt-auto"
            />
          </article>

          {/* Card 3: Automechanika Frankfurt */}
          <article className="bg-white border border-[#EAEAEA] rounded-lg overflow-hidden flex flex-col order-1 lg:order-2">
            <img
              src="/moto/rased/news/3.png"
              alt="Automechanika Frankfurt exhibition stand"
              className="w-full h-auto object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-primary font-bold">Automechanika Frankfurt</h3>
                <span className="text-[#1A1A1A] text-sm font-medium whitespace-nowrap">11-15 September 2018</span>
              </div>
              <p className="content mb-5">
                We are pleased to invite you to visit our stand at the Automechanika Dubai which
                hosts the world&apos;s leading manufacturers and suppliers in the Automotive
                field. Our stand is SPACO DIESEL 4-H12
              </p>
              <Link
                href="#"
                className="group mt-auto inline-flex items-center gap-2 w-fit text-primary! font-bold"
              >
                <span>Read More</span>
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button
            text="Read All News"
            href="#"
            variant="outline"
            showIcon
            className="px-6 py-2.5 text-[15px]! font-bold rounded-md"
          />
        </div>
      </Container>
    </section>
  );
}
