"use client";

import { Eye, Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";

const certificates = [
  { id: 1, image: "/moto/meha/certificates/1.png" },
  { id: 2, image: "/moto/meha/certificates/2.png" },
  { id: 3, image: "/moto/meha/certificates/3.png" },
  { id: 4, image: "/moto/meha/certificates/4.png" },
  { id: 5, image: "/moto/meha/certificates/5.png" },
  { id: 6, image: "/moto/meha/certificates/6.png" },
];

export default function Certification() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="certifications">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-[70%] mx-auto mb-14" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-4">Quality Certificates</h2>
          <p className="content">
            Meha Automotive holds an ISO 9001:2015 Quality Certificate, ensuring that its
            production processes meet established quality standards. The company also holds the
            required certification to sell its products in Russia, supporting its international
            market presence.
          </p>
        </div>

        {/* Certificates Slider */}
        <div data-aos="fade-up">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".certification-pagination",
              bulletClass: "inline-block w-2.5 h-2.5 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all duration-300",
              bulletActiveClass: "!w-8 !bg-primary",
            }}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            className="w-full mb-8!"
          >
            {certificates.map((certificate) => (
              <SwiperSlide key={certificate.id}>
                <div className="group relative w-full aspect-3/4 bg-[#F8F9FA] border border-[#EAEAEA] overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={`Meha Automotive certificate ${certificate.id}`}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View certificate"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Eye size={18} />
                    </a>
                    <a
                      href={certificate.image}
                      download
                      aria-label="Download certificate"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="certification-pagination flex items-center justify-center" />
        </div>
      </Container>
    </section>
  );
}
