"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Container from "./Container";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Products", href: "#product" },
  { name: "News", href: "#news" },
];

const socials = [
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1A1A1A] text-white" id="footer">
      <Container className="py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[35fr_15fr_20fr_30fr] gap-10">
          {/* Logo + tagline */}
          <div data-aos="fade-up">
            <img src="/moto/yenmak/logo.png" alt="Yenmak Motor Parçaları Logo" className="h-14 w-auto object-contain mb-5" />
            <p className="content-white text-white/85! mb-5">
              Yenmak manufactures precision-engineered engine components, delivering reliable
              performance, durability, and quality for automotive markets worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="heading-white not-italic! text-[18px]! mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="content-white text-white/85! hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up">
            <h3 className="heading-white not-italic! text-[18px]! mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+903322392050" className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors">
                <Phone size={18} className="shrink-0" />
                +90.332.239 2050
              </a>
              <a href="mailto:info@yenmak.com.tr" className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors">
                <Mail size={18} className="shrink-0" />
                info@yenmak.com.tr
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <p className="content-white text-white/85!">
                  KOS İhsandede Cd. Büyük
                  <br />
                  Kayacık Mh. 9.Sokak No:5
                  <br />
                  Selçuklu-Konya/ Türkiye
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe to Newsletter */}
          <div data-aos="fade-up">
            <h3 className="heading-white not-italic! text-[18px]! mb-5">Subscribe to Newsletter :</h3>
            <p className="content-white text-white/85! mb-5">
              Stay informed with the latest product launches, industry news, technical updates,
              and innovations
            </p>
            <form className="flex items-stretch">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="flex-1 min-w-0 bg-white text-[#1A1A1A] placeholder:text-[#8A8A8A] px-4 py-2.5 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white font-medium px-5 text-sm hover:opacity-90 transition-opacity shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/20">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6">
            <p className="content-white text-white/90! text-[15px]!">
              &copy; 2026 SVAC All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="content-white text-white/90! text-[15px]! hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="content-white text-white/90! text-[15px]! hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
