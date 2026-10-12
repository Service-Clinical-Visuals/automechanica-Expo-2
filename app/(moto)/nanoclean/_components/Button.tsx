"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  iconOnHover?: boolean;
  variant?: "primary" | "outline-white" | "outline-blue" | "white";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  iconOnHover = true,
  variant = "outline-white",
}: ButtonProps) => {
  const variantStyles = {
    "outline-white":
      "border border-white text-white hover:bg-white/15 hover:border-white",
    "outline-blue":
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]",
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent shadow-sm",
    white:
      "bg-white text-[var(--color-primary)] hover:bg-gray-100 border border-transparent shadow-sm",
  };

  const content = (
    <div
      className={`inline-flex items-center justify-center px-6 py-2.5 min-[2500px]:px-9 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5 rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] font-semibold transition-all duration-300 group ${variantStyles[variant]} ${className}`}
    >
      <span className="button whitespace-nowrap font-semibold !font-[var(--font-primary)] transition-colors duration-300">
        {text}
      </span>

      {showIcon ? (
        <span className="inline-flex items-center ml-1.5 min-[2500px]:ml-2.5 min-[3800px]:ml-3.5 transition-all duration-300">
          <ArrowUpRight
            className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </span>
      ) : iconOnHover ? (
        <span className="inline-flex items-center overflow-hidden max-w-0 opacity-0 -translate-x-1.5 group-hover:max-w-[28px] min-[2500px]:group-hover:max-w-[42px] min-[3800px]:group-hover:max-w-[56px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-1.5 min-[2500px]:group-hover:ml-2.5 min-[3800px]:group-hover:ml-3.5 transition-all duration-300 ease-out">
          <ArrowUpRight
            className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </span>
      ) : null}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

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
