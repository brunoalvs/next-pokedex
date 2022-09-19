export type Pokemon = {
  id: number
  name: string
  sprites: {
    front_default?: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats?: PokemonStat[]
}

type PokemonStat = {
  stat: {
    name: string
    url: string
  }
  effort: number
  base_stat: number
}
