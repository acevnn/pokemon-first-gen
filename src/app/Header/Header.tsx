"use client";

import React from "react";
import Link from "next/link";
import "./Header.module.scss";
import { useHeader } from "@/app/Header/Header.hooks";
import Image from "next/image";
import pokeLogo from "@/assets/Images/pokemon-logo.png";
import pokeText from "@/assets/Images/poke-text.png";
import { IconArrowLeft } from "@/assets/Icons/Search";

function Header() {
  const { classes } = useHeader();
  return (
    <header className={classes.header}>
      <div className={classes.headerLogo}>
        <Image width={48} height={48} src={pokeLogo} alt="Pokéball" />
        <Image width={128} height={48} src={pokeText} alt="Pokéheader" />
      </div>

      <nav className={classes.headerNav}>
        <Link href="/">Home</Link>
        <Link href="/PokemonList">All Pokémon</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>

      <div className={classes.headerSearch}>
        <IconArrowLeft />
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
