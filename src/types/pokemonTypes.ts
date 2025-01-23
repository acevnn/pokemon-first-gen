export type SpriteType = "front" | "back" | "officialFront" | "officialBack";

export type PokemonSprites = {
  front_default: string;
  back_default: string;
  other: {
    showdown?: {
      front_default?: string;
      back_default?: string;
    };
  };
};
export type Pokemon = {
  name: string;
  frontSprite: string;
  backSprite: string;
  detailed?: string;
};
