import Link from "next/link";
import "@/styles/globals.css/";

export default function HomePage() {
  return (
    <div>
      <Link href="/PokemonList" />
      <h1>Welcome to the First Generation Pokedex!</h1>
    </div>
  );
}
