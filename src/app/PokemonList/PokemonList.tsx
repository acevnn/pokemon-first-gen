'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePokemonList } from '@/app/PokemonList/PokemonList.hooks';
import { fetchPokemonData } from '@/utils/pokemonData';
import { Pokemon } from '@/types/pokemonTypes';
import './PokemonList.module.scss';

const PokemonList = ({
  totalItems = 0,
  limit = 0,
  initialPokemon = [],
}: {
  totalItems?: number;
  limit?: number;
  initialPokemon?: Pokemon[];
}) => {
  const { classes } = usePokemonList();
  const [isFrontView, setIsFrontView] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon[]>(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMorePokemon = useCallback(
    async (offset: number) => {
      if (pokemon.length >= totalItems) return;

      try {
        setIsLoading(true);
        const newPokemon = await fetchPokemonData({ offset, limit });

        setPokemon((prev) => {
          const mergedPokemon = [...prev, ...newPokemon];
          return mergedPokemon.slice(0, totalItems);
        });
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [pokemon.length, totalItems, limit]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && pokemon.length < totalItems && !isLoading) {
          const offset = pokemon.length;
          await loadMorePokemon(offset);

          if (pokemon.length + limit >= totalItems) {
            observer.disconnect();
          }

          if (pokemon.length + limit >= totalItems) {
            observer.disconnect();
          }
        }
      },
      { threshold: 1.0 }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) observer.observe(currentSentinel);

    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, [loadMorePokemon, pokemon.length, totalItems, isLoading, limit]);

  const toggleText = `Show ${isFrontView ? 'Front' : 'Back'} View`;

  return (
    <>
      <Image
        className={classes.PokeTrainerImg}
        width={450}
        height={550}
        src="/ash-trainer.png"
        alt="Image of pokemon trainer Ash Ketchup"
        unoptimized={true}
      />
      <div id="pokemon-list" className={classes.pokemonListContainer}>
        <ul className={classes.PokemonListWrapper}>
          {pokemon.map((poke, index) => (
            <li className={classes.PokemonListWrapperItem} key={`${poke.name}-${index}`}>
              <div className={classes.PokemonListContentWrapper}>
                <Link href={`/PokemonList/details/${poke.name}`}>
                  <Image
                    loading="lazy"
                    unoptimized={true}
                    src={isFrontView ? poke.backSprite : poke.frontSprite}
                    alt={`${poke.name} ${isFrontView ? 'front' : 'back'} view`}
                    width={87}
                    height={87}
                  />
                </Link>
                <h3 className={classes.pokemonListHeader}>{poke.name}</h3>
              </div>
            </li>
          ))}
        </ul>
        <div ref={sentinelRef}>{isLoading && <p>Loading more Pokémon...</p>}</div>
      </div>
      <div className={classes.toggleViewWrapper}>
        <button aria-label={toggleText} className={classes.PokemonListToggleView} onClick={() => setIsFrontView((prev) => !prev)}>
          {toggleText}
        </button>
      </div>
    </>
  );
};

export default PokemonList;
