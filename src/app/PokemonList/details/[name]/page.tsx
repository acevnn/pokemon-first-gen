import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: { name: unknown };
}

export default async function PokemonDetailPage({ params }: PageProps) {
  const { name } = params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log("this are the results", res);

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

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
