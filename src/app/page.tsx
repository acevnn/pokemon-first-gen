import Link from "next/link";
import "@/styles/globals.css/";

export default function HomePage() {
  return (
    <div>
      <Link href="/PokemonList" />
      <h1>Discover, learn and catch them all!</h1>
      <p>Scroll endlessly through your favorite</p>
      <button>Explore now!</button>
    </div>
  );
}
