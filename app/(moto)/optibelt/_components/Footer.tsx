"use client";

import Link from "next/link";

interface LinkColumn {
  heading: string;
  links: string[];
}

const columns: LinkColumn[] = [
  {
    heading: "Service Support",
    links: ["Seminars", "Tools", "eServices", "Media Center", "Datasheets"],
  },
  {
    heading: "About Optibelt",
    links: ["About Us", "Locations", "Trade Fairs", "Compliance"],
  },
  {
    heading: "Help & Contact",
    links: ["FAQ", "For Suppliers", "Contact"],
  },
];

const socials = [
  { icon: "/moto/optibelt/fb.png", label: "Facebook" },
  { icon: "/moto/optibelt/insta.png", label: "Instagram" },
  { icon: "/moto/optibelt/link.png", label: "LinkedIn" },
  { icon: "/moto/optibelt/yt.png", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="w-full py-4 md:py-6">
      <div className="custom-container-wide">
        <div
          className="bg-[#F9F9F9] border border-[rgba(26,26,26,0.25)] rounded-[24px] px-6 py-6 sm:px-10 md:px-12 xl:px-[52px] xl:py-7"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-10 min-[2000px]:grid min-[2000px]:grid-cols-4 min-[2000px]:gap-x-16">
            {/* Logo + tagline + socials — nudged slightly right */}
            <div
              className="flex flex-col gap-6 xl:ml-8"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
            >
              <Link href="/">
                <img
                  src="/moto/optibelt/logo.png"
                  alt="Optibelt Logo"
                  className="w-[150px] h-auto object-contain"
                />
              </Link>
              <p className="stat-title font-bold text-[#1A1A1A]">
                We keep the world moving sustainably.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-[5px] bg-[#00355B] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:opacity-90 hover:-translate-y-1"
                  >
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-6 h-6 object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16 xl:gap-20 xl:max-w-[720px] xl:w-full min-[2000px]:col-span-3 min-[2000px]:max-w-none min-[2000px]:contents"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
            >
              {columns.map((column) => (
                <div key={column.heading} className="flex flex-col gap-4">
                  <h4 className="stat-title font-bold text-[#00355B]">
                    {column.heading}
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="section-text font-normal text-[#484848] transition-colors duration-300 ease-out hover:text-[#00355B]"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="section-text font-normal text-[#484848] text-center mt-4">
          Copyrights - © 2026 Optibelt GmbH
        </p>
      </div>
    </footer>
  );
}