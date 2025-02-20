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

  const loadMorePokemon = useCallback(
    async (offset: number) => {
      if (pokemon.length >= totalItems) return;
      try {
        setIsLoading(true);
        const newPokemon = await fetchPokemonData({ offset, limit });

        setPokemon((prev) => {
          const existingNames = new Set(prev.map((poke) => poke.name));
          const filteredNewPokemon = newPokemon.filter(
            (poke) => !existingNames.has(poke.name),
          );
          return [...prev, ...filteredNewPokemon];
        });
      } catch (error) {
        console.error(error);
        setError("Failed to load Pokémon data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    },
    [pokemon.length, totalItems, limit],
  );

  useEffect(() => {
    if (pokemon.length === 0) {
      loadMorePokemon(0);
    }
  }, [loadMorePokemon, pokemon.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && pokemon.length < totalItems && !isLoading) {
          const offset = pokemon.length;
          await loadMorePokemon(offset);
        }
      },
      { threshold: 1.0 },
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

  useEffect(() => {
    return () => {
      setPokemon([]);
    };
  }, []);

  const toggleText = `Show ${isFrontView ? "Front" : "Back"} View`;

  return (
    <>
      <Image
        className={classes.PokeTrainerImg}
        width={400}
        height={400}
        src={Ash}
        priority
        alt="Image of pokemon trainer Ash Ketchup"
      />
      <div id="pokemon-list" className={classes.pokemonListContainer}>
        <ul className={classes.PokemonListWrapper}>
          {pokemon.map((poke, index) => (
            <li
              className={classes.PokemonListWrapperItem}
              key={`${poke.name}-${index}`}
            >
              <div className={classes.PokemonListContentWrapper}>
                <Image
                  loading="lazy"
                  unoptimized
                  src={isFrontView ? poke.backSprite : poke.frontSprite}
                  alt={`${poke.name} ${isFrontView ? "front" : "back"} view`}
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
