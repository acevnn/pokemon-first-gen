import PokemonList from "@/app/PokemonList/PokemonList";

async function PokemonPage() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  return (
    <section>
      <h1>First generation Pokemon</h1>
      <PokemonList pokemon={data.results} />
    </section>
  );
}

export default PokemonPage;
