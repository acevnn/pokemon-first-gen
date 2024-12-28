// SpriteType specifies the type of sprite to fetch
export type SpriteType = "front" | "back" | "officialFront" | "officialBack";

// Represents the basic data for a fetched Pokémon
export type PokemonFetch = {
  name: string;
  url: string; // The URL to fetch detailed Pokémon data
};

// Represents the sprites structure from the API
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

// Represents the detailed data structure for a Pokémon
export type PokemonDetails = {
  name: string;
  sprites: PokemonSprites;
};

// Final structured Pokémon object for frontend use
export type Pokemonx = {
  name: string;
  frontSpriteShowdown: string;
  backSpriteShowdown: string;
};
