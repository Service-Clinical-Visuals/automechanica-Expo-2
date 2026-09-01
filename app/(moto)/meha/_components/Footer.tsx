"use client";

import { Phone, Mail, MapPin, Search } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";
import Container from "./Container";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about-us" },
  { name: "Products", href: "#product" },
  { name: "Production", href: "#production" },
  { name: "Corporate", href: "#corporate" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

const productLinks = [
  "Engine Mounting",
  "Top Strut Mounting",
  "Bushing",
  "Radiator Hose",
  "Fly wheel",
  "Gas Spring",
  "Glow Plug",
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F5F5F5] text-[#1A1A1A]" id="footer">
      <Container className="py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[30fr_14fr_14fr_20fr_28fr] gap-10">
          {/* Logo + tagline */}
          <div data-aos="fade-up">
            <img src="/moto/meha/logo.png" alt="Meha Automotive Logo" className="h-35 w-auto object-contain mb-5" />
            <p className="content mb-5">
              Meha Automotive provides high-quality rubber and metal automotive spare parts to
              customers worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white hover:opacity-90 transition-opacity"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div data-aos="fade-up">
            <h3 className="subheading font-semibold! mb-6">Links</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="content hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div data-aos="fade-up">
            <h3 className="subheading font-semibold! mb-6">Products</h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((name) => (
                <li key={name}>
                  <a href="#product" className="content hover:text-primary transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up">
            <h3 className="subheading font-semibold! mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+902244823635" className="flex items-center gap-3 content hover:text-primary transition-colors">
                <Phone size={18} className="shrink-0 text-primary" />
                +90(224) 482 36 35
              </a>
              <a href="mailto:info@meha-automotive.com" className="flex items-center gap-3 content hover:text-primary transition-colors">
                <Mail size={18} className="shrink-0 text-primary" />
                Info@meha-automotive.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                <p className="content">
                  Meha Automotive
                  <br />
                  Nilüfer, Bursa, Türkiye
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div data-aos="fade-up">
            <h3 className="subheading font-semibold! mb-6">Subscribe for more information</h3>
            <p className="content mb-5">
              Stay updated with Meha automotive latest products, news, and innovations.
            </p>
            <form className="flex items-stretch bg-white border border-[#EAEAEA]">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 min-w-0 text-[#1A1A1A] placeholder:text-[#8A8A8A] px-4 py-2.5 text-sm outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-primary text-white flex items-center justify-center px-4 hover:opacity-90 transition-opacity shrink-0"
              >
                <Search size={16} />
              </button>
            </form>
          </div>
        </div>
      </Container>

      <div className="bg-white">
        <Container>
          <div className="flex items-center justify-center py-6">
            <p className="content text-center">Copyright &copy; 2026 Meha Automotive</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
