"use client";

import React from "react";
import Link from "next/link";
import "./Header.module.scss";
import { useHeader } from "@/app/Header/Header.hooks";
import Image from "next/image";
import pokeLogo from "@/assets/Images/poke-logo.svg";
import { HeaderNavigation } from "@/app/components/HeaderNavigation/HeaderNavigation";
import useBreakpoints from "@/utils/grid";

function Header() {
  const { classes } = useHeader();
  const { isMobile } = useBreakpoints();

  return (
    <header className={`${classes.header} container`}>
      {isMobile && (
        <div className={classes.headerMobile}>
          <div className={classes.headerLogoWrapper}>
            <Link href="/">
              <Image width={48} height={48} src={pokeLogo} alt="Pokéball" />
            </Link>
          </div>
          <HeaderNavigation />
        </div>
      )}

      {!isMobile && (
        <div className={classes.headerDesktop}>
          <div className={classes.headerLogoWrapper}>
            <Link href="/">
              <Image width={48} height={48} src={pokeLogo} alt="Pokéball" />
            </Link>
            <p className={classes.headerText}>Pokemon</p>
          </div>
          <nav className={classes.headerNav}>
            <Link href="/">Home</Link>
            <Link href="/PokemonList">All Pokémon</Link>
            <Link href="/AboutUs">About</Link>
            <Link href="/Contact">Contact</Link>
          </nav>
        </div>
      )}

      <div className={classes.headerSearch}>
        <input
          type="text"
          placeholder="Search Pokémon..."
          aria-label="Search Pokémon"
        />
      </div>
    </header>
  );
}

export default Header;
