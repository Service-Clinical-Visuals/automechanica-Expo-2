"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div
          className="
            relative
            w-full
            aspect-video
            overflow-hidden
            order-2
            lg:order-1
          "
          data-aos="fade-right"
        >
          <img
            src="/moto/sndc/about.jpg"
            alt="SNDC Facility"
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

        {/* Content */}
        <div
          className="order-1 lg:order-2"
          data-aos="fade-left"
        >
          <p className="eyebrow-text mb-4">
            About Societe Nouvelle Climatisation SAS
          </p>

          <h2 className="section-title font-semibold mb-6">
            Driving Innovation in Automotive HVAC Solutions
          </h2>

          <p className="section-text mb-4">
            Located near Toulouse, France, SNDC is a trusted manufacturer with
            over 35 years of experience in designing and producing advanced
            automotive HVAC systems and accessories. Serving both OEM and
            aftermarket sectors, the company delivers reliable solutions
            across air conditioning, heating, ventilation, air filtration,
            and cabin pressurization for a wide range of vehicle applications.
          </p>

          <p className="section-text mb-8">
            With a strong focus on quality and performance, SNDC follows
            internationally recognized standards, including ISO 9001, and
            applies advanced engineering methods to ensure efficiency,
            compliance, and customer satisfaction. Backed by continuous
            improvement practices, modern testing systems, and lean
            manufacturing principles, SNDC remains a dependable partner for
            innovative and high-quality thermal comfort solutions.
          </p>

          <Button
            text="Explore Solutions"
            variant="outline"
            color="primary"
            href="/corporate"
          />
        </div>
      </div>
    </section>
  );
}