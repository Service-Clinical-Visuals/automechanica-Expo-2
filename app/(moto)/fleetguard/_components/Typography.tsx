"use client";

import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?:
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "body" | "lead" | "small";
  as?: React.ElementType;
  className?: string;
  color?:
    "primary" | "dark" | "body" | "white" | "muted" | "secondary" | "none";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right" | "justify";
}

export default function Typography({
  children,
  variant = "body",
  as,
  className = "",
  color = "body",
  weight,
  align,
  ...rest
}: TypographyProps) {
  // Determine which HTML tag to render
  const defaultTags: Record<string, React.ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    h7: "span",
    body: "p",
    lead: "p",
    small: "span",
  };

  const Component = as || defaultTags[variant] || "p";

  // Sizing from Lumed template, matched to Veedol
  const variantStyles = {
    h1: "leading-[1.1] tracking-tight",
    h2: "leading-[1.15] tracking-tight",
    h3: "leading-[1.2]",
    h4: "leading-[1.3]",
    h5: "leading-[1.4]",
    h6: "leading-[1.5]",
    h7: "leading-[1.5]",
    body: "leading-[1.65]",
    lead: "leading-[1.6]",
    small: "leading-[1.5]",
  };

  // Brand color overrides
  const colorStyles = {
    primary: "text-primary",
    dark: "text-dark",
    body: "text-[#555555]",
    white: "text-[#FFFFFF]",
    muted: "text-gray-500",
    secondary: "text-primary", // Red
    none: "",
  };

  // Weight classes
  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-semibold",
    extrabold: "font-extrabold",
  };

  // Alignment classes
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const isHeading = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"].includes(
    variant,
  );
  const fontClass = isHeading ? "font-oswald" : "font-rubik";

  // Dynamic default weights
  const defaultWeights: Record<
    string,
    "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"
  > = {
    h1: "normal",
    h2: "normal",
    h3: "normal",
    h4: "normal",
    h5: "normal",
    h6: "normal",
    h7: "normal",
    body: "normal",
    lead: "normal",
    small: "normal",
  };

  const activeWeight = weight || defaultWeights[variant] || "normal";

  const combinedClasses =
    ` ${fontClass} ${variantStyles[variant]} ${colorStyles[color]} ${weightStyles[activeWeight]} ${align ? alignStyles[align] : ""} ${className} `
      .trim()
      .replace(/\s+/g, " ");

  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
}
