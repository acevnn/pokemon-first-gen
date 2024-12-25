"use client";

import React from "react";
import Link from "next/link";
import "./Header.module.scss";
import { useHeader } from "@/app/Header/Header.hooks";

function Header() {
  const { classes } = useHeader();
  return (
    <header className={classes.header}>
      <div className={classes.headerLogo}>
        <img
          src="https://img.icons8.com/color/48/000000/pokeball.png"
          alt="Pokéball"
        />
        <h1>Pokedex</h1>
      </div>

      {/* Navigation Links */}
      <nav className={classes.headerNav}>
        <Link href="/">Home</Link>
        <Link href="/PokemonList">All Pokémon</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
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
