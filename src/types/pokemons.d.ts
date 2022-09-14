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

export type ResponseGetPokemons = {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}
