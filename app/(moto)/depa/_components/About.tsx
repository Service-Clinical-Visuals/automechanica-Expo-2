import React from "react";
import Image from "next/image";
import { ArrowRight, RefreshCw, Shield } from "lucide-react";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          {/* Left Image Side */}
          <div className="order-2 xl:order-1 relative rounded-2xl overflow-hidden bg-[#eef1f6] w-full flex items-center justify-center">
             <img
              src="/moto/depa/abt1.png"
              alt="About DEPA Wireframe Car"
               className="object-cover w-full h-auto"
            />
          </div>

          {/* Right Content Side */}
          <div className="order-1 xl:order-2 space-y-6">
            <h2 className="section-title oswald font-semibold text-[#272727]">
              About DEPA
            </h2>

            <div className="space-y-6 section-text rubik text-[#4b5563] leading-relaxed">
              <p>
                Founded in 1998 in northern France, DEPA is an independent manufacturer specializing in the
                remanufacturing of automotive parts. With more than 30 years of expertise, the company has
                established itself as a trusted partner in the independent automotive aftermarket.
              </p>
              <p>
                DEPA gives used automotive components a new life through a rigorous and standardized
                remanufacturing process. Each part is carefully identified, dismantled, cleaned, inspected, renovated,
                reassembled, and tested to deliver reliable performance comparable to new parts.
              </p>
              <p>
                The company specializes in a wide range of remanufactured automotive products, including
                driveshafts, steering systems, brake calipers, transmissions, and other key components. DEPA
                combines technical expertise, precision machining, and modern testing methods to meet demanding
                quality standards.
              </p>
            </div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-4 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[var(--color-primary)] p-6 flex items-center justify-center rounded-sm">
                  <img src="/moto/depa/abt2.png" alt="re" className="w-10 h-14"/>
                </div>
                <div className="py-4 pr-4 oswald font-semibold text-[#272727] card-title flex items-center">
                  Circular Remanufacturing
                </div>
              </div>

              <div className="flex items-stretch gap-4 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[var(--color-primary)] p-6 flex items-center justify-center rounded-sm">
                 <img src="/moto/depa/abt3.png" alt="re" className="w-10 h-12"/>
                </div>
               <div className="py-4 pr-4 oswald font-semibold text-[#272727] card-title flex items-center">
                  Quality & Expertise
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Button text="Know About Us" icon={<ArrowRight size={18} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
