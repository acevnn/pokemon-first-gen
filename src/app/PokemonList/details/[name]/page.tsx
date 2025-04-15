import { notFound } from 'next/navigation';
import { getPokemon } from '@/utils/pokemonData';
import PokemonSlider from '@/app/PokemonSlider/PokemonSlider';

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function PokemonDetailPage({ params }: PageProps) {
  const paramsResolved = await params;
  const data = await getPokemon(paramsResolved.name);
  if (!data) return notFound();

  console.log('this is the paramsResolved, jsonified', data);

  return (
    <>
      {' '}
      <h1>{data.name}</h1>
      <PokemonSlider sprites={data.sprites} />
    </>
  );
}
