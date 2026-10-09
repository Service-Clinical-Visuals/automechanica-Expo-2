import Link from "next/link";
import { ArrowRight } from "lucide-react";

const events = [
  {
    title: "Automechanika Frankfurt 2026 Visit us @ Hall 12, E02",
    description:
      "With more than 6.000 exhibitors visited by over 150,000 tradespeople this exhibition is the place to be in this sector. It is a good platform to find out more about new products, find new suppliers and compare product alternatives. Visit us @ Hall 12, E02",
    image: "/moto/senfineco/e1.webp",
  },
  {
    title: "Automechanika Istanbul 2025 Visit us @ Hall 3, B104",
    description:
      "With more than 2.000 exhibitors visited by over 100,000 tradespeople this exhibition is the place to be in this sector. It is a good platform to find out more about new products, find new suppliers and compare product alternatives. Visit us @ Hall 03, B10",
    image: "/moto/senfineco/e2.webp",
  },
];

export default function Events() {
  return (
    <section className="w-full bg-section-dark py-14 md:py-20 xl:py-24 2xl:py-28 min-[2560px]:py-36">
      <div className="custom-container">
        {/* Heading */}
        <div className="text-center max-w-[1300px] min-[2560px]:max-w-[1800px] mx-auto mb-10 md:mb-12 2xl:mb-16" data-aos="fade-up">
          <span className="section-text block text-primary font-bold uppercase tracking-wide mb-2 2xl:mb-3">
            Events &amp; Exhibitions
          </span>
          <h2 className="section-title text-white exo2-font font-bold leading-tight mb-5 2xl:mb-7">
            Connecting Innovation with the Automotive Industry
          </h2>
          <p className="section-text text-white leading-relaxed">
            Discover SENFINECO&apos;s participation in leading international automotive exhibitions, industry
            trade fairs, and professional events worldwide. Explore our latest product innovations, connect
            with industry experts, strengthen global partnerships, and learn how we continue to expand our
            presence across the automotive industry, showcasing advanced solutions and building lasting
            relationships with partners across diverse international markets.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-6 2xl:gap-10 min-[2560px]:gap-14">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="grid grid-cols-1 sm:grid-cols-2 bg-white overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative w-full aspect-[406/442] sm:aspect-auto sm:h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="relative flex flex-col px-5 py-6 md:px-6 md:py-7 2xl:px-9 2xl:py-10 min-[2560px]:px-12 min-[2560px]:py-14">
                {/* Accent line */}
                <span className="absolute right-4 top-4 md:right-5 2xl:right-7 2xl:top-6 w-[2px] min-[2560px]:w-[3px] h-[44px] md:h-[52px] 2xl:h-[70px] min-[2560px]:h-[96px] bg-primary-dark" />

                <h3 className="card-title text-secondary exo2-font font-semibold leading-snug pr-5 mb-4 2xl:mb-6">
                  {event.title}
                </h3>
                <p className="section-text text-secondary/85 leading-relaxed mb-6 2xl:mb-8">
                  {event.description}
                </p>
                <Link
                  href="#"
                  className="group mt-auto inline-flex w-fit items-center gap-2 btn-text exo2-font font-medium text-primary-dark hover:text-primary transition-colors"
                >
                  Read More
                  <ArrowRight
                    className="w-4 h-4 2xl:w-5 2xl:h-5 min-[2560px]:w-7 min-[2560px]:h-7 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-end mt-10 md:mt-12 2xl:mt-16">
          <Link
            href="#"
            className="btn-text exo2-font font-semibold text-primary underline underline-offset-4 hover:text-white transition-colors"
          >
            View All &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
