"use client";
import Link from "next/link";
import Container from "./Container";
import { Calendar } from "lucide-react";
const newsItems = [
  {
    image: "/moto/fleetguard/n1.png",
    date: "March 2, 2026",
    title:
      "Love's Travel Stops Partners Exclusively With Fleetguard to Offer Advanced Filtration Solutions",
    desc: "Aftermarket truck products available 24/7 across Love's network, supporting performance and uptime.",
    link: "#",
  },
  {
    image: "/moto/fleetguard/n2.png",
    date: "April 08, 2025",
    title: "Fleetguard Showcases NanoNet® N3 Technology at Automec 2025",
    desc: "Fleetguard showcases NanoNet® N3 technology at Automec 2025, delivering advanced filtration and longer service life.",
    link: "#",
  },
  {
    image: "/moto/fleetguard/n3.png",
    date: "April 21, 2025",
    title: "Fleetguard Extends NASCAR Sponsorship for 2025",
    desc: "Fleetguard extends its NASCAR partnership for 2025, sponsoring five races with Love's No. 34 team.",
    link: "#",
  },
];
export default function News() {
  return (
    <section className="relative w-full py-16 md:py-24 2xl:py-32 4xl:py-48 bg-white" id="news">

      <Container>

        {/* Heading */}
        <div className="text-center mb-10 2xl:mb-16 4xl:mb-24" data-aos="fade-up">

          <h2 className="section-title font-oswald font-semibold mb-4 font-semibold text-[#272727]">
            Latest News & Updates
          </h2>
          <p className="section-text font-rubik font-normal xl:max-w-[60%]  mx-auto text-[#4B5563]">

            Stay updated with the latest news, partnerships, product
            developments, and innovations from Fleetguard and the filtration
            industry.
          </p>
        </div>
        {/* News Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8 4xl:gap-12"
        >

          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-[#EAEAEA] flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="w-full aspect[4/3] p-4  4xl:p-6 overflow-hidden relative shrink-0">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="px-6 py-3 4xl:px-12 4xl:py-10 flex flex-col flex-grow">

                <div className="flex items-center gap-2 text-gray-500 mb-4 2xl:mb-6 4xl:mb-8">

                  <Calendar className="w-4 h-4 2xl:w-5 2xl:h-5 4xl:w-6 4xl:h-6" strokeWidth={2} />
                  <span className="card-text font-medium text-[#4B5563]">{item.date}</span>
                </div>
                <h3 className="card-title font-oswald font-semibold text-[#272727] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="card-text font-rubik font-normal text-[#4B5563] mb-6 leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <div className="flex justify-end mt-auto">

                  <Link
                    href={item.link}
                    className="text-primary font-semibold underline hover:underline btn-text"
                  >

                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
