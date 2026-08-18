import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[#111111]  font-semibold transition-colors exo2 btn-text";

  // Provide default padding if no custom padding is supplied
  const paddingClasses = className.includes("px-") || className.includes("py-") || className.includes("p-") 
    ? "" 
    : "px-8 py-3 md:py-4 md:px-10";

  const finalClasses = `${baseClasses} ${paddingClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={finalClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={finalClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
