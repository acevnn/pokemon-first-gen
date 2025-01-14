import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/../public/css/clash-display.css";
import React from "react";
import Header from "@/app/Header/Header";
import Image from "next/image";
import Cover from "@/assets/Images/pokemon-cover.jpg";
import styles from "./layout.module.scss";

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
        <Header />
        <main>{children}</main>
        <footer>
          <p>© 2024 Pokedex App. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
