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
  height?: number
  weight?: number
  stats?: PokemonStat[]
  type?: PokemonType[]
}

type PokemonStat = {
  stat: {
    name: string
    url: string
  }
  effort: number
  base_stat: number
}

type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}
