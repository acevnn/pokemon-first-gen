import React from "react";
import { usePokemonList } from "@/app/PokemonList/PokemonList.hooks";

export default function PokemonListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { classes } = usePokemonList();
  return (
    <section
      className={classes.PokemonWrapper}
      aria-labelledby="pokemon-list-header"
    >
      <h2 className={classes.LayoutPokemonListHeader}>List of all Rokemons</h2>
      <article className={classes.LayoutPokemonListWrapper}>{children}</article>
    </section>
  );
}
