"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#000000] text-white pt-12 md:pt-16 xl:pt-[80px] pb-8 overflow-hidden font-sans">
      <div className="custom-container px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-12 gap-y-10 xl:gap-y-0 gap-x-8 2xl:gap-x-12 pb-12 xl:pb-[60px]">
          
          {/* Brand Info & Logo Column */}
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
            className="sm:col-span-2 md:col-span-3 xl:col-span-4 flex flex-col pr-0 xl:pr-4"
          >
            <div className="w-[280px] sm:w-[340px] xl:w-[380px] h-[70px] sm:h-[80px] xl:h-[90px] mb-5 sm:mb-[25px] relative">
              <img 
                src="/moto/pek/footer_logo.png" 
                alt="Pek Technic Engineering Works Logo" 
                className="w-full h-full object-contain object-left"
              />
            </div>

            <p className="section-text font-normal text-white max-w-full xl:max-w-[516px] leading-relaxed text-sm sm:text-base">
              Pek Technic is an integrated manufacturer specializing in automotive spare parts, aluminum casting, machining, and pipe forming solutions. With modern production facilities and international certifications, the company delivers high-quality, precision-engineered components for global automotive and industrial applications.
            </p>
          </div>

          {/* Quick Links Column */}
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="xl:col-span-2 flex flex-col"
          >
            <h4 className="card-text font-bold text-white text-base sm:text-lg mb-4 sm:mb-[20px]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 sm:gap-[14px]">
              <li>
                <Link href="/moto/pek" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#vehicles" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Vehicle
                </Link>
              </li>
              <li>
                <Link href="#categories" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Category
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="xl:col-span-2 flex flex-col"
          >
            <h4 className="card-text font-bold text-white text-base sm:text-lg mb-4 sm:mb-[20px]">
              Products
            </h4>
            <ul className="flex flex-col gap-3 sm:gap-[14px]">
              <li>
                <Link href="#timing-tensioner" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Timing Tensioner
                </Link>
              </li>
              <li>
                <Link href="#turbo-repair" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Turbo Repair Kit
                </Link>
              </li>
              <li>
                <Link href="#oil-spray" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Oil Spray Jets
                </Link>
              </li>
              <li>
                <Link href="#holding-bracket" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Injector Holding Bracket
                </Link>
              </li>
              <li>
                <Link href="#repair-kit" className="section-text text-white hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base">
                  Injector Repair Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="xl:col-span-2 flex flex-col"
          >
            <h4 className="card-text font-bold text-white text-base sm:text-lg mb-4 sm:mb-[20px]">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 sm:gap-[16px]">
              <li className="flex items-start gap-3 sm:gap-[12px]">
                <div className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] mt-0.5 flex-shrink-0">
                  <img src="/moto/pek/loc.png" alt="Location" className="w-full h-full object-contain" />
                </div>
                <span className="section-text font-normal text-white leading-relaxed text-sm sm:text-base">
                  B.O.SB Bakır ve Pirinç San. Sitesi, Çiğdem Cd. No:3 A Blok Kat:-2, 34524 Beylikdüzü/İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3 sm:gap-[12px]">
                <div className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] flex-shrink-0">
                  <img src="/moto/pek/phn.png" alt="Phone" className="w-full h-full object-contain" />
                </div>
                <span className="section-text font-normal text-white text-sm sm:text-base">
                  (0212) 855 21 01
                </span>
              </li>
              <li className="flex items-center gap-3 sm:gap-[12px]">
                <div className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] flex-shrink-0">
                  <img src="/moto/pek/mail.png" alt="Email" className="w-full h-full object-contain" />
                </div>
                <span className="section-text font-normal text-white text-sm sm:text-base">
                  info@pektechnic.com
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className="xl:col-span-2 flex flex-col"
          >
            <h4 className="card-text font-bold text-white text-base sm:text-lg mb-4 sm:mb-[20px]">
              Follow Us On
            </h4>
            <div className="flex items-center gap-4 sm:gap-[20px]">
              <Link href="https://facebook.com" target="_blank" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] opacity-100 hover:scale-110 transition-all duration-300">
                <img src="/moto/pek/fb.png" alt="Facebook" className="w-full h-full object-contain" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] opacity-100 hover:scale-110 transition-all duration-300">
                <img src="/moto/pek/twit.png" alt="Twitter" className="w-full h-full object-contain" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] opacity-100 hover:scale-110 transition-all duration-300">
                <img src="/moto/pek/link.png" alt="LinkedIn" className="w-full h-full object-contain" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] opacity-100 hover:scale-110 transition-all duration-300">
                <img src="/moto/pek/insta.png" alt="Instagram" className="w-full h-full object-contain" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full border-t border-white/20 pt-5 pb-3 px-4 flex items-center justify-center text-center">
        <p className="section-text font-normal text-white text-xs sm:text-sm">
          © 2026 Pektechnic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}