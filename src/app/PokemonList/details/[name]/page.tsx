import { notFound } from 'next/navigation';
import { fetchPokemonData, getPokemon } from '@/utils/pokemonData';
import PokemonSlider from '@/app/PokemonSlider/PokemonSlider';

interface PageProps {
  params: Promise<{ name: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const allPokemon = await fetchPokemonData({ offset: 0, limit: 151 });
  return allPokemon.map((poke) => ({
    name: poke.name,
  }));
}

export default async function PokemonDetailPage({ params }: PageProps) {
  const { name } = await params;
  const data = await getPokemon(name);

  if (!data) return notFound();

  return (
    <>
      <h1>{data.name}</h1>
      <PokemonSlider sprites={data.sprites} />
    </>
  );
}
