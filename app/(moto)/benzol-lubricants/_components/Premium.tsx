import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section className="bg-[#1A1A1A] py-16 md:py-20">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px] flex flex-col items-center">
          {/* Heading */}
          <div className="text-center" data-aos="fade-up">
            <h2
              className="text-white font-bold text-[28px] md:text-[32px]"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              360° Product Experience
            </h2>
            <span className="mx-auto mt-3 mb-6 block h-[3px] w-[130px] bg-[#D8A657]" />

            <p className="content-white text-center max-w-[1200px] mx-auto">
              Explore BENZOL Lubricants Industries Engine Oils through an immersive 360° product
              view. Discover the product packaging, design, specifications, and key features from
              every angle while experiencing the quality, advanced formulation, and reliable
              performance behind the lubricant range for modern automotive applications and
              demanding driving conditions, with trusted protection and consistent performance on
              every journey.
            </p>
          </div>

          {/* 360 video / placeholder */}
          <div
            className="relative mt-10 w-[80%] aspect-video overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="150"
          >

            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          
          </div>
        </div>
      </Container>
    </section>
  );
}
