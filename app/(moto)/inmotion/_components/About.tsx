import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-16 sm:mb-20 items-center">
          {/* Left Column - Image */}
          <div data-aos="fade-right" className="relative w-full h-full lg:col-span-7">
            <img
              src="/moto/inmotion/abt.png"
              alt="Facility"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col gap-6 lg:col-span-5" data-aos="fade-left">
            <h2 className="heading text-[#1A1A1A]">
              The Group
            </h2>

            <p className="content text-[#4A4A4A] leading-[1.6]">
              The group was established in Turin in 1994. The founders previously worked for FAG, acquiring extensive experience in the bearing industry since 1970s. Our production site in Lombardore has been running since 2021. Here we design, manufacture and assemble automatic timing belt and auxiliary belt tensioners on latest-generation automatic lines.
            </p>

            <p className="content text-[#4A4A4A] leading-[1.6]">
              The group was established in Turin in 1994. The founders previously worked for FAG, acquiring extensive experience in the bearing industry since 1970s.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="check-circle mt-1 shrink-0 bg-[#C0121C] rounded-full flex items-center justify-center">
                  <Check className="check-icon text-white" strokeWidth={3} />
                </div>
                <p className="content text-[#4A4A4A] leading-[1.6]">
                  Superior Wear Protection - Advanced additives create a strong protective film that minimizes friction and reduces engine wear, helping extend engine life.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="check-circle mt-1 shrink-0 bg-[#C0121C] rounded-full flex items-center justify-center">
                  <Check className="check-icon text-white" strokeWidth={3} />
                </div>
                <p className="content text-[#4A4A4A] leading-[1.6]">
                  Superior Wear Protection - Advanced additives create a strong protective film that minimizes friction and reduces engine wear, helping extend engine life.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button text="Learn More About Us" showIcon={true} variant="primary" />
            </div>
          </div>
        </div>

        {/* 4 Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" data-aos="fade-up">
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-[0px_3px_8px_0px_#0000003D] flex flex-col items-center text-center">
            <h3 className="subheading text-[#1A1A1A] mb-4 uppercase">
              Quality
            </h3>
            <p className="content text-[#4A4A4A] px-10 py-4 leading-[1.6]">
              We are precise: our products undergo strict controls.
              <br />
              We are empathetic: we are able to understand our customers' needs
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 shadow-[0px_3px_8px_0px_#0000003D] flex flex-col items-center text-center">
            <h3 className="subheading text-[#1A1A1A] mb-4 uppercase">
              Innovation
            </h3>
            <p className="content text-[#4A4A4A] px-10 py-4 leading-[1.6]">
              We are curious: We are passionate about our work, continuously learning, and staying up-to-date with the latest industry developments and innovations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-[0px_3px_8px_0px_#0000003D] flex flex-col items-center text-center">
            <h3 className="subheading text-[#1A1A1A] mb-4 uppercase">
              Customer Service
            </h3>
            <p className="content text-[#4A4A4A] px-10 py-4 leading-[1.6]">
              We are flexible and thoughtful: We adapt to our customers' needs, value every detail, and strive to deliver solutions that exceed their expectations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 shadow-[0px_3px_8px_0px_#0000003D] flex flex-col items-center text-center">
            <h3 className="subheading text-[#1A1A1A] mb-4 uppercase">
              Ethics
            </h3>
            <p className="content text-[#4A4A4A] px-10 py-4 leading-[1.6]">
              We are responsible: Our commitment, passion, and sense of responsibility drive us to deliver quality solutions and set us apart from the competition.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
