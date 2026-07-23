import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundScene from "@/components/background/BackgroundScene";
import Footer from "@/components/layout/Footer";
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
  title: "VansFX | Professional Video Editor",
  description:
    "Professional video editor specializing in long-form content, short-form videos, trailers, and motion graphics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-white">
        <BackgroundScene />

        <div className="relative z-10 flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}