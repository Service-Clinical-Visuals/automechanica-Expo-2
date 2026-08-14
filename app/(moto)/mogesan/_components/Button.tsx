import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  circleColor?: string;
  iconColor?: string;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  bgColor = "#BF1E2E",
  textColor = "#FFFFFF",
  circleColor = "#FFFFFF",
  iconColor = "#BF1E2E",
  type = "button",
  className = "",
}: ButtonProps) {
  const content = (
    <>
      <span
        className="rounded-full h-[38px] sm:h-[40px] md:h-[42px] xl:h-[46px] 2xl:h-[52px] flex items-center px-5 sm:px-6 md:px-7 xl:px-8 2xl:px-10 transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ backgroundColor: bgColor }}
      >
        <span
          className="whitespace-nowrap font-oswald font-semibold"
          style={{
            color: textColor,
            fontSize: "clamp(13px, 1.1vw, 18px)",
          }}
        >
          {children}
        </span>
      </span>

      <span
        className="rounded-full h-[38px] w-[38px] sm:h-[40px] sm:w-[40px] md:h-[42px] md:w-[42px] xl:h-[46px] xl:w-[46px] 2xl:h-[52px] 2xl:w-[52px] flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: circleColor }}
      >
        <ArrowUpRight
          className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 transition-transform duration-300 group-hover:rotate-45"
          style={{ color: iconColor }}
          strokeWidth={2}
        />
      </span>
    </>
  );

  const wrapperClasses = `group inline-flex items-center gap-[2px] transition-opacity duration-200 hover:opacity-90 ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={wrapperClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={wrapperClasses}
    >
      {content}
    </button>
  );
}