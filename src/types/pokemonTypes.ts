// src/types/pokemonTypes.ts

export interface SpriteImageVariants {
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
}

export interface OtherSprites {
  dream_world?: {
    front_default?: string | null;
    front_female?: string | null;
  };
  home?: SpriteImageVariants;
  showdown?: SpriteImageVariants;
  ['official-artwork']?: {
    front_default?: string | null;
    front_shiny?: string | null;
  };
}

export interface PokemonSprites extends SpriteImageVariants {
  other?: OtherSprites;
}

export interface ImageVariant {
  label: string;
  src?: string | null;
}

export type Pokemon = {
  name: string;
  frontSprite: string;
  backSprite: string;
  detailed?: string;
};
