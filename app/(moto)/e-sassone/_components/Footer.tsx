"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Container from "./Container";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Products", href: "#product" },
  { name: "Certification", href: "#certifications" },
];

const socials = [
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#262930] text-white" id="footer">
      <Container className="py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_18fr_23fr_34fr] gap-10">
          {/* Logo + tagline */}
          <div data-aos="fade-up">
            <img src="/moto/e-sassone/logo2.png" alt="E. Sassone Srl Logo" className="h-9 w-auto object-contain mb-8" />
            <p className="content-white text-white/85! mb-5">
              E. SASSONE Srl Clutches and transmission components is an Italian manufacturer of
              clutch and transmission components, delivering precision-engineered OE/OES and
              aftermarket solutions with over 70 years of expertise.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 border border-white/30 text-white hover:bg-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="content-white not-italic! text-[24px]! mb-8">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="content-white hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up">
            <h3 className="content-white not-italic! text-[24px]! mb-8">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+390141669691" className="flex items-center gap-3 content-white hover:text-white transition-colors">
                <Phone size={18} className="shrink-0" />
                +39 0141 669 691
              </a>
              <a href="mailto:info@esassone.com" className="flex items-center gap-3 content-white hover:text-white transition-colors">
                <Mail size={18} className="shrink-0" />
                info@esassone.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <p className="content-white text-white/85!">
                  Via Castellero, 12
                  <br />
                  14013 Monale (AT)
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe to Newsletter */}
          <div data-aos="fade-up">
            <h3 className="content-white not-italic! text-[24px]! mb-8">Subscribe to Newsletter :</h3>
            <p className="content-white mb-5">
              Stay informed with the latest product launches, industry news, technical updates,
              and innovations
            </p>
            <form className="flex items-stretch bg-white p-1">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="flex-1 min-w-0 text-[#1A1A1A] placeholder:text-[#8A8A8A] px-4 py-2.5 text-sm outline-none"
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
            <p className="content-white ">
              &copy; 2026 E.Sassone Srl All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="content-white hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="content-white hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
