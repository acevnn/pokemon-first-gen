"use client";

import { useState } from "react";
import Image from "next/image";
import { usePokemonList } from "@/app/PokemonList/PokemonList.hooks";
import Pagination from "@/app/components/Pagination/Pagination";
import "./PokemonList.module.scss";
import { useScrollContext } from "@/app/functions/ScrollContext";

const PokemonList = ({ pokemon = [] }: { pokemon: any[] }) => {
  const { classes } = usePokemonList();
  const [isFrontView, setIsFrontView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPokemon = pokemon.slice(startIndex, startIndex + pageSize);
  //
  // console.log("Received Pokemon:", pokemon);
  // console.log("Paginated Pokemon:", paginatedPokemon);

  if (!pokemon || pokemon.length === 0) {
    return <p>No Pokémon to display</p>;
  }

  const onPageChange = (page: number) => {
    console.log("Changing to page:", page);
    setCurrentPage(page);
  };

  const scrollableRef = useScrollContext();

  const scrollToStart = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const toggleText = `Show ${isFrontView ? "Back" : "Front"} View`;
  console.log("Scrollable Ref:", scrollableRef.current);

  return (
    <>
      <div className={classes.pokemonListContainer}>
        <h2 id="pokemon-list-subheader">Pokémon List</h2>
        <ul ref={scrollableRef} className={classes.PokemonListWrapper}>
          {paginatedPokemon.map((poke) => (
            <li className={classes.PokemonListWrapperItem} key={poke.name}>
              <h3>{poke.name}</h3>
              <Image
                unoptimized
                src={
                  isFrontView
                    ? poke.frontSpriteShowdown
                    : poke.backSpriteShowdown
                }
                alt={`${poke.name} ${isFrontView ? "front" : "back"} view`}
                width={64}
                height={64}
                priority={false}
              />
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        items={pokemon.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
      <div className={classes.toggleViewWrapper}>
        <button
          aria-label={toggleText}
          className={classes.PokemonListToggleView}
          onClick={() => setIsFrontView((prev) => !prev)}
        >
          {toggleText}
        </button>
        <button onClick={scrollToStart}>Scroll to First Pokémon</button>
      </div>
    </>
  );
};

export default PokemonList;
