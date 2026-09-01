"use client";

import React from "react";
import Button from "./Button";

export default function Expertise() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="custom-container text-center">
        <p
          className="eyebrow-text mb-4"
          data-aos="fade-down"
        >
          SNDC Expertise
        </p>

        <h2
          className="section-title font-semibold mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Beyond Temperature. Engineered Comfort.
        </h2>

        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div
            className="
              relative
              w-full
              md:flex-[654]
              aspect-[654/350]
              rounded
              overflow-hidden
            "
            data-aos="fade-right"
          >
            <img
              src="/moto/sndc/exp1.png"
              alt="SNDC control bench operation"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          <div
            className="
              relative
              w-full
              md:flex-[600]
              aspect-[600/350]
              rounded
              overflow-hidden
            "
            data-aos="fade-left"
          >
            <img
              src="/moto/sndc/exp2.png"
              alt="SNDC assembly line"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>

        {/* Paragraph */}
        <p
          className="
            section-text
            max-w-[1344px]
            xl:max-w-[70%]
            mx-auto
            mb-10
          "
          data-aos="fade-up"
        >
          With over 35 years of engineering expertise, SNDC has earned a
          reputation for delivering advanced cabin climate solutions that
          balance passenger comfort, performance and efficiency. Our R&D
          teams adopt a structured, application-specific approach, carefully
          assessing the unique thermal requirements of every passenger
          compartment. Whether developing a standard HVAC system or a fully
          customised thermal management solution, we optimise every aspect of
          performance—from occupant comfort, energy efficiency and airflow to
          heat interaction, manufacturability, durability, cost-effectiveness
          and compliance with global automotive standards. Guided by a
          rigorous engineering process that spans concept development,
          simulation, validation and optimisation, every solution is designed
          to deliver reliable performance across diverse operating
          environments. By combining decades of expertise with continuous
          innovation, SNDC creates efficient, scalable and high-performance
          HVAC systems that meet the evolving needs of modern mobility while
          delivering lasting value, quality and sustainability.
        </p>

        <div data-aos="fade-up" data-aos-delay="150">
          <Button
            text="Learn More"
            variant="outline"
            color="primary"
            href="/corporate"
          />
        </div>
      </div>
    </section>
  );
}