import { button } from "@/common/Button";
import { VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import type { UrlObject } from "url";

interface ButtonCustomProperties {
  // asLink: Set Button as link containing href
  asLink?: boolean;

  // url: set URL href for button
  url?: string | UrlObject;

  // prefixIcon: Set prefixIcon inline with Button
  prefixIcon?: ReactNode | string;

  // suffixIcon: Set suffixIcon inline with Button
  suffixIcon?: ReactNode | string;
}

export interface ButtonProps
  extends ButtonCustomProperties,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}
