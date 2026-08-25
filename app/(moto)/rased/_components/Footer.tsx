"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "./Container";

const quickLinks = ["Home", "Company", "News", "Contact Us"];
const productLinks = ["Gasket Kit", "Bushes", "Rings", "Washer", "Nuts"];
const socials = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#231F20] text-white" id="footer">
      <Container className="py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_15fr_15fr_15fr_15fr] gap-10">
          {/* Logo + tagline */}
          <div data-aos="fade-up">
            <img src="/moto/rased/logo2.png" alt="Spaco Diesel R.A.S.E.D. Logo" className="h-20 w-auto object-contain mb-5" />
            <p className="content-white text-white/85!">
              R.A.S.E.D. S.p.A. &ndash; SPACO DIESEL is a trusted Italian manufacturer of precision
              diesel fuel injection components. With over six decades of expertise, the company
              delivers high-quality solutions for conventional, Common Rail, and electronic
              injector systems, serving customers in more than 100 countries worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="heading-white not-italic! text-[18px]! mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content-white text-white/85! hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div data-aos="fade-up">
            <h3 className="heading-white not-italic! text-[18px]! mb-5">Products</h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content-white text-white/85! hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up">
            <h3 className="heading-white not-italic! text-[18px]! mb-5">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <p className="content-white text-white/85!">
                  VIA PADOVA 183 &ndash; 20127
                  <br />
                  MILANO ITALY
                  <br />
                  P.IVA 00748050150
                </p>
              </div>
              <a href="tel:+39022722161" className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors">
                <Phone size={18} className="shrink-0" />
                +39 022722161
              </a>
              <a href="mailto:info@rased.it" className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors">
                <Mail size={18} className="shrink-0" />
                INFO@RASED.IT
              </a>
            </div>
          </div>

          {/* Follow Us On */}
          <div data-aos="fade-up">
            <h3 className="heading-white not-italic! text-[18px]! mb-5 whitespace-nowrap">Follow Us On</h3>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="border border-white/40 rounded-full p-2 text-white hover:bg-white hover:text-[#1A1A1A] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/20">
        <Container>
          <p className="content-white text-white/90! text-center py-6 text-[15px]!">
            &copy; 2026 R A S E D Spa. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
