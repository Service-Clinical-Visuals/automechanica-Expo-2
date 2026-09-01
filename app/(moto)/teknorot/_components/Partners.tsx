"use client";

import { ArrowRight } from "lucide-react";

export default function Partners() {
  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-[#000000] montserrat-font font-semibold mb-4">
            Blog & Insights
          </h2>
          <p className="inter-font text-[#000000] font-regular section-text leading-relaxed w-full lg:w-[90%] 2xl:w-[85%] mx-auto">
            Stay informed with the latest developments in steering and suspension technology, automotive aftermarket trends, product innovations, manufacturing advancements, and news from Teknorot. Explore our insights and discover the expertise driving our products forward.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full lg:w-[95%] 2xl:w-[90%] mx-auto">

          {/* Large Card (Left) */}
          <div className="flex flex-col md:flex-row rounded-[5px] overflow-hidden bg-white transition-shadow" data-aos="fade-up" style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}>
            <div className="w-full h-full md:h-auto">
              <img src="/moto/teknorot/i1.png" alt="Teknorot 241st ranking" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200"></div>' }} />
            </div>
            <div className="w-full p-6 flex flex-col justify-between">
              <div>
                <span className="text-[#111111] inter-font card-text block mb-4 text-right">24 Jun, 2026</span>
                <h3 className="montserrat-font font-bold text-[#000000] card-title mb-4">
                  We are now ranked 241st among Turkey's 500 Largest Industrial Enterprises, moving up from 257th place.
                </h3>
                <p className="inter-font text-[#000000] font-regular card-text leading-relaxed mb-6 line-clamp-4">
                  We are proud to have advanced from 257th place to 241st place in this year's ranking of Türkiye's Top 500 Industrial Enterprises. This achievement is the...
                </p>
              </div>
              <div className="flex justify-end mt-auto section-text">
                <button className="w-[2em] h-[2em] rounded-full border border-[#66952E] text-[#66952E] flex items-center justify-center hover:bg-[#66952E] hover:text-white transition-colors">
                  <ArrowRight size="1em" />
                </button>
              </div>
            </div>
          </div>

          {/* Small Cards (Right Stack) */}
          <div className="flex flex-col gap-6 lg:gap-10" data-aos="fade-up" data-aos-delay="100">

            {/* Small Card 1 */}
            <div className="flex flex-col sm:flex-row rounded-[5px] overflow-hidden bg-white transition-shadow" style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}>
              <div className="w-full sm:w-[40%] h-[200px] sm:h-auto">
                <img src="/moto/teknorot/i2.png" alt="Rally" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200"></div>' }} />
              </div>
              <div className="w-full sm:w-[60%] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[#111111] inter-font card-text block mb-4 text-right">14 Jul, 2025</span>
                  <h3 className="montserrat-font font-bold text-[#000000] card-title mb-4">
                    Ümit Can Özdemir Shines at Cappadocia Rally
                  </h3>
                </div>
                <div className="flex justify-end mt-auto section-text">
                  <button className="w-[2em] h-[2em] rounded-full border border-[#66952E] text-[#66952E] flex items-center justify-center hover:bg-[#66952E] hover:text-white transition-colors">
                    <ArrowRight size="1em" />
                  </button>
                </div>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="flex flex-col sm:flex-row rounded-[5px] overflow-hidden bg-white transition-shadow" style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}>
              <div className="w-full sm:w-[40%] h-[200px] sm:h-auto">
                <img src="/moto/teknorot/i3.png" alt="Industry Partners" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200"></div>' }} />
              </div>
              <div className="w-full sm:w-[60%] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[#111111] inter-font card-text block mb-4 text-right">15 May, 2025</span>
                  <h3 className="montserrat-font font-bold text-[#000000] card-title mb-4">
                    Teknorot Connects with Industry Partners in Gaziantep
                  </h3>
                </div>
                <div className="flex justify-end mt-auto section-text">
                  <button className="w-[2em] h-[2em] rounded-full border border-[#66952E] text-[#66952E] flex items-center justify-center hover:bg-[#66952E] hover:text-white transition-colors">
                    <ArrowRight size="1em" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-[0.5em] mt-10 section-text">
          <div className="w-[2em] h-[0.25em] bg-[#66952E] transition-all duration-300"></div>
          <div className="w-[2em] h-[0.25em] bg-[#D9D9D9] transition-all duration-300"></div>
        </div>

      </div>
    </section>
  );
}
