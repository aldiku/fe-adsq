// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adsqoo | Trusted Advertising Placement Services",
  description: "Adsqoo | Trusted Advertising Placement Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={publicSans.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.ico"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
