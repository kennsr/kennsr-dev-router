import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
