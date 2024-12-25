import { Pokemon, SpriteType } from "@/types/pokemonTypes";

export const fetchPokemonData = async (spriteType: SpriteType) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  return await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const detailRes = await fetch(pokemon.url);
      const detailData = await detailRes.json();

      let spriteUrl = "";
      if (spriteType === "front") {
        spriteUrl = detailData.sprites.front_default;
      } else if (spriteType === "back") {
        spriteUrl = detailData.sprites.back_default;
      } else if (spriteType === "officialFront") {
        spriteUrl = detailData.sprites.other.showdown?.front_default;
      } else if (spriteType === "officialBack") {
        spriteUrl = detailData.sprites.other.showdown?.back_default;
      }

      return {
        name: pokemon.name,
        // frontSprite: detailData.sprites.front_default, // Front sprite
        // backSprite: detailData.sprites.back_default, // Back sprite
        frontSpriteShowdown: detailData.sprites.other.showdown.front_default, // Front 3d sprite
        backSpriteShowdown: detailData.sprites.other.showdown.back_default, // Back 3d sprite
      };
    }),
  );
};

export const fetchBasicPokemonData = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  return await Promise.all(
    data.results.map(async (pokemon: Pokemon) => {
      try {
        const detailRes = await fetch(pokemon.url);
        const detailData = await detailRes.json();
        return {
          name: pokemon.name,
          backSpriteShowdown: detailData.sprites.other.showdown.back_default,
          frontSpriteShowdown: detailData.sprites.other.showdown.front_default,
        };
      } catch (error) {
        console.error(`Failed to fetch data for ${pokemon.name}`, error);
        return null; // Return null for failed requests
      }
    }),
  ).then((results) => results.filter(Boolean)); // Filter out null values
};

export const fetchEvolutionChain = async (pokemonId: number) => {
  const speciesRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`,
  );
  const speciesData = await speciesRes.json();
  const evolutionChainUrl = speciesData.evolution_chain.url;

  const evolutionRes = await fetch(evolutionChainUrl);
  const evolutionData = await evolutionRes.json();

  console.log("tihs is it", evolutionData.chain.evolves_to[0]);
};

fetchEvolutionChain(2);
