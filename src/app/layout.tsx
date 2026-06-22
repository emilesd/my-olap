import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyOlap — Cube the Power of Your Spreadsheet",
  description:
    "Personal multi-dimensional OLAP modeling right on your laptop. Model your business, stream your data, slice, dice, analyze, and report at scale through an Excel Add-in interface.",
  keywords: [
    "OLAP",
    "analytics",
    "financial modeling",
    "business intelligence",
    "Excel",
    "enterprise analytics",
    "slice and dice",
    "reporting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
