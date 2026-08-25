"use client";

import { Phone, Printer, MapPin, Search } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Container from "./Container";

const links = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Products", href: "#product" },
  { name: "R&D Center", href: "#rd-center" },
  { name: "Quality", href: "#engine-performance" },
  { name: "News", href: "#news" },
  { name: "Media", href: "#media" },
  { name: "Career", href: "#career" },
  { name: "Communication", href: "#communication" },
];

const productLinks = ["E-Mobility", "OEM Products", "Spare Parts"];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F3F5F7] text-[#1A1A1A]" id="footer">
      <Container className="py-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-[35fr_10fr_10fr_25fr_26fr] gap-10">
          {/* Logo + tagline */}
          <div data-aos="fade-up" className="flex flex-col items-start justify-end h-full">
            <img src="/moto/kale/logo.png" alt="Kale Oto Radyatör Logo" className="h-18 w-auto object-contain mb-5" />
            <p className="content mb-5">
              To ensure customer satisfaction by manufacturing brake pads that meet the expectations of our customers in the automotive industry and aftermarket
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-primary hover:opacity-80 transition-opacity"
                >
                  <Icon size={20} />
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
              <a href="tel:+902626581800" className="flex items-center gap-3 content hover:text-primary transition-colors">
                <Phone size={18} className="shrink-0 text-primary" />
                +90(262)658 18 00
              </a>
              <a href="tel:+902626581800" className="flex items-center gap-3 content hover:text-primary transition-colors">
                <Printer size={18} className="shrink-0 text-primary" />
                +90(262) 658 18 00(pbx)
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                <p className="content">
                  Şekerpınar Muhsin Yazıcıoğlu Cad.
                  <br />
                  Ece Sokak. No:2/
                  <br />
                  B GEBZE - KOCAELİ / TURKEY
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div data-aos="fade-up">
            <h3 className="subheading font-semibold! mb-6">Subscribe for more Information</h3>
            <p className="content mb-5">
              Receive the most up to date news from Kale Auto. You can register in our e-mail
              list.
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

      <Container>
        <div className="border-t border-[#272727] py-4 grid grid-cols-1 sm:grid-cols-[20fr_60fr_20fr] items-center gap-4">
          <div className="hidden sm:block" />
          <p className="content text-sm text-center order-1 sm:order-0">
            &copy; 2026. All rights reserved. |{" "}
            <a href="#" className="underline hover:text-primary transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="underline hover:text-primary transition-colors">
              Text of the Personal Data Protection Law (KVKK)
            </a>
          </p>
          <img
            src="/moto/kale/nar.png"
            alt="Nar Bilişim"
            className="h-3 w-auto object-contain justify-self-center sm:justify-self-end"
          />
        </div>
      </Container>
    </footer>
  );
}
