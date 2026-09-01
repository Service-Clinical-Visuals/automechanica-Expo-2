"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Typography from "./Typography";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "solid";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = "primary",
}: ButtonProps) => {

  let variantStyles = "";
  let iconColor = "text-white";
  let textColor: "white" | "primary" | "dark" = "white";

  switch (variant) {
    case "primary":
      variantStyles = "bg-primary text-white hover:bg-primary-hover shadow-md";
      iconColor = "text-white";
      textColor = "white";
      break;
    case "secondary":
      variantStyles = "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary";
      iconColor = "text-white";
      textColor = "white";
      break;
    case "solid":
      variantStyles = "bg-primary text-white hover:bg-primary-hover shadow-md";
      break;
  }

  const content = (
    <div className={`flex items-center justify-center px-8 py-3 transition-colors rounded-full ${variantStyles} ${className}`}>
      <Typography variant="p" color={textColor} className={`button tracking-wide whitespace-nowrap ${showIcon ? "mr-3 sm:mr-4" : ""}`}>
        {text}
      </Typography>
      {showIcon && (
        <ArrowRight className={`w-6 h-6 ${iconColor} group-hover:translate-x-1 transition-transform duration-300 shrink-0`} strokeWidth={2} />
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

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
