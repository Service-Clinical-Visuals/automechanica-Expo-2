"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-16">
      <div className="custom-container">

        {/* Main Footer Content */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between gap-y-10 lg:gap-y-0 lg:gap-x-8 mb-16">

          {/* Column 1: Logo & Text */}
          <div className="flex flex-col w-full md:w-[45%] lg:w-[28%]" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/avortex/flogo.png"
                alt="Avortex Logo"
                className="h-auto w-auto object-contain mb-6"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-semibold card-title1 exo-2-font tracking-wide mb-6 inline-block">Avortex</span>' }}
              />
            </Link>
            <p className="inter-font text-[#E5E5E5] card-text font-regular leading-relaxed pr-4">
              Avortex Conta Otomotiv Sanayi Ticaret Ltd. Şti. is a Turkish manufacturer specializing in precision engine gaskets and sealing solutions. With over 30 years of manufacturing expertise, the company delivers durable, high-performance products for passenger cars, commercial vehicles, and industrial engine applications.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col w-[45%] lg:w-auto" data-aos="fade-up" data-aos-delay="100">
            <h4 className="card-title1 font-semibold exo-2-font text-white mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-6 text-white card-text font-regular inter-font">
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col w-[45%] lg:w-auto" data-aos="fade-up" data-aos-delay="200">
            <h4 className="card-title1 font-semibold exo-2-font text-white mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-white card-text font-regular inter-font">
              <li className="flex items-center gap-4">
                <Phone className="footer-icon flex-shrink-0 text-white" />
                <a href="tel:+903322481376" className="hover:text-gray-300 transition-colors">
                  +90 (332) 248 13 76
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="footer-icon flex-shrink-0 text-white" />
                <a href="mailto:info@avortex.com.tr" className="hover:text-gray-300 transition-colors">
                  info@avortex.com.tr
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="footer-icon mt-1 flex-shrink-0 text-white" />
                <span className="leading-relaxed">
                  Fevzi Çakmak Mah.<br />
                  Kobisan 2 San. Sit. 10762.<br />
                  Sk. No:7/E, Karatay/<br />
                  KONYA
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="flex flex-col w-full md:w-[45%] lg:w-auto" data-aos="fade-up" data-aos-delay="300">
            <h4 className="card-title1 font-semibold exo-2-font text-white mb-8">Social</h4>
            <div className="flex items-center gap-5 text-white">
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="X">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors" aria-label="YouTube">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33a2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col w-full lg:w-[28%]" data-aos="fade-up" data-aos-delay="400">
            <h4 className="card-title1 font-semibold exo-2-font text-white mb-8">Subscribe to Newsletter :</h4>
            <p className="inter-font card-text font-regular text-[#E5E5E5] leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>
            <div className="w-full flex bg-white overflow-hidden">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="flex-grow px-3 py-2.5 card-text font-regular text-[#333333] bg-transparent outline-none inter-font"
              />
              <button className="bg-[#262261] text-white card-text px-4 font-regular transition-colors hover:bg-[#262261]/90 m-1 rounded-[2px]">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white text-[#000000] py-4">
        <div className="custom-container section-text flex flex-col md:flex-row justify-between items-center card-text inter-font gap-4">
          <p className="font-regular">
            Copyright &copy; All rights reserved by EREN BRAKE
          </p>
          <div className="flex font-regular items-center gap-6">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
