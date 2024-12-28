import React from "react";
import { usePokemonList } from "@/app/PokemonList/PokemonList.hooks";
import { ScrollProvider } from "@/app/functions/ScrollContext";

export default function PokemonListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { classes } = usePokemonList();
  return (
    <ScrollProvider>
      <section
        className={classes.PokemonWrapper}
        aria-labelledby="pokemon-list-header"
      >
        <h1 className={classes.LayoutPokemonListHeader}>
          List of all Rokemons
        </h1>
        <article className={classes.LayoutPokemonListWrapper}>
          {children}
        </article>
      </section>
    </ScrollProvider>
  );
}
