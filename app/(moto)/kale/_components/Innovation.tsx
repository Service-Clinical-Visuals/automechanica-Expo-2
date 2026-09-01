"use client";

import { Microscope, Handshake } from "lucide-react";
import Container from "./Container";

const highlights = [
  {
    icon: Microscope,
    title: "Advanced Research & Testing",
    text: "Advanced facilities enable precise design, testing, and evaluation.",
  },
  {
    icon: Handshake,
    title: "Innovation & Collaboration",
    text: "Research partnerships drive innovation and development.",
  },
];

export default function Innovation() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="rd-center">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-full lg:max-w-[70%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-4">
            Driving Innovation Through Research &amp; Development
          </h2>
          <p className="content">
            KALE&apos;s R&amp;D Center focuses on developing advanced technologies and innovative
            thermal management solutions to meet the evolving needs of the automotive industry
            and support future mobility.
          </p>
        </div>

        <div className="h-px w-full bg-[#272727] mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left: Image */}
          <div data-aos="fade-right">
            <img
              src="/moto/kale/innovation.png"
              alt="KALE R&D Center engineers reviewing thermal system design"
              className="w-full h-full object-cover border border-[#EAEAEA] rounded-lg"
            />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="flex flex-col justify-center">
            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                With modern infrastructure, specialized engineering teams, and an ISO/TS
                17025-accredited laboratory, KALE continuously enhances its design, prototyping,
                testing, measurement, and evaluation capabilities to develop reliable,
                high-performance thermal management solutions.
              </p>
              <p className="content">
                Collaborating with universities and scientific institutions to develop innovative
                technologies, enhance product performance, strengthen engineering capabilities,
                and create advanced, future-ready thermal management solutions.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="border border-[#EAEAEA] rounded-lg p-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <highlight.icon size={22} className="text-primary" />
                    <h3 className="subheading font-semibold! text-[18px]!">{highlight.title}</h3>
                  </div>
                  <p className="content">{highlight.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#rd-center"
              className="inline-flex items-center justify-center w-fit transition-opacity duration-300 active:scale-95 select-none cursor-pointer px-8 py-3 rounded-md heading-white text-[17px]! font-medium! bg-primary hover:opacity-90"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
