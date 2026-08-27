"use client";

import React from "react";
import Button from "./Button";

const QUICK_LINKS = ["Home", "About Us", "Products", "News", "Gallery", "Contact Us"];
const PRODUCT_LINKS = ["Oil Filter", "Cabin Filter", "Hydraulic Filter", "Fuel Filter"];

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
      <path d="M10 18C10 18 16 12.5 16 8A6 6 0 1 0 4 8C4 12.5 10 18 10 18Z" stroke="#FFFFFF" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="10" cy="8" r="2" stroke="#FFFFFF" strokeWidth="1.3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        d="M4 3h3l1.5 4-2 1.5a10 10 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 2.5 4.6 1.5 1.5 0 0 1 4 3Z"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="#FFFFFF" strokeWidth="1.3" />
      <path d="M3 5.5L10 11L17 5.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#202020] text-white overflow-x-clip" id="footer">
      <div className="custom-container pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="700"
            className="sm:col-span-2 lg:col-span-1"
          >
            <img
              src="/moto/samco/footer_logo.png"
              alt="SAMCO"
              className="h-[45px] w-auto aspect-[162/60] object-contain mb-4 hover:opacity-90 transition-opacity duration-200"
            />
            <p className="footer-link">
              A trusted automotive manufacturer delivering high-quality
              filtration, suspension, and engine components, known for
              reliability, performance, and innovative engineering solutions
              across global markets.
            </p>
          </div>

          {/* Quick Links Column */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <h3 className="footer-heading font-medium text-white mb-3">Quick Links</h3>
            <div className="w-16 h-[2px] bg-primary mb-4" />
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <button 
                    type="button" 
                    className="footer-link text-left hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <h3 className="footer-heading font-medium text-white mb-3">Products</h3>
            <div className="w-16 h-[2px] bg-primary mb-4" />
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link}>
                  <button 
                    type="button" 
                    className="footer-link text-left hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <h3 className="footer-heading font-medium text-white mb-3">Contact</h3>
            <div className="w-16 h-[2px] bg-primary mb-4" />
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 group">
                <LocationIcon />
                <span className="footer-link group-hover:text-white transition-colors duration-200">
                  SAMCO Autotechnik GmbH
                  <br />
                  Höhenhöfe 30
                  <br />
                  47918 Tönisvorst
                  <br />
                  Germany
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <PhoneIcon />
                <a href="tel:+4902151993999" className="footer-link hover:text-primary transition-colors duration-200">
                  +49 (0)2151 99 39 99
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <MailIcon />
                <a href="mailto:sales@samco.com.de" className="footer-link hover:text-primary transition-colors duration-200">
                  sales@samco.com.de
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="700"
            data-aos-delay="400"
          >
            <h3 className="footer-heading font-medium text-white mb-3">Stay Updated</h3>
            <div className="w-16 h-[2px] bg-primary mb-4" />
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="footer-link flex-1 min-w-0 bg-transparent border border-white/60 focus:border-primary rounded-lg px-4 py-[10px] placeholder:text-white/70 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-200"
              />
              <Button variant="solid" className="shrink-0">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar (AOS removed so copyright and legal links are permanently visible) */}
        <div className="border-t border-[#A3A3A3]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="footer-legal">© 2026 SAMCO Autotechnik GmbH</p>
          <div className="flex items-center gap-6">
            <button type="button" className="footer-legal hover:text-primary transition-colors duration-200">
              Privacy Policy
            </button>
            <button type="button" className="footer-legal hover:text-primary transition-colors duration-200">
              Terms &amp; Conditions
            </button>
            <button type="button" className="footer-legal hover:text-primary transition-colors duration-200">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}