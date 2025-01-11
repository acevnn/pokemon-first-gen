export const fetchPokemonData = async ({
  offset = 0,
  limit = 10,
}: {
  offset: number;
  limit: number;
}) => {
  try {
    // const maxPokemon = 151;
    // if (offset >= maxPokemon) {
    //   throw new Error("Offset exceeds the maximum number of Pokémon");
    // }
    // const adjustedLimit = Math.min(limit, maxPokemon - offset);
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
      { cache: "force-cache" },
    );

    console.log("offset: ", offset);

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

        console.log(detailData);

        const frontSprite =
          detailData.sprites.other.showdown?.front_default || null;
        const backSprite =
          detailData.sprites.other.showdown?.back_default || null;
        const detailed = detailData.abilities[0].ability.name || null;

        if (!frontSprite && !backSprite) return null;

        return {
          name: pokemon.name,
          frontSprite,
          backSprite,
          detailed,
        };
      }),
    ).then((results) => results.filter(Boolean));
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the
    // error to handle it in the UI
  }
};
