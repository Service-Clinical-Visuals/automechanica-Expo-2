"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Partners() {
  return (
    <section className="py-16 xl:py-20 min-[2100px]:py-28 min-[3800px]:py-40 bg-[#FAFAFA] relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#000000] montserrat-font font-bold mb-4">
            Blog & Insights
          </h2>
          <p className="inter-font text-[#000000] font-regular section-text leading-relaxed w-full xl:w-[90%] 2xl:w-[85%] mx-auto">
            Explore the latest news, product updates, industry insights, technical information, and expert tips from BendPak. Discover useful knowledge designed to help automotive professionals improve workshop efficiency, understand new technologies, and stay informed about developments across the automotive service industry.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16 w-full mx-auto xl:max-w-[85%] 2xl:max-w-[85%]">

          {/* Large Card (Left) */}
          <div className="flex flex-col xl:flex-row rounded-[5px] overflow-hidden bg-white transition-shadow h-full" data-aos="fade-up" style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}>
            <div className="w-full xl:w-1/2 relative min-h-[250px] xl:min-h-full">
              <img src="/moto/bendpak/insight1.png" alt="BendPak Opens Donald R. Henthorn" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="absolute inset-0 w-full h-full bg-gray-200"></div>' }} />
            </div>
            <div className="w-full xl:w-1/2 p-6 xl:p-8 flex flex-col flex-grow">
              <span className="text-[#111111] card-text inter-font block mb-4 text-right">August 4, 2026</span>
              <h3 className="montserrat-font card-title font-semibold text-[#000000] leading-relaxed mb-4 pr-10">
                BendPak Opens Donald R. Henthorn Industrial Complex in Alabama
              </h3>
              <p className="inter-font text-[#000000] font-regular card-text leading-relaxed mb-6">
                With a nod to the past while building for the future, BendPak Inc. has named its monumental new Alabama development the Donald R. Henthorn Industrial Complex in honor of its late founder. Phase 1 of construction....
              </p>
              <div className="flex justify-end mt-auto">
                <button className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#FFDB00] text-[#FFDB00] flex items-center justify-center hover:bg-[#FFDB00] hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Small Cards (Right Stack) */}
          <div className="flex flex-col gap-6 xl:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16 h-full" data-aos="fade-up" data-aos-delay="100">

            {/* Small Card 1 */}
            <div className="flex flex-col sm:flex-row rounded-[5px] overflow-hidden bg-white transition-shadow h-full" style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}>
              <div className="w-full sm:w-[45%] h-[200px] sm:h-auto">
                <img src="/moto/bendpak/insight2.png" alt="Golf Score" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200"></div>' }} />
              </div>
              <div className="w-full sm:w-[55%] p-6 xl:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[#111111] card-text inter-font block mb-4 text-right">July 27, 2026</span>
                  <h3 className="montserrat-font card-title font-semibold text-[#000000] leading-tight mb-4">
                    10 Science-backed Ways to Lower Your Golf Score and Stay Safe on Hot Days
                  </h3>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#FFDB00] text-[#FFDB00] flex items-center justify-center hover:bg-[#FFDB00] hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="flex flex-col sm:flex-row rounded-[5px] overflow-hidden bg-white transition-shadow h-full" style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}>
              <div className="w-full sm:w-[45%] h-[200px] sm:h-auto bg-[#DFF832] flex items-center justify-center">
                <img src="/moto/bendpak/insight3.png" alt="QuickJack Savings" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-[#EAF020] flex items-center justify-center font-bold text-black text-center p-4">MASSIVE<br/>QuickJack Savings<br/>20% OFF</div>' }} />
              </div>
              <div className="w-full sm:w-[55%] p-6 xl:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[#111111] card-text inter-font block mb-4 text-right">February 16, 2026</span>
                  <h3 className="montserrat-font card-title font-semibold text-[#000000] leading-tight mb-4">
                    MASSIVE QuickJack Savings Are Here For One Day Only!
                  </h3>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#FFDB00] text-[#FFDB00] flex items-center justify-center hover:bg-[#FFDB00] hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="flex justify-end mt-6 w-full mx-auto xl:max-w-[85%] 2xl:max-w-[75%]">
          <Link href="#" className="text-[#E30613] section-text inter-font font-regular hover:underline">View All</Link>
        </div>

      </div>
    </section>
  );
}
