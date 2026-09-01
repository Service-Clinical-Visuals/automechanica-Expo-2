import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

export default function Sustainability() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 mb-8" data-aos="fade-up">
          <div className="w-full lg:max-w-[60%] flex flex-col items-center lg:items-start">
            <h2 className="heading text-[#2A2A2A] mb-4">
              Explore Our Manufacturing Excellence
            </h2>
            <p className="content text-[#585858] mb-4">
              Discover how In Motion combines advanced production technologies, precision engineering, and rigorous quality control to manufacture reliable bearing solutions. Explore our industrial and super-precision production processes, from manufacturing to final quality inspection.
            </p>
          </div>
          <Button text="Explore Industrial" showIcon={true} variant="primary" className="shrink-0" />
        </div>

        <hr className="border-[#00000080] mb-12" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

          {/* Card 1 */}
          <div className="flex flex-col group cursor-pointer" data-aos="fade-up">
            <div className="w-full h-auto overflow-hidden mb-6">
              <img
                src="/moto/inmotion/m1.png"
                alt="Industrial Manufacturing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="subheading text-[#1A1A1A]">
                Industrial
              </h3>
              <div className="action-circle bg-[#C0121C] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors">
                <ArrowUpRight strokeWidth={2.5} className="action-icon" />
              </div>
            </div>
            <p className="content font-medium text-[#4A4A4A]">
              From design to quality control: follow the production of our bearings
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <div className="w-full h-auto overflow-hidden mb-6">
              <img
                src="/moto/inmotion/m2.png"
                alt="Super Precision Manufacturing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="subheading text-[#1A1A1A]">
                Super Precision
              </h3>
              <div className="action-circle bg-[#C0121C] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors">
                <ArrowUpRight strokeWidth={2.5} className="action-icon" />
              </div>
            </div>
            <p className="content font-medium text-[#4A4A4A]">
              Learn about the reliability of our production lines for super precision bearings
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
