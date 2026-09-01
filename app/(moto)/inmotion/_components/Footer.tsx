import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const corporateLinks = ["Home", "Automotive", "Industrial", "Super Precision", "Production"];
  const productsLinks = [
    "Wheel bearing kits",
    "Automatic timing belt tensioners",
    "Automatic auxiliary belt tensioners",
    "Timing belt tensioners",
  ];

  return (
    <footer className="bg-[#7B7B7B] text-white">
      <Container>
        {/* Main footer */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[2fr_1fr_1.5fr_1.5fr_2fr] gap-x-6 gap-y-10">

          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1 flex flex-col items-start gap-8 xl:mr-10" data-aos="fade-up">
            <div className="flex items-center justify-center">
              <img src="/moto/inmotion/logo.png" alt="In Motion Automotive" className="h-30 w-auto object-contain drop-shadow-md" />
            </div>
            <p className="content text-white leading-[1.6]">
              The group was established in Turin in 1994. The founders previously worked for FAG, acquiring extensive experience in the bearing industry since 1970s.
            </p>
          </div>

          {/* Corporate */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="subheading-white text-white mb-6">Corporate</p>
            <ul className="space-y-4 content text-white">
              {corporateLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div data-aos="fade-up" data-aos-delay="150">
            <p className="subheading-white text-white mb-6">Corporate</p>
            <ul className="space-y-4 content text-white">
              {productsLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="font-semibold underline hover:text-gray-300 transition-colors">
                  See More
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 md:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <p className="subheading-white text-white mb-6">Corporate</p>
            <ul className="space-y-4 content text-white">
              <li className="flex items-start gap-3">
                <Phone size={18} className="footer-icon shrink-0 text-[#C0121C] mt-1" />
                +39 0119956140
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="footer-icon shrink-0 text-[#C0121C] mt-1" />
                inmotion@inmotion.srl
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="footer-icon shrink-0 text-[#C0121C] mt-1" />
                <span className="leading-[1.6]">
                  In Motion S.R.L.<br />
                  Via Del Boschetto 2/15 - 2/17<br />
                  10040 Lombardore (TO)<br />
                  P.IVA IT 11812740014
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1" data-aos="fade-up" data-aos-delay="300">
            <p className="subheading-white text-white mb-6">Corporate</p>
            <p className="content text-white mb-6 leading-[1.6]">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from inmotion.
            </p>
            <div className="flex bg-white rounded-[4px] border border-gray-200 shadow-sm p-1">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 text-black content font-regular px-3 py-2 outline-none"
              />
              <button className="bg-[#C0121C] rounded-[3px] px-3 py-2 hover:bg-red-800 transition-colors shrink-0 flex items-center justify-center">
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/25 py-6">
          <p className="text-center font-regular text-white content">
            Copyright © 2026 In Motion. - All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
