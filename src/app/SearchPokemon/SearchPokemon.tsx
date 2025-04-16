'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchPokemon.module.scss';

interface PokemonResult {
  name: string;
  url: string;
}

export default function SearchPokemon() {
  const [query, setQuery] = useState('');
  const [allPokemon, setAllPokemon] = useState<PokemonResult[]>([]);
  const [filtered, setFiltered] = useState<PokemonResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await res.json();
        setAllPokemon(data.results);
      } catch (error) {
        console.error('Failed to fetch Pokémon list:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemon();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      setShowOptions(false);
      return;
    }

    const matches = allPokemon.filter((poke) => poke.name.toLowerCase().startsWith(query.toLowerCase()));

    setFiltered(matches.slice(0, 10));
    setShowOptions(true);
  }, [query, allPokemon]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && filtered.length > 0) {
      router.push(`/PokemonList/details/${filtered[0].name}`);
      setQuery('');
      setShowOptions(false);
    }
  }

  function handleSelect(name: string) {
    setQuery('');
    setShowOptions(false);
    router.push(`/PokemonList/details/${name}`);
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles['search__input']}
      />

      {loading && <p>Loading all Pokémon...</p>}

      {showOptions && filtered.length > 0 && (
        <ul className={styles['search__result-list']}>
          {filtered.map((poke) => (
            <li key={poke.name}>
              <button type="button" className={styles['search__result-item']} onClick={() => handleSelect(poke.name)}>
                {poke.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {!loading && query && filtered.length === 0 && <p className={styles['search__no-match']}>No Pokémon found</p>}
    </div>
  );
}
