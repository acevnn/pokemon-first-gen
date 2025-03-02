import PokemonList from "@/app/PokemonList/PokemonList";
import { fetchPokemonData } from "@/utils/pokemonData";
import "./PokemonList.module.scss";

export default async function showAllPokePage() {
  try {
    const totalItems = 151;
    const limit = 20;
    const initialPokemon = await fetchPokemonData({ offset: 0, limit });

    return (
      <PokemonList
        totalItems={totalItems}
        limit={limit}
        initialPokemon={initialPokemon}
      />
    );
  } catch (error) {
    console.error("Failed to fetch Pokémon data:", error);
    return <p>Error loading Pokémon data</p>;
  }
}
