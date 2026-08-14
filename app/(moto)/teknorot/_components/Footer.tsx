import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative text-white pt-16 mt-auto overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/moto/teknorot/bg2.png")' }}
    >
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">

          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-6 lg:col-span-5" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/teknorot/flogo.png"
                alt="Teknorot Logo"
                className="h-auto w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-2xl montserrat-font tracking-wide">TEKNOROT</span>' }}
              />
            </Link>
            <p className="text-white/90 inter-font section-text leading-relaxed lg:pr-6">
              Teknorot is a leading manufacturer of steering and suspension components, delivering high-quality automotive aftermarket solutions to customers in more than 90 countries. With advanced manufacturing facilities, strong R&D capabilities, and over 12,000 product references, Teknorot combines innovation, precision, and reliability to serve the global automotive industry.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="section-title font-semibold montserrat-font text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white/90 inter-font section-text">
              <li><Link href="#" className="hover:text-[#66952E] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#66952E] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#66952E] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#66952E] transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Head office */}
          <div className="flex flex-col gap-6 lg:col-span-3" data-aos="fade-up" data-aos-delay="150">
            <h4 className="section-title font-semibold montserrat-font text-white">Head office</h4>
            <ul className="flex flex-col gap-4 text-white/90 inter-font section-text">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+90 (212) 373 90 00</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@teknorot.com" className="hover:text-[#66952E] transition-colors">info@teknorot.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Cd. No: 4B, B Ofis Blok,<br />Kat:5 Ofis:85, 34485<br />Sarıyer / İstanbul /<br />TÜRKİYE</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="section-title font-semibold montserrat-font text-white">Factory</h4>
            <ul className="flex flex-col gap-4 text-white/90 inter-font section-text">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+90 (380) 553 73 33</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@teknorot.com" className="hover:text-[#66952E] transition-colors">info@teknorot.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Organize Sanayi Bölgesi<br />Beyköy Beldesi İstiklal<br />OSB 1 Mah. 1.Cad. No:24<br />Beyköy / Düzce / TÜRKİYE</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Area: Socials & Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-10" data-aos="fade-up">

          {/* Social Icons */}
          <div className="flex items-center gap-6 mb-8 lg:mb-0">
            <Link href="#" className="text-white hover:text-[#66952E] transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#66952E] transition-colors" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#66952E] transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#66952E] transition-colors" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </Link>
          </div>

          {/* Newsletter Section */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <span className="montserrat-font font-semibold text-[24px] hidden lg:block">Subscribe to Newsletter :</span>
            <div className="flex w-full lg:w-[400px]">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="w-full h-[45px] px-4 text-black bg-white inter-font focus:outline-none"
              />
              <button className="h-[45px] px-6 bg-[#66952E] text-white font-medium inter-font hover:bg-[#527a24] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-white text-black py-4">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="inter-font section-text text-[#000000]">
            © 2026 Teknorot - Ön Takım ve Süspansiyon Parçaları
          </p>
          <div className="flex items-center gap-6 inter-font section-text text-[#404040]">
            <Link href="#" className="hover:text-[#000000] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#000000] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
