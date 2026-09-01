import React from "react";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "white" | "black" | "gray" | "secondary";
  [key: string]: any;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
  color = "black",
  ...rest
}) => {
  const Component = variant as React.ElementType;

  const colorClasses = {
    primary: "text-primary",
    white: "text-white",
    black: "text-black",
    gray: "text-gray-600",
    secondary: "text-[#1E1E1E]",
  };

  const baseClass = colorClasses[color] || "";

  return (
    <Component className={`${baseClass} ${className}`} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
