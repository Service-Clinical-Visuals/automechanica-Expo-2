import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full bg-section py-14 md:py-20 xl:py-24 2xl:py-28 min-[2560px]:py-36">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-12 items-center">
          {/* Content */}
          <div data-aos="fade-right">
            <span className="section-text block text-primary font-bold uppercase tracking-wide mb-2 2xl:mb-3">
              About Senfineco
            </span>
            <h2 className="section-title text-white exo2-font font-bold leading-tight mb-5 2xl:mb-7">
              Driven by Quality. Powered by Innovation.
            </h2>
            <p className="section-text text-white leading-relaxed mb-4 2xl:mb-6">
              Since 2009 production and wholesale of high-quality car care products, motor oils made in
              Germany and vehicle spare parts for all vehicle brands is our core business. Our globally
              recognized brand SENFINECO Germany, offers an impressive range of over 5000 SKUs for our
              automotive aftermarket customers. We do assist in the development of third-party brands.
            </p>
            <p className="section-text text-white leading-relaxed mb-8 2xl:mb-10">
              SENFINECO is committed to delivering high-quality automotive lubricants, additives, and
              vehicle maintenance solutions designed to meet the evolving needs of the automotive industry.
              With a focus on innovation, reliability, and performance, we offer a comprehensive range of
              products that help protect engines, improve vehicle efficiency, and support long-lasting
              performance for automotive professionals and customers worldwide.
            </p>
            <Button href="#" variant="primary">
              Read More
            </Button>
          </div>

          {/* Image Card */}
          <div className="w-full xl:max-w-[95%] xl:ml-auto" data-aos="fade-left">
            <div className="bg-white rounded-2xl 2xl:rounded-3xl p-3 md:p-4 2xl:p-5 min-[2560px]:p-7">
              <img
                src="/moto/senfineco/abt.webp"
                alt="Senfineco Auto Service Center"
                className="w-full h-auto object-cover rounded-xl"
              />

              <Link
                href="#"
                className="group mt-3 md:mt-4 2xl:mt-5 flex items-center gap-3 md:gap-4 bg-[#f5e3cb] rounded-lg 2xl:rounded-xl px-4 py-3 md:px-5 md:py-4 2xl:px-6 2xl:py-5"
              >
                <img
                  src="/moto/senfineco/Icon.webp"
                  alt=""
                  className="w-[18px] md:w-[20px] 2xl:w-[26px] min-[2560px]:w-[34px] h-auto object-contain shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="section-text text-secondary exo2-font font-bold leading-tight">
                    Technical Expertise
                  </h3>
                  <p className="btn-text text-secondary leading-snug mt-1">
                    Automotive solutions for maintenance, care, and performance.
                  </p>
                </div>
                <ArrowRight
                  className="w-5 h-5 2xl:w-6 2xl:h-6 min-[2560px]:w-8 min-[2560px]:h-8 text-secondary shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
