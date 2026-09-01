"use client";

import { ChevronDown, Search, ArrowRight } from "lucide-react";
import Container from "./Container";

const selectors = [
  { icon: "/moto/bartec/lookup/set1/1.png", label: "Select manufacturer", placeholder: "Choose Manufacturer" },
  { icon: "/moto/bartec/lookup/set1/2.png", label: "Select Model", placeholder: "Choose Model" },
  { icon: "/moto/bartec/lookup/set1/3.png", label: "Select Year", placeholder: "Choose Year" },
  { icon: "/moto/bartec/lookup/set1/4.png", label: "Select Qualifier", placeholder: "Choose Qualifier" },
];

const stats = [
  { icon: "/moto/bartec/lookup/set2/1.png", label: "100% Vehicles Specific Results" },
  { icon: "/moto/bartec/lookup/set2/2.png", label: "OEM Quality Compatibility" },
  { icon: "/moto/bartec/lookup/set2/3.png", label: "Fast and Accurate Search" },
  { icon: "/moto/bartec/lookup/set2/4.png", label: "Wide Range of TPMS Solutions" },
];

export default function Lookup() {
  return (
    <section className="relative w-full bg-white overflow-hidden" id="lookup">
      <div className="py-16 md:py-24">
        <Container>
          {/* Heading */}
          <div className="text-center max-w-[80%] mx-auto mb-14" data-aos="fade-up">
            <p className="text-primary font-bold mb-2">Search by Vehicles</p>
            <h2 className="heading mb-4">
              Vehicle TPMS Look-Up
            </h2>
            <p className="content">
              Find the ideal TPMS sensors and diagnostic tools for your vehicle. Simply select
              your vehicle details to quickly discover compatible products designed for accurate
              fitment, seamless installation, and reliable performance.
            </p>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden px-4 py-8 md:p-10 bg-center bg-cover"
            style={{ backgroundImage: "url('/moto/bartec/lookup/bg.png')" }}
          >
            {/* Selector Cards */}
            <div className="relative z-10 flex flex-col lg:flex-row items-stretch" data-aos="fade-up">
                {selectors.map((selector, index) => (
                    <div key={selector.label} className="flex items-stretch flex-1">
                    <div className="flex-1 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 flex flex-col items-center text-center">
                        <img src={selector.icon} alt="" className="h-10 w-10 object-contain mb-4" />
                        <h3 className="font-bold text-[#1A1A1A] mb-8 whitespace-nowrap">{selector.label}</h3>
                        <button
                        type="button"
                        className="w-full flex items-center justify-between gap-2 border border-primary text-primary font-bold rounded-md px-5 py-3 hover:bg-primary hover:text-white transition-colors"
                        >
                        <span className="whitespace-nowrap">{selector.placeholder}</span>
                        <ChevronDown size={18} strokeWidth={2.5} className="shrink-0" />
                        </button>
                    </div>

                    {index < selectors.length - 1 && (
                        <div className="hidden lg:block w-px bg-[#E2E2E2] mx-4 xl:mx-6 self-center h-40" />
                    )}
                    </div>
                ))}
            </div>

            {/* Search CTA */}
            <div className="flex justify-center mt-8" data-aos="fade-up">
                <button
                type="button"
                className="group inline-flex items-center gap-2 border border-primary text-primary font-bold rounded-md px-6 py-3 hover:bg-primary hover:text-white transition-colors"
                >
                <Search size={18} strokeWidth={2.5} />
                <span>Search Your Desired TPMS</span>
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats Bar */}
        <Container className="items-center flex justify-center">
          <div className="max-w-[100%] xl:max-w-[60%]">
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-4">
                {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center flex-1 max-w-[180px]!">
                    <div className="flex items-center gap-3">
                    <img src={stat.icon} alt="" className="h-8 w-8 object-contain shrink-0" />
                    <span className="text-[#555555] text-sm leading-snug">{stat.label}</span>
                    </div>

                    {index < stats.length - 1 && (
                    <div className="hidden md:block w-px bg-[#D9D9D9] h-10 ml-auto" />
                    )}
                </div>
                ))}
            </div>
          </div>
        </Container>

    </section>
  );
}
