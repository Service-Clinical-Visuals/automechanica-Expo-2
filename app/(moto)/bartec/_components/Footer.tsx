"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "./Container";

const quickLinks = ["Home", "Support", "News", "Contact Us"];
const productLinks = ["TPMS Sensor", "TPMS Repair Kit", "TPMS Tools", "Bartec Software", "TPMS bundles"];
const socials = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-primary text-white" id="footer">
      <Container className="py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_15fr_15fr_15fr_15fr] gap-10">
          {/* Logo + tagline */}
          <div data-aos="fade-up" className="flex-col xl:flex-row flex gap-10">
            <img src="/moto/bartec/logo2.png" alt="Bartec TPMS Logo" className="h-25 w-auto object-contain mb-5" />
            <p className="content-white font-light!">
              Since 1992, our passion for TPMS innovation has driven advanced tools, programmable
              sensors, and software solutions trusted by automotive professionals worldwide. Built
              on quality, reliability, and innovation, our products simplify tire pressure
              monitoring, improve workshop efficiency, and deliver dependable performance across a
              wide range of vehicle applications.
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
                <span className="border border-white/40 rounded p-1.5 shrink-0 mt-0.5">
                  <MapPin size={14} />
                </span>
                <p className="content-white text-white/85!">
                  6475 19 &frac12; Mile Rd
                  <br />
                  Sterling Heights, Michigan 48314
                  <br />
                  USA
                </p>
              </div>
              <a href="tel:+18664078767" className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors">
                <span className="border border-white/40 rounded p-1.5 shrink-0">
                  <Phone size={14} />
                </span>
                (866) 407-8767
              </a>
              <a href="mailto:sales@bartecusa.com" className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors">
                <span className="border border-white/40 rounded p-1.5 shrink-0">
                  <Mail size={14} />
                </span>
                sales@bartecusa.com
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
                  className="border border-white/40 rounded p-2 text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/30">
        <Container>
          <p className="content-white text-white/90! text-center py-6 text-[15px]!">
            &copy; 2026 Bartec Auto ID GMBH. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
