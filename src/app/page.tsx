import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/PokemonList" />
      <h1>Welcome to the First Generation Pokedex!</h1>
    </div>
  );
}
