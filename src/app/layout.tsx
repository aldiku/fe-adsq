"use client"

// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Public_Sans } from "next/font/google";
import { useState } from "react";
import Navbar from "@/components/front/navbar";
import Sidebar from "@/components/front/navbar/sidebar";
import { Box, createTheme } from "@mui/material";
import { Footer } from "@/components/front/footer";
import { ThemeProvider } from "@mui/styles";
import { theme } from "@/theme/AppThemes";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  // const theme = createTheme({
  //   // your custom palette, typography, etc.
  // });

  return (
    <html lang="id" className={publicSans.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.ico"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Adsqoo | Trusted Advertising Placement Services</title>
        <meta name="description" content="Adsqoo | Trusted Advertising Placement Services" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            <Navbar openSidebar={() => setOpenDrawer(true)} />
            <Sidebar open={openDrawer} close={() => setOpenDrawer(false)} />
            <Box
              className='app-content'
              sx={{
                overflowX: 'hidden',
                position: 'relative',
                top: { xs: "25px", md: "32px" },
                mb: 8,
                minHeight: theme => `calc(100vh - ${theme.spacing((theme.mixins.toolbar.minHeight as number) / 4)})`
              }}
            >

              {children}
            </Box>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
