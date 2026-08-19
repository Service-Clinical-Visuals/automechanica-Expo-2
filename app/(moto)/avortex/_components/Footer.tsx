import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-20 pb-8" id="contacts">
      <div className="custom-container px-6 xl:px-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-8 mb-16">
          
          {/* Col 1: Brand & Info */}
          <div className="xl:col-span-4 space-y-6 xl:pr-6">
            <Link href="#" className="inline-block">
              <img src="/moto/avortex/logo.png" alt="SVAC Logo" className="h-10 object-contain" />
            </Link>
            <p className="inter text-white section-text leading-relaxed">
              Twin Busch® Germany is a specialist in professional workshop equipment, offering reliable vehicle lifts, tyre servicing equipment, and innovative solutions designed to improve safety, efficiency, and performance in modern workshops.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
               <img src="/moto/avortex/f1.png" alt="phone icon" className="w-[18px] h-[18px] text-white shrink-0 mt-0.5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                 <img src="/moto/avortex/f2.png" alt="phone icon" className="w-[18px] h-[18px] text-white shrink-0 mt-0.5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                 <img src="/moto/avortex/f3.png" alt="phone icon" className="w-[18px] h-[18px] text-white shrink-0 mt-0.5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                 <img src="/moto/avortex/f4.png" alt="phone icon" className="w-[18px] h-[18px] text-white shrink-0 mt-0.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="xl:col-span-2 xl:pl-8">
            <h4 className="exo2 text-white font-medium mb-6 card-title">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="inter text-white section-text leading-relaxed transition-colors">Home</Link></li>
              <li><Link href="#about" className="inter text-white section-text leading-relaxed transition-colors">About Us</Link></li>
              <li><Link href="#products" className="inter text-white section-text leading-relaxed transition-colors">Products</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="xl:col-span-3">
            <h4 className="exo2 text-white font-medium mb-6 card-title">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <img src="/moto/avortex/f5.png" alt="phone icon" className="w-[18px] h-[18px] text-white shrink-0 mt-0.5" />
                <span className="inter text-white section-text">+90 (332)262 0 009</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/avortex/f7.png" alt="mail icon" className="w-[18px] h-[18px] text-white shrink-0 mt-0.5" />
                <span className="inter text-white section-text">info@svac.com.tr</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/avortex/f6.png" alt="phone icon" className="w-[18px] h-[18px] text-white shrink-0 mt-0.5" />
                <span className="inter text-white section-text">Fevzi Çakmak Neighborhood,<br/>Ahmet Petekçi Street, No: 17/<br/>S, Karatay, Konya</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="xl:col-span-3">
          <h4 className="exo2 text-white font-medium mb-6 card-title">Subscribe to Newsletter :</h4>
            <p className="inter text-white section-text mb-6 leading-relaxed">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>
            <form className="relative flex items-center bg-white rounded-xl p-[3px] border-2 border-transparent focus-within:border-[#ea2227]/30 transition-colors shadow-inner">
              <input 
                type="email" 
                placeholder="Enter Your E-Mail id" 
                className="w-full bg-transparent border-none outline-none inter section-text text-gray-800 pl-4 pr-2 placeholder:text-gray-400"
                required
              />
              <Button 
                type="submit" 
                className="px-5 py-2 whitespace-nowrap shadow-sm section-text"
              >
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <hr className="border-white/10 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="inter text-white section-text leading-relaxed">
            © 2026 SVAC All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="inter text-white section-text leading-relaxed transition-colors">Privacy Policy</Link>
            <Link href="#" className="inter text-white section-text leading-relaxed transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
