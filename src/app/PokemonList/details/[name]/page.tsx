import { notFound } from "next/navigation";
import Image from "next/image";

async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) return null;
  return res.json();
}

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function PokemonDetailPage({ params }: PageProps) {
  console.log("Params received (before await):", params);

  const resolvedParams = await params;
  console.log("Resolved Params:", resolvedParams);

  if (!resolvedParams?.name || typeof resolvedParams.name !== "string") {
    console.error("Invalid params:", resolvedParams);
    return notFound();
  }

  const data = await getPokemon(resolvedParams.name);
  if (!data) return notFound();

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <h1>{data.name}</h1>
      <Image
        unoptimized
        width={87}
        height={87}
        src={data.sprites.other.showdown?.front_default}
        alt={data.name}
      />
      <p>Ability: {data.abilities[0]?.ability.name || "Unknown"}</p>
    </div>
  );
}
