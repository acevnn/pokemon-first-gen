import PokemonList from "@/app/PokemonList/PokemonList";
import "./PokemonList.module.scss";

export default async function showAllPokePage() {
  try {
    return <PokemonList limit={20} totalItems={151} />;
  } catch (error) {
    console.error("Failed to fetch Pokémon data:", error);
    return <p>Error loading Pokémon data</p>;
  }
}
