import { ReactNode } from "react";

export type NavbarOptionType = {
  label: string;
  value: string;
  onclick: () => void;
};

export type FooterOptionType = {
  icon: ReactNode;
  tooltip?: string;
  onclick: () => void;
};
