import PokemonList from "@/app/PokemonList/PokemonList";
import { fetchBasicPokemonData } from "@/utils/pokemonData";
import "./PokemonList.module.scss";

export default async function showAllPokePage() {
  try {
    const pokemon = await fetchBasicPokemonData();
    return <PokemonList pokemon={pokemon} />;
  } catch (error) {
    console.error("Failed to fetch Pokémon data:", error);
    return <p>Error loading Pokémon data</p>;
  }
}
