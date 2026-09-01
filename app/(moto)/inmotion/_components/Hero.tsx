import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';
import Button from './Button';

export default function Herobanner() {
  return (
    <div>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="pt-[104px] bg-white margin-top-hero w-[92%] mx-auto">
        <div className="rounded-[20px] sm:rounded-[20px] relative w-full aspect-video md:aspect-video min-h-[calc(100vh-120px)] max-h-[calc(110vh-120px)] overflow-hidden">
          {/* ================================================= */}
          {/* VIDEO / IMAGE BACKGROUND */}
          {/* ================================================= */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#4a4a4a] to-[#1a1a1a]">
            {/* FUTURE VIDEO */}
            <DynamicVideoPlayer type="banner" className="absolute aspect-video top-0 left-0 w-full h-full object-cover" />
            {/* <div className="absolute inset-0 bg-black/10"></div> */}
          </div>

          {/* ================================================= */}
          {/* HERO CONTENT */}
          {/* ================================================= */}

          <div className="relative z-10 flex h-full w-full items-end">
            <div className="w-full px-6 sm:px-8 lg:px-14 pb-8 sm:pb-16 md:pb-20 lg:pb-40">
              <div className="max-w-[100%]">
                {/* HEADING */}
                <div data-aos="fade-up">
                  <h2 className="heading-white text-white font-semibold! leading-[1.1]! mb-4">
                    Engineered For Every Journey
                  </h2>
                  <p className="content-white text-white mb-8 leading-[1.6]">
                    In Motion delivers precision-engineered automotive components <br className="hidden lg:block" />for reliable performance and durability.
                  </p>
                  <Button text="Discover More" showIcon={true} variant="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
