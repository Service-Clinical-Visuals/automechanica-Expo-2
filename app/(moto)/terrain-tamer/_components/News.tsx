import { Calendar } from "lucide-react";
import Link from "next/link";

interface Article {
  image: string;
  date: string;
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    image: "/moto/terrain/news1.jpg",
    date: "October 18, 2024",
    title: "Terrain Tamer Purchases Steve Irwin's Landcruiser",
    description:
      "Terrain Tamer has purchased Steve Irwin's iconic 1982 HJ47 Troop Carrier, formerly used at Australia Zoo. The Crocodile Hunter Troopy features a rich history and Terrain Tamer suspension.",
  },
  {
    image: "/moto/terrain/news2.jpg",
    date: "October 1, 2024",
    title: "TERRAIN TAMER OPENS IN THE UNITED STATES",
    description:
      "Terrain Tamer expands into the USA with a warehouse in Stockton, California, marking its 19th location and 9th international branch. This strengthens its North American 4WD presence.",
  },
];

export default function News() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 bg-white">
      <div className="custom-container flex flex-col gap-8 sm:gap-12 xl:gap-16">
        {/* Heading */}
        <div
          className="flex flex-col items-center gap-3 sm:gap-4 text-center max-w-[614px] mx-auto px-2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
        >
          <h2
            className="section-title font-semibold text-[#272727] leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            data-aos-easing="ease-out-cubic"
          >
            Latest News &amp; Updates
          </h2>

          <p
            className="section-text font-normal text-[#4B5563]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-out-cubic"
          >
            Stay updated with the latest news, products, and innovations
            from Terrain Tamer and the 4WD industry.
          </p>
        </div>

        {/* Article cards */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6 xl:gap-8 2xl:gap-10">
          {articles.map((article, index) => (
            <div
              key={article.title}
              className="group flex flex-col md:flex-row gap-4 sm:gap-5 bg-white border border-[#E4E4E4] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-[5px] p-4 sm:p-5"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={450 + index * 180}
              data-aos-easing="ease-out-cubic"
            >
              {/* Image */}
              <div className="w-full md:w-[220px] lg:w-[260px] xl:w-[220px] 2xl:w-[300px] flex-shrink-0 aspect-[350/318] rounded-[5px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-2.5 sm:gap-3 min-w-0">
                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar
                    size={20}
                    className="flex-shrink-0"
                    color="#FECC00"
                  />

                  <span className="section-text font-normal text-[#FECC00]">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="card-title font-semibold text-[#272727] leading-snug">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="section-text font-normal text-[#4B5563]">
                  {article.description}
                </p>

                {/* Read More */}
                <Link
                  href="#"
                  className="link-text font-semibold text-[#272727] underline w-fit"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}