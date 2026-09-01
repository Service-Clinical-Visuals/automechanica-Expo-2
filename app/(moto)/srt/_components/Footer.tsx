"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-6 border-t border-gray-200">
      <div className="custom-container px-6 md:px-12 xl:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 2xl:gap-12 mb-16">
          
          {/* Column 1: Logo and About */}
          <div className="xl:col-span-4 flex flex-col items-start">
            <Link href="#" className="mb-6 inline-block">
              <img
                src="/moto/srt/logo.png"
                alt="SRT Logo"
                className="h-25 w-auto object-contain"
              />
            </Link>
            <p className="oxanium section-text text-[#4a4a4a] leading-relaxed max-w-sm">
              SRT Gear Industry manufactures transmission gears, differential gears and axle parts for passenger and light commercial vehicles in Turkey.
            </p>
          </div>

          {/* Column 2: Corporate Links */}
          <div className="xl:col-span-2">
            <h3 className="exo2 font-semibold text-[#2a2a2a] card-title mb-6">Corporate</h3>
            <ul className="space-y-3">
              {["Home", "Corporate", "Products", "Media", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="oxanium section-text text-[#4a4a4a] leading-relaxed   hover:text-[var(--color-primary)] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Areas */}
          <div className="xl:col-span-2">
            <h3 className="exo2 font-semibold text-[#2a2a2a] card-title mb-6">Specialized Areas</h3>
            <ul className="space-y-3">
              {["Axle Parts", "Transmission Gears", "Aftermarket, Vehicles", "Turbos hoses"].map((link) => (
                <li key={link}>
                  <Link href="#" className="oxanium section-text text-[#4a4a4a] leading-relaxed   hover:text-[var(--color-primary)] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="oxanium section-text text-[#4a4a4a] leading-relaxed   hover:text-[var(--color-primary)] transition-colors underline underline-offset-2">
                  See More&gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="xl:col-span-2">
    <h3 className="exo2 font-semibold text-[#2a2a2a] card-title mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <img src="/moto/srt/f1.png" alt="Phone" />
                <span className="oxanium section-text text-[#4a4a4a] leading-relaxed ">0090 332 239 0221</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/srt/f2.png" alt="Location" />
                <span className="oxanium section-text text-[#4a4a4a] leading-relaxed ">
                  3. Organize Sanayi Bölgesi Vali İhsan Dede Caddesi No:8, Konya, Selçuklu 42050, TR
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div className="xl:col-span-2">
        <h3 className="exo2 font-semibold text-[#2a2a2a] card-title mb-6">Social Media Links</h3>
            <div className="flex items-center">
              
                <img src="/moto/srt/f3.png" alt="Linkedin" />
              
                <img src="/moto/srt/f4.png" alt="Instagram" />
              
                <img src="/moto/srt/f5.png" alt="Facebook" />
              
                <img src="/moto/srt/f6.png" alt="Youtube" />
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>
        <div className="text-center">
          <p className="oxanium section-text text-[#4a4a4a] leading-relaxed ">
            Copyright © 2026 Serhat Auto - All right reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
