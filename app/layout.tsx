import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranavesh Kotike - AI & Software Developer",
  description:
    "Portfolio website of Pranavesh Kotike, AI & Software Developer specializing in ML, GenAI, and full-stack web apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
