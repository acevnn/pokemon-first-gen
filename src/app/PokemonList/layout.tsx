import React from 'react';
import { usePokemonList } from '@/app/PokemonList/PokemonList.hooks';

export default function PokemonListLayout({ children }: { children: React.ReactNode }) {
  const { classes } = usePokemonList();
  return (
    <section className={classes.PokemonWrapper} aria-label="List of Pokemons">
      <article className={classes.LayoutPokemonListWrapper}>{children}</article>
    </section>
  );
}
