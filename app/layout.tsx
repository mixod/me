import { ReactNode } from "react";
import { Space_Grotesk, Manrope } from "next/font/google";

import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AosInit from "./AosInit";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <AosInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
