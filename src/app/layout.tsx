import "../../styles/bootstrap.min.css";
import "../../styles/animate.css";
import "../../styles/boxicons.min.css";
import "../../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../../styles/style.css";
import "../../styles/responsive.css";

import type { Metadata } from "next";
import { Rubik, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import { getToken } from "@/api/auth";
import axios from "axios";
import { cookies } from "next/headers";

// For all body text font
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

// For all heading font
const barlow_condensed = Barlow_Condensed({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/img/favicon.png",
  },
  title: "MSB Protection | Beverly Hills Bodyguard Service",
  description:
    "MSB Protection provides elite security services for ultra-high-net-worth individuals in Beverly Hills, Malibu, Hidden Hills, Westlake Village. Our expert team ensures safety, discretion, and peace of mind with top-tier executive protection, estate security, and personal security solutions.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${barlow_condensed.variable}`}>
        {children}

        {/* Google Analytics scripts placed correctly outside <head> */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JHGH1JP53X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JHGH1JP53X');
            `,
          }}
        />
      </body>
    </html>
  );
}
