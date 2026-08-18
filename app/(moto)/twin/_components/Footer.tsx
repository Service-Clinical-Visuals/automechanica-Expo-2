"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white pt-16">
      <div className="custom-container">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-15 mb-16">

          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-6 lg:col-span-4" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/twin/logo.png"
                alt="Twin Busch Logo"
                className="h-auto w-[170px] object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-2xl exo-2-font tracking-wide">Twin Busch</span>' }}
              />
            </Link>
            <p className="inter-font text-[#E5E5E5] section-text font-regular leading-relaxed lg:pr-6">
              Twin Busch® Germany is a specialist in professional workshop equipment, offering reliable vehicle lifts, tyre servicing equipment, and innovative solutions designed to improve safety, efficiency, and performance in modern workshops.
            </p>
            <div className="flex items-center gap-4 text-white mt-2">
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="X">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33a2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-[24px] font-semibold exo-2-font text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white section-text font-regular inter-font">
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-6 lg:col-span-3" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-[24px] font-semibold exo-2-font text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-white section-text font-regular inter-font">
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-white" />
                <a href="tel:+496251705850" className="hover:text-gray-300 transition-colors">
                  +49 (0) 6251-70585-0
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-white" />
                <a href="mailto:info@twinbusch.de" className="hover:text-gray-300 transition-colors">
                  info@twinbusch.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-white" />
                <span className="leading-relaxed">
                  D-64625 Bensheim,<br />
                  Istanbul, Turkey
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6 lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-[24px] font-semibold exo-2-font text-white">Subscribe to Newsletter :</h4>
            <p className="inter-font section-text font-regular text-[#E5E5E5] leading-relaxed">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>
            <div className="w-full flex mt-2 bg-white rounded-[24px] overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="flex-grow px-4 text-sm text-[#333333] bg-transparent outline-none inter-font"
              />
              <Button href="#" className="rounded-[20px] mr-2 mt-1 mb-1 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-white py-6 flex flex-col md:flex-row justify-between items-center text-white text-[13px] inter-font gap-4">
          <p className="text-[#E5E5E5] section-text font-regular">
            &copy; 2026 Twin Busch GmbH All rights reserved.
          </p>
          <div className="flex section-text font-regular items-center gap-6 text-[#E5E5E5]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
