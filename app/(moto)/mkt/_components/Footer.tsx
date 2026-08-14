import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about-us" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact-us" },
];

const productLinks = [
  { label: "Cartridge Shocks", href: "#products" },
  { label: "Shocks With Spring Seat", href: "#products" },
  { label: "Struts Assembly", href: "#products" },
  { label: "Struts Shocks", href: "#products" },
  { label: "Twin-Tube Shocks", href: "#products" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] pt-14 md:pt-16 lg:pt-20 pb-6">
      <div className="custom-container">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-10 xl:gap-x-6 mb-10 md:mb-12">
          {/* Column 1: Logo & Description */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="col-span-2 md:col-span-1"
          >
            <Image
              src="/moto/mkt/logo.png"
              alt="MKT Holdings"
              width={180}
              height={64}
              className="h-14 md:h-16 w-auto mb-6"
            />

            <p className="body-text font-body font-normal text-body leading-relaxed">
              Advanced technology, high quality, effective customer service,
              unique flexibility and a careful training of the staff.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            className="col-span-1"
          >
            <h4 className="card-title font-heading font-semibold text-dark mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="body-text font-body font-normal text-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="col-span-1"
          >
            <h4 className="card-title font-heading font-semibold text-dark mb-6">
              Our Products
            </h4>

            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="body-text font-body font-normal text-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            className="col-span-1"
          >
            <h4 className="card-title font-heading font-semibold text-dark mb-6">
              Contact Us
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Image
                  src="/moto/mkt/phn.png"
                  alt="Phone"
                  width={17}
                  height={17}
                  className="mt-0.5 shrink-0"
                />

                <a
                  href="tel:212-273-9701"
                  className="body-text font-body font-normal text-body hover:text-primary transition-colors"
                >
                  212-273-9701
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/moto/mkt/email.png"
                  alt="Email"
                  width={17}
                  height={17}
                  className="mt-0.5 shrink-0"
                />

                <a
                  href="mailto:mktholdingsusa@gmail.com"
                  className="body-text font-body font-normal text-body hover:text-primary transition-colors lowercase"
                >
                  mktholdingsusa@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/moto/mkt/loc.png"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mt-0.5 shrink-0"
                />

                <span className="body-text font-body font-normal text-body">
                  1370 Broadway, Ste.1370
                  <br />
                  New York, NY 10018
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
            className="col-span-2 md:col-span-1"
          >
            <h4 className="card-title font-heading font-semibold text-dark mb-6">
              Subscribe For More Information
            </h4>

            <p className="body-text font-body font-normal text-body leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news,
              and updates from MKT Holdings CO., LTD.
            </p>

            <form className="relative flex items-center bg-white rounded-[10px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] overflow-hidden">
              <input
                type="email"
                placeholder="Email Address...."
                required
                className="w-full px-4 py-4 nav-link font-body font-normal text-body placeholder-body focus:outline-none"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-primary text-white w-[46px] h-[46px] m-[5px] rounded-[5px] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full border-t border-[rgba(33,33,33,0.25)] pt-6 flex items-center justify-center">
          <p className="body-text font-body font-normal text-body text-center">
            Copyright &copy; 2023 MKT Holdings CO., LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}