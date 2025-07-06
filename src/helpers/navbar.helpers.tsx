import { FooterOptionType, NavbarOptionType } from "../types/navbar.types";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
export const BLUE = "#05005b";
export const YELLOW = "#fcdf00b7";

export const navbarOptions: NavbarOptionType[] = [
  {
    label: "פרטים",
    value: "more details",
    onclick: () => console.log("nav button clicked..."),
  },
  {
    label: "פרטים",
    value: "more details",
    onclick: () => console.log("nav button clicked..."),
  },
  // {
  //   label: "פרטים",
  //   value: "more details",
  //   onclick: () => console.log("nav button clicked..."),
  // },
];

export const footerOptions: FooterOptionType[] = [
  {
    icon: (
      <PhoneIcon fontSize="large" sx={{ color: BLUE, borderRadius: "50%" }} />
    ),
    tooltip: "צור קשר טלפוני",
    onclick: () => console.log("Phone icon clicked..."),
  },
  {
    icon: (
      <EmailIcon fontSize="large" sx={{ color: BLUE, borderRadius: "50%" }} />
    ),
    tooltip: "שלח דוא״ל",
    onclick: () => console.log("Email icon clicked..."),
  },
];
