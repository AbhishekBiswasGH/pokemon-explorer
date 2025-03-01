"use server";

// types
import type { PokeAPIPokemonResponse } from "@/types/pokeAPI";
import type { Pokemon } from "@/types/pokemon";

export const getPokemon = async ({
  id
}: {
  id: string;
}): Promise<Pokemon | null> => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    if (res.ok) {
      const data: PokeAPIPokemonResponse = await res.json();

      const pokemon: Pokemon = {
        id: data.id,
        name: data.name.split("-").join(" "),
        height: data.height,
        weight: data.weight,
        experience: data.base_experience,
        stats: data.stats.map(
          ({ stat: { name }, base_stat }) => ({
            name: name.split("-").join(" "),
            value: base_stat
          })
        ),
        types: data.types.map(({ type: { name } }) =>
          name.split("-").join(" ")
        ),
        abilities: data.abilities.map(
          ({ ability: { name } }) =>
            name.split("-").join(" ")
        ),
        moves: data.moves.map(({ move: { name } }) =>
          name.split("-").join(" ")
        )
      };

      return pokemon;
    }

    return null;
  } catch (error) {
    console.error(error);

    return null;
  }
};
