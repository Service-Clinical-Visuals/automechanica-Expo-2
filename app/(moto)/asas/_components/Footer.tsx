"use client";

import React from "react";

const quickLinks = ["Home", "About", "Products", "Technology", "Catalog", "Contact"];

export default function Footer() {
  return (
    <footer className="w-full font-['Rubik'] overflow-x-clip" id="footer">
      <div className="bg-[#031B33] pt-14 pb-12">
        <div className="custom-container max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.2fr_auto_0.8fr_1.1fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* 1. Logo + Blurb */}
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-[320px]"
          >
            <img
              src="/moto/asas/logo.png"
              alt="ASAS Filter"
              className="w-[72px] h-[72px] object-contain mb-5 hover:opacity-90 transition-opacity duration-200"
            />
            <p className="text-white/90 text-[16px] leading-relaxed font-normal font-['Rubik']">
              ASAS FILTER provides innovative and reliable automotive
              filtration solutions with a focus on quality and customer
              satisfaction.
            </p>
          </div>

          {/* 2. Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-white/20 self-stretch my-2" />

          {/* 3. Quick Links */}
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <h3 className="font-bold text-white text-[22px] mb-5 font-['Oswald'] tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-white/90 text-[16px] font-normal font-['Rubik'] hover:text-accent hover:translate-x-1 transition-all duration-200 text-left cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <h3 className="font-bold text-white text-[22px] mb-5 font-['Oswald'] tracking-wide">
              Contact
            </h3>
            <div className="flex items-start gap-3 mb-3 group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0 mt-0.5 text-white"
              >
                <path
                  d="M12 22C12 22 20 15.5 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.5 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <p className="text-white/90 text-[16px] font-normal font-['Rubik'] leading-snug group-hover:text-white transition-colors duration-200">
                Issume Mah. 39. Cadde No:2/3<br />BELEN – HATAY – TURKEY
              </p>
            </div>
            <div className="flex items-center gap-3 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white flex-shrink-0">
                <path
                  d="M3 5C3 14.3888 10.6112 22 20 22L22 18L17 16L15 18C12 17 7 12 6 9L8 7L6 2L2 3C2 3.68717 2.02931 4.35 3 5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
              <a href="tel:+903264561560" className="text-white/90 text-[16px] font-normal font-['Rubik'] hover:text-accent transition-colors duration-200">
                +90 (326) 456 15 60
              </a>
            </div>
          </div>

          {/* 5. Newsletter */}
          <div 
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <h3 className="font-bold text-white text-[22px] mb-5 font-['Oswald'] tracking-wide">
              Newsletter
            </h3>
            <p className="text-white/90 text-[16px] font-normal font-['Rubik'] mb-5 leading-relaxed">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col gap-3">
              <input
                type="email"
                placeholder="Subscribe with us...."
                className="bg-[#EFEFEF] rounded px-4 py-2.5 text-[16px] text-[#4B5563] placeholder:text-[#4B5563] outline-none w-full font-normal font-['Rubik'] focus:ring-2 focus:ring-accent transition-all"
              />
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Preserved 18px per Figma Spec */}
      <div className="w-full bg-white py-4 border-t border-gray-100">
        <p className="text-[#202020] text-[18px] leading-[26px] font-normal text-center font-['Lato']">
          © 1972-2026 Asas Filter, all rights reserved.
        </p>
      </div>
    </footer>
  );
}