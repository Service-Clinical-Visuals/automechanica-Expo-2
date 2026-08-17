import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 mt-auto overflow-hidden bg-[#161616]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">

          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-6 lg:col-span-5" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/bendpak/logo.png"
                alt="BendPak Logo"
                className="h-full lg:h-sull w-auto object-contain brightness-0 invert"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-2xl montserrat-font tracking-wide">BENDPAK</span>' }}
              />
            </Link>
            <p className="text-white/90 inter-font section-text leading-relaxed lg:pr-6 mt-2">
              BendPak is a global manufacturer of professional automotive service equipment, founded in 1965. With decades of engineering expertise, BendPak develops innovative, durable, and reliable solutions designed to improve safety, efficiency, and performance across modern automotive workshops.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:col-span-2 lg:pl-20" data-aos="fade-up" data-aos-delay="100">
            <h4 className="card-title font-semibold montserrat-font text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-regular text-white/90 inter-font section-text">
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Legals */}
          <div className="flex flex-col gap-6 lg:col-span-2 lg:pl-20" data-aos="fade-up" data-aos-delay="150">
            <h4 className="card-title font-semibold montserrat-font text-white">Legals</h4>
            <ul className="flex flex-col gap-4 text-regular text-white/90 inter-font section-text">
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6 lg:col-span-3 lg:pl-20" data-aos="fade-up" data-aos-delay="200">
            <h4 className="card-title font-semibold montserrat-font text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-white/90 inter-font text-regular section-text">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>1 (888) 856-5820</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@bendpak.com" className="hover:text-[#FFDB00] transition-colors">sales@bendpak.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">30440 Agoura Road<br />Agoura Hills, CA 91301<br />USA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Area: Socials & Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-10 pt-6" data-aos="fade-up">

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8 lg:mb-0">
            <a href="#" className="w-8 h-8 rounded bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <span className="inter-font font-bold hidden lg:block">Subscribe to Newsletter :</span>
            <div className="flex w-full lg:w-[400px]">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="w-full h-[45px] px-4 text-black bg-white inter-font focus:outline-none rounded-l-[2px]"
              />
              <button className="h-[45px] px-6 bg-[#FFDB00] text-black font-bold inter-font hover:bg-[#e6c500] transition-colors whitespace-nowrap rounded-r-[2px]">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-white text-black py-4">
        <div className="custom-container flex justify-center text-center">
          <p className="inter-font section-text text-[#000000]">
            © 2026 BendPak inc All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
