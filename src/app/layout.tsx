import type { Metadata, Viewport } from 'next';
import React from 'react';
import Header from '@/app/Header/Header';
import Image from 'next/image';
import { Footer } from './Footer/Footer';
import styles from './layout.module.scss';
import '@/styles/globals.scss/';
import PokeCover from '@/Images/pokemon-cover.jpg';
import BackgroundSVG from '@/app/components/BackgroundSVG/BackgroundSVG';

export const metadata: Metadata = {
  title: "Gotta Catch'em All",
  description: "A list of first generation Pokemon's",
  icons: {
    icon: '/pokeball.ico',
  },
};

export const viewport: Viewport = {
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
      <body>
        <BackgroundSVG />
        <Image src={PokeCover} alt="Cover image of Pokémon" className={styles['image-cover']} priority />
        <Header />

        <main className={`${styles['layout-wrapper']}`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
