export type NamedAPIResource = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  }
};

export type ResultGetPokemons = {
  results: Pokemon[];
}
