"use client";

import Link from "next/link";

interface LinkColumn {
  heading: string;
  links: string[];
}

const quickLinks: LinkColumn = {
  heading: "Quick Links",
  links: ["Home", "Company", "News", "Contact Us"],
};

const productsColumn: LinkColumn = {
  heading: "Products",
  links: [
    "Control Arm",
    "Ball Joint",
    "Tie Rod Ends",
    "Air Filter Hose",
    "Wheel Bearing Hose",
  ],
};

const socials = [
  { icon: "/moto/ytt/fb.png", label: "Facebook" },
  { icon: "/moto/ytt/twit.png", label: "Twitter" },
  { icon: "/moto/ytt/link.png", label: "LinkedIn" },
  { icon: "/moto/ytt/insta.png", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#EEEEEE] overflow-hidden">
      <div className="custom-container py-10 md:py-12 xl:py-16">
        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:850px)]:grid-cols-4 [@media(min-width:1150px)]:flex [@media(min-width:1150px)]:justify-between gap-8 md:gap-6 lg:gap-8">
          
          {/* 1. Logo & About Text */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            className="sm:col-span-2 [@media(min-width:850px)]:col-span-4 [@media(min-width:1150px)]:col-span-1 flex flex-col gap-4 max-w-full [@media(min-width:1150px)]:max-w-[360px] xl:max-w-[480px]"
          >
            <Link href="/">
              <img
                src="/moto/ytt/footer_logo.png"
                alt="YTT Automotive"
                className="w-[180px] md:w-[200px] xl:w-[213px] h-auto object-contain"
              />
            </Link>
            <p className="section-text font-normal text-[#202020] text-sm md:text-base [@media(min-width:1250px)_and_(max-width:1450px)]:text-[13px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[20px]">
              Founded in 2007, YTT Automotive has grown into a globally
              trusted manufacturer of premium automotive replacement parts
              for the international aftermarket. Combining advanced
              production technologies with in-house engineering expertise,
              the company offers an extensive portfolio of over 15,000
              products.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="flex flex-col gap-3 md:gap-4 [@media(min-width:850px)]:col-span-1"
          >
            <h4 className="card-title font-bold text-[#202020] text-base md:text-lg">
              {quickLinks.heading}
            </h4>
            <ul className="flex flex-col gap-2 md:gap-3">
              {quickLinks.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="section-text font-normal text-[#202020] text-sm md:text-base [@media(min-width:1250px)_and_(max-width:1450px)]:text-[13px] hover:text-[#DA0812] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Products Column */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className="flex flex-col gap-3 md:gap-4 [@media(min-width:850px)]:col-span-1"
          >
            <h4 className="card-title font-bold text-[#202020] text-base md:text-lg">
              {productsColumn.heading}
            </h4>
            <ul className="flex flex-col gap-2 md:gap-3">
              {productsColumn.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="section-text font-normal text-[#202020] text-sm md:text-base [@media(min-width:1250px)_and_(max-width:1450px)]:text-[13px] hover:text-[#DA0812] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            className="flex flex-col gap-3 md:gap-4 [@media(min-width:850px)]:col-span-1 [@media(min-width:1150px)]:max-w-[220px]"
          >
            <h4 className="card-title font-bold text-[#202020] text-base md:text-lg">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <img
                  src="/moto/ytt/loc.png"
                  alt=""
                  className="w-5 h-5 object-contain mt-0.5 flex-shrink-0"
                />
                <span className="section-text font-normal text-[#202020] text-xs md:text-sm [@media(min-width:1250px)_and_(max-width:1450px)]:text-[12px] [@media(min-width:1250px)_and_(max-width:1450px)]:leading-[18px]">
                  Hasanağa Osb Mah., Hosab Sanayi Cad. No:36 Nilüfer / Bursa / TÜRKİYE
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src="/moto/ytt/phn.png"
                  alt=""
                  className="w-5 h-5 object-contain flex-shrink-0"
                />
                <span className="section-text font-normal text-[#202020] text-xs md:text-sm [@media(min-width:1250px)_and_(max-width:1450px)]:text-[12px]">
                  +90(224) 482 43 98
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src="/moto/ytt/mail.png"
                  alt=""
                  className="w-5 h-5 object-contain flex-shrink-0"
                />
                <span className="section-text font-normal text-[#202020] text-xs md:text-sm [@media(min-width:1250px)_and_(max-width:1450px)]:text-[12px]">
                  info@yttotomotiv.com
                </span>
              </div>
            </div>
          </div>

          {/* 5. Social Links Column */}
          <div 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex flex-col gap-3 md:gap-4 [@media(min-width:850px)]:col-span-1"
          >
            <h4 className="card-title font-bold text-[#202020] text-base md:text-lg">
              Follow Us On
            </h4>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="hover:opacity-70 transition-opacity"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div 
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="500"
        className="w-full border-t border-[#202020]/20"
      >
        <div className="custom-container py-4">
          <p className="section-text font-normal text-[#202020] text-xs md:text-sm text-center">
            OEM codes and trademarks are provided for comparison purposes
            only. © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}