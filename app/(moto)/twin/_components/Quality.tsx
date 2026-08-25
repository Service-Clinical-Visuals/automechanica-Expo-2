"use client";

import React from "react";

export default function Quality() {
  return (
    <section className="py-10 lg:py-20 relative overflow-hidden bg-white">
      <div className="custom-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#000000] exo-2-font font-bold mb-6">
            Production method
          </h2>
          <p className="inter-font section-text font-regular text-[#111111] max-w-[90%] lg:max-w-[80%] mx-auto leading-relaxed">
            Our production sites utilise modern manufacturing methods, quality standards and complex production processes to ensure the TWIN BUSCH® quality you have come to expect. Close cooperation between our German development team and international production facilities enables us to offer excellent value for money and a high degree of vertical integration. Every product incorporates the technical expertise gained from over 25 years of company history. Our customers benefit from this both now and in the long term - through reliable technology, precise workmanship and long-lasting quality.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-10 max-w-9xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="w-full h-full aspect-[4/3] flex items-center justify-center bg-white rounded-xl overflow-hidden">
              <img
                src={`/moto/twin/production${num}.png`}
                alt={`Production ${num}`}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/moto/twin/abt.png"; }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
