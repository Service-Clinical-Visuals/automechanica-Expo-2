"use client";

import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";

const services = [
  {
    title: "Shopping",
    description:
      "Our diverse suppliers allow us to choose from a wide range of brands, products and complete solutions, which we can purchase for you at the best possible conditions throughout Europe.",
  },
  {
    title: "Advice",
    description:
      "Our experienced staff act as strong partners at your side. Competent advice and technical expertise are our hallmarks.",
  },
  {
    title: "Trust",
    description:
      "Personal contact, honesty and fair cooperation on equal terms are our core values, which guide our activities and internal company processes.",
  },
  {
    title: "flexibility",
    description:
      "Our young company works in a modern, agile and flexible manner at all times, in order to respond quickly to changes in the market.",
  },
];

export default function Service() {
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
              <h2 className="heading-white">We Are At Your Service Around The Clock:</h2>
              <p className="content-white max-w-[900px] mt-3">
                With our expert technical teams, we offer a product portfolio that covers all your
                needs, from consultation to quick and easy (re)ordering. Collaborative partnership
                and adherence to deadlines are just as important to us as quality, fast and
                innovative solutions, and cost-efficiency. You can find an example from our
                extensive product portfolio here:
              </p>
            </div>

            <button className="navlink group flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover whitespace-nowrap shrink-0">
              Learn More
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <hr className="border-t border-white/10 mb-16" />

          {/* Image + overlapping checklist card */}
          <div className="relative">
            <div className="hidden xl:block ml-auto w-[60%] sm:w-[70%]" data-aos="fade-left">
              <img
                src="/moto/sarofim/service.png"
                alt="Sarofim team collaboration"
                className="w-full h-full object-cover aspect-video"
              />
            </div>

            <div
              className="relative xl:absolute left-0 top-0 2xl:top-[100px] z-10 w-full xl:max-w-[810px] bg-[#202020] border border-white/10 p-8 mt-6 sm:mt-0"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div className="flex flex-col gap-6">
                {services.map((service) => (
                  <div key={service.title}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0D0D0D]">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <h3 className="heading-white text-xl!">{service.title}</h3>
                    </div>
                    <p className="content-white pl-9">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
