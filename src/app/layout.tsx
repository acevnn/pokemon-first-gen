import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/app/Header/Header";
import Image from "next/image";
import Cover from "../../pokemon-cover.jpg";
import styles from "./layout.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon's",
  description: "A list of all first generation Pokemon's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Image
          src={Cover}
          alt={"Just an alt"}
          className={styles["image-cover"]}
        />
        <Header /> {/* Persistent Header */}
        <main>{children}</main>
        {/* Page-specific content */}
        <footer>
          <p>© 2024 Pokedex App. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
