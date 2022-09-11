export type Pokemon = {
  id: number
  name: string
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: PokemonStat[]
}

export type ResultGetPokemons = {
  results: Pokemon[]
}

