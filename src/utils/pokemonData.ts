export const fetchPokemonData = async ({ offset, limit }: { offset: number; limit: number }) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon data: ${res.statusText}`);
    }

    const data = await res.json();

    return await Promise.all(
      data.results.map(async (pokemon: { name: string; url: string }) => {
        const detailRes = await fetch(pokemon.url);
        if (!detailRes.ok) {
          throw new Error(`Failed to fetch details for ${pokemon.name}`);
        }

        const detailData = await detailRes.json();

        const frontSprite = detailData.sprites.other.showdown?.front_default || null;
        const backSprite = detailData.sprites.other.showdown?.back_default || null;
        const detailed = detailData.abilities[0].ability.name || null;

        if (!frontSprite && !backSprite) return null;

        return {
          name: pokemon.name,
          frontSprite,
          backSprite,
          detailed,
        };
      })
    ).then((results) => results.filter(Boolean));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface Ability {
  ability: {
    name: string;
  };
}

interface Sprites {
  other: {
    showdown: {
      front_default: string;
    };
  };
}

interface PokemonDataDetails {
  name: string;
  sprites: Sprites;
  abilities: Ability[];
}

export const getPokemon = async (name: string): Promise<PokemonDataDetails | null> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    console.error(`Failed to fetch pokemon: ${res.statusText}`);
  }
  const data = await res.json();
  return {
    name: data.name,
    sprites: data.sprites,
    abilities: data.abilities,
  };
};
