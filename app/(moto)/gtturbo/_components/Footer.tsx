import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white pb-6 px-4 lg:px-0">
      {/* Dark Footer Block */}
      <div className="w-full lg:w-[95%] mx-auto bg-[#0B0E17] rounded-[20px] lg:rounded-[30px] px-8 lg:px-16 pt-16 pb-16 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo & Description (takes 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <img 
              src="/moto/gtturbo/logo.png" 
              alt="GT Turbo Logo" 
              className="h-10 md:h-[46px] mb-8 object-contain" 
            />
            <p className="text-white/80 text-sm lg:text-[15px] leading-[1.8] mb-8 max-w-[400px]">
              GTurbo Freudenberg High Efficiency Air Filter GTurbo has teamed up with Scavenger and Freudenberg Filtration...
            </p>
            <div className="flex items-center gap-5 text-white/80">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (takes 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Tomex', 'Products', 'Services', 'Quality and technology'].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-white/70 hover:text-white text-sm lg:text-[15px] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products (takes 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-8">Products</h4>
            <ul className="flex flex-col gap-4">
              {['Power Packages', 'Turbos', 'Injectors', 'Parts & Accessories'].map((product, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-white/70 hover:text-white text-sm lg:text-[15px] transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us (takes 3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <a href="tel:0892408715" className="text-white/70 hover:text-white text-sm lg:text-[15px] transition-colors">
                  (08) 9240 8715
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <a href="mailto:sales@gturbo.com.au" className="text-white/70 hover:text-white text-sm lg:text-[15px] transition-colors">
                  sales@gturbo.com.au
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-white/70 text-sm lg:text-[15px] leading-snug">
                  Unit 2. 18 Abrams<br />Street Balcatta, WA
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar (Outside the dark block) */}
      <div className="w-full lg:w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center px-4 lg:px-8 gap-4">
        <p className="text-[#0B0E17] font-medium text-sm">
          © 2026 GTurbo - All Rights Reserved
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {['Careers', 'Privacy Policy', 'Refund Policy', 'Terms Of Use'].map((link, idx) => (
            <Link key={idx} href="#" className="text-[#0B0E17] font-medium text-sm hover:text-[#E02027] transition-colors">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
