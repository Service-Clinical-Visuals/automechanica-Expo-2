import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Solutions() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden ">
      <div className="absolute inset-0">
        <img
          src="/moto/inmotion/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[70%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="heading text-white mb-6">U-Joints & Timing Belt Kits</h2>
          <p className="content text-white leading-[1.6] mb-4">
            In Motion delivers a comprehensive range of U-joints and timing belt kits engineered for smooth power transmission, precise operation, and dependable vehicle performance. Designed for demanding automotive applications, our components combine durable construction, accurate fitment, advanced engineering, and consistent performance, ensuring efficient and reliable vehicle operation across diverse driving conditions and applications.
          </p>
        </div>

        <div className="relative z-10 w-full flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full max-w-[85%] aspect-video relative overflow-hidden flex items-center justify-center">
            {/* VIDEO CLIP - 01 */}
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
