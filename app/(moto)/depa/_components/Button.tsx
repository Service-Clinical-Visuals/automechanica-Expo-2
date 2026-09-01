import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  text,
  href,
  icon,
  iconPosition = "right",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {text}
      {icon && iconPosition === "right" && icon}
    </>
  );

  const baseClasses = `inline-flex items-center justify-center gap-2 bg-[#bd2228] hover:bg-[#a01c22] text-white px-6 py-2.5 sm:py-3 rounded transition-colors oswald font-medium btn-text ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
