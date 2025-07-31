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
  const [toggleSearch, setToggleSearch] = useState(false);

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

    console.log(query);

    const matches = allPokemon.filter((poke) => poke.name.toLowerCase().startsWith(query.toLowerCase()));
    console.log('this are the matches', matches);

    setFiltered(matches.slice(0, 10));
    setShowOptions(true);
  }, [query, allPokemon]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && filtered.length > 0) {
      router.push(`/PokemonList/details/${filtered[0].name}`);
      setQuery('');
      setShowOptions(false);
    }

    if (e.key === 'Escape') {
      setQuery('');
      setToggleSearch(false);
      setShowOptions(false);
    }
  }

  function handleSelect(name: string) {
    setQuery('');
    setShowOptions(false);
    router.push(`/PokemonList/details/${name}`);
  }

  function handleClickSearch() {
    setToggleSearch(true);
  }

  function handleBlurSearch() {
    setTimeout(() => {
      setToggleSearch(false);
      setShowOptions(false);
      setQuery('');
    }, 150);
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={query}
        onClick={handleClickSearch}
        onBlur={handleBlurSearch}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`${styles['search__input']} ${toggleSearch ? styles['search__input--active'] : ''}`}
      />

      <ul
        className={`${styles['search__result-list']} ${showOptions && filtered.length > 0 ? styles['search__result-list--visible'] : ''}`}
      >
        {filtered.map((poke) => (
          <li key={poke.name}>
            <button
              style={{ textTransform: 'capitalize' }}
              type="button"
              className={styles['search__result-item']}
              onClick={() => handleSelect(poke.name)}
            >
              {poke.name}
            </button>
          </li>
        ))}
      </ul>

      {!loading && query && filtered.length === 0 && <p className={styles['search__no-match']}>No Pokémon found</p>}
    </div>
  );
}
