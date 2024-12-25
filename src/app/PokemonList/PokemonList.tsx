"use client";
import { useState } from "react";
import Image from "next/image";
import "./PokemonList.module.scss";
import { usePokemonList } from "@/app/PokemonList/PokemonList.hooks";

const PokemonList = ({ pokemon = [] }: { pokemon: any[] }) => {
  const [isFrontView, setIsFrontView] = useState(true);
  const { classes } = usePokemonList();

  if (!pokemon || pokemon.length === 0) {
    return <p>No Pokémon to display</p>;
  }

  // useEffect(() => {
  //   const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/2/");
  //   const data = res.json();
  // });

  return (
    <section className={classes.PokemonWrapper}>
      <ul
        className={classes.PokemonListWrapper}
        style={{ listStyle: "none", padding: 0 }}
      >
        {pokemon.map((poke) => (
          <li className={classes.PokemonListWrapperItem} key={poke.name}>
            <h3>{poke.name}</h3>
            <Image
              unoptimized
              src={
                isFrontView ? poke.frontSpriteShowdown : poke.backSpriteShowdown
              }
              alt={`${poke.name} ${isFrontView ? "front" : "back"} view`}
              width={64}
              height={64}
              priority={false}
            />
          </li>
        ))}
      </ul>
      <div className={classes.toggleViewWrapper}>
        <button
          className={classes.PokemonListToggleView}
          onClick={() => setIsFrontView((prev) => !prev)}
        >
          Show {isFrontView ? "Back" : "Front"} View
        </button>
      </div>
    </section>
  );
};

export default PokemonList;
