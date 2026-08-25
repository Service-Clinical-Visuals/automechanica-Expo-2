"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full font-body">
      {/* Top Footer */}
      <div className="bg-[#111111] pt-16 pb-12">
        <div className="custom-container px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-12">
            
            {/* Column 1: Logo and Text (Span 3) */}
            <div className="xl:col-span-3 flex flex-col">
              <Link href="#" className="mb-6 inline-block">
                <img
                  src="/moto/eren/footerlogo.png"
                  alt="Eren Brake Linings"
                  className="w-40 h-auto object-contain"
                />
              </Link>
              <p className="text-[#ffffff] section-text inter leading-relaxed max-w-md">
                Eren Brake specializes in high-quality brake pads and linings, delivering reliable braking solutions with a strong focus on quality, performance, and customer satisfaction.
              </p>
            </div>

            {/* Column 2: Quick Links (Span 2) */}
            <div className="xl:col-span-2 flex flex-col xl:pl-20">
              <h4 className="barlowCondensed font-semibold text-white section-subtitle mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[#ffffff] section-text inter hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="text-[#ffffff] section-text inter hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-[#ffffff] section-text inter hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#" className="text-[#ffffff] section-text inter hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Us (Span 3) */}
            <div className="xl:col-span-2 flex flex-col">
              <h4 className="barlowCondensed font-semibold text-white section-subtitle mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                  <span className="text-[#ffffff] section-text inter">+90(232) 877 04 12 pbx</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                  <span className="text-[#ffffff] section-text inter">info@erenbalata.com.tr</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                  <span className="text-[#ffffff] section-text inter leading-relaxed">
                    13 Sokak No:6 Kemalpasa<br/>
                    Organize Sanayi Bolgesi<br/>
                    Kemalpasa / Izmir Turkey
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Social (Span 1) */}
            <div className="xl:col-span-2 flex flex-col">
            <h4 className="barlowCondensed font-semibold text-white section-subtitle mb-6">Social</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><img src="/moto/eren/f1.png" className="w-6 h-6" /></Link>
                {/* using Twitter icon for X placeholder */}
                <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><img src="/moto/eren/f2.png" className="w-6 h-6" /></Link>
                <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><img src="/moto/eren/f3.png" className="w-6 h-6" /></Link>
                <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><img src="/moto/eren/f4.png" className="w-6 h-6" /></Link>
              </div>
            </div>

            {/* Column 5: Newsletter (Span 3) */}
            <div className="xl:col-span-3 flex flex-col">
           <h4 className="barlowCondensed font-semibold text-white section-subtitle mb-6">Subscribe to Newsletter :</h4>
              <p className="text-[#ffffff] section-text inter leading-relaxed mb-4">
                Stay informed with the latest product launches, industry news, technical updates, and innovations
              </p>
              <form className="flex w-full bg-white p-1">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail id"
                  className="w-full bg-transparent text-gray-900 px-4 py-2 inter barlowCondensed btn-text focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--color-primary)] text-white px-6 py-2 barlowCondensed btn-text font-semibold hover:bg-blue-800 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white py-4 border-t border-gray-200">
        <div className="custom-container px-6 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#111111] section-text inter">
            Copyright © All rights reserved by EREN BRAKE
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#111111] section-text inter">Privacy Policy</Link>
            <Link href="#" className="text-[#111111] section-text inter">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
