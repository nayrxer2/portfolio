import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import WelcomePage from "@/components/welcome-page";
import React from "react";



export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A front-end developer who enjoys turning ideas into websites",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>
        <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
