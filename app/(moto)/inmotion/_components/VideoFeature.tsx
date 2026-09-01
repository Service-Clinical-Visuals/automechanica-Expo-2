import { Check } from "lucide-react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function VideoFeature() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/moto/inmotion/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <Container className="relative z-10">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-[75%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="heading text-white mb-6">Complete Timing Belt Kit Solutions</h2>
          <p className="content text-white leading-[1.6]">
            In Motion Timing Belt Kits provide essential components engineered for precise engine timing, smooth synchronization, and dependable performance. Designed as complete solutions for demanding automotive applications, these kits combine reliable components and durable construction to support efficient engine operation, accurate timing, and long-term performance.
          </p>
        </div>

        <hr className="border-white mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left: Video Placeholder */}
          <div className="lg:col-span-8 relative w-full h-full aspect-video rounded-lg overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col item-center justify-center text-white lg:col-span-4" data-aos="fade-left">
            <h3 className="heading2 mb-6 leading-[1.2]">
              Reliable Timing Belt Solutions
            </h3>

            <hr className="border-white/25 mb-6" />

            <p className="content mb-8">
              In Motion Timing Belt Kits deliver precise engine synchronization, dependable performance, and long-lasting reliability. They ensure smooth operation and consistent timing efficiency.
            </p>

            <ul className="space-y-6 mb-8">
              <li className="flex gap-4">
                <div className="bg-white text-[#7B7B7B] rounded-full p-1 h-fit shrink-0 mt-1">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="content font-regular leading-[1.5] text-white">
                  <strong>Precise Engine Timing</strong> – Ensures accurate synchronization of essential engine components for smooth and efficient operation.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-white text-[#7B7B7B] rounded-full p-1 h-fit shrink-0 mt-1">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="content font-regular leading-[1.5] text-white/90">
                  <strong>Complete Kit Solution</strong> – Includes essential components required for reliable timing system performance.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-white text-[#7B7B7B] rounded-full p-1 h-fit shrink-0 mt-1">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="content font-regular leading-[1.5] text-white/90">
                  <strong>Reliable Durability</strong> – Built with quality components to deliver consistent performance under demanding driving conditions.
                </p>
              </li>
            </ul>

            <hr className="border-white/25 mb-6" />

            <p className="content font-regular text-white mb-8 leading-[1.6]">
              Built with quality components, In Motion Timing Belt Kits ensure accurate engine timing, reliable operation, and consistent performance.
            </p>

            <Button text="View Timing Belt Kits" showIcon={true} variant="primary" />

          </div>
        </div>
      </Container>
    </section >
  );
}
