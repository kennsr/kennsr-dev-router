import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-bold-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Berlanding | Premium Landing Page Solutions",
    template: "%s | Berlanding",
  },
  description:
    "Affordable, high-conversion landing page solutions crafted for modern brands. Elevate your online presence with stunning, lightning-fast designs.",
  keywords: [
    "landing page",
    "web design",
    "affordable website",
    "premium landing page",
    "nextjs",
    "react",
    "high conversion frontend",
  ],
  authors: [{ name: "Berlanding Team" }],
  creator: "Berlanding",
  metadataBase: new URL("https://berlanding.vercel.app"), // Replace with actual domain if known
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://berlanding.vercel.app",
    title: "Berlanding | Premium Landing Page Solutions",
    description:
      "Affordable, high-conversion landing page solutions crafted for modern brands.",
    siteName: "Berlanding",
    images: [
      {
        url: "/og-image.png", // Will need to ensure an og-image or placeholder exists, though /site-icon.png acts as fallback usually
        width: 1200,
        height: 630,
        alt: "Berlanding Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berlanding | Premium Landing Page Solutions",
    description:
      "Affordable, high-conversion landing page solutions crafted for modern brands.",
    creator: "@landing.murah",
  },
  icons: {
    icon: "/site-icon.png",
    apple: "/site-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.variable} ${jetbrainsMono.variable} ${archivoBlack.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
