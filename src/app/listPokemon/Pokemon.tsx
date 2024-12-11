"use client";

import React, { useEffect, useState } from "react";
import classes from "./Pokemon.module.scss";

export type Pokemon = { name?: string };

function Pokemon(props: Pokemon) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        console.log(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <li className={classes.list}>
      <h1>Rooookeeenooooooooon</h1>
      {pokemon.map((poke: Pokemon) => (
        <p key={poke.name}>{poke.name}</p>
      ))}
    </li>
  );
}

export default Pokemon;
