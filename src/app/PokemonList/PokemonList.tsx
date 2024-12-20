"use client";

import React from "react";
import classes from "./Pokemon.module.scss";

export type PokemonList = { name?: string };

function PokemonList({ pokemon }: { pokemon: PokemonList[] }) {
  return (
    <li className={classes.list}>
      {pokemon.map((poke: PokemonList) => (
        <p key={poke.name}>{poke.name}</p>
      ))}
    </li>
  );
}

export default PokemonList;
