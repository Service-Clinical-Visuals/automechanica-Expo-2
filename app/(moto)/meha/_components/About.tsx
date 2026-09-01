"use client";

import { Eye, Target } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const highlights = [
  {
    icon: Eye,
    title: "Vision",
    text: "Meha Automotive is one of the leading companies in the rubber metalliferous product sector.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To become a leading global manufacturer of high-quality rubber and metal spare parts.",
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
              src="/moto/meha/about.png"
              alt="Meha Automotive manufacturing facility"
              className="w-full h-full object-cover border border-[#EAEAEA] rounded-lg"
            />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="flex flex-col order-1 lg:order-2">
            <h2 className="heading text-[32px]! mb-6">About Us</h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                Our company was established in 2012 by BURDÖKSAN, the leader in the sector with 35
                years of production experience and knowledge, to produce rubber-to-metal, rubber,
                and flywheel products in the automotive spare parts sector and operate under the
                MEHA AUTOMOTIVE brand. In the last 6 years, BURDÖKSAN has transferred all its
                production, quality, and system to MEHA AUTOMOTIVE, which serves its customers
                with 12,000 reference products.
              </p>
              <p className="content">
                MEHA offers 1,300+ reference products for Peugeot, Renault, Fiat, Citroën, and
                Volkswagen, including engine mounts, damper mounts, transmission mounts, bellows,
                and flywheels. As a manufacturer and wholesaler, MEHA provides high-quality spare
                parts, competitive pricing, fast worldwide shipping, and 24/7 customer support.
              </p>
            </div>

            {/* Vision / Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="border border-primary rounded-lg p-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <highlight.icon size={26} className="text-primary" />
                    <h3 className="subheading font-semibold!">{highlight.title}</h3>
                  </div>
                  <p className="content">{highlight.text}</p>
                </div>
              ))}
            </div>

            <Button text="View Product" href="#product" variant="secondary" className="w-fit content-white" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
