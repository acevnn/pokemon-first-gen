import { ImageVariant, PokemonSprites } from '@/types/pokemonTypes';

export const getImageFrontVariants = (sprites: PokemonSprites): ImageVariant[] => [
  { label: 'Dream World', src: sprites.other?.dream_world?.front_default },
  { label: 'Showdown Front', src: sprites.other?.showdown?.front_default },
  { label: 'Home', src: sprites.other?.home?.front_default },
  { label: 'Front', src: sprites.front_default },
  { label: 'Shiny Front', src: sprites.front_shiny },
];

export const getImageBackVariants = (sprites: PokemonSprites): ImageVariant[] => [
  { label: 'Back Default', src: sprites.back_default },
  { label: 'Showdown Back', src: sprites.other?.showdown?.back_default },
  { label: 'Back Shiny', src: sprites.back_shiny },
];
