import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
  { name: "ICatalogue", href: "#" },
  { name: "Events", href: "#" },
];

function DashedDivider() {
  return (
    <div className="relative w-full">
      <div className="border-t border-dashed border-white/60" />
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 2xl:w-1.5 2xl:h-1.5 rounded-full bg-white" />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 2xl:w-1.5 2xl:h-1.5 rounded-full bg-white" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-secondary overflow-hidden">
      {/* Orange wave */}
      <img
        src="/moto/senfineco/footer.webp"
        alt=""
        className="absolute top-0 right-0 w-[94%] h-auto pointer-events-none select-none z-0"
      />

      {/* Logo + Navigation */}
      <div className="relative z-10 custom-container pt-16 sm:pt-20 md:min-h-[17vw] flex flex-col justify-end pb-6 2xl:pb-8">
        <Link href="#" className="w-fit mb-6 md:mb-8 2xl:mb-10">
          <img
            src="/moto/senfineco/footerlogo.webp"
            alt="Senfineco Germany"
            className="w-[90px] md:w-[110px] 2xl:w-[140px] min-[2560px]:w-[190px] h-auto object-contain"
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-6 2xl:gap-x-8 min-[2560px]:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="footer-text1 inter-font text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <DashedDivider />

      {/* Info Columns */}
      <div className="relative z-10 custom-container py-8 md:py-10 2xl:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-6 2xl:gap-10">
          {/* About Company */}
          <div>
            <h3 className="footer-text text-white exo2-font font-semibold uppercase mb-3 2xl:mb-5">
              About Company
            </h3>
            <p className="section-text text-white/85 leading-relaxed md:max-w-[80%] capitalize">
              SENFINECO is an automotive aftermarket brand offering a comprehensive range of lubricants,
              additives, car-care products, and maintenance solutions focused on quality, performance, and
              reliability.
            </p>
          </div>

          {/* Contact */}
          <div className="md:text-center">
            <h3 className="footer-text text-white exo2-font font-semibold uppercase mb-3 2xl:mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-2 2xl:gap-3">
              <a href="" className="section-text text-white hover:text-primary transition-colors">
                +49 (0)4103 - 9671 477
              </a>
              <a href="" className="section-text text-white hover:text-primary transition-colors">
                info@senfineco.de
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="md:text-right">
            <h3 className="footer-text text-white exo2-font font-semibold uppercase mb-3 2xl:mb-5">
              Address
            </h3>
            <p className="section-text text-white leading-relaxed">
              Hasenkamp 4
              <br />
              22880 Wedel/ Hamburg
              <br />
              Germany
            </p>
          </div>
        </div>
      </div>

      <DashedDivider />

      {/* Bottom Bar */}
      <div className="relative z-10 custom-container py-6 2xl:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="section-text text-white">
            © {new Date().getFullYear()} SENFINECO Germany All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 2xl:gap-8">
            <Link href="#" className="section-text text-white hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="section-text text-white hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
