"use client";

import Container from "./Container";
import Button from "./Button";

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="text-primary font-bold mb-2">About Bartec</p>
          <h2 className="heading">
            Strength Through Specialized Engineering Expertise Together
          </h2>
        </div>

        {/* Image Pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10" data-aos="fade-up">
          <div className="overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <img
              src="/moto/bartec/about1.png"
              alt="Bartec USA facility exterior"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <img
              src="/moto/bartec/about2.png"
              alt="Bartec USA team outside the facility"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <p className="content text-center max-w-[80%] mx-auto mb-8" data-aos="fade-up">
          Since 1992, Bartec has been a global leader in Tire Pressure Monitoring Systems (TPMS),
          pioneering innovative diagnostic tools and processing equipment for the automotive
          industry. Established in 2004, Bartec USA continues to deliver advanced, OE-quality
          TPMS solutions trusted by manufacturers and service professionals across North America.
        </p>

        {/* CTA */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button
            text="Know Beyond TPMS"
            href="#"
            variant="outline"
            showIcon
            className="px-6 py-2.5 text-primary! heading text-[16px]! font-bold rounded-md"
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
