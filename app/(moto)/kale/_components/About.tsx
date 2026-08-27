"use client";

import { Eye, Target } from "lucide-react";
import Container from "./Container";

const highlights = [
  {
    icon: Eye,
    title: "Vision",
    text: "To be a trusted global partner, delivering innovative cooling, HVAC, and EV thermal management solutions.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To embrace new technologies, exceed customer expectations, and build a sustainable, competitive future.",
  },
];

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left: Facility image */}
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <img
              src="/moto/kale/about.png"
              alt="Kale Oto Radyatör manufacturing facility"
              className="w-full h-full object-cover border border-[#EAEAEA] rounded-lg"
            />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="flex flex-col order-1 lg:order-2 justify-center">
            <h2 className="heading text-[32px]! mb-6">
              Decades of Experience. Built for the Future.
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                Founded in Istanbul in 1966, KALE has grown from a small-scale radiator
                manufacturer into a leading automotive thermal management company in Türkiye.
                With decades of engineering and manufacturing expertise, KALE continues to
                deliver reliable, innovative cooling and HVAC solutions for automotive,
                commercial, agricultural, and industrial applications, combining advanced
                technology with proven manufacturing capabilities.
              </p>
              <p className="content">
                Today, a team of 600 experienced professionals drives continuous innovation
                through advanced manufacturing, engineering expertise, and a comprehensive range
                of thermal management solutions. From radiators and condensers to intercoolers,
                oil coolers, HVAC systems, and complete cooling modules, KALE delivers reliable
                solutions for diverse automotive and industrial applications.
              </p>
            </div>

            {/* Vision / Mission */}
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
              href="#about-us"
              className="inline-flex items-center justify-center w-fit font-medium transition-opacity duration-300 active:scale-95 select-none cursor-pointer px-8 py-3 text-[17px]! font-medium! heading-white rounded-md bg-primary hover:opacity-90"
            >
              Know About Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
