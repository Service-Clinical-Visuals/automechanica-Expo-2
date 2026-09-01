"use client";

import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const points = [
  "Over 50 years of expertise in diesel fuel injection technology.",
  "Specialized in components for diesel injection, common rail, and unit injector systems.",
  "Strong partnerships with OEMs, aftermarket distributors, and repair specialists.",
  "Committed to continuous innovation and international quality standards.",
];

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 xl:order-1" data-aos="fade-right">
            <img
              src="/moto/rased/about.png"
              alt="R.A.S.E.D. S.p.A. facility in Milan, Italy"
              className="relative w-full h-auto object-cover"
            />
          </div>

          {/* Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <p className="text-primary font-bold mb-2">Who We Are</p>
            <h2 className="heading mb-6">
              Six Decades of Diesel Engineering Excellence
            </h2>

            <p className="content mb-6">
              Founded in 1961 in Milan, Italy, R.A.S.E.D. S.p.A. &ndash; SPACO DIESEL is a trusted
              manufacturer of high-quality diesel fuel injection components, including parts for
              diesel injection pumps, common rail pumps, and electronic unit injectors. Backed by
              more than 50 years of engineering expertise, the company is recognized worldwide for
              its precision, reliability, and innovation. Through a strong network of distributors
              in over 100 countries, SPACO DIESEL delivers dependable solutions while building
              lasting partnerships with engine manufacturers, aftermarket suppliers, and diesel
              repair specialists.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ArrowRight size={16} strokeWidth={2.5} className="text-primary shrink-0 mt-1" />
                  <span className="content">{point}</span>
                </li>
              ))}
            </ul>

            <Button
              text="Inside SPACO DIESEL"
              href="#"
              variant="outline"
              className="px-6 py-2.5 text-[15px]! font-bold rounded-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
