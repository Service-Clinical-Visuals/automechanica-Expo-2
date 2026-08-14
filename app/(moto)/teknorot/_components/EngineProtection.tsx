"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineProtection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#1A1A1A]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/moto/teknorot/bg.png"
          alt="Teknorot Education"
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center text-center">
        <h2 className="section-title text-white montserrat-font font-semibold mb-8" data-aos="fade-up">
          Education & Continuous Improvement
        </h2>

        <div className="max-w-7xl flex flex-col gap-6 mb-10" data-aos="fade-up" data-aos-delay="100">
          <p className="inter-font text-white/90 font-regular section-text leading-relaxed">
            At Teknorot, we believe that investing in people creates lasting value. Through continuous training and development programs, we strengthen our employees' technical skills, professional knowledge, personal growth, and workplace safety.
          </p>
          <p className="inter-font text-white/90 font-regular section-text leading-relaxed">
            Our programs include orientation, technical and vocational training, internal and external education, on-the-job learning, and personal development. We also encourage employee engagement through social activities, recognition programs, and our Continuous Improvement Process (CIP), giving every team member the opportunity to share ideas and contribute to our growth.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Button href="#" variant="primary" className="!w-fit !px-8">
            Join Teknorot
          </Button>
        </div>
      </div>
    </section>
  );
}
