import { FooterOptionType, NavbarOptionType } from "../types/navbar.types";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
export const BLUE = "#1b4861";
export const YELLOW = "#f5cf55";

export const navbarOptions: NavbarOptionType[] = [
  {
    label: "צור קשר",
    value: "more details",
    onclick: () => {
      const email = "a025008999@gmail.com";
      const subject = "צור קשר";
      const body = "שלום,\n\nאני מעוניין בפרטים נוספים.\n\nתודה.";
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");
    },
  },
  {
    label: "ידע פיננסי",
    value: "financial knowledge",
    onclick: () => {
      const summaryCardsSection = document.querySelector(
        'div[style*="background: linear-gradient(0deg,#05005b,#0600bd,#05005b)"]'
      );
      if (summaryCardsSection) {
        summaryCardsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        const fallbackSection = document.querySelector(".card")?.closest("div");
        if (fallbackSection) {
          fallbackSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    },
  },

  // {
  //   label: "פרטים",
  //   value: "more details",
  //   onclick: () => console.log("nav button clicked..."),
  // },
];

export const footerOptions: FooterOptionType[] = [
  // {
  //   icon: (
  //     <PhoneIcon fontSize="large" sx={{ color: BLUE, borderRadius: "50%" }} />
  //   ),
  //   tooltip: "צור קשר טלפוני",
  //   onclick: () => console.log("Phone icon clicked..."),
  // },
  // {
  //   icon: (
  //     <EmailIcon fontSize="large" sx={{ color: BLUE, borderRadius: "50%" }} />
  //   ),
  //   tooltip: "שלח דוא״ל",
  //   onclick: () => console.log("Email icon clicked..."),
  // },
];
