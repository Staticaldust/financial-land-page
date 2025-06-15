import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      {children}

      <Footer />
    </Box>
  );
};
export default Layout;
