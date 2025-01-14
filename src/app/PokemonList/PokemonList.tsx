"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePokemonList } from "@/app/PokemonList/PokemonList.hooks";
import { Pokemon } from "@/types/pokemonTypes";
import { fetchPokemonData } from "@/utils/pokemonData";
import "./PokemonList.module.scss";
import Ash from "@/assets/Images/ash-kepa4.png";

const PokemonList = ({
  totalItems = 151,
  limit = 20,
}: {
  totalItems?: number;
  limit?: number;
}) => {
  const { classes } = usePokemonList();
  const [isFrontView, setIsFrontView] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMorePokemon = useCallback(async (offset: number) => {
    try {
      setIsLoading(true);
      try {
        const newPokemon = await fetchPokemonData({ offset, limit });
        setPokemon((prev) => {
          // console.log("Previous Pokémon:", prev);
          // console.log("Newly fetched Pokémon:", newPokemon);

          return [...prev, ...newPokemon];
        });
      } catch (err) {
        setError("Failed to load Pokémon data. Please try again later.");
        return err;
      } finally {
        setIsLoading(false);
      }
    } catch (err) {
      setError("Failed to load Pokémon data. Please try again later.");
      setIsLoading(false);
      return err;
    }
  }, []);

  useEffect(() => {
    const fetchInitialPokemon = async () => {
      if (pokemon.length === 0) {
        await loadMorePokemon(0);
        console.log('load initial pokemon data "', pokemon);
      }
    };

    fetchInitialPokemon();
  }, [loadMorePokemon, pokemon.length]);

  // IntersectionObserver for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && pokemon.length < totalItems && !isLoading) {
          const offset = pokemon.length;
          await loadMorePokemon(offset);
          console.log("maybe rhe same as newPokemon ", pokemon);
        }
      },
      { threshold: 1.0 }, // Trigger when fully visible
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [loadMorePokemon, pokemon.length, totalItems, isLoading]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => setError(null)}>Retry</button>
      </div>
    );
  }

  const toggleText = `Show ${isFrontView ? "Front" : "Back"} View`;
  return (
    <>
      <Image
        className={classes.PokeTrainerImg}
        width={400}
        height={400}
        src={Ash}
        alt="asd"
      />
      <div id="pokemon-list" className={classes.pokemonListContainer}>
        <ul className={classes.PokemonListWrapper}>
          <div className={classes.pokemonListWrapperBackground}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1066"
              height="799"
              viewBox="0 0 1066 799"
              fill="none"
            >
              <path
                d="M676.505 266.333C676.505 413.425 525.064 532.666 338.252 532.666C151.441 532.666 0 413.425 0 266.333C0 119.241 151.441 0 338.252 0C525.064 0 676.505 119.241 676.505 266.333Z"
                fill="#00FF9F"
                fillOpacity="0.15"
              />
              <path
                d="M849.273 532.667C849.273 679.759 697.832 799 511.02 799C324.209 799 172.768 679.759 172.768 532.667C172.768 385.575 324.209 266.334 511.02 266.334C697.832 266.334 849.273 385.575 849.273 532.667Z"
                fill="#00BAFF"
                fillOpacity="0.15"
              />
              <path
                d="M1065.33 266.333C1065.33 413.425 913.892 532.666 727.081 532.666C540.269 532.666 388.828 413.425 388.828 266.333C388.828 119.241 540.269 0 727.081 0C913.892 0 1065.33 119.241 1065.33 266.333Z"
                fill="#FF9900"
                fillOpacity="0.15"
              />
            </svg>
          </div>
          {pokemon.map((poke, index) => (
            <li className={classes.PokemonListWrapperItem} key={index}>
              <div className={classes.PokemonListContentWrapper}>
                <Image
                  loading="lazy"
                  unoptimized
                  src={isFrontView ? poke.backSprite : poke.frontSprite}
                  alt={`${poke.name} ${isFrontView ? "front" : "back"} view`}
                  layout="intristic"
                  width={87}
                  height={87}
                />
                <h3 className={classes.pokemonListHeader}>{poke.name}</h3>
                <h3>{poke.detailed}</h3>
              </div>
            </li>
          ))}
        </ul>
        <div ref={sentinelRef}>
          {isLoading && <p>Loading more Pokémon...</p>}
        </div>
      </div>
      <div className={classes.toggleViewWrapper}>
        <button
          aria-label={toggleText}
          className={classes.PokemonListToggleView}
          onClick={() => setIsFrontView((prev) => !prev)}
        >
          {toggleText}
        </button>
      </div>
    </>
  );
};

export default PokemonList;
