"use server";

// constants
import { API } from "@/constants/environmentVariables";

// libraries
import { Trie } from "@/lib/trie";

// types
import type { PokeAPIListResponse } from "@/types/pokeAPI";
import type { PokemonListItem } from "@/types/pokemon";

const CACHE_DURATION = 300 * 1000;

let trie: Trie | null = null;
let lastUpdated = 0;

const buildTrie = async (): Promise<void> => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      {
        cache: "force-cache"
      }
    );

    if (res.ok) {
      const data: PokeAPIListResponse = await res.json();

      trie = new Trie();

      data.results.forEach((pokemon) => {
        trie!.insert(pokemon.name, {
          id: Number(
            pokemon.url
              .split(`${API}/pokemon/`)[1]
              .split("/")[0]
          ),
          name: pokemon.name
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const searchPokemon = async ({
  keyword
}: {
  keyword?: string;
}): Promise<PokemonListItem[]> => {
  const now = Date.now();

  if (!trie || now - lastUpdated > CACHE_DURATION) {
    await buildTrie();
    lastUpdated = now;
  }

  const results = trie!.search(keyword || "");

  return results;
};
