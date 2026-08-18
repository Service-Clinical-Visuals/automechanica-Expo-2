"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
// Import social icons if available, or use placeholder SVGs.
// Since lucide-react doesn't have all brand icons by default, we can use simple SVGs or just text.
// For now, I'll use standard lucide icons or simple SVGs for Facebook, X, LinkedIn, Instagram.

export default function Footer() {
  return (
    <footer className="bg-[#5D5C5C] text-white inter-font pt-10">
      <div className="custom-container">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 mb-10 mt-10 ml-15">

          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-8 lg:col-span-3" data-aos="fade-up">
            <p className="text-white section-text font-regular leading-relaxed lg:pr-6">
              KAMEKS was founded in Istanbul in 1994 with the aim of manufacturing camshafts. Continuously growing and developing through various investments since its establishment, our company now produces camshafts for internal combustion engine vehicles in response to customer demand.
            </p>
            <Link href="#">
              <img
                src="/moto/kameks/flogo.png"
                alt="Kameks Logo"
                className="h-auto w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-2xl poppins-font tracking-wide">Kameks</span>' }}
              />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-[20px] font-semibold poppins-font text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white section-text font-regular">
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-6 lg:col-span-1" data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-[20px] font-semibold poppins-font text-white">Products</h4>
            <ul className="flex flex-col gap-3 text-white section-text font-regular">
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Water Pumps</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Housing</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Gaskets</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Oil Pumps</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Fuel Feeding Pump</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-[20px] font-semibold poppins-font text-white">Contact</h4>
            <ul className="flex flex-col gap-3 text-white section-text font-regular">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-white" />
                <span className="leading-relaxed">
                  Büyükkayacık Osb Mah 511.<br />
                  Sokak No:13, 42250 5. Organize Sanayi Böl.<br />
                  Selçuklu / Konya / Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 section-text font-regular text-white" />
                <a href="tel:+902126720426" className="hover:text-gray-300 transition-colors">
                  0 (212) 672 04 26
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 section-text font-regular text-white" />
                <a href="mailto:info@kameks.net" className="hover:text-gray-300 transition-colors">
                  info@kameks.net
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us On */}
          <div className="flex flex-col gap-6 lg:col-span-1" data-aos="fade-up" data-aos-delay="250">
            <h4 className="text-[20px] font-semibold poppins-font text-white">Follow Us On</h4>
            <div className="flex items-center gap-4 text-white">
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-white py-6 flex justify-center items-center text-white section-text font-regular">
          <p className="text-white">
            &copy; 2023 Kameks.net - All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
