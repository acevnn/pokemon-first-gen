import React from "react";
import Link from "next/link";
import { useHeaderNav } from "@/app/components/HeaderNav/HeaderNav.hooks";

export function HeaderNav() {
  const { classes } = useHeaderNav();
  return (
    <nav className={`${classes.headerNav} container`}>
      <ul className={classes.headerNavList}>
        <Link href="/">Home</Link>
        <Link href="/PokemonList">All Pokémon</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/Contact">Contact</Link>
      </ul>
    </nav>
  );
}
