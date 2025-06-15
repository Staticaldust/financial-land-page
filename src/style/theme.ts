import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Alef", "Arial", sans-serif', // למשל גופן שמתאים לעברית
  },
  direction: "rtl", // חשוב לעברית
});

export default theme;
