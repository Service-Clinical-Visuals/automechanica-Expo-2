import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Brake() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden ">
      <div className="absolute inset-0">
        <img
          src="/moto/inmotion/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <Container className="relative z-10">
        <div className="relative z-10 flex flex-col items-center text-center max-w-[70%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="heading text-white mb-6">
            360° Product Experience
          </h2>
          <p className="content text-white leading-[1.6]">
            Explore In Motion U-joints and Timing Belt Kits through an immersive 360° product experience designed to showcase every important detail. View the product from multiple angles and examine its design, construction, components, engineering features, and overall quality. Discover the precision manufacturing and durable construction behind each solution, while gaining a closer look at the products developed to meet demanding automotive requirements and deliver reliable performance across diverse vehicle applications.
          </p>
        </div>

        <div className="relative z-10 w-full flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full max-w-[85%] aspect-video relative overflow-hidden flex items-center justify-center">
            <DynamicVideoPlayer type="360" className="absolute aspect-video inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
