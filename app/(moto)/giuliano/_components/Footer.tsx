"use client";

import React from "react";
import Link from "next/link";

const corporateLinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "News", href: "/news" },
  { name: "Distributors", href: "/distributors" },
  { name: "Products", href: "/products" },
];

const productLinks = [
  { name: "Tyre Changers", href: "/products/tyre-changers" },
  { name: "Wheel Balancers", href: "/products/wheel-balancers" },
  { name: "Wheel Alignment", href: "/products/wheel-alignment" },
  { name: "Paint Lifts", href: "/products/paint-lifts" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "/moto/giuliano/link.png" },
  { name: "Instagram", href: "#", icon: "/moto/giuliano/insta.png" },
  { name: "Facebook", href: "#", icon: "/moto/giuliano/fb.png" },
  { name: "YouTube", href: "#", icon: "/moto/giuliano/yt.png" },
  { name: "Twitter", href: "#", icon: "/moto/giuliano/twit.png" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-4 pt-16 pb-6">
      <div className="custom-container">

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-6 mb-12">

          {/* Column 1: Logo, tagline, text */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1" data-aos="fade-right" data-aos-duration="900">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/moto/giuliano/logo1.png"
                alt="Giuliano Automotive"
                width="269"
                height="66"
                className="w-40 h-auto xl:w-48 2xl:w-52 min-[2560px]:w-56 transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <img
                src="/moto/giuliano/logo2.png"
                alt="50th Anniversary"
                width="114"
                height="50"
                className="w-16 h-auto xl:w-20 2xl:w-24 min-[2560px]:w-28 transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <img
              src="/moto/giuliano/footer_logo.png"
              alt="Profession : Passion"
              width="173"
              height="32"
              className="w-32 h-auto mb-4 transition-transform duration-500 hover:translate-x-1"
            />

            <p className="section-text text-white">
              Passion is what pushes you to never give up, to always do your
              job with commitment, dedication, enthusiasm. Since over 45
              years, we&apos;ve been designing and producing our machines
              with passion.
            </p>
          </div>

          {/* Column 2: Corporate */}
          <div className="col-span-1 xl:ml-10 2xl:ml-14 min-[2560px]:ml-20" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h4 className="footer-heading text-white mb-6">Corporate</h4>

            <ul className="space-y-4">
              {corporateLinks.map((link, index) => (
                <li key={link.name} data-aos="fade-up" data-aos-duration="600" data-aos-delay={150 + index * 70}>
                  <Link href={link.href} className="footer-link text-white hover:text-primary transition-all duration-300 inline-block hover:translate-x-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h4 className="footer-heading text-white mb-6">Products</h4>

            <ul className="space-y-4">
              {productLinks.map((link, index) => (
                <li key={link.name} data-aos="fade-up" data-aos-duration="600" data-aos-delay={250 + index * 70}>
                  <Link href={link.href} className="footer-link text-white hover:text-primary transition-all duration-300 inline-block hover:translate-x-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-2 md:col-span-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <h4 className="footer-heading text-white mb-6">Contact Us</h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                <img src="/moto/giuliano/phn.png" alt="Phone" width="18" height="18" className="flex-shrink-0 transition-transform duration-300 hover:scale-110" />

                <a href="tel:+390522731111" className="footer-link text-white hover:text-primary transition-colors duration-300">
                  +39 0522 731111
                </a>
              </li>

              <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                <img src="/moto/giuliano/mail.png" alt="Email" width="18" height="18" className="flex-shrink-0 transition-transform duration-300 hover:scale-110" />

                <a href="mailto:info@giuliano-automotive.com" className="footer-link text-white hover:text-primary transition-colors duration-300 lowercase">
                  info@giuliano-automotive.com
                </a>
              </li>

              <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                <img src="/moto/giuliano/loc.png" alt="Location" width="18" height="18" className="flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" />

                <span className="footer-link text-white">
                  Via Guerrieri 6
                  <br />
                  Correggio (RE), Italy
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
            <h4 className="footer-heading text-white mb-6">Social Media Links</h4>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-11 h-11 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:opacity-85"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={450 + index * 80}
                >
                  <img src={social.icon} alt={social.name} className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full border-t border-soft pt-6 flex items-center justify-center" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <p className="copyright-text text-white text-center">
            © 2026 · Giuliano Industrial S.p.A. · Privacy &amp; Cookies ·
            Company Data · VAT IT 02455340352
          </p>
        </div>
      </div>
    </footer>
  );
}