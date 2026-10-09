"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typography from "./Typography";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "dark" | "light";
  iconVariant?: "dark" | "white";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "dark",
  iconVariant = "white",
}: ButtonProps) => {
  const isDark = variant === "dark";

  const btnBg = isDark
    ? "bg-[#020202] text-white border border-white"
    : "bg-white text-[#020202] border border-[#020202]";

  const iconBg = iconVariant === "white"
    ? "bg-[#020202] text-white border border-white"
    : "bg-white text-[#020202] border border-[#020202]";

  const iconColor = iconVariant === "white" ? "text-white" : "text-[#020202]";

  const content = (
    <div
      className={`inline-flex items-center group cursor-pointer select-none rounded-full shadow-[3px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:brightness-110 active:scale-95 ${btnBg} ${className}`}
    >
      <div className="pl-6 pr-4 py-2.5 min-[3800px]:pl-10 min-[3800px]:pr-6 min-[3800px]:py-4 flex items-center">
        <Typography
          variant="span"
          color={isDark ? "white" : "dark"}
          className="button whitespace-nowrap font-semibold tracking-wide"
        >
          {text}
        </Typography>
      </div>

      {showIcon && (
        <div
          className={`mr-1 my-1 flex items-center justify-center rounded-full w-10 h-10 min-[2000px]:w-12 min-[2000px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 ${iconBg}`}
        >
          <ArrowUpRight
            className={`w-5 h-5 min-[2000px]:w-6 min-[2000px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 ${iconColor} transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
            strokeWidth={2}
          />
        </div>
      )}
    </div>
  );

  const wrapperStyles = "inline-block outline-none";

  if (href) {
    return (
      <Link href={href} className={wrapperStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
