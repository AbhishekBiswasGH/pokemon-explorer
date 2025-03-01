export interface PokeAPIListResponseResult {
  name: string;
  url: string;
}

export interface PokeAPIListResponse {
  results: PokeAPIListResponseResult[];
}

export interface PokeAPIPokemonResponseAbility {
  ability: {
    name: string;
  };
}

export interface PokeAPIPokemonResponseMove {
  move: {
    name: string;
  };
}

export interface PokeAPIPokemonResponseStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokeAPIPokemonResponseType {
  type: {
    name: string;
  };
}

export interface PokeAPIPokemonResponse {
  abilities: PokeAPIPokemonResponseAbility[];
  base_experience: number;
  height: number;
  id: number;
  moves: PokeAPIPokemonResponseMove[];
  name: string;
  stats: PokeAPIPokemonResponseStat[];
  types: PokeAPIPokemonResponseType[];
  weight: number;
}
