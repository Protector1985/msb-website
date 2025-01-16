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
  title: "Professional Network for Property Managers & Security Experts",
  description:
    "Discover a trusted space for Property Managers, Executive Assistants, and Security Specialists to connect, share ideas, and build valuable partnerships. Join a vetted community of professionals dedicated to elevating the industry through collaboration and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
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
      </head>
      <body className={`${rubik.variable} ${barlow_condensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
