export interface PokemonListItem {
  id: number;
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  experience: number;
  stats: {
    name: string;
    value: number;
  }[];
  types: string[];
  abilities: string[];
  moves: string[];
}
