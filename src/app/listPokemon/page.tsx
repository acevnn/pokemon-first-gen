import Link from "next/link";
import Pokemon from "@/app/listPokemon/Pokemon";

export default function CommunityPage() {
  return (
    <>
      <h1>List of all Rokemons</h1>
      <Pokemon />
      <Link href="../">Go back to home page</Link>
    </>
  );
}
