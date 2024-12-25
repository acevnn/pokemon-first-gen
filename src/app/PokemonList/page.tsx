import PokemonList from "@/app/PokemonList/PokemonList";
// import { fetchPokemonData } from "@/utils/pokemonData";
import { fetchBasicPokemonData } from "@/utils/pokemonData";
import "./PokemonList.module.scss";
import { usePokemonList } from "@/app/PokemonList/PokemonList.hooks";

export default async function CommunityPage() {
  const pokemon = await fetchBasicPokemonData(); // Fetch Pokémon data server-side
  const { classes } = usePokemonList();

  return (
    <>
      <h1 className={classes.PokemonListHeader}>List of all Rokemons</h1>
      <PokemonList pokemon={pokemon} />
    </>
  );
}
