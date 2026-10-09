import React from "react";
import Container from "./Container";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] pt-16 md:pt-20 pb-8 border-t border-gray-200">
      <Container>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

            {/* Column 1: Logo & Description */}
            <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-10">
              <img
                src="/moto/gli-therm/footer-logo.webp"
                alt="GLITHERM"
                className="h-auto w-auto object-contain mb-6 self-start"
              />
              <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed inter-font">
                GLITHERM is a Polish manufacturer and supplier of specialty chemicals, offering glycol-based fluids, automotive products, and industrial raw materials. The company combines product development, quality control, technical support, and customized solutions to meet diverse industry needs.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 flex flex-col">
              <h4 className="font-bold text-[#111111] text-[24px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-6 bricolage-font">Quick Links</h4>
              <ul className="flex flex-col gap-4 inter-font">
                <li><a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">Home</a></li>
                <li><a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">Products</a></li>
                <li><a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">Corporate</a></li>
                <li><a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="lg:col-span-2 flex flex-col">
              <h4 className="font-bold text-[#111111] text-[24px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-6 bricolage-font">Products</h4>
              <ul className="flex flex-col gap-4 inter-font">
                <li><a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">GLICAR DOT-4 brake fluid</a></li>
                <li><a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">GLICAR DOT 5.1 brake fluid</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="font-bold text-[#111111] text-[24px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-6 bricolage-font">Contact</h4>
              <ul className="flex flex-col gap-5 inter-font">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F14646] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed">
                    11 Rozwojowa Street,<br />
                    44-338 Jastrzębie-Zdrój<br />
                    Poland
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F14646] shrink-0" strokeWidth={1.5} />
                  <span className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px]">+48 733 525 533</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F14646] shrink-0" strokeWidth={1.5} />
                  <span className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px]">info@glitherm.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 inter-font">
            <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px]">
              Copyright 2026 © GLI-THERM Sp. z o.o.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">Terms & Conditions</a>
              <a href="#" className="text-[#555555] hover:text-[#F14646] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
