import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABC Plumbing - Reliable Plumbing Services You Can Trust",
  description: "ABC Plumbing provides residential and commercial plumbing services including repairs, installations, and maintenance. Our professional technicians deliver fast, reliable, and high-quality work.",
  keywords: "plumbing, plumbing services, plumbing repairs, plumbing installation, emergency plumbing, residential plumbing, commercial plumbing, Long Island plumbing",
  authors: [{ name: "ABC Plumbing" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "ABC Plumbing - Reliable Plumbing Services",
    description: "Professional plumbing services for residential and commercial properties",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <Navigation />
        <div className="pt-20 md:pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
